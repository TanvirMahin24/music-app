import { connect } from "react-redux";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import SongList from "../../components/shared/SongList/SongList";

const SearchPage = ({ songs }: any) => {
  return (
    <div>
      <Layout title="Search">
        <Search />
        {songs ? <SongList songs={songs} /> : <></>}
      </Layout>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  songs: state.song.search,
});

export default connect(mapStateToProps, null)(SearchPage);
