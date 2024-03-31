import React, { useState, useEffect, useMemo } from "react";
import { ItemService } from "./ItemService";

export function useItems() {
  const [rows, setRows] = useState([]);
  const [serverRows, setServerRows] = useState([]);
  const [loadingCount, setLoadingCount] = useState(0);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [isPrice, setIsPrice] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isPd, setIsPd] = useState(false);
  const [priceMethod, setPriceMethod] = useState("Ascending");
  const [pDateMethod, setPDateMethod] = useState("Ascending");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filterClicked, setFilterClicked] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [sortedAndFilteredItems, setSortedAndFilteredItems] = useState([
    ...rows,
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fromPage = (page * limit) - limit;
    const toPage = page * limit;
    setRows([...serverRows.slice(fromPage, toPage)])
  }, [serverRows, page])


  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await ItemService.getAll();
        setServerRows(response);
        setTotalPages(Math.ceil(response.length / limit));
        setIsLoading(false);
        setTimeout(() => {
          setLoadingCount(loadingCount + 1);
        }, 100);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  let pageCount = getPageCount();
  function getPageCount() {
    let res = [];
    for (let i = 0; i < totalPages; i++) {
      res.push(i + 1);
    }
    return res;
  }

  let tempSortedAndFiltered = [...rows];

  const applySortingAndFiltering = () => {
    if (filterClicked) {
      tempSortedAndFiltered = tempSortedAndFiltered.filter(
        (item) => Number(item.price.slice(0, item.price.length -1)) >= from && Number(item.price.slice(0, item.price.length -1)) <= to
      );
    }
    if (category) {
      tempSortedAndFiltered = tempSortedAndFiltered.filter(
        (item) => item.category === category
      );
    }
    if (color) {
      tempSortedAndFiltered = tempSortedAndFiltered.filter(
        (item) => item.colors.filter((obj) => obj.color == color).length > 0
      );
    }

    setSortedAndFilteredItems(tempSortedAndFiltered);
  };

  const priceSort = () => {
    if (isPrice) {
      if (priceMethod == "Descending") {
        tempSortedAndFiltered.sort((a, b) => Number(b.price.slice(0, b.price.length - 1)) - Number(a.price.slice(0, a.price.length - 1)));
       } else {
        tempSortedAndFiltered.sort((a, b) => Number(a.price.slice(0, a.price.length - 1)) - Number(b.price.slice(0, b.price.length - 1)));
      }
    }

     setSortedAndFilteredItems(tempSortedAndFiltered);
  }

  const pDateSort = () => {
    if (isPd) {
      if (pDateMethod === "Descending") {
        tempSortedAndFiltered.sort((a, b) => new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime());
      } else {
        tempSortedAndFiltered.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
      }
    }
  }

  useEffect(() => {
    applySortingAndFiltering();
    priceSort();
    pDateSort();
  }, [selectedSort, rows, priceMethod, filterClicked, category, page, color, pDateMethod, isPrice]);

  const sortedAndSearchedItems = useMemo(() => {
    if (searchQuery) {
      const filteredItems = sortedAndFilteredItems.filter((item) =>
        item.title
          .slice(0, searchQuery.length)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      return filteredItems;
    } else {
      return sortedAndFilteredItems;
    }
  }, [searchQuery, sortedAndFilteredItems]);

  const handleSortChange = (e, name) => {
    e.stopPropagation();
    setSelectedSort(name);
    setShowList(false);
    setShowModal(true);
  };

  const handleFilterClick = () => {
    if (from && to) {
      setFilterClicked((num) => num + 1);
      setShowModal(false);
    } else if (!from) {
      let forgottenInput = prompt('You forgot to fill "from"');
      setFrom(forgottenInput);
    } else if (!to) {
      let forgottenInput = prompt('You forgot to fill "to"');
      setTo(forgottenInput);
    }
  };

  const onClickCancel = () => {
    setSortedAndFilteredItems([...rows]);
    setSelectedSort("");
    setShowList(false);
    setCategory("");
    setFrom("");
    setTo("");
    setFilterClicked(0);
    setColor("");
    setIsPrice(false);
    setIsCategory(false);
    setIsPd(false);
  };

  const changePage = (page) => {
    setPage(page);
  };

  const isEmptyShow = () => {
    if (sortedAndSearchedItems.length == 0 && loadingCount > 0) {
      return (
        <div style={{ marginTop: "30px" }}>
          <span className="isEmpty">0 items were found</span>
          <span style={{ color: "#19a661" }}> :(</span>
        </div>
      );
    } else {
      return null;
    }
  };

  const sortMethods = [
    { value: "Description", name: "Description" },
    { value: "Price", name: "Price" },
    { value: "Publication date", name: "Publication date" },
    { value: "Category", name: "Category" },
    { value: "Color", name: "Color" },
  ];

  const categories = [
    { value: "material", name: "Material" },
    { value: "accessoryType", name: "Accessory type" },
    { value: "brand", name: "Brand" },
    { value: "prints", name: "Prints" },
    { value: "general", name: "General" },
  ];

  return {
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
    sortMethods,
    categories,
    isEmptyShow,
    isLoading,
    pageCount,
    page,
    changePage,
    color,
    setColor,
    showModal,
    setShowModal,
    isPd,
    setIsPd
  };
}
