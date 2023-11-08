import DeleteIcon from "../../assets/icon-delete-white.svg";
import { itemsTypes } from "../../utils/types";
import "./item.css";

function Item({ type, removeItem, draggableClass }) {
    const item = itemsTypes[type - 1];

    return (
        <div className="container" style={{ flex: 1 }}>
            <div className={`header ${draggableClass} `}>
                <div className={"title"}>{item.title}</div>
                <span className="actionButton" onClick={removeItem}>
                    <img src={DeleteIcon} alt="" width={30} height={30} />
                </span>
            </div>
            <div className={`content ${draggableClass}`}>
                <img src={item.icon} alt="" className="logo" />
                <div className="name">{item.title}</div>
            </div>
        </div>
    );
}

export default Item;
