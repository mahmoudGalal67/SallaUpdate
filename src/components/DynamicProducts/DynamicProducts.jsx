import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { request } from "../utils/Request";

import "swiper/css";
import "swiper/css/navigation";

import "./DynamicProducts.css";
import CartButton from "../CartButton/CartButton";
import FavButton from "../FavButton/FavButton";

function DynamicProducts() {
  const [DynamicProducts, setDynamicProducts] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getDynamicProducts = async () => {
      try {
        const { data } = await request({
          url: "/api/website/new-products",
        });
        setDynamicProducts(data.data);
      } catch (error) {
        setErr(error.response?.data?.message);
      }
    };
    getDynamicProducts();
  }, []);

  if (err) {
    return <span className="error">{err}</span>;
  }
  return (
    <section className="dynamic-products">
      <div className="header">
        <h2>وصل حديثا</h2>
        <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
      </div>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1080: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={0}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
      >
        {DynamicProducts.map((product) => (
          <SwiperSlide className="flex" key={product.id}>
            <div className="product">
              <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
              <div className="title">{product.name}</div>
              <p className="desc">{product.description}</p>
              <p className="info">{product.details} </p>
              <div className="price-wrapper">
                <div className="old">{product.price}</div>
                <div className="new">{product.price_after_discount}</div>
              </div>
              <div className="links-wrapper">
                <FavButton />
                <CartButton />
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>

            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="/product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <FavButton />
              <CartButton />
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default DynamicProducts;
