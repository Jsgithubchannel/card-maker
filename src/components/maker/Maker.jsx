import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "./../header/Header";
import styles from "./Maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
