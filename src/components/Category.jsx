import React from "react";
import Img4 from "../img/V2.png"
import Img5 from "../img/V1.png"
import Img6 from "../img/V3.png"


export default function Category() {

    const category =[
        {
            id:`1`,
            img:Img6,
            title:`earrings`,
        },
        {
            id:`2`,
            img:Img4,
            title:`wedding rings`,
        },
        {
            id:`3`,
            img:Img5,
            title:`engagement rings`,
        },
    ]
  return (
    <div>
      <section className="category">
        <div className="category__container container">
          <h2 className="category__title">shop by category</h2>
          <div className="category-item">

            {category.map((item)=>{
                    return(

                <div key={item.id} class="category-link">
                    <img class="category__img" src={item.img}/>
                    <p class="category__item__title">{item.title}</p>
                </div>
                    )
                })}

          </div>
        </div>
      </section>
    </div>
  );
}
