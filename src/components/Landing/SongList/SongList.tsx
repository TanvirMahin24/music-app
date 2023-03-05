import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import LoadingComponent from "../../shared/LoadingComponent/LoadingComponent";
import SongCard from "./SongCard/SongCard";
import styles from "./SongList.module.css";

const SongList = ({ songs }: any) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        {songs === null ? (
          <LoadingComponent />
        ) : songs?.tracks.length === 0 ? (
          <div className="pt-5 text-center">
            <span className="d-block text-white fw-bold">No Song Found!</span>
          </div>
        ) : (
          <Row xs={5}>
            {songs?.tracks.map((song: any) => (
              <SongCard {...song} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.song.song,
});

export default connect(mapStateToProps, null)(SongList);
