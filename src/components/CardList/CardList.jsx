import { useState } from "react";
import styles from "./CardList.module.css";
import Card from "../Card/Card";

const CardList = () => {
  const cards = [
    {
      plan: "300",
      price: "300",
      speed: "10",
      backgroundColor: "firstCard",
      isActive: false,
      id: "1",
    },
    {
      plan: "450",
      price: "450",
      speed: "50",
      backgroundColor: "green",
      isActive: false,
      id: "2",
    },
    {
      plan: "550",
      price: "550",
      speed: "100",
      backgroundColor: "red",
      isActive: true,
      id: "3",
    },
    {
      plan: "1000",
      price: "1000",
      speed: "200",
      backgroundColor: "black",
      isActive: false,
      id: "4",
    },
  ];

  const [activeId, setactiveId] = useState(false);

  const handleClick = (id) => {
    setactiveId(id);
  };

  return (
    <div className={styles.cardsWrap}>
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
          isActive={card.id == activeId}
          onClick={() => {
            handleClick(card.id);
          }}
        />
      ))}
    </div>
  );
};

export default CardList;
