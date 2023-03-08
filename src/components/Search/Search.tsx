import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getSearchSongs } from "../../redux/actions/song.action";
import styles from "./Search.module.css";
import commonStyles from "../../common.module.css";

const Search = ({ getSearchSongs }: any) => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const searchHandeler = async () => {
    setLoading(true);
    let check = await getSearchSongs(text);
    if (check) {
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div>
      <div className="w-75 p-4 mx-auto">
        <span className="d-block text-center fs-3 py-4">
          What you want to search?
        </span>
        <Form.Control
          placeholder="Type what you want to search..."
          name="fname"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${styles.input} w-100`}
        />
        <div className="d-flex justify-content-center pt-4">
          <button
            disabled={loading}
            className={commonStyles.btn}
            onClick={() => searchHandeler()}
          >
            {loading ? "Loading" : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getSearchSongs })(Search);
