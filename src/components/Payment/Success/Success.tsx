import { MdOutlineAttachMoney } from "react-icons/md";
import { Navigate, useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price");
  if (!price || price !== "price_1MjLLuLR0CNPqZD3O5tX1Xbh") {
    return <Navigate to="/home" />;
  } else {
    localStorage.setItem("music-app-pro", "true");
  }
  return (
    <div
      className="fs-2 text-center  d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: 600 }}
    >
      <span className="d-block">
        <MdOutlineAttachMoney size={70} color="green" />
      </span>
      Success
    </div>
  );
};

export default Success;
