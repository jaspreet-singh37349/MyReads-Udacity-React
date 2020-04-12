import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component{


  render(){
    
    const shelves = {
    currentlyReading: ['Currently Reading', 'currentlyReading'],
    wantToRead: ['Want to Read', 'wantToRead'],
    read: ['Read', 'read']
    }
    
    return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
      			{Object.keys(shelves).map((key,indx)=>{
                  return (
                    <Shelf key={indx} type={shelves[key][0]} ChangeBook={this.props.ChangeBook} data={this.props.data.filter(data=>data.shelf===shelves[key][1])}/>
            	 )})}
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