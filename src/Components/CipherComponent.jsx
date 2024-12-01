function CipherComponent() {
    return (
        <div className="p-3">
            <h2 className="text-primary">Encryption/Decryption</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="crypto-message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        id="crypto-message"
                        className="form-control"
                        placeholder="Enter the message"
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="crypto-key" className="form-label">
                        Key:
                    </label>
                    <input
                        id="crypto-key"
                        className="form-control"
                        type="text"
                        placeholder="Enter the encryption key"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="crypto-algo" className="form-label">
                        Algorithm:
                    </label>
                    <select id="crypto-algo" className="form-select">
                        <option value="aes">AES</option>
                        <option value="xor">XOR</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="crypto-action" className="form-label">
                        Action:
                    </label>
                    <select id="crypto-action" className="form-select">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Execute
                </button>
            </form>
        </div>
    );
}

export default CipherComponent;