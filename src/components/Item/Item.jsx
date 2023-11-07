import DashboardIcon from "../../assets/MyDashboard/icon-buildercolumn.svg";
import BulletIcon from "../../assets/MyDashboard/icon-builderbulletlist.svg";
import HeadingIcon from "../../assets/MyDashboard/icon-builderheading.svg";
import ImageIcon from "../../assets/MyDashboard/icon-builderimage.svg";
import LinkIcon from "../../assets/MyDashboard/icon-builderlink.svg";
import NumberedListIcon from "../../assets/MyDashboard/icon-buildernumberedlist.svg";
import TextIcon from "../../assets/MyDashboard/icon-buildertext.svg";
import DeleteIcon from "../../assets/icon-delete-white.svg";
import "./item.css";
//import EmptyStateIcon from "../assets/MyDashboard/icon-builderemptystate.svg";
//import RowIcon from "../assets/MyDashboard/icon-builderrow.svg";

const itemsTypes = [
    {
        title: "Analysis Board",
        icon: DashboardIcon,
    },
    {
        title: "Bullet List",
        icon: BulletIcon,
    },
    {
        title: "Heading",
        icon: HeadingIcon,
    },
    {
        title: "Image",
        icon: ImageIcon,
    },
    {
        title: "HyperLink",
        icon: LinkIcon,
    },
    {
        title: "Numbered List",
        icon: NumberedListIcon,
    },
    {
        title: "Texto",
        icon: TextIcon,
    },
];

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
