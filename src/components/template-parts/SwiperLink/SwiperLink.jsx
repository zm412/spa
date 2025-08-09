import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperLink.module.scss";
import "./SwiperLink.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwiperLink = () => {
    return (
        <Swiper
            slidesPerView={1}
            className={styles.swiper}
            breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
        >
            <SwiperSlide className={styles.slide}>
                <div>
                    <a
                        href="https://zm410.pythonanywhere.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={ "/img/swiperLinkPortalImg.png"}
                            alt="Preview of Example"
                            className={ styles[ "slide-img" ] }
                        />
                    </a>
                </div>
                <div className={styles["swiper-line"]}></div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <div></div>
                <div className={styles["swiper-line"]}></div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <div></div>
                <div className={styles["swiper-line"]}></div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <div></div>
                <div className={styles["swiper-line"]}></div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
                <div></div>
                <div className={styles["swiper-line"]}></div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperLink;
