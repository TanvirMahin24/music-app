import { useEffect } from "react";
import { connect } from "react-redux";
import SongList from "../../components/Landing/SongList/SongList";
import Layout from "../../components/shared/Layout/Layout";
import { getInitialSongs } from "../../redux/actions/song.action";

const LandingPage = ({ getInitialSongs, songs }: any) => {
  useEffect(() => {
    getInitialSongs(1);
  }, [getInitialSongs]);
  return (
    <div>
      <Layout title="Home">
        <SongList songs={songs?.tracks} />
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
