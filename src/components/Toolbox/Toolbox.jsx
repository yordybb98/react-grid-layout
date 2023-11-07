import React, { useState } from "react";
import Item from "../Item/Item";
import { itemsTypes } from "../../utils/types";

function Toolbox() {
    const [list, setList] = useState(itemsTypes);
    return (
        <div style={{ display: "flex", gap: 5, marginBottom: "10px" }}>
            {list.map((item) => (
                <div
                    key={item.id}
                    style={{
                        width: 75,
                        height: 75,
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 20px",
                        backgroundColor: "#ffffff73",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}>
                    {item.title}
                </div>
            ))}
        </div>
    );
}

export default Toolbox;
