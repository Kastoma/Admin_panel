export function SortPrice({ sortMethod, setSortMethod, setIsPrice }) {

    const start = sortMethod == 'Ascending' ? 'As' : 'Des'
  return (
      <div
        className="sort-price"
      onClick={() => {
        setSortMethod(
          sortMethod == "Ascending"
            ? (sortMethod = "Descending")
            : (sortMethod = "Ascending")
        )
        setIsPrice(true)
      }}
      >
        <svg
          className="sort-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <path
            className="sort-path1"
            d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
            fill="#19a661"
          ></path>
          <path
            className="sort-path2"
            d="M341.54,197.85l-11.37-13.23a103.37,103.37,0,1,0,22.71,105.84"
            fill="#19a661"
          ></path>
          <path
            className="sort-path3"
            d="M367.32,162a8.44,8.44,0,0,0-6,2.54l-59.54,59.54a8.61,8.61,0,0,0,6.09,14.71h59.54a8.62,8.62,0,0,0,8.62-8.62V170.61a8.61,8.61,0,0,0-8.68-8.63Z"
            fill="#19a661"
          ></path>
              </svg>
              <span className="sort-start">{ start }</span>      
        <span>{ 'cending' }</span>
      </div>
    );
}
