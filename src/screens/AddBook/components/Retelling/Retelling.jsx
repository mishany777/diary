import styles from "../Retelling/Retelling.module.css";
import Section from "../Section/Section";
import React, { useState } from "react";

export default function Retelling(props) {
  return (
    <Section>
      <textarea
        className={styles.retellingForm}
        rows="9"
        cols="30"
        placeholder="Пересказ"
        onChange={(e) => props.changeBookInfo("retelling", e.target.value)}
        value={props.bookInfo.retelling || ""}
      ></textarea>
      {/* <div contenteditable="true" placeholder="tes" className={styles.retellingForm}></div> */}
    </Section>
  );
}
