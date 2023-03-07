import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { playlistSidebarToggle } from "../../../../redux/actions/playlist.action";
import styles from "./PlaylistSidebar.module.css";

type Props = { playlist: any; playlistSidebarToggle: any };

const PlaylistSidebar = ({ playlist, playlistSidebarToggle }: Props) => {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const showCreateHandeler = () => {
    // LOGIC FOR STRIPE
    setShowCreate(!showCreate);
  };

  const submitHandeler = (e: any) => {
    e.preventDefault();
  };
  return (
    <div
      className={`${styles.wrapper} ${
        playlist.sidebar_active ? styles.active : ""
      }`}
    >
      <Container className="pb-5">
        <div className="d-flex justify-content-end">
          <span
            className={styles.close}
            onClick={() => playlistSidebarToggle()}
          >
            <AiOutlineClose />
          </span>
        </div>
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

        <hr />

        <button onClick={showCreateHandeler} className={styles.btn}>
          Create New Playlist
        </button>
        <Form onSubmit={submitHandeler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Playlist Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              type="name"
              placeholder="Your new playlist"
            />
          </Form.Group>

          <button type="submit" className={styles.btn}>
            Create
          </button>
        </Form>
      </Container>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  playlist: state.playlist,
});
export default connect(mapStateToProps, { playlistSidebarToggle })(
  PlaylistSidebar
);
