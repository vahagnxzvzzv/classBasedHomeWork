import React from "react";
import modules from "./Card.module.css";
import products from "../../db/db";

class Card extends React.Component {
  dbContent = products;

  dbContentMap = this.dbContent.map((content) => {
      return (
            <div id={modules.card}>
          <h1>{content.id}</h1>
          <h1>{content.title}</h1>
          <h1>{content.price}</h1>
          <h1>{content.description}</h1>
          <h1>{content.category}</h1>
          <h1>{content.image}</h1>
          <h1>{content.rating.rate}</h1>
          <h1>{content.rating.count}</h1>
          </div>
      )
  })

  constructor(props) {
    super(props);

    this.state = {
      items: this.dbContent,
    };
  }

  render() {

   

    return (
      <div>
        <div id={`${modules.card}`}>
            {this.dbContentMap}
        </div>
      </div>
    );
  }
}

export default Card;
