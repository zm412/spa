import { Progress } from "progress";
import './DataVisualisation.css'

//const colors = ['#5fb7a0', '#f39c6b', '#c278b4', '#6d9ee6'];

const DataVisualisation = () => {
    const defaultColors = [
        "#df1148",
        "#000000",
        "#eeb1b1",
        "#60cbd2",
        "#5abcdd",
        "#24b813",
        "#43193b"
    ];

    return (
        <section className={"Progress"} style={{background: defaultColors[6]}}>
            <h2>Indicators</h2>
            <Progress defaultColors={defaultColors} />
        </section>
    );
};

export default DataVisualisation;
