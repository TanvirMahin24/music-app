import styles from "./SongCard.module.css";
import { Card, Col } from "react-bootstrap";

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
          <div className={styles.inner__content}>{title}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SongCard;
