import React, { FC, useState, useEffect } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import buttonMark from "@assets/icons/buttonMark.svg";
import { setPaginatedCards } from "@store/reducers/UserSlice";
import { useAppSelector, useAppDispatch } from "@hooks/hooks";
import s from "./PaginationBlock.module.scss";
import "./pagination.css";

const PaginationBlock: FC = () => {
  const cards = useAppSelector((state) => state.food.cards);
  const filteredCards = useAppSelector((state) => state.food.filteredCards);

  const dispatch = useAppDispatch();

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(5);
  const [cardPlus, setCardPlus] = useState(0);

  const [colorChecker, setColorChecker] = useState(0);
  const indexOfLastPage = page * cardPerPage;
  const indexOfFirstPage = indexOfLastPage - cardPerPage;
  let currentCards = filteredCards?.slice(indexOfFirstPage, indexOfLastPage);
  cardPlus && (currentCards = filteredCards?.slice(indexOfFirstPage, indexOfLastPage + cardPlus));

  useEffect(() => {
    dispatch(setPaginatedCards(currentCards));
    filteredCards.length && setTotal(filteredCards.length);
    indexOfFirstPage >= filteredCards.length && setPage(1);
    page === 2 && indexOfFirstPage + 1 > filteredCards.length && setPage(1);
  }, [currentCards, filteredCards]);

  const onClick = (): void => {
    setCardPlus(cardPlus + 5);
    setColorChecker(colorChecker + 1);
    const currentClass = document.getElementsByClassName("ant-pagination-item");
    currentClass[page + colorChecker]?.classList.add("ant-pagination-item-active");
  };

  const itemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Page</a>;
    }
    if (type === "next") {
      return;
    }
    return originalElement;
  };

  const setpageAmount = (value: number) => {
    setPage(value);
    setColorChecker(0);
    setCardPlus(0);
    const currentClass = document.getElementsByClassName("ant-pagination-item");
    for (let i = 0; i < currentClass.length; i++) {
      currentClass[i].classList.remove("ant-pagination-item-active");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={s.paginationBlock}>
      <div className={s.pagination}>
        <Pagination
          showSizeChanger={false}
          onChange={(value) => setpageAmount(value)}
          size="small"
          pageSize={cardPerPage}
          total={total}
          current={page}
          itemRender={itemRender}
        />
      </div>
      <div className={s.loadMore}>
        {!(currentCards[currentCards.length - 1] == filteredCards[filteredCards.length - 1]) && (
          <button className={s.loadMore__button} onClick={onClick}>
            Show more products
            <img src={buttonMark} />
          </button>
        )}
      </div>
      <div className={s.amount}>
        <div className={s.amount__cards}>
          <span>{cards?.length - currentCards?.length}</span>
          <span>Products</span>
        </div>
      </div>
    </div>
  );
};

export default PaginationBlock;
