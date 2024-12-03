import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Body5 = () => {
    const [isopen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                Sort by:
                {!isopen ? (
                    <AiOutlineCaretDown className="h-8" />
                ) : (
                    <AiOutlineCaretUp className="h-8" />
                )}
            </button>
            {isopen && (
                <div style={{ marginTop: "10px" }}>
                    <ul className="scroll-smooth md:scroll-auto"
                        style={{
                            maxHeight: "200px",
                            overflowY: "scroll",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            padding: "10px",
                            listStyle: "none",
                            cursor: "pointer"
                        }}
                    >
                        <li style={{ padding: "8px 0" }}>Low to High</li>
                        <li style={{ padding: "8px 0" }}>High to Low</li>
                        <li>ygs</li>
                        <li>dbhw</li>
                        <li>hs</li>
                        <li>degy</li>
                        <li>degh</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Body5;
