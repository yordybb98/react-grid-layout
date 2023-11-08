import { useState } from "react";
import { itemsTypes } from "../../utils/types";
import "./Toolbox.css";

function Toolbox({ addItem }) {
    /* To handle toolbox items   */
    /* You must add the SetState */
    /* And uncomment the line in */
    /* the onClick function      */
    const [list] = useState(itemsTypes);

    return (
        <div style={{ display: "flex", gap: 30 }}>
            {list.map((item) => (
                <div
                    key={item.id}
                    className="toolbox"
                    onClick={() => {
                        addItem(item.id);
                        /* To delete the added item from Toolbox */
                        /* setList((prevList) => {
                            return prevList.filter((itemList) => itemList.id !== item.id);
                        }); */
                    }}>
                    {item.title}
                    <img src={item.icon} alt="" width={20} height={20} />
                </div>
            ))}
        </div>
    );
}

export default Toolbox;
