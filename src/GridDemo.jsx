import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "./App.css";
import Item from "./item";
//import Item from "./item";

const ResponsiveGridLayout = WidthProvider(Responsive);

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const GridDemo = () => {
    const layouts = [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 1, y: 0, w: 3, h: 2, minH: 2 },
        { i: "3", x: 2, y: 0, w: 1, h: 2 },
        { i: "4", x: 3, y: 0, w: 1, h: 2 },
        { i: "5", x: 4, y: 0, w: 3, h: 2 },
    ];
    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layouts }}
            breakpoints={{ lg: 1200 }}
            cols={{ lg: 4 }}
            compactType={"horizontal"}
            rowHeight={60}
            isBounded
            containerPadding={[15, 15]}
            preventCollision={false}>
            <div key="1" className="item" style={{ backgroundColor: getRandomColor(), overflow: "auto" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error nisi minima doloribus dolore fugit, totam debitis quas sunt nemo saepe officiis veniam, et nostrum voluptas eum
                suscipit iure illum.
            </div>
            <div key="2" className="item" style={{ backgroundColor: "red", height: "auto", display: "flex", flexDirection: "column" }}>
                <Item />
            </div>
            <div key="3" className="item" style={{ backgroundColor: getRandomColor() }}>
                3
            </div>
            <div key="4" className="item" style={{ backgroundColor: getRandomColor() }}>
                4
            </div>
            <div key="5" className="item" style={{ backgroundColor: getRandomColor() }}>
                5
            </div>
        </ResponsiveGridLayout>
    );
};

export default GridDemo;
