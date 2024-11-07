import React from "react";
import { useNavigate } from "react-router-dom"; // Thay useHistory bằng useNavigate
import "./CategoryList.css"; // Import CSS cho CategoryList

const categories = [
  { id: 1, name: "Product 1", img: "product_1.png" },
  { id: 2, name: "Product 2", img: "product_2.png" },
  { id: 3, name: "Product 3", img: "product_3.png" },
  { id: 4, name: "Product 4", img: "product_4.png" },
  { id: 5, name: "Product 5", img: "product_5.png" },
];

const CategoryList = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate

  const handleCategoryClick = (categoryId) => {
    // Chuyển hướng về ShopPage
    navigate("/shop"); // Sử dụng navigate thay vì history.push
  };

  return (
    <div className="category-list">
      <h3 className="category-title">CAREFULLY CREATED COLLECTIONS</h3>
      <h2 className="category-subtitle">BROWSE OUR CATEGORIES</h2>
      <div className="categories">
        <div className="category-row">
          {categories.slice(0, 2).map((category) => (
            <div
              key={category.id}
              className="category-item"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={require(`../../assets/images/${category.img}`)}
                alt={category.name}
              />
            </div>
          ))}
        </div>
        <div className="category-row">
          {categories.slice(2).map((category) => (
            <div
              key={category.id}
              className="category-item"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={require(`../../assets/images/${category.img}`)}
                alt={category.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
