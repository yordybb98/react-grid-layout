import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import Item from "../Item/Item";
import Toolbox from "../Toolbox/Toolbox";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DragFromOutsideLayout = () => {
    const [mounted, setMounted] = useState(false);
    const [layouts, setLayouts] = useState([]);

    useEffect(() => {
        setMounted(true);
        const initialLayouts = [
            { i: "1", x: 0, y: 0, w: 4, h: 4 },
            { i: "2", x: 4, y: 0, w: 4, h: 4 },
            { i: "3", x: 8, y: 0, w: 4, h: 4 },
        ];
        setLayouts(initialLayouts);
    }, []);

    const onDrop = (layout, layoutItem) => {
        alert(`Dropped element props:\n${JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2)}`);
    };

    return (
        <div>
            <Toolbox addItem={() => {}} />
            {/* <div className="droppable-element" draggable={true} onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}>
                Droppable Element (Drag me!)
            </div> */}
            <ResponsiveReactGridLayout
                className="layout"
                rowHeight={30}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                layouts={{ lg: layouts }}
                onDrop={onDrop}
                measureBeforeMount={false}
                useCSSTransforms={mounted}
                isDroppable={true}>
                {layouts.map((layoutItem) => (
                    <div key={layoutItem.i} className="layout-item">
                        <Item type={1} removeItem={() => {}} draggableClass="" />
                    </div>
                ))}
            </ResponsiveReactGridLayout>
        </div>
    );
};

export default DragFromOutsideLayout;
