import { Charts } from "charts";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { chartStore } from "@/stores/ChartStore.js";
import "./ChartsLib.css";

const ChartsLib = observer(() => {
    const { dataSet } = chartStore;

    return (
        <section className={"Charts"}>
            <h2>Charts (Axis Custom Settings)</h2>
            <div className={"chart-container"}>
                <Charts tableData={toJS(dataSet)} />
            </div>
        </section>
    );
});

export default ChartsLib;
