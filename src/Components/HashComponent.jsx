import { useState } from "react";
import { hashOptions } from "../Utils/selectOptions.js";
import { postCall } from "../API/postCall.js";
import DisplayComponent from "./DisplayComponent.jsx";


export default function HashComponent() {
    const [selectedOption, setSelectedOption] = useState("");
    const [message, setMessage] = useState("");
    const [hashResponse, setHashResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {
            message: message,
            hash: selectedOption
        };
        const response = await postCall('hashData', requestBody);
        setHashResponse(response.data.hash);
    };

    return (
        <div className="p-3">
            <h2 className="text-primary">Hashing</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="hash-message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        id="hash-message"
                        className="form-control"
                        placeholder="Enter the message to hash"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="hash-algo" className="form-label">
                        Hash Algorithm:
                    </label>
                    <select
                        id="hash-algo"
                        className="form-select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select an algorithm
                        </option>
                        {hashOptions.map((elem) => (
                            <option key={elem.value} value={elem.value}>
                                {elem.text}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Generate Hash
                </button>
            </form>
            {!hashResponse ? "" : <DisplayComponent message={hashResponse} />}
        </div>
    );
}