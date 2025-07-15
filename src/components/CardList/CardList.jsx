import styles from "./CardList.module.css";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className={styles.cardsWrap}>
      <Card
        plan={300}
        price={300}
        speed={10}
        backgroundColor="firstCard"
        isFocused={false}
      />
      <Card
        plan={450}
        price={450}
        speed={50}
        backgroundColor="green"
        isFocused={false}
      />
      <Card
        plan={550}
        price={550}
        speed={100}
        backgroundColor="red"
        isFocused={true}
      />
      <Card
        plan={1000}
        price={1000}
        speed={200}
        backgroundColor="black"
        isFocused={false}
      />
    </div>
  );
};

export default CardList;
