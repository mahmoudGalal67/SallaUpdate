import React, { useEffect, useState } from "react";

import "./Features.css";
import { request } from "../utils/Request";

function Features() {
  const [brands, setbrands] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getbrands = async () => {
      try {
        const { data } = await request({
          url: "/api/website/brands",
        });
        setbrands(data.data);
      } catch (error) {
        setErr(err.response.data.message);
      }
    };
    getbrands();
  }, []);

  if (err) {
    return <span className="error">{err}</span>;
  }
  return (
    <section className="features">
      <div className="wrapper flex">
        {brands.map((brand) => (
          <div className="item flex" key={brand.id}>
            <div>
              <h3> {brand.name}</h3>
              <p> {brand.description} </p>
            </div>
            <img src="download (1).png" alt="" />
          </div>
        ))}
        <div className="item flex">
          <div>
            <h3> مضمونه منتجات</h3>
            <p> مدفوعات آمنة أقساط تصل إلى 12 شهرًا </p>
          </div>
          <img src="download (1).png" alt="" />
        </div>
        <div className="item flex">
          <div>
            <h3>منتجات مضمونه</h3>
            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
          </div>
          <img src="download (2).png" alt="" />
        </div>
        <div className="item flex">
          <div>
            <h3>منتجات مضمونه</h3>
            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
          </div>
          <img src="download.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
