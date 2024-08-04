import { ethers } from "ethers";
import React, { useState } from 'react';
import "./Donate.css";
import { toast } from 'react-toastify';

const Donate = ({ state }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const donate = async (event) => {
        event.preventDefault();
        const { contract } = state;
        try {
            const tx = await contract.donate(name, message, { value: ethers.utils.parseEther("0.001") });
            await tx.wait();
            toast.success("Transaction successful!");
            setName('');
            setMessage('');
        } catch (error) {
            toast.error("Transaction failed! More details in the console...");
            console.error("Transaction failed:", error);
        }
    };

    return (
        <div className="center">
            <h1> Thanks!</h1>
            <form onSubmit={donate}>
                <div className="inputbox">
                    <input
                        type="text"
                        required="required"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span>Name</span>
                </div>
                <div className="inputbox">
                    <input
                        type="text"
                        required="required"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <span>Message</span>
                </div>
                <div className="inputbox">
                    <input type="submit" value="Pay" disabled={!state.contract}/>
                </div>
            </form>
        </div>
    );
};

export default Donate;
