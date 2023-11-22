import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DragFromOutsideLayout = () => {
    const [mounted, setMounted] = useState(false);
    const [layout, setLayout] = useState([]);
    const [items, setItems] = useState([]);
    const [itemDragging, setItemDragging] = useState({});
    const [count, setCount] = useState(3);

    useEffect(() => {
        setMounted(true);
    }, []);

    const onDrop = (layout, layoutItem) => {
        const newItem = { i: layoutItem.i, type: "qwerty" };
        setItems([...items, newItem]);
        setLayout(layout);
    };

    return (
        <div>
            <div
                className="droppable-element"
                draggable={true}
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "");
                    setItemDragging({ i: `${count}`, w: 10, h: 10 });
                    setCount(count + 1);
                }}>
                Droppable Element (10x10)
            </div>
            <div
                className="droppable-element"
                draggable={true}
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "");
                    setItemDragging({ w: 2, h: 2, i: `${count}` });
                    setCount(count + 1);
                }}>
                Droppable Element (2x2)
            </div>
            <div style={{ backgroundColor: "#c6c6c6", minHeight: "500px" }}>
                <ResponsiveReactGridLayout
                    className="layout"
                    rowHeight={30}
                    cols={{ lg: 12 }}
                    layouts={{ lg: layout }}
                    measureBeforeMount={false}
                    useCSSTransforms={mounted}
                    compactType={"vertical"}
                    preventCollision={false}
                    isDroppable={true}
                    isBounded
                    droppingItem={itemDragging}
                    onDrop={onDrop}>
                    {items.map((l) => (
                        <div key={l.i} style={{ backgroundColor: "red", fontSize: "50px" }}>
                            {l.i}
                        </div>
                    ))}
                </ResponsiveReactGridLayout>
            </div>
        </div>
    );
};

export default DragFromOutsideLayout;
