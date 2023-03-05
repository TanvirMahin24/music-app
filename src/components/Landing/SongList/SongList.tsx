import { Container, Row } from "react-bootstrap";
import LoadingComponent from "../../shared/LoadingComponent/LoadingComponent";
import SongCard from "./SongCard/SongCard";
import styles from "./SongList.module.css";

const SongList = ({ songs }: any) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        {songs === null ? (
          <LoadingComponent />
        ) : songs?.tracks?.length === 0 ? (
          <div className="pt-5 text-center">
            <span className="d-block text-white fw-bold">No Song Found!</span>
          </div>
        ) : (
          <Row xs={5}>
            {songs?.tracks.map((song: any) => (
              <SongCard key={song.key} {...song} id={song.key} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default SongList;
