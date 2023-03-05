import { useEffect } from "react";
import { connect } from "react-redux";
import SongList from "../../components/Landing/SongList/SongList";
import Layout from "../../components/shared/Layout/Layout";

const FavoritesPage = ({ songs }: any) => {
  return (
    <div>
      <Layout title="Home">
        <SongList songs={songs} />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.song.favorite,
});

export default connect(mapStateToProps, null)(FavoritesPage);
