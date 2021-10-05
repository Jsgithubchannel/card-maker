import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "./../header/Header";
import styles from "./Maker.module.css";
import { useHistory } from "react-router-dom";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>빈 화면</div>
      <Footer />
    </section>
  );
};

export default Maker;
