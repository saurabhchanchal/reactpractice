import React from "react";
import "./Category.css"

function Category({image,title}) {
    return (
        <div className="category">
              <img src= {image} alt="" />
              <b>{title}</b>
        </div>
    )
}

export {Category};