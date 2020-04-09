import React, {Component} from 'react'

class BookType extends Component{

  Change = (e)=>{
    this.props.ChangeBook(this.props.list,e.target.value)
    
  }

  typee = (type)=>{
    if(type)
      return type
    return "None"
  }
  
  render(){
    
    return(
		<div className="book-shelf-changer">
          <select value={this.typee(this.props.list.shelf)} onChange={this.Change}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="None">None</option>
    	  </select>
    </div>
    )
  }
}

export default BookType