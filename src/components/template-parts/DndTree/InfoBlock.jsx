import node_sp from "@/stores/small_data.js";
import { observer } from "mobx-react-lite";
import PalmSvg from './PalmSvg.jsx';
import './DndTree.css';

const InfoBlock = observer(() => {
    let info = node_sp.node;
    let list = <PalmSvg color={"#000"} />

    if (info) {
        list = (
            <ul>
                <li>{info.label}</li>
                <li>{info.id}</li>
                <li>{info.parentId}</li>
                <PalmSvg color={info.label} />
            </ul>
        );
    } 

    return <div>{list}</div>;
});

export default InfoBlock;
