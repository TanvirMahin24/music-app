import { useEffect } from "react";
import { connect } from "react-redux";
import LoginWithSpotifyCard from "../../components/Landing/LoginWithSpotifyCard/LoginWithSpotifyCard";
import { authSpotify } from "../../redux/actions/auth.action";
import { getInitialSongs } from "../../redux/actions/song.action";
import setAuthToken from "../../utils/setAuthToken";

const LandingPage = ({ getInitialSongs, authSpotify, songs, auth }: any) => {
  useEffect(() => {
    const hash = window.location.hash;
    let token: any = localStorage.getItem("music-app-token");
    if (!token && hash) {
      token = hash
        ?.substring(1)
        .split("&")
        ?.find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];

      window.location.hash = "";
      localStorage.setItem("music-app-token", token);
    }
    getInitialSongs(1);
    authSpotify();
    setAuthToken(token);
  }, []);
  return <div>{!auth ? <LoginWithSpotifyCard /> : <span>Loggedin</span>}</div>;
};

const mapStateToProps = (state: any) => ({
  songs: state.song.song,
  auth: state.auth.auth,
});

export default connect(mapStateToProps, { getInitialSongs, authSpotify })(
  LandingPage
);
