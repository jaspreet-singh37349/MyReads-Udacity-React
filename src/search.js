import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import List from './List'


class Search extends Component{
  
  componentWillUnmount() {
		this.props.clear();
	}
  
  render(){
    
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={this.props.handleSearchChange} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				<List ChangeBook={this.props.ChangeBook} data={this.props.searchData}/>
			  </ol>
            </div>
        </div>
        
      )
  }
}

export default Search