import React, { Component } from "react";
import Img from "gatsby-image";

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = [...categories];
  return categories;
};

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      designers: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }
  handleItems = category => {
    let tempItems = [...this.state.items];
    
      let items = tempItems.filter(({ node }) => node.category === category);
      this.setState(() => {
        return { designers: items };
      });
    
  };
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="collection ps">
          <div className="container">
            <div className="row mb4 mt0">
              <div className="tc">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="collection-btn washed-red tc m3 ma3 pa3 pointer"
                      onClick={() => {
                        this.handleItems(category);
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="collection-images flex flex-wrap justify-between ma5">
              {this.state.designers.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="content-between">
                    <Img fixed={node.designerImage.fixed} />
                    <h6 className="pa2 display dark-gray f3 tc mb3 h3 mt1">{node.designer}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="collection pa5">
          <div className="container">
          <h1 className="d4 tc fw1">Collection</h1>
            <div className="row">
              <div className="col-10 col-6 ma0 tc ttc">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
