import React, {Component} from 'react'
import BookType from './BookType'

class List extends Component{
  
  
  
  render(){
    return(
      
      <ol className="books-grid">
        {this.props.data.map((item,key)=>{
                    return (
                      <li key={key}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks.thumbnail})` }}></div>
                              <BookType ChangeBook={this.props.ChangeBook} list={item}/>
                            </div>
                            <div className="book-title">{item.title}</div>
                              {item.authors.map((author,index)=>{
                                  return (
                                      <div key={index} className="book-authors">{author}</div>
                                  )
                              })}
                          </div>
                       </li>
                    )
                })}
	</ol>
	
    )
  }
}

export default List