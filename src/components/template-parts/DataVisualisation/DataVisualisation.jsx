import { Progress } from "progress";

//const colors = ['#5fb7a0', '#f39c6b', '#c278b4', '#6d9ee6'];

const DataVisualisation = () => {
    const defaultColors = [
        "#f0a2b7",
        "#a3d383",
        "#eeb1b1",
        "#4a4d69",
        "#5abcdd",
        "#24b813",
    ];

    return (
        <section className={'Progress'}>
            <Progress defaultColors={defaultColors} />
        </section>
    );
};

export default DataVisualisation;
