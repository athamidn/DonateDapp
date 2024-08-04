import { useState, useEffect } from 'react';
import abi from "./contractJson/Donate.json";
import { ethers } from "ethers";
import Memos from './components/Memos';
import Donate from './components/Donate';
import donate from "./assets/donate.jpg";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null
    });
    const [account, setAccount] = useState('Not connected');

    useEffect(() => {
        const template = async () => {
            const contractAddress = "0x80613091343b91A226568cCd2A4f96C817df3fD3";
            const contractABI = abi.abi;

            try {
                const { ethereum } = window;
                if (!ethereum) {
                    toast.error("Please install MetaMask!");
                    return;
                }
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts"
                });
                setAccount(accounts[0]);

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });

                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);

                setState({ provider, signer, contract });
            } catch (error) {
                console.log(error)
                toast.error("An error occurred while connecting to MetaMask");
            }
        };
        template();
    }, []);

    return (
        <div>
            <ToastContainer />
            <img src={donate} className="img-fluid" alt=".." width="100%" />
            <p style={{ marginTop: "10px", marginLeft: "5px" }}>
                <small>Connected Account - {account}</small>
            </p>

            <Donate state={state} />
            <Memos state={state} />
        </div>
    );
}

export default App;
