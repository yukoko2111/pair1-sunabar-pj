import { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from "axios";

export default function transferList() {
    const [transferAmount, setTransferAmount] = useState<string>("");
    const [beneficiaryId, setBeneficiaryId] = useState<string>("");

    const postTransfer = () => {
        axios.post('/api/transfer', {
            transferAmount,
            beneficiaryId,        
        })
        .then((res: AxiosResponse) => alert("振込依頼が完了しました"))
        .catch((e: AxiosError) => alert("エラーが発生しました"));
    }

    return (
        <>
        <h1>振込</h1>
        <label>  誰に振り込む？ </label>
        <select value={beneficiaryId} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBeneficiaryId(e.currentTarget.value)}>
            <option value="0">選んでね！</option>
            <option value={"A"}>お父さん</option>
            <option value={"B"}>おばあちゃん</option>
            <option value={"C"}>ピアノ教室</option>
        </select>
        <br/>
        <label>  いくら振り込む？ </label>
        <select value={transferAmount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTransferAmount(e.currentTarget.value)}>
            <option value="0">選んでね！</option>
            <option value={"1000"}>1,000円</option>
            <option value={"3000"}>3,000円</option>
            <option value={"5000"}>5,000円</option>
            <option value={"10000"}>10,000円</option>
            <option value={"15000"}>15,000円</option>
            <option value={"20000"}>20,000円</option>
        </select>
        <br/>      
        <button onClick={postTransfer}>振り込む！</button>
        <br/>
        <br/> 
        ログインして振込を承認してください！
        <a href="https://sso.sunabar.gmo-aozora.com/b2c/login?_ga=2.151931577.1642901541.1662067922-2119240431.1662067922"><br/>
            <button>ログインする</button>
        </a>
        </>
    );
}