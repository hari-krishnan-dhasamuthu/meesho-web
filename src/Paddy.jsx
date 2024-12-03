
import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
const Paddy = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTShirts, setShowTShirts] = useState(false);
    const [showTops, setShowTops] = useState(false);

    const handleTShirtsChange = (e) => {
        setShowTShirts(e.target.checked);
    };

    const handleTopsChange = (e) => {
        setShowTops(e.target.checked);
    };

    return (
        <div style={{ margin: "20px" }}>
            <div style={{}}>
                <p onClick={() => setIsOpen((prev) => !prev)}>
                    Candidates
                    {!isOpen ? (
                        <AiOutlineCaretDown className="h-8" style={{ marginLeft: "200px", marginTop: "-50px" }} />
                    ) : (
                        <AiOutlineCaretUp className="h-8" style={{ marginLeft: "200px", marginTop: "-50px" }} />
                    )}
                </p>

                {isOpen && (
                    <div style={{}}>

                        <ul
                            style={{
                                maxHeight: "200px",

                                listStyle: "none",
                                cursor: "pointer",
                                overflowY: "auto",
                            }}
                        >
                            <li  >
                                <button>hgh</button>
                                <button>jhsw</button>
                                <button>njx</button>
                            </li>

                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Paddy