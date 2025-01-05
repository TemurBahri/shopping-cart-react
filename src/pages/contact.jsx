import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Telefon simgesi

export const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <div style={styles.name}>
          Timur Bahri
        </div>
        <div style={styles.surname}>
          Bu2
        </div>
        <div style={styles.details}>
          <FaPhoneAlt style={styles.icon} />
          05514320568
        </div>
        <div style={styles.details}>
          MOE 8.1
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  text: {
    fontSize: "24px", // Yazıyı büyütme
    fontWeight: "bold",
  },
  name: {
    display: "inline-block",
    marginRight: "10px",
    fontSize: "40px", // İsim ve soyismi büyütme
  },
  surname: {
    display: "inline-block",
    fontSize: "30px", // İsim ve soyismi büyütme
  },
  details: {
    marginTop: "10px",
    fontSize: "40px", // Diğer bilgileri biraz daha küçük yapalım
  },
  icon: {
    marginRight: "10px",
  },
};
