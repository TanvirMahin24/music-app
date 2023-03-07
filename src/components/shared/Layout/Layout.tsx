import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { MdLibraryMusic } from "react-icons/md";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Layout.module.css";
import commonStyles from "../../../common.module.css";
import PlaylistSidebar from "./PlaylistSidebar/PlaylistSidebar";

const Layout = ({ children, title }: any) => {
  const { keycloak } = useKeycloak();
  const [show, setShow] = React.useState(false);

  const logoutHandeler = () => {
    keycloak.logout();
    toast.success("Logged out!");
  };
  return (
    <div className="position-relative">
      <PlaylistSidebar />
      <Container fluid>
        <Row className="position-relative">
          <Col
            md={2}
            className={`px-4 ${styles.wrapper} ${show ? styles.active : ""}`}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link
                to="/home"
                className="d-flex align-items-center py-3 text-decoration-none text-dark"
              >
                {/* <img src={logo} alt="" className={styles.logo} /> */}
                <span
                  className={`d-block fs-4 fw-bold ${commonStyles.text_gradient}`}
                >
                  Music App
                </span>
              </Link>
              <div
                className={`${styles.ham}  ms-auto`}
                onClick={() => setShow(!show)}
              >
                <GoThreeBars />
              </div>
            </div>

            <div className={styles.nav}>
              <NavLink to="/home" className={styles.nav__item}>
                <span className={styles.icon}>
                  <AiOutlineHome />
                </span>
                <span className={styles.nav__item_text}>Home</span>
              </NavLink>
            </div>
            <div className={styles.nav}>
              <NavLink to="/search" className={styles.nav__item}>
                <span className={styles.icon}>
                  <BiSearchAlt />
                </span>
                <span className={styles.nav__item_text}>Search</span>
              </NavLink>
            </div>
            <div className={styles.nav}>
              <NavLink to="/favourites" className={styles.nav__item}>
                <span className={styles.icon}>
                  <BsFillBookmarkStarFill />
                </span>
                <span className={styles.nav__item_text}>Favourites</span>
              </NavLink>
            </div>
            <div className={styles.nav}>
              <NavLink to="/playlists" className={styles.nav__item}>
                <span className={styles.icon}>
                  <MdLibraryMusic />
                </span>
                <span className={styles.nav__item_text}>Playlists</span>
              </NavLink>
            </div>
            <div className={styles.nav}>
              <div className={styles.nav__item} onClick={logoutHandeler}>
                <span className={styles.icon}>
                  <FiLogOut />
                </span>
                <span className={styles.nav__item_text}>Logout</span>
              </div>
            </div>
          </Col>
          <Col md={10} className={`${styles.inner}`}>
            <div className="d-flex justify-content-end align-items-center py-3">
              <div
                className={`${styles.ham}  me-auto`}
                onClick={() => setShow(!show)}
              >
                <GoThreeBars />
              </div>
              {/* {title ? (
                <h3 className="me-auto ps-4 fs-3 my-auto">{title}</h3>
              ) : (
                <></>
              )} */}
            </div>
            <Container>{children}</Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, null)(Layout);
