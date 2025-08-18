import styles from "./PageAbout.module.scss";
import "@/assets/styles/grid.scss";

const PageAbout = () => {
    return (
        <div className={styles.card}>
            <div className="custom-container">
                <section id="about">
                    <h2>About Me</h2>
                    <div className={styles.email}>
                        Email: onezmumpi@gmail.com
                    </div>
                    <h3>Introduction: </h3>
                    <div>
                    Hello, my name is Altynay, and I’m a software
                    developer with strong experience in building interactive and
                    user-friendly web applications. I specialize in crafting
                    responsive interfaces with <strong>React</strong> and enjoy
                    turning complex ideas into clean, efficient, and interactive
                    experiences.
                    </div>
                    <h3>Education: </h3>
                    <div>
                        I hold a Bachelor's degree in
                        Information Systems from Karaganda State University.
                        During my studies, I created a software application
                        designed to calculate the cost of plastic windows, which
                        helped me strengthen my programming and problem-solving
                        skills.
                    </div>
                    <h3>Experience: </h3>
                    <div>
                        My expertise includes working with HTML, CSS, and
                        JavaScript, as well as frameworks such as React and
                        Vue.js. I am also proficient with build and optimization
                        tools such as Webpack, Vite, and Babel, ensuring
                        efficient and maintainable code. Work Experience: While
                        working in a product-driven company, I was responsible
                        for developing new features, refactoring legacy code,
                        and optimizing performance. During this time, I’ve
                        contributed to building a variety of applications,
                        including integration services, websites, and our core
                        OLAP product. I’ve been responsible for developing and
                        maintaining integration services using Python (Flask,
                        Jira, SQLite) and building interactive front-end
                        features using JavaScript (ES6+), React, TypeScript, and
                        SCSS. I’ve also developed and customized WordPress-based
                        websites. This experience strengthened my understanding
                        of the software development lifecycle and enhanced my
                        ability to collaborate effectively with designers,
                        backend engineers, and project managers.
                    </div>
                    <h3>Achievements: </h3>
                    <div>
                        I am particularly proud of my contribution
                        to developing data analysis tools, including interactive
                        dashboards for large datasets, dynamic charts,
                        performance indicators, and map visualizations with
                        route directions. My work enhanced the usability and
                        clarity of complex data, enabling faster insights and
                        decision-making.
                    </div>
                    <div>
                        Beyond frontend, I also work with 
                        <strong>backend technologies</strong> to design reliable
                        APIs and scalable architectures. My work has involved
                        developing and maintaining RESTful API services using
                        Python (Flask, SQLAlchemy), as well as handling
                        asynchronous task queues with RabbitMQ and Celery.
                    </div>
                    <div>
                        My focus is always on writing clear code, keeping things
                        modular, and creating applications that bring real value
                        to users. I see development as both problem-solving and
                        creativity — blending technology with thoughtful design.
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PageAbout;
