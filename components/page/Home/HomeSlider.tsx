import React, { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import getPokemonImageRandom from "@/api/getPokemonImageRandom";
import styles from "./Home.module.scss";

SwiperCore.use([Autoplay]);

interface Props {
  children: ReactNode;
}

const HomeSlider: FC<Props> = ({ children }) => {

  const imagesArray1 = getPokemonImageRandom(1,649,10);
  const imagesArray2 = getPokemonImageRandom(1,649,10);
  const imagesArray3 = getPokemonImageRandom(1,649,10);
  const imagesArray4 = getPokemonImageRandom(1,649,10);
  const imagesArray5 = getPokemonImageRandom(1,649,10);

  return (
    <>
      <div className={styles.home__swiper}>
        <Swiper
          className={styles["home__swiper-container"]}
          slidesPerView={5}
          loop={true}
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {imagesArray1.map((image: string) => {
            return (
              <SwiperSlide className={styles["home__swiper-slide"]}>
                <img src={image} alt="ポケモン画像" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          className={styles["home__swiper-container"]}
          slidesPerView={5}
          loop={true}
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {imagesArray2.map((image: string) => {
            return (
              <SwiperSlide className={styles["home__swiper-slide"]}>
                <img src={image} alt="ポケモン画像" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          className={styles["home__swiper-container"]}
          slidesPerView={5}
          loop={true}
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {imagesArray3.map((image: string) => {
            return (
              <SwiperSlide className={styles["home__swiper-slide"]}>
                <img src={image} alt="ポケモン画像" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          className={styles["home__swiper-container"]}
          slidesPerView={5}
          loop={true}
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {imagesArray4.map((image: string) => {
            return (
              <SwiperSlide className={styles["home__swiper-slide"]}>
                <img src={image} alt="ポケモン画像" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          className={styles["home__swiper-container"]}
          slidesPerView={5}
          loop={true}
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {imagesArray5.map((image: string) => {
            return (
              <SwiperSlide className={styles["home__swiper-slide"]}>
                <img src={image} alt="ポケモン画像" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {children}
      </div>
    </>
  );
};

export default HomeSlider;
