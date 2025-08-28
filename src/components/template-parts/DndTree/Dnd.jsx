import { DndTree } from "dnd";
import { useTheme } from "@/contexts/ThemeContext";
import "./Dnd.scss"

const defaultSet = {
    "crystal_frost-theme": {
        colors: {
            palmColor: { start:"yellow", end: "#c62980" },
            visualTreeBorder: "#3b50b1de",
            parentsListBorderColor: "#3b50b1de",
            visualTreeBackground: "#3b50b1de",
            parentsListBackground: "#3b50b1de",
            visualRectSecondColor: "#42c3a9",
            labelsColor: "#1c3d37",
        },
        bgImg: "/img/frost.jpg",
    },
    "dusk-theme": {
        colors: {
            palmColor: { start:"pink", end: "blue" },

            visualTreeBorder: "#102b22de",
            parentsListBorderColor: "#102b22de",
            visualTreeBackground: "#102b22de",
            parentsListBackground: "#102b22de",
            visualRectSecondColor: "#42c3a9",
            labelsColor: "#1c3d37",
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
const Dnd = () => {
    const defaultColors = {
        palmColor: "#f0a2b7",
        visualTreeBorder: "#4d4d08de",
        parentsListBorderColor: "#4d4d08de",
        visualTreeBackground: "#4d4d08de",
        parentsListBackground: "#4d4d08de",
        visualRectSecondColor: "#42c3a9",
        labelsColor: "#1c3d37",
    };

    const { theme } = useTheme();
    const colors = defaultSet[theme].colors;
    const bgImg = defaultSet[theme].bgImg;

    return (
        <section className="dnd-block">
            <DndTree colors={colors} />
        </section>
    );
};

export default Dnd;
