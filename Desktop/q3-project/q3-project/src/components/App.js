import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import '../App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {
    return _.map(this.props.items, item => {
      return (
        <div key={item.id}>
          <h2>{item.item_name}</h2>
          <h4>{item.item_description}</h4>
          <h6> {`$${item.item_price}`} </h6>
          <img src={item.img_url} alt="" height="200" width="200" />
          <Link to={`/edit/${item.id}`}>Edit Item</Link>
          {/* <Link to="" >Delete Item</Link> */}
        </div>
      );
    });
  }

  render() {
    return (
      <div>

        {this.renderItems()}
        <hr />
        <Link to="/add" >Add an Item</Link>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items }
}

export default connect(mapStateToProps, { fetchItems })(App)
