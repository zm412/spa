import { observer } from "mobx-react-lite";
import DndApp from "./DndApp.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DndTree = observer(() => {
    return (
        <DndProvider backend={HTML5Backend}>
            <DndApp />   
        </DndProvider>
    );
});

export default DndTree;
