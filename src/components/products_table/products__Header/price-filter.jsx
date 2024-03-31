export function FilterPrice({
  from,
  setFrom,
  to,
  setTo,
  setFilterClicked,
  setIsPrice
}) {
  return (
    <div className="filter-price_container">
        <div className="filter-price_input-container">
          <div style={{fontSize: '15px'}}>
            {"From : "}
            <input
              className="filter-price_input"
              type="text"
              placeholder="0"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div style={{fontSize: '15px'}}>
            {"To : "}
            <input
              className="filter-price_input"
              type="text"
              placeholder="∞"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>
        <button
          className="filter-price_btn"
        onClick={() => {
          setFilterClicked()
          setIsPrice(true)
        }}
        >
          Filter
        </button>
      </div>
    )
}
