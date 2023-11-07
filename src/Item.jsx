import logo from "./assets/react.svg";
//import "./item.css";

function Item() {
    return (
        <div className="container" style={{ flex: 1, backgroundColor: "blue" }}>
            <div className="header">
                <div className="title">asdasdasd</div>
                <button className="delete-button" onClick={() => {}}>
                    Delete
                </button>
            </div>
            <div className="content">
                <img src={logo} alt="" className="logo" />
                <div className="name">NameDrag</div>
            </div>
        </div>
    );
}

export default Item;
