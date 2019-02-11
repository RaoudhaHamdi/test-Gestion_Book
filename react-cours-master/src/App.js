import React, { Component } from 'react';
import './App.css';
import BooksList from './PureComp/BooksList';
import BookListElem from './PureComp/BookListElem';

class App extends Component {
  constructor(prop){
    super(prop);

    this.state = {"books":[
        {
          title:"L'alchemiste",
          author:"Paolo coelho",
          price:"18dt",
          isbn:"1234567",
          description:"a book for normies"
        },
        {
          title:"L'attentat",
          author:"Yasmina Khadhra",
          price:"25dt",
          isbn:"1234565",
          description:"a book for good peoples"
        },
        {
          title:"new title",
          author:"new authoe",
          price:"22dt",
          isbn:"123459900",
          description:"a new book "
        }
      ],
      title: '',
      author: '',
      price: '',
      isbn: '',
      description: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      price: this.state.price,
      description: this.state.description,
    };
  
    this.setState({books: [...this.state.books, book]})
    this.setState({
    title:'',
    author:"",
    isbn:"",
    price:"",
    description:""
  })
  }

  delete=(id)=>{
    
    const FiltredBook=this.state.books.filter(el=>{
   return el.isbn !== id
  })
  this.setState({
  books:FiltredBook
  })
}
   

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              placeholder="please enter the title"
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </label>
          <br/>
          <label>
            Author:
            <input 
              type="email" 
              name="author" 
              placeholder="please enter the author"
              onChange={this.handleInputChange}
              value={this.state.author}
            />
          </label>
          <br/>
          <label>
            Price:
            <input 
              type="number" 
              name="price" 
              placeholder="please enter the price"
              onChange={this.handleInputChange}
              value={this.state.price}
            />
          </label>
          <br/>
          <label>
            ISBN:
            <input 
              type="number" 
              name="isbn" 
              placeholder="please enter the isbn"
              onChange={this.handleInputChange}
              value={this.state.isbn}
            />
          </label>
          <br/>
          <label>
            Description:
            <textarea 
              placeholder="please enter the description"
              name="description"
              onChange={this.handleInputChange}
              value={this.state.description}
            ></textarea>
          </label>
          <br/>
          <input type="submit"/>
        </form>
        <BooksList books={this.state.books} delete={this.delete} id={this.state.books.isbn}/>
        {/* {console.log(this.state.books[0].isbn)} */}
      </div>
    );
  }
}

export default App;
