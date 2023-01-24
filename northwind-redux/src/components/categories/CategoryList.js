import React, { Component } from 'react'
import 
 {connect} from "react-redux";


class CategoryList extends Component {
  render() {
    return (
      <div>
          CategoryList


          <h6>Seçili Kategori: {this.props.currentCategory.categoryName}</h6>
      </div>
    )
  }
}



function mapStateToProps(state) {

  return {
    currentCategory:state.changeCategoryReducer}

}

export default connect(mapStateToProps)(CategoryList);