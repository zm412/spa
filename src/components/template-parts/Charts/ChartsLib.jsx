import { Charts } from "charts";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { chartStore } from "@/stores/ChartStore.js";
import { useTheme } from "@/contexts/ThemeContext";
import "./ChartsLib.css";

const defaultSet = {
    "crystal_frost-theme": {
        colors: {
        backgroundColor: "#32877a",
        chartColor1: "#b14343",
        chartColor2: "#931049",
        borderColor: "green",
        areaColor: 'yellow',
        barsColor: "red",
        linesColor: "violet"
    },
        bgImg: "/img/frost.jpg",
    },
    "dusk-theme": {
        colors: {
        backgroundColor: "#32877a",
        chartColor1: "#b14343",
        chartColor2: "#931049",
        borderColor: "green",
        areaColor: 'yellow',
        barsColor: "red",
        linesColor: "violet"
    },
        bgImg: "/img/i.jpg",
    },
    "dawn-theme": {
        colors: [
            ["#127b5f", "#5fb7a0"], //frontend
            ["#f38b6b", "#f3b16b"], //backend
            ["#ff8ce9", "#c278b4"], //tools
            ["#007aff", "#6d9ee6"], //devops
            ["#92d9d4", "#91b9ee"], //header
        ],
        bgImg: "/img/frost.jpg",
    },
    "florida_vibe-theme": {
        colors: [
            ["#127b5f", "#5fb7a0"], //frontend
            ["#f38b6b", "#f3b16b"], //backend
            ["#ff8ce9", "#c278b4"], //tools
            ["#007aff", "#6d9ee6"], //devops
            ["#92d9d4", "#91b9ee"], //header
        ],
        bgImg: "/img/frost.jpg",
    },
};

const ChartsLib = observer(() => {
    const { dataSet } = chartStore;
    const { theme } = useTheme();
    const colors = defaultSet[theme].colors;

    return (
        <section className={"Charts"} style={{background: colors.backgroundColor}}>
            <h2>Charts (Axis Custom Settings)</h2>
            <div className={"chart-container"}>
                <Charts tableData={toJS(dataSet)} colors={colors} />
            </div>
        </section>
    );
});

export default ChartsLib;
