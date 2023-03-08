import { Card, Col } from "react-bootstrap";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { connect } from "react-redux";
import { playlistSidebarToggle } from "../../../../redux/actions/playlist.action";
import { favSong } from "../../../../redux/actions/song.action";
import styles from "./SongCard.module.css";

const SongCard = ({
  title,
  subtitle,
  images,
  id,
  favSong,
  favorite,
  playlistSidebarToggle,
}: any) => {
  const handleFavorite = (data: any) => {
    favSong(data);
  };

  return (
    <Col className="py-3">
      <Card className="h-100">
        <Card.Body
          className={styles.crd}
          style={{
            background: `url(${images.background})`,
          }}
        >
          <div
            className={styles.star}
            onClick={() => handleFavorite({ title, images, subtitle, key: id })}
          >
            {favorite?.filter((fav: any) => fav.key === id).length > 0 ? (
              <AiFillStar color="#eeff05" />
            ) : (
              <AiOutlineStar />
            )}
          </div>

          <div className={styles.inner__content}>
            <span className="d-block fw-bold">{title}</span>
            <span className="d-block fs-6">{subtitle}</span>
            <div className="d-flex justify-content-center">
              <button
                className={styles.btn}
                onClick={() =>
                  playlistSidebarToggle({ title, subtitle, images, id })
                }
              >
                <AiOutlinePlus /> Add to playlist
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state: any) => ({
  favorite: state.song.favorite,
});

export default connect(mapStateToProps, { favSong, playlistSidebarToggle })(
  SongCard
);
