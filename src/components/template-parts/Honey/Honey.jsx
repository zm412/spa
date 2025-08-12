import { Honeycomb } from "soty";

const Honey = () => {
    const colors = [
        ["#127b5f", "#5fb7a0"], //frontend
        ["#f38b6b", "#f3b16b"], //backend
        ["#ff8ce9", "#c278b4"], //tools
        ["#007aff", "#6d9ee6"], //devops
        ["#92d9d4", "#91b9ee"], //header
    ];
    const bgImg = "/img/i.jpg";


    return (
        <section>
            <Honeycomb colors={colors} bgImg={bgImg} />
        </section>
    );
};

export default Honey;
