import { Honeycomb } from "soty";
import { useTheme } from "@/contexts/ThemeContext";


const defaultSet = {
    "crystal_frost-theme": {
        colors: [
            ["#011f3b", "#0e55e1"], //frontend
            ["#8b1027", "#e1390e"], //backend
            ["#230246", "#5d29bc"], //tools
            ["#002900", "#235c2a"], //devops
            ["#e1e425", "#c2bc0a"], //header
        ],
        bgImg:  "/img/frost.jpg"
    },
    "dusk-theme": {
        colors: [
            ["#127b5f", "#5fb7a0"], //frontend
            ["#f38b6b", "#f3b16b"], //backend
            ["#ff8ce9", "#c278b4"], //tools
            ["#007aff", "#6d9ee6"], //devops
            ["#92d9d4", "#91b9ee"], //header
        ],
        bgImg:  "/img/i.jpg"
    },
    "dawn-theme": {
        colors: [
            ["#127b5f", "#5fb7a0"], //frontend
            ["#f38b6b", "#f3b16b"], //backend
            ["#ff8ce9", "#c278b4"], //tools
            ["#007aff", "#6d9ee6"], //devops
            ["#92d9d4", "#91b9ee"], //header
        ],
        bgImg:  "/img/frost.jpg"
    },
    "florida_vibe-theme": {
        colors: [
            ["#127b5f", "#5fb7a0"], //frontend
            ["#f38b6b", "#f3b16b"], //backend
            ["#ff8ce9", "#c278b4"], //tools
            ["#007aff", "#6d9ee6"], //devops
            ["#92d9d4", "#91b9ee"], //header
        ],
        bgImg:  "/img/frost.jpg"
    }
}
const Honey = () => {
    const { theme } = useTheme();
    const colors = defaultSet[theme].colors
    const bgImg = defaultSet[theme].bgImg

    return (
        <section>
            <Honeycomb colors={colors} bgImg={bgImg} />
        </section>
    );
};

export default Honey;
