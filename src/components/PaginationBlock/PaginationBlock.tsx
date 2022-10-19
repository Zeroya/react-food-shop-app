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

  const indexOfLastPage = page * cardPerPage;
  const indexOfFirstPage = indexOfLastPage - cardPerPage;
  const currentCards = filteredCards?.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    dispatch(setPaginatedCards(currentCards));
    filteredCards.length && setTotal(filteredCards.length);
  }, [currentCards, filteredCards]);

  const onClick = (): void => {
    setCardPerPage(cardPerPage + 5);
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

  return (
    <div className={s.paginationBlock}>
      <div className={s.pagination}>
        <Pagination
          onChange={(value) => setPage(value)}
          size="small"
          pageSize={cardPerPage}
          total={total}
          current={page}
          itemRender={itemRender}
        />
      </div>
      <div className={s.loadMore}>
        <button className={s.loadMore__button} onClick={onClick}>
          Show more products
          <img src={buttonMark} />
        </button>
      </div>
      <div className={s.amount}>
        <div className={s.amount__cards}>
          <span>{cards?.length}</span>
          <span>Products</span>
        </div>
      </div>
    </div>
  );
};

export default PaginationBlock;
