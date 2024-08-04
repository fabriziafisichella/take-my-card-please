"use client";

import style from "./card.module.scss";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalContext";
import { IoIosArrowDropup } from "react-icons/io";
import { Logo } from "../Logo/Logo";

const Card = () => {
  const { name, number, month, year, cvc, cardRef, inputRef } =
    useContext(globalContext);

  const scrollUp = (e) => {
    e.preventDefault();
    inputRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.container} ref={cardRef}>
      <IoIosArrowDropup onClick={scrollUp} className={style.arrow} />
      <div className={style.cardFront}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.info}>
          <div className={style.number}>{number}</div>
          <div className={style.otherInfo}>
            <span>{name}</span>
            <span>
              {month} / {year}
            </span>
          </div>
        </div>
      </div>
      <div className={style.cardBack}>
        <div className={style.banner} />
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.cvc}>{cvc}</div>
      </div>
    </div>
  );
};

export default Card;
