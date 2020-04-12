import React,{Component} from 'react'
import List from './List'

class Shelf extends Component{
  render()
  {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.type}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          <List ChangeBook={this.props.ChangeBook} data={this.props.data}/>
          </ol>
        </div>
      </div>  
    )
  }
}

export default Shelf;