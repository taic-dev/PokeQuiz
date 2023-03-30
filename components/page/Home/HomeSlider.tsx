import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import styles from "./Home.module.scss";

interface Props {
  children: ReactNode;
}

const Images = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
];

const HomeSlider: FC<Props> = ({ children }) => {
  SwiperCore.use([Autoplay]);

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
          {Images.map((image: string) => {
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
          {Images.map((image: string) => {
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
          {Images.map((image: string) => {
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
          {Images.map((image: string) => {
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
          {Images.map((image: string) => {
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
