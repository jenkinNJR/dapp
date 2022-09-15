import { useCallback, useState } from "react";
import { useEffect } from "react";
import web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider'
import { loadContract } from "./utils/load-contract";


function App() {

  const [web3Api,setWeb3Api] = useState({
    provider:null,
    web3:null,
    contract:null
  });

  const [accounts,setAccounts] =useState(null);
  const [balance,setbalance] =useState(0);
  const [isReload,setIsReload]=useState(false);
  const reload=useCallback(()=>setIsReload(!isReload),[isReload]);

  const setAccountListener=provider=>{
    provider.on("accountsChanged",accounts=>{
      setAccounts(accounts[0]);
    })
  }

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract  = await loadContract("StorageTwo",provider);
      if (provider) {
        setAccountListener(provider);
        setWeb3Api({
          web3: new web3(provider),
          provider,
          contract
        })
      } else {
      
        // if the provider is not detected, detectEthereumProvider resolves to null
        console.error('Please install MetaMask!')
      }
    }
    loadProvider();
  }, [])

  useEffect(()=>{
    const getAccounts = async()=>{
      let accounts = await web3Api.web3.eth.getAccounts()
      setAccounts(accounts[0]);
    }
    web3Api.web3 && getAccounts();
  },[web3Api.web3])

  useEffect(()=>{
    const getBalance = async()=>{
      let {contract,web3} = web3Api;
      const balance = await web3Api.web3.eth.getBalance(contract.address);
      setbalance(web3.utils.fromWei(balance,'ether'));
    }
    web3Api.contract && getBalance();
  },[web3Api,isReload])

  
  const addFunds = useCallback(async() =>{
    let {contract} = web3Api;
    await contract.addFunds({
      from:accounts,
      value:web3.utils.toWei("1")
    })
    reload();
  },[web3Api,accounts,reload]); 

  const withdrawFunds = async() =>{
    let {contract} = web3Api;
    await contract.withDraw({
      from:accounts
    });
    reload();
  }

  return (
    <div className="main-wrapper">
      
      <div className="main">
      <span>
            <strong>Account: </strong>
          </span>
          <h1>
            { accounts ? accounts : 
            <button className="btn mr-2"
            onClick={async()=>{
              web3Api.provider.request({method: "eth_requestAccounts"});
            }}
            >Connect Wallet</button>
            }
          </h1>

        <div className="balance-view is-size-2">
          Current Balance: <strong>{balance}</strong> ETH
        </div>
        <button className="btn mr-2"
        onClick={addFunds}
        >Donate 1 ether</button>
        <button
        onClick={withdrawFunds}
         className="btn mr-2">Withdraw</button>
      </div>
    </div>
  );
}

export default App;
