// import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HashComponent from './HashComponent';
import CipherComponent from './CipherComponent';
import VerifyHashComponent from './VerifyHashComponent';
import EncodingComponent from './EncodingComponent';

function Navbar() {
    return (
        <Tabs
            defaultActiveKey="hashing"
            id="cipher-tools-tabs"
            className="mb-3"
            fill
        >
            <Tab eventKey="hashing" title="Hashing">
                <HashComponent />
            </Tab>
            
            <Tab eventKey="encryption" title="Encryption/Decryption">
                <CipherComponent />
            </Tab>

            <Tab eventKey="verify-hash" title="Verify Hash">
                <VerifyHashComponent />
            </Tab>

            <Tab eventKey="encoding" title="Encodings">
                <EncodingComponent />
            </Tab>
        </Tabs>
    );
}

export default Navbar;