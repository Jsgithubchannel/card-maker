import React from "react";
import styles from "./Editor.module.css";
import CardEditForm from "./../card_edit_form/CardEditForm";
import CardAddForm from "../card_add_form/CardAddForm";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
