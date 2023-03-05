import musicImg from "../../../assets/spotify.png";
import commonStyles from "../../../common.module.css";
import styles from "./LoginWithSpotifyCard.module.css";

const LoginWithSpotifyCard = () => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center flex-column pt-5 ${styles.wrapper}`}
    >
      <div className="text-center pb-3">
        <img src={musicImg} alt="" className={styles.music__img} />
      </div>
      <div className="text-center pb-3"></div>

      <a
        href={`https://accounts.spotify.com/authorize?client_id=65b7468d3e4244bab3351c1a68a1b0b4&redirect_uri=${encodeURI(
          "http://localhost:3000/home"
        )}&response_type=token`}
        className={commonStyles.btn}
      >
        Login with Spotify
      </a>
    </div>
  );
};

export default LoginWithSpotifyCard;
