import "./DndTree.css";
import lib from "@/stores/data_store.js";
import node_sp from "@/stores/small_data.js";
import LibraryTree from "./LibraryTree.jsx";
import InfoBlock from "./InfoBlock.jsx";
import { observer } from "mobx-react-lite";

const DndApp = observer(() => {
    let nodeInfo = node_sp.node;

    const removeItem = () => {
        lib.removeNode(nodeInfo.id);
        node_sp.clearNode();
    };

    const refreshData = () => {
        lib.refreshData();
        node_sp.clearNode();
    };

    return (
        <div className="App">
            <h2>DND</h2>
            <div className="container">
                <div className="main_block row">
                    <div id="list_block" className="col sub1 list_b">
                        <LibraryTree />
                    </div>
                    <div className="col sub1">
                        <InfoBlock />
                    </div>

                    {nodeInfo && (
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button onClick={refreshData} className="btn btn-secondary m-3">
                                Refresh
                            </button>
                            <button onClick={removeItem} className="btn btn-secondary m-3">
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default DndApp;
