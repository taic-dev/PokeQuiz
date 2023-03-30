import React, { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import styles from "./Home.module.scss";

interface Props {
  children: ReactNode;
}

const Images = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/156.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/187.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/198.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/441.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/61.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/199.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/190.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
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
