"use client";

import style from "./form.module.scss";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalContext";
import { IoIosArrowDropdown } from "react-icons/io";

export function Form() {
  const { setName, setNumber, setMonth, setYear, setCvc, cardRef, inputRef } =
    useContext(globalContext);

  const creditNumberHandler = (e) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    e.target.value = formattedValue;
    setNumber(formattedValue);

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const monthHandler = (e) => {
    let value = e.target.value.substring(0, 2);
    if (value === "") {
      value = "";
    } else if (value > 12) {
      value = 12;
    } else if (value == 0) {
      value = 1;
    }
    e.target.value = value;
    setMonth(value);
  };

  const yearHandler = (e) => {
    let value = e.target.value.substring(0, 2);
    if (value.length === 2) {
      if (value === "") {
        value = "";
      } else if (value < 24) {
        value = 24;
      } else if (value > 50) {
        value = 50;
      }
    }
    e.target.value = value;
    setYear(value);
  };

  const cvcHandler = (e) => {
    const value = e.target.value.substring(0, 3);
    e.target.value = value;
    setCvc(value);
  };

  const scrollDown = (e) => {
    e.preventDefault();
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.container} ref={inputRef}>
      <IoIosArrowDropdown className={style.arrow} onClick={scrollDown} />
      <form className={style.form} type="submit" onSubmit={scrollDown}>
        <div className={style.longInputs}>
          <div>CardHolder Name</div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={style.longInputs}>
          <div>Card Number</div>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            onChange={creditNumberHandler}
            maxLength="19"
          />
        </div>

        <div className={style.shortInputs}>
          <div className={style.date}>
            <div>Exp. Date</div>
            <input
              type="text"
              placeholder="MM"
              onChange={monthHandler}
            />
            <input
              type="text"
              placeholder="YY"
              onChange={yearHandler}
            />
          </div>

          <div className={style.cvc}>
            <div>CVC</div>
            <input
              type="text"
              placeholder="CVC"
              onChange={cvcHandler}
              maxLength="3"
            />
          </div>
        </div>
        <button type="submit" onClick={scrollDown}>
          Confirm
        </button>
      </form>
    </div>
  );
}
