import { useRef } from "react";
import { Edit } from "./edit";

export function ItemBox({ row, rows, setRows }) {

  const editBtn = useRef(null);

  return (
    <div className="item__content" style={{ margin: "10px" }} onClick={() => editBtn.current.click()}>
      <div className="status-container">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <div className="status">status</div>
        </div>
        <div className="img-container">
          <img
            className="item-img"
            src={
              require(`../../../../images/${row.img}`)
                ? require(`../../../../images/${row.img}`)
                : null
            }
            alt="image"
          />
        </div>
        <div className="general-info">
          <div className="quantity-container">{row.quantity + " left"}</div>
          <span style={{ color: "#999999" }}>#{row.id}</span>
        </div>
      </div>
      <div>
        <p style={{ height: "80px" }}>{row.desc}</p>
        <div className="price-container">
          <span>{row.price}</span>
          <span>{row.deliveryPrice}</span>
        </div>
      </div>
      <div className="footer-container">
        <Edit obj={row} rows={rows} setRows={setRows} ref={editBtn} />
        <button className="basket" onClick={(e) => e.stopPropagation()}>
          <svg
            className="cart"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              fill="#19a661"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
