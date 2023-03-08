import { BsFillTrashFill } from "react-icons/bs";
import { connect } from "react-redux";
import { deletePlaylist } from "../../redux/actions/playlist.action";
import SongList from "../shared/SongList/SongList";

const Playlist = ({ playlist, deletePlaylist }: any) => {
  return (
    <div className="pb-4 pt-2 ">
      <h3>
        {playlist.name}{" "}
        {playlist.id !== 1 ? (
          <span
            className="text-danger fs-5"
            onClick={() => deletePlaylist(playlist.id)}
          >
            <BsFillTrashFill />
          </span>
        ) : (
          <></>
        )}
      </h3>
      <small className="text-dark">{playlist.tracks.length} Tracks</small>
      <SongList songs={playlist.tracks} playlist={playlist} />
      <hr />
    </div>
  );
};

export default connect(null, { deletePlaylist })(Playlist);
