import { Container, Row } from "react-bootstrap";
import LoadingComponent from "../../shared/LoadingComponent/LoadingComponent";
import SongCard from "./SongCard/SongCard";
import styles from "./SongList.module.css";

const SongList = ({ songs, playlist }: any) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        {songs === null ? (
          <LoadingComponent />
        ) : songs?.length === 0 ? (
          <div className="py-4">
            <span className="d-block text-dark fw-bold ">No Song Found!</span>
          </div>
        ) : (
          <Row md={5} xs={2}>
            {songs?.map((song: any, i: number) => (
              <SongCard key={i} {...song} id={song.key} playlist={playlist} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default SongList;
