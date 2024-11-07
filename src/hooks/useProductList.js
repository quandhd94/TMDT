import { useDispatch } from "react-redux";
import { showPopup } from "../redux/popupSlice"; // Import action showPopup

const useProductList = () => {
  const dispatch = useDispatch();

  const handleImageClick = (product, showPopupOnClick) => {
    if (showPopupOnClick) {
      dispatch(showPopup(product)); // Gọi action showPopup nếu showPopupOnClick là true
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return { handleImageClick, formatPrice };
};

export default useProductList;
