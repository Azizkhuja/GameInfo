import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";

const SwiperHead = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="mario-cart"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/262333/pexels-photo-262333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="card"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="wordly"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="football"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/776657/pexels-photo-776657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="monopoly"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperHead;
