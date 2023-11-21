import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const generateLayout = () => {
    return Array.from({ length: 3 }, (item, i) => {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: Math.round(Math.random() * 5) * 2,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05,
        };
    });
};

const DragFromOutsideLayout = (props) => {
    const [mounted, setMounted] = useState(false);
    const [layout, setLayout] = useState([]);
    const [itemDragging, setItemDragging] = useState({});

    useEffect(() => {
        setMounted(true);
        setLayout([
            {
                x: 3,
                y: 2,
                w: 2,
                h: 2,
                i: "0",
                static: false,
            },
            {
                x: 2,
                y: 2,
                w: 5,
                h: 3,
                i: "1",
                static: false,
            },
            {
                x: 4,
                y: 0,
                w: 2,
                h: 4,
                i: "2",
                static: false,
            },
        ]);
    }, []);

    const onNewLayout = () => {
        setLayout(generateLayout());
    };

    const onDrop = (layout, layoutItem) => {
        console.log(layout);
        setLayout(layout);
    };

    return (
        <div>
            <button onClick={onNewLayout}>Generate New Layout</button>
            <div
                className="droppable-element"
                draggable={true}
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "");
                    setItemDragging({ i: "chichitolayout", w: 10, h: 10, static: true });
                }}>
                Droppable Element (10x10)
            </div>
            <div
                className="droppable-element"
                draggable={true}
                onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", "");
                    setItemDragging({ i: "chichitolayout", w: 2, h: 2, static: true });
                }}>
                Droppable Element (2x2)
            </div>
            <ResponsiveReactGridLayout
                {...props}
                cols={{ lg: 12 }}
                layouts={{ lg: layout }}
                onLayoutChange={(layout) => {
                    console.log(layout);
                }}
                onDrop={onDrop}
                measureBeforeMount={false}
                useCSSTransforms={mounted}
                compactType={null}
                preventCollision={false}
                isDroppable={true}
                isBounded
                droppingItem={itemDragging}>
                {layout.map((l, i) => (
                    <div key={i} className={l.static ? "static" : ""} style={{ backgroundColor: "red" }}>
                        {/* {l.static ? (
                            <span className="text" title="This item is static and cannot be removed or resized.">
                                Static - {i}
                            </span>
                        ) : ( */}
                        <span className="text">{i}</span>
                        {/*  )} */}
                    </div>
                ))}
            </ResponsiveReactGridLayout>
        </div>
    );
};

DragFromOutsideLayout.defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: function () {},
};

export default DragFromOutsideLayout;
