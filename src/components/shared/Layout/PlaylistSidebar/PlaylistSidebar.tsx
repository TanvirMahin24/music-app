import { useEffect, useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  createPlaylist,
  playlistSidebarToggle,
  savePlaylist,
} from "../../../../redux/actions/playlist.action";
import Checkout from "../../../Payment/Checkout/Checkout";
import styles from "./PlaylistSidebar.module.css";
import TrackCard from "./TrackCard/TrackCard";

const PlaylistSidebar = ({
  playlist,
  playlistSidebarToggle,
  createPlaylist,
  savePlaylist,
}: any) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<number>(-1);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setSelectedPlaylist(-1);
  }, []);

  const showCreateHandeler = () => {
    // LOGIC FOR STRIPE
    setShowCreate(true);
  };

  const submitHandeler = (e: any) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Please enter playlist name!");
      return;
    }
    createPlaylist(name);
    setShowCreate(false);
    setName("");
  };

  const savePlaylistHandeler = () => {
    if (selectedPlaylist !== -1) {
      let selectedPL = playlist?.playlist.filter(
        (pl: any) => pl.id === selectedPlaylist
      );
      if (
        selectedPL &&
        selectedPL[0] &&
        selectedPL[0].tracks.filter(
          (track: any) => track.id === playlist.selected_track.id
        ).length > 0
      ) {
        toast.error("This track is already added!");
        return;
      }
      savePlaylist(
        selectedPL.map((pl: any) => ({
          ...pl,
          tracks: [...pl.tracks, playlist.selected_track],
        }))[0]
      );
      toast.success("Track aded to playlist!");
      playlistSidebarToggle();
    }
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
            <TrackCard data={playlist.selected_track} />
            <hr />
          </>
        ) : (
          <></>
        )}

        <h3 className={styles.heading}>Select Playlist</h3>
        <ListGroup>
          {playlist.playlist.map((pl: any) => (
            <ListGroup.Item
              key={pl.id}
              className={styles.list__item}
              active={selectedPlaylist === pl.id}
              onClick={() =>
                setSelectedPlaylist(selectedPlaylist !== pl.id ? pl.id : -1)
              }
            >
              {pl.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <hr />
        {showCreate ? (
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
            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className={styles.btn}>
                Create
              </button>
              <button
                type="reset"
                onClick={() => setShowCreate(false)}
                className={styles.btn}
              >
                Cancel
              </button>
            </div>
          </Form>
        ) : (
          <div className="d-flex justify-content-between align-items-center">
            {selectedPlaylist !== -1 ? (
              <button onClick={savePlaylistHandeler} className={styles.btn}>
                Save
              </button>
            ) : (
              <></>
            )}
            <button onClick={showCreateHandeler} className={styles.btn}>
              Create New Playlist
            </button>
          </div>
        )}
        <Checkout />
      </Container>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  playlist: state.playlist,
});
export default connect(mapStateToProps, {
  playlistSidebarToggle,
  createPlaylist,
  savePlaylist,
})(PlaylistSidebar);
