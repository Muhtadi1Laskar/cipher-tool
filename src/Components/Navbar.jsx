import { useState } from "react";
import { Navbar, Nav, Container, Button, Collapse, NavDropdown } from "react-bootstrap";
import HashComponent from "./HashComponent";
import CipherComponent from "./CipherComponent";
import VerifyHashComponent from "./VerifyHashComponent";
import EncodingComponent from "./EncodingComponent";
import HashFileUploadComponent from "./HashFileUpload";
import CipherFileComponent from "./CipherFileComponent";
import IdenticonComponent from "./IdenticonComponent";

function CipherToolsNavbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("hashing");

    const toggleNavbar = () => setIsExpanded(!isExpanded);

    const renderActiveTab = () => {
        switch (activeTab) {
            case "hashing":
                return <HashComponent />;
            case "hashing-file":
                return <HashFileUploadComponent />
            case "cipher-file":
                return <CipherFileComponent />
            case "encryption":
                return <CipherComponent />;
            case "verify-hash":
                return <VerifyHashComponent />;
            case "encoding":
                return <EncodingComponent />;
            case "identicon":
                return <IdenticonComponent />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <Navbar bg="blue" variant="dark" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary" id="nav-bar">
                <Container>
                    <Navbar.Brand href="#">Cipher Tools</Navbar.Brand>
                    <Button
                        className="navbar-toggler"
                        aria-controls="responsive-navbar-nav"
                        aria-expanded={isExpanded}
                        onClick={toggleNavbar}
                    >
                        ☰
                    </Button>
                    <Collapse in={isExpanded} className="navbar-collapse">
                        <Nav className="me-auto" >
                            <Nav.Link
                                href="#"
                                onClick={() => setActiveTab("hashing")}
                                className={activeTab === "hashing" ? "active" : ""}
                            >
                                Hash
                            </Nav.Link>
                            <Nav.Link
                                href="#"
                                onClick={() => setActiveTab("encryption")}
                                className={activeTab === "encryption" ? "active" : ""}
                            >
                                Cipher
                            </Nav.Link>
                            <NavDropdown
                                title="Upload File"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    href="#"
                                    onClick={() => setActiveTab("cipher-file")}
                                    className={activeTab === "cipher-file" ? "active": ""}
                                >
                                    Cipher File
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="#"
                                    onClick={() => setActiveTab("hashing-file")}
                                    className={activeTab === "hashing-file" ? "active": ""}
                                >
                                    Hash File
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link
                                href="#"
                                onClick={() => setActiveTab("encoding")}
                                className={activeTab === "encoding" ? "active" : ""}
                            >
                                Encodings
                            </Nav.Link>
                            <Nav.Link
                                href="#"
                                onClick={() => setActiveTab("identicon")}
                                className={activeTab === "identicon" ? "active" : ""}
                            >
                                Identicon
                            </Nav.Link>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

            {/* Active Tab Content */}
            <Container>
                <div className="tab-content">{renderActiveTab()}</div>
            </Container>
        </div>
    );
}

export default CipherToolsNavbar;