import styles from "./Card.module.css";

const Card = ({ plan, price, speed, backgroundColor, isFocused }) => {
  const titleStyles = `${styles.title} ${styles[backgroundColor]}`;
  const priceStyles = `${styles.price} ${styles[backgroundColor]}`;

  return (
    <div className={`${styles.card} ${isFocused ? styles.isFocus : ""}`}>
      <div className={titleStyles}>
        <h2>Безлимитный {plan}</h2>
      </div>

      <div className={priceStyles}>
        <span>руб</span>
        <span className={styles.total}>{price}</span>
        <span className={styles.mes}>/мес</span>
      </div>

      <div className={styles.speed}>
        <p>до {speed} Мбит/сек</p>
      </div>
      <div className={styles.description}>
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
};

export default Card;
