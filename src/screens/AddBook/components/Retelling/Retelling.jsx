import styles from "../Retelling/Retelling.module.css";
import Section from "../Section/Section";
import React, { useState } from "react";

export default function Retelling() {
  return (
    <Section>
      <textarea
        className={styles.retellingForm}
        rows="9"
        cols="30"
        placeholder="Пересказ"
      ></textarea>
    </Section>
  );
}
