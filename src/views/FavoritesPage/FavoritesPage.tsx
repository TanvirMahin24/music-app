import { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/shared/Layout/Layout";
import SongList from "../../components/shared/SongList/SongList";

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
