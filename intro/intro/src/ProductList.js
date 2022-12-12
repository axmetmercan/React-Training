import React, { Component } from 'react';
import { Table, Button, } from 'reactstrap';


export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}--{this.props.curentCategory}</h3>

        <Table
        >
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Username
              </th>
              <th>
                Cart
              </th>
            </tr>
          </thead>
          <tbody>

            {this.props.products.map(product => (

              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td > <Button onClick={()=> this.props.addToCart(product)} > Add to Cart</Button >  </td>
              </tr>
            ))}






          </tbody>
        </Table>
      </div>
    )
  }
}
