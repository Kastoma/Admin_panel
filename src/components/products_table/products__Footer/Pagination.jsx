export function PaginationTable({pageCount, changePage, page}) {
  return (
    <div className="pages-container">
      {pageCount.map((el) => {
        return (
          <button
            onClick={() => changePage(el)}
            key={el}
            className={page == el ? "page-btn__current" : "page-btn"}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}
