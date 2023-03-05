import styles from "./SongCard.module.css";
import { Card, Col } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";

const SongCard = ({ title, subtitle, images }: any) => {
  return (
    <Col className="py-3">
      <Card className="h-100">
        <Card.Body
          className={styles.crd}
          style={{
            background: `url(${images.background})`,
          }}
        >
          <div className={styles.star}>
            <AiOutlineStar />
          </div>
          <div className={styles.inner__action}>
            {/* <button>Playlist</button> */}
          </div>
          <div className={styles.inner__content}>
            <span className="d-block fw-bold">{title}</span>
            <span className="d-block fs-6">{subtitle}</span>
            {/* <span className="d-block">{title}</span> */}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SongCard;
