import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../pages/Redux/CartSlice";
import { addFavorite, removeFavorite } from "../../pages/Redux/FavoriteSlice";
import { Link } from "react-router-dom";
import "./StaticProducts.css";
import FavButton from "../FavButton/FavButton";
import { DiVisualstudio } from "react-icons/di";
import CartButton from "../CartButton/CartButton";

const truncateTitle = (title, numWords) => {
  const words = title.split(" ");
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "...";
  }
  return title;
};

function StaticProducts({ searchInput }) {
  const [StaticProducts, setStaticProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  // useEffect(() => {
  // Replace with your API endpoint And change variables names
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setStaticProducts(response.data.slice(0, 8));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);

  const handleAddToCart = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(removeItemFromCart(product));
    } else {
      dispatch(addItemToCart(product));
    }
  };

  const handleFavoriteClick = (product) => {
    if (isProductFavorite(product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const isProductFavorite = (productId) => {
    return favoriteItems.some((item) => item.id === productId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://goservback.sallaplus.com/public/api/website/products?lang=ar"
        );
        console.log(searchInput);
        if (searchInput) {
          const results = response.data.data.filter((product) => {
            const searchTerms = searchInput.toLowerCase().split(" ");
            return searchTerms.some((term) =>
              [
                product.name.toLowerCase(),
                product.description.toLowerCase(),
                product.category_name.toLowerCase(),
                product.brand_name.toLowerCase(),
              ].some((field) => field.includes(term))
            );
          });
          setStaticProducts(results.slice(0, 8));
        } else {
          setStaticProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchInput]);

  if (StaticProducts.length == 0) {
    return (
      <div style={{ padding: "45px", fontSize: "22px", textAlign: "center" }}>
        {" "}
        <span>No Products Found</span>
      </div>
    );
  }
  return (
    <div className="StaticProducts">
      <div className="headers flex">
        <Link to="/products">
          <button className="custom-link-ouline  btn btn-3 hover-border-3">
            <img src="arrow.svg" alt="" />
            <span> عرض الكل</span>
          </button>
        </Link>
        <div>
          <h3>منتجات مميزة</h3>
          <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>
      <div className="wrapper">
        {StaticProducts.map((product) => (
          <div
            key={product.id}
            className="product"
            style={{ width: "200px", height: "550px", padding: "12px" }}
          >
            <img
              src={product.image}
              alt=""
              style={{
                width: "100%",
                height: "50%",
                margin: "0",
              }}
            />
            <div className="title">ساعات</div>
            <Link to={`/productDetails/${product.id}`}>
              <p className="desc">{truncateTitle(product.name, 2)}</p>
            </Link>
            <p className="info">{product.category}</p>
            <div className="price-wrapper">
              <div className="old">{product.price * 1.4} ر.س</div>
              <div className="new">{product.price} رس</div>
            </div>
            <div className="links-container">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleFavoriteClick(product);
                }}
              >
                <FavButton active={isProductFavorite(product.id)} />
              </div>
              <div onClick={() => handleAddToCart(product)}>
                <CartButton active={isProductInCart(product.id)} />
              </div>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaticProducts;
