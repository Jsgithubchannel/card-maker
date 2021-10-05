import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "./../header/Header";
import styles from "./Maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "JS1",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "js@gmail.com",
      message: "go for it",
      fileName: "js",
      fileURL: null,
    },
    {
      id: "2",
      name: "JS2",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "js@gmail.com",
      message: "go for it",
      fileName: "js",
      fileURL: "js.png",
    },
    {
      id: "3",
      name: "JS3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "js@gmail.com",
      message: "go for it",
      fileName: "js",
      fileURL: null,
    },
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
