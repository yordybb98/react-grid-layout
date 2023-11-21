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
        <div className="toolbox">
            <div className="toolboxHeader">Add Item</div>

            <div className="toolboxContainer">
                {list.map((item) => (
                    <div
                        key={item.id}
                        className="toolboxItem button"
                        draggable={true}
                        onDragStart={(e) => {
                            console.log(e);
                            e.dataTransfer.setData("asdasd");
                        }}
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
        </div>
    );
}

export default Toolbox;
