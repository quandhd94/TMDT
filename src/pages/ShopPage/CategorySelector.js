import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategorySelector = ({ category, setCategory }) => {
  return (
    <div className="category-selector">
      <h3>APPLE</h3>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "All" ? "active" : ""}`}
        onClick={() => setCategory("All")}
      >
        All
      </button>
      <h3>IPHONE & MAC</h3>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Iphone" ? "active" : ""}`}
        onClick={() => setCategory("Iphone")}
      >
        Iphone
      </button>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Ipad" ? "active" : ""}`}
        onClick={() => setCategory("Ipad")}
      >
        Ipad
      </button>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Macbook" ? "active" : ""}`}
        onClick={() => setCategory("Macbook")}
      >
        Macbook
      </button>
      <h3>WIRELESS</h3>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Airpod" ? "active" : ""}`}
        onClick={() => setCategory("Airpod")}
      >
        Airpod
      </button>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Watch" ? "active" : ""}`}
        onClick={() => setCategory("Watch")}
      >
        Watch
      </button>
      <h3>OTHER</h3>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Mouse" ? "active" : ""}`}
        onClick={() => setCategory("Mouse")}
      >
        Mouse
      </button>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Keyboard" ? "active" : ""}`}
        onClick={() => setCategory("Keyboard")}
      >
        Keyboard
      </button>
      <button
        className={`btn btn-light w-100 mb-2 ${category === "Other" ? "active" : ""}`}
        onClick={() => setCategory("Other")}
      >
        Other
      </button>
    </div>
  );
};

export default CategorySelector;
