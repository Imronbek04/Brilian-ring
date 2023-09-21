import React from "react";
import Img7 from "../img/Group 84.svg";
import Img8 from "../img/Group 85.svg";
import Img9 from "../img/Group 86.svg";
import Img10 from "../img/Group 87.svg";

export default function Page() {
  const choose = [
    {
      id: `1`,
      img: Img7,
      title: `DIALOGUE BETWEEN CLIENT
            AND CRAFTSMAN`,
    },
    {
      id: `2`,
      img: Img8,
      title: `HANDCRAFTED JEWELS,
            MADE IN HOUSE`,
    },

    {
      id: `3`,
      img: Img9,
      title: `EXCEPTIONAL QUALITY
            AND ATTENTION TO DETAIL`,
    },
    {
      id: `4`,
      img: Img10,
      title: `FREE FIVE-YEAR AFTER-
            SALES SERVICE`,
    },
  ];

  return (
    <div>
      <section className="choose__page">
        <div className="container choose_container">
          <div className="choose__service">
            <h2 className="choose_title">Why choose us?</h2>
            <div className="choose-item">
              {choose.map((item) => {
                return (
                  <div key={item.id} class="choose-link">
                    <img class="choose__img" src={item.img} />
                    <p class="choose__item__title">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
