import GridDemo from "./components/GridDemo/GridDemo";
import "./App.css";

function App() {
    return (
        <div className="mainLayout">
            <h1 className="mainTitle">React Grid Layout Demo</h1>
            <div style={{ width: "100%" }}>
                <GridDemo />
            </div>
        </div>
    );
}

export default App;
