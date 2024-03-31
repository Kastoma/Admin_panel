import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SortPrice } from "./price-sort";
import { FilterCategory } from "./category-filter";
import { FilterPrice } from "./price-filter";
import { FilterColor } from "./color-filter";

export function Sort({ selectedSort, onClick, showList, setShowList, onClickCancel, priceMethod, setPriceMethod, isPrice, setIsPrice, pDateMethod, setPDateMethod,  handleFilterClick, from, setFrom, to, setTo, categories, setCategory, isCategory, setIsCategory, isPd, setIsPd, rows, color, setColor }) {

  const methods = useRef(null);
  const cancel = useRef(null);
  const arrow = useRef(null);
  const select = useRef(null);

  useEffect(() => {
    if (isPrice || isCategory || isPd || color) {
      cancel.current.style.display = 'flex'
    } else {
      cancel.current.style.display = 'none'
    }
  }, [isPrice, isCategory, isPd, color])

  return (
    <div
      ref={select}
      className="select-item"
      onClick={() => {
        setShowList(true)
        arrow.current.classList.remove('inactive')
        arrow.current.classList.add('active')
        select.current.style.cursor = 'unset'
      }}
      onMouseLeave={() => {
        setShowList(false)
        arrow.current.classList.add('inactive')
        arrow.current.classList.remove('active')
        select.current.style.cursor = 'pointer'
      }}
    >
      <div className="arrow-container">
        {selectedSort ? selectedSort : "Sort"}
        <div className="svg-container">
          <svg
            ref={arrow}
            className="arrow-user__sort"
            width={13}
            height={13}
            viewBox="0 0 13 7"
            fill="none"
          >
            <path
              d="M 1 1 L 7 7 M 7 7 L 13 0"
              fill="transparent"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
          </div>
      </div>
      <CSSTransition
        in={showList}
        nodeRef={methods}
        timeout={120}
        classNames="select_option"
        onEnter={() => {
          if (methods.current) {
            methods.current.style.display = "flex";
          }
        }}
        onExited={() => {
          if (methods.current) {
            methods.current.style.display = "none";
          }
        }}
      >
        <div ref={methods} className="options-container">
          <div onClick={() => onClickCancel()} ref={cancel} className="select-option_close">
            cancel
          </div>
          <div style={{margin: '0'}} className="select-option">
            <span className="sort-title">Price</span>
            <SortPrice sortMethod={priceMethod} setSortMethod={setPriceMethod} setIsPrice={setIsPrice} />
            <FilterPrice from={from} setFrom={setFrom} to={to} setTo={setTo} setFilterClicked={handleFilterClick} setIsPrice={setIsPrice} />
          </div>
          <div className="select-option">
            <span  className="sort-title">Category</span>
            <FilterCategory categories={categories} setCategory={setCategory} setIsCategory={setIsCategory} />
          </div>
          <div className="select-option">
            <span className="sort-title">Publication date</span>
            <SortPrice sortMethod={pDateMethod} setSortMethod={setPDateMethod} setIsPrice={setIsPd} />
          </div>
          <div style={{border: 'none'}} className="select-option">
            <span className="sort-title">Color</span>
            <FilterColor rows={ rows } setColor={setColor} />
         </div>
        </div>
      </CSSTransition>
    </div>
  )
}
