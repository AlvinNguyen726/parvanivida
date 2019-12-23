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

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      events: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }
  handleItems = category => {
    let tempItems = [...this.state.items];
    
      let items = tempItems.filter(({ node }) => node.category === category);
      this.setState(() => {
        return { events: items };
      });
    
  };
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="collection ps">
          <div className="container">
            <div className="collection-images center mt0">
              {this.state.events.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="event-card">
                    <h6 className="f2 tc p0 mb0">{node.eventTitle}</h6>
                    <Img fluid={node.eventImagePromo.fluid} />
                    <p className="tc tj f4">{node.description.description}</p>
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
          <h1 className="d4 tc fw1">Events</h1>
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
