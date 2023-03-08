import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { Navigate, useSearchParams } from "react-router-dom";

const Fail = () => {
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price");
  if (!price || price !== "price_1MjLLuLR0CNPqZD3O5tX1Xbh") {
    return <Navigate to="/home" />;
  }
  return (
    <div
      className="fs-2 text-center  d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: 600 }}
    >
      <span className="d-block">
        <MdOutlineMoneyOffCsred size={70} color="red" />
      </span>
      Fail
    </div>
  );
};

export default Fail;
