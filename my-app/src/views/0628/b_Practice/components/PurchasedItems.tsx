import React from "react";
import { ShoppingItem } from "../ShoppingListApp";

interface PurchasedItemsProps {
  items: ShoppingItem[];
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

const PurchasedItems = ({
  items,
  toggleItem,
  deleteItem,
}: PurchasedItemsProps) => {
  return (
    <div>
      <h4>완료된 항목</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items
          .filter((item) => item.purchased)
          .map((item) => (
            <li key={item.id} style={styles.item}>
              <span>
                {item.description} (추가시간: {' '} )
                {item.timestamp.toLocaleTimeString()}
              </span>
              <div>
                <button style={styles.button} onClick={() => toggleItem(item.id)}>
                  {item.purchased ? "구매취소" : "구매완료"}
                </button>
                <button style={styles.button} onClick={() => deleteItem(item.id)}>
                  삭제
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

const styles = {
  item: {
    backgroundColor: "#e9f7ef",
    borderBottom: "1px solid #ccc",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginRight: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
  },
  deleteButton: {
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "3px",
  },
};

export default PurchasedItems;
