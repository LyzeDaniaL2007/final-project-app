import React from "react";
import { Link } from "react-router-dom";

const FavoritesView = ({ data }) => {
  return (
    <div>
      <div className="">Film yang telah di favorit akan muncul disini</div>
      <div className="flex flex-col">
        {data?.map((item, index) => {
          return (
            <div key={index} className="">
              <Link to={`/detail/${item.id}`} className="">
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesView;
