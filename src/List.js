import React, {Component} from 'react'
import BookType from './BookType'

class List extends Component{
  
  
  
  render(){
    //console.log(this.props.data)
    return(
      
      
      <ol className="books-grid">
        {!this.props.data.error ? this.props.data.map((item,key)=>{
                    return (
                      <li key={key}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks && item.imageLinks.thumbnail})` }}></div>
                              <BookType ChangeBook={this.props.ChangeBook} list={item}/>
                            </div>
                            <div className="book-title">{item.title}</div>
                              {item.authors ? item.authors.map((author,index)=>{
                                  return (
                                      <div key={index} className="book-authors">{author}</div>
                                  )
                              }): <div></div>
                            }
                          </div>
                       </li>
                    )
                }) : 
				<div>
					<b>Sorry no results found for <span style={{color:"red"}}>{this.props.data.query}</span></b>
				</div>
}
	</ol>
	
    )
  }
}

export default List