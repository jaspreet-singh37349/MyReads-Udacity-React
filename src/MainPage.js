import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import List from './List'

class MainPage extends Component{
  
  state = {
    read:[],
    currRead:[],
    wantToRead:[],
    query:"",
  }


  render(){
    
    return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <List ChangeBook={this.props.ChangeBook} data={this.props.data.filter(data=>data.shelf==='currentlyReading')}/>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <List ChangeBook={this.props.ChangeBook} data={this.props.data.filter(data=>data.shelf==='wantToRead')}/>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <List ChangeBook={this.props.ChangeBook} data={this.props.data.filter(data=>data.shelf==='read')}/>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        
      )
  }
}

  export default MainPage