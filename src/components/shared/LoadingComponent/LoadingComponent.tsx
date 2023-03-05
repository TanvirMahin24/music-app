import { Spinner } from "react-bootstrap";

const LoadingComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: 700 }}
    >
      <Spinner animation="grow" />
    </div>
  );
};

export default LoadingComponent;
