import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./DynamicSlider.css";
import { request } from "../utils/Request";
import { Link } from "react-router-dom";

function DynamicSlider({ number, id }) {
  const [banners, setbanners] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getbanners = async () => {
      try {
        const { data } = await request({
          url: "/api/dashboard/banners",
        });
        setbanners(data.data);
      } catch (error) {
        setErr(error.response?.data?.message);
      }
    };
    getbanners();
  }, []);

  return (
    <section className="dynamic-slider">
      <div className="wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          {banners.map((banner) => {
            if (banner.id == id) {
              return banner.items.map((item) => (
                <SwiperSlide
                  className="flex"
                  style={
                    number === 2
                      ? {
                          backgroundImage: url(item.photo),

                          backgroundSize: "cover",
                        }
                      : null
                  }
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link className="custom-link-filled" to={item.link}>
                    تسوق الآن
                  </Link>
                </SwiperSlide>
              ));
            }
          })}

          <SwiperSlide
            className="flex"
            style={
              number === 2
                ? {
                    backgroundImage: "url(banner.png)",
                    backgroundSize: "cover",
                  }
                : null
            }
          >
            <h2>أفضل التخفيضات 2024</h2>
            <p>
              متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة
              إلى أفضل <br /> التحفيضات على المنتجات , تسوق الان واستمتع بكل
              بالتخفيضات على المنتجات
            </p>
            <a className="custom-link-filled" href="#">
              تسوق الآن
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default DynamicSlider;
