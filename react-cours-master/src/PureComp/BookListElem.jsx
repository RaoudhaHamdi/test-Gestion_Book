import React, { Component } from 'react';

class BookListElem extends Component {
  //  deleteBook =id=>{
  //    const book =this.props.boook.filter(el=>{
  //     return el.id !==id;
  //     })
     
  render() {
    return (
        <li>
            {this.props.title} | 
            {this.props.author} | 
            {this.props.price} | 
            {this.props.isbn}
       <button type='button' onClick={()=>{this.props.deleted(this.props.isbn);
      console.log(this.props.isbn)}}>
          Delete
        </button> 
        
        </li> 
    );
  }
}

export default BookListElem;
