import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "./GridDemo.css";
import Item from "../Item/Item";
import { useState } from "react";
import Toolbox from "../Toolbox/Toolbox";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridDemo = () => {
    const [layout, setLayout] = useState([]);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [showPreview, setShowPreview] = useState(false);

    const addItem = (type) => {
        const newItem = { i: `item-${count}`, x: 1, y: 0, w: 1, h: 1, minW: 1, minH: 1 };
        setLayout([...layout, newItem]);
        setItems([...items, { id: `item-${count}`, type }]);
        setCount(count + 1);
    };

    const removeItem = (id) => {
        const updatedLayout = layout.filter((el) => el.i !== id);
        const updatedItems = items.filter((item) => item.id !== id);
        setLayout(updatedLayout);
        setItems(updatedItems);
    };

    const removeAll = () => {
        setLayout([]);
        setCount(0);
        setItems([]);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <Toolbox addItem={addItem} />

            {/* Actions */}
            <div className="actionsButtonsContainer">
                <button
                    className={`button ${showPreview ? "active" : ""}`}
                    onClick={() => {
                        setShowPreview(!showPreview);
                    }}>
                    Show Preview
                </button>
                {items.length !== 0 && (
                    <button onClick={removeAll} className="button">
                        Remove All
                    </button>
                )}
            </div>

            {/* Layout */}
            <div>
                {!showPreview && (
                    <ResponsiveGridLayout
                        onLayoutChange={(lay) => {
                            console.log(lay);
                            setLayout(lay);
                        }}
                        className="custom-grid"
                        layouts={{ lg: layout }}
                        breakpoints={{ lg: 1200 }}
                        cols={{ lg: 4 }}
                        rowHeight={150}
                        isBounded
                        containerPadding={[15, 15]}
                        compactType={null}
                        preventCollision={false}
                        draggableHandle=".chichitojunior">
                        {items.map(({ id, type }) => (
                            <div key={id} style={{ height: "auto", display: "flex" }}>
                                <Item type={type} removeItem={() => removeItem(id)} draggableClass="chichitojunior" />
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
                        compactType={null}
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
            </div>
        </div>
    );
};

export default GridDemo;
