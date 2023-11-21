import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "./GridDemo.css";
import Item from "../Item/Item";
import Toolbox from "../Toolbox/Toolbox";
import { useEffect, useState } from "react";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridDemo = () => {
    const [layout, setLayout] = useState([]);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [showPreview, setShowPreview] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const addItem = (type) => {
        const newItem = { i: `item-${count}`, x: 0, y: 0, w: 1, h: 1, minW: 1, minH: 1 };
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

    const onDrop = (layout, layoutItem) => {
        console.log(layoutItem);
        // Handle the drop event here
        // You can update the layout or perform any other actions
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
                        draggableHandle=".chichitojunior"
                        onDrop={onDrop}
                        measureBeforeMount={false}
                        useCSSTransforms={mounted}
                        isDroppable={true}>
                        {items.map(({ id, type }) => (
                            <div key={id} style={{ height: "auto", display: "flex" }}>
                                <Item type={type} removeItem={() => removeItem(id)} draggableClass="chichitojunior" />
                            </div>
                        ))}
                    </ResponsiveGridLayout>
                )}
            </div>
        </div>
    );
};

export default GridDemo;
