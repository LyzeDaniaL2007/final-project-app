import React from "react";
import { Link } from "react-router-dom";

const RatedView = ({ data }) => {
  return (
    <div>
      <div className="">Film yang telah di rating muncul Disini</div>
      <div className="flex flex-col">
        {data?.map((item, index) => {
          return (
            <Link to={`/detail/${item.id}`} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RatedView;
