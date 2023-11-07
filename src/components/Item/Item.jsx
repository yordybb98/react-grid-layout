import DeleteIcon from "../../assets/icon-delete-white.svg";
import { itemsTypes } from "../../utils/types";
import "./item.css";
//import EmptyStateIcon from "../assets/MyDashboard/icon-builderemptystate.svg";
//import RowIcon from "../assets/MyDashboard/icon-builderrow.svg";

function Item({ type, removeItem }) {
    const item = itemsTypes[type - 1];

    return (
        <div className="container" style={{ flex: 1 }}>
            <div className="header">
                <div className={"title"}>
                    {item.title} {type}
                </div>
                <span onClick={removeItem} style={{ cursor: "pointer" }}>
                    <img src={DeleteIcon} alt="" width={30} height={30} />
                </span>
            </div>
            <div className="content">
                <img src={item.icon} alt="" className="logo" />
                <div className="name">{item.title}</div>
            </div>
        </div>
    );
}

export default Item;
