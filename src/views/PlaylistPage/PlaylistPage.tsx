import { useEffect } from "react";
import { connect } from "react-redux";
import Playlist from "../../components/Playlist/Playlist";
import Layout from "../../components/shared/Layout/Layout";
import { getInitialSongs } from "../../redux/actions/song.action";

const PlaylistPage = ({ getInitialSongs, songs, playlist }: any) => {
  useEffect(() => {
    getInitialSongs(1);
  }, [getInitialSongs]);
  return (
    <div>
      <Layout title="Playlist">
        {playlist && playlist.length > 0 ? (
          playlist.map((pl: any) => <Playlist key={pl.id} playlist={pl} />)
        ) : (
          <></>
        )}
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  playlist: state.playlist.playlist,
});

export default connect(mapStateToProps, {
  getInitialSongs,
})(PlaylistPage);
