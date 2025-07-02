import "../styling/footerStats.css";

function FooterStats({ items, checkedItems }) {
  return (
    <footer className="footer-stats">
      You have {items.length} items in your list , and you already packed{" "}
      {checkedItems} items
    </footer>
  );
}

export default FooterStats;
