import { Card, TableContainer, Table, TableBody } from "@mui/material";
import { ItemBox } from "./products__Item/item-box.jsx";
import { SearchBar } from "./products__Header/search-bar.jsx";
import { Sort } from "./products__Header/sorting.jsx";
import { useItems } from "./products__Item/useItems.js";
import { Loader } from "./products__Header/Loader.jsx";
import { ScrollToTopButton } from "./products__Footer/toTop.jsx";
import { PaginationTable } from "./products__Footer/Pagination.jsx";


const DashboardTable = () => {
  const {
    rows,
    setRows,
    selectedSort,
    setSearchQuery,
    showList,
    setShowList,
    setCategory,
    isCategory,
    setIsCategory,
    priceMethod,
    setPriceMethod,
    isPrice,
    setIsPrice,
    pDateMethod,
    setPDateMethod,
    from,
    setFrom,
    to,
    setTo,
    sortedAndSearchedItems,
    handleSortChange,
    handleFilterClick,
    onClickCancel,
    categories,
    isEmptyShow,
    isLoading,
    pageCount,
    page,
    changePage,
    color,
    setColor,
    isPd,
    setIsPd
  } = useItems();

  return (
    <Card>
      <TableContainer>
        <Table aria-label="table in dashboard" style={{backgroundColor: 'rgb(244 245 250 / 84%)'}}>
          <div className="header-container">
            <SearchBar setInputValue={setSearchQuery} />
            <Sort
              selectedSort={selectedSort}
              onClick={handleSortChange}
              showList={showList}
              setShowList={setShowList}
              onClickCancel={onClickCancel}
              priceMethod={priceMethod}
              setPriceMethod={setPriceMethod}
              isPrice={isPrice}
              setIsPrice={setIsPrice}
              pDateMethod={pDateMethod}
              setPDateMethod={setPDateMethod}
              handleFilterClick={handleFilterClick}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              categories={categories}
              setCategory={setCategory}
              isCategory={isCategory}
              setIsCategory={setIsCategory}
              isPd={isPd}
              setIsPd={setIsPd}
              rows={rows}
              color={color}
              setColor={setColor}
            />
          </div>
          <TableBody
            style={{
              minHeight: "505px",
              display: "flex",
              backgroundColor: "rgb(244 245 250 / 84%)",
              justifyContent: "center",
              overflowY: "hidden",
            }}
          >
            {isEmptyShow()}
            { !isLoading
              ? (<div className="cards-container">{sortedAndSearchedItems.map((row, i) => (
                <div key={i} className="card">
                  <ItemBox row={row} rows={rows} setRows={setRows} />
                </div>
              ))}</div>)
            : <Loader />
            }
          </TableBody>
          <PaginationTable pageCount={pageCount} changePage={changePage} page={page} />
          <ScrollToTopButton />
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DashboardTable;
