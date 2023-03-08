import { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/shared/Layout/Layout";
import SongList from "../../components/shared/SongList/SongList";
import { getInitialSongs } from "../../redux/actions/song.action";

const LandingPage = ({ getInitialSongs, songs }: any) => {
  useEffect(() => {
    if (!songs) {
      getInitialSongs(1);
    }
  }, []);
  return (
    <div>
      <Layout title="Home">
        {songs ? <SongList songs={songs?.tracks} /> : <></>}
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.song.song,
});

export default connect(mapStateToProps, {
  getInitialSongs,
})(LandingPage);
