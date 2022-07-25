import React from "react";
import "./Banner.css";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

export default function (props) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  return (
    <div className="relative banner_back_img overflow-hidden">
      <div className="relative banner_back_img">
        <div className="banner_back">
          <img src="./banner.webp" layout="fit" className="img_back" />
        </div>
      </div>
      <div className="absolute w-full text-center banner_car over rounded-lg">
        <animated.div
          {...bind()}
          style={{ x, y }}
          className="banner_car_per w-full"
          draggable="false"
        >
          <div className="flex flex-col justify-center place-items-center rounded-lg mx-auto banner_car_per_tem">
            <animated.div
              {...bind()}
              style={{ x, y }}
              className="banner_car_per_set bg-white bg-opacity-80 rounded-2xl"
              draggable="false"
            >
              <animated.div
                {...bind()}
                style={{ x, y }}
                className="banner_car_per w-full h-full"
                draggable="false"
              >
                <div className="relative banner_car_tet lg:w-full xl:h-96">
                  <div className="banner_car_tet_item">
                    <img
                      src="./giphy.gif"
                      decoding="async"
                      className="banner_car_image rounded-2xl pointer-events-none"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </animated.div>
            </animated.div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
