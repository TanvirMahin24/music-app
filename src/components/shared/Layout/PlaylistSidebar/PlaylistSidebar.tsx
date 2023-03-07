import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import styles from "./PlaylistSidebar.module.css";

type Props = { playlist: any };

const PlaylistSidebar = ({ playlist }: Props) => {
  return (
    <div
      className={`${styles.wrapper} ${
        playlist.sidebar_active ? styles.active : ""
      }`}
    >
      <Container className="py-5">
        {playlist.selected_track ? (
          <>
            <span>{playlist.selected_track.title}</span>
            <hr />
          </>
        ) : (
          <></>
        )}

        <h3 className={styles.heading}>Select Playlist</h3>
        {playlist.playlist.map((pl: any) => (
          <span>{pl.name}</span>
        ))}
      </Container>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  playlist: state.playlist,
});
export default connect(mapStateToProps, {})(PlaylistSidebar);
