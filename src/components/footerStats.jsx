import "../styling/footerStats.css";

function FooterStats({ items, checkedItems }) {
  return (
    <footer className="footer-stats">
      {items.length > 0 ? (
        <>
          You have {items.length} items in your list, and you already packed{" "}
          {checkedItems} / {items.length} (
          {((checkedItems / items.length) * 100).toFixed(2)}%){" "}
          {checkedItems === items.length ? "you got everything!" : ""}
        </>
      ) : (
        <>Start adding some items to your packing list.</>
      )}
    </footer>
  );
}

export default FooterStats;
