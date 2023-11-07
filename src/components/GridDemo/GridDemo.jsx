import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "./GridDemo.css";
import Item from "../Item/Item";
import { useState } from "react";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridDemo = () => {
    const [layout, setLayout] = useState([]);
    const [count, setCount] = useState(0);
    const [showPreview, setShowPreview] = useState(false);

    const addItem = () => {
        const newItem = { i: `item-${count}`, x: 0, y: 0, w: 1, h: 1, minW: 1, minH: 1 };
        setLayout([...layout, newItem]);
        setCount(count + 1);
    };

    const removeItem = (item) => {
        const updatedLayout = layout.filter((el) => el.i !== item.i);
        setLayout(updatedLayout);
    };

    return (
        <>
            <button onClick={addItem}>Add</button>
            <button
                onClick={() => {
                    setShowPreview(!showPreview);
                }}
                style={{ backgroundColor: showPreview ? "#bbb" : "white" }}>
                Show Preview
            </button>
            {!showPreview && (
                <ResponsiveGridLayout
                    onLayoutChange={(lay) => {
                        setLayout(lay);
                    }}
                    className="custom-grid"
                    layouts={{ lg: layout }}
                    breakpoints={{ lg: 1200 }}
                    cols={{ lg: 4 }}
                    rowHeight={150}
                    isBounded
                    containerPadding={[15, 15]}
                    compactType="vertical"
                    preventCollision={false}>
                    {layout.map((item) => (
                        <div key={item.i} style={{ height: "auto", display: "flex" }}>
                            <Item type={2} removeItem={() => removeItem(item)} />
                        </div>
                    ))}
                </ResponsiveGridLayout>
            )}
            {showPreview && (
                <ResponsiveGridLayout
                    className="custom-grid"
                    layouts={{ lg: layout }}
                    breakpoints={{ lg: 1200 }}
                    cols={{ lg: 4 }}
                    rowHeight={150}
                    containerPadding={[15, 15]}
                    compactType="vertical"
                    isDraggable={false}
                    isResizable={false}
                    preventCollision={false}>
                    {layout.map((item) => (
                        <div key={item.i} style={{ height: "auto", display: "flex" }}>
                            <div style={{ backgroundColor: "red", width: "100%", height: "100%" }}>2</div>
                        </div>
                    ))}
                </ResponsiveGridLayout>
            )}
        </>
    );
};

export default GridDemo;
