import { useEffect } from "react";
import { connect } from "react-redux";
import NavbarCustom from "../../components/Landing/Navbar/Navbar";
import SongList from "../../components/Landing/SongList/SongList";
import Layout from "../../components/shared/Layout/Layout";
import { getInitialSongs } from "../../redux/actions/song.action";

const LandingPage = ({ getInitialSongs }: any) => {
  useEffect(() => {
    getInitialSongs(1);
  }, []);
  return (
    <div>
      <Layout title="Home">
        <SongList />
      </Layout>
    </div>
  );
};

export default connect(null, {
  getInitialSongs,
})(LandingPage);
