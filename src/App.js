import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import MainPage from './MainPage'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    data:[],
    query:'',
    searchData:[]
  }

componentDidMount(){
  this.myBooks()
}

myBooks = ()=>{
  BooksAPI.getAll().then(res=>{
    this.setState({data:res})
    console.log(res)
    //console.log(this.state.read) 
  })
}

handleSearchChange = (event)=>{
    //console.log(event.target.value);
    let query = event.target.value
    
    if(query.length!==0)
    {
    BooksAPI.search(query,20).then(res=>{
      	
    	//this.setState({data:res});
      	if(!Array.isArray(res))
        { 
          res.query = query;
          console.log(res)
          this.setState({searchData:res});  
        }
      	else
        {
        
          var new_res = res.map(item => {
            let same_book = this.state.data.find(eachitem => eachitem.id === item.id);
            if (same_book) item.shelf = same_book.shelf;
            return item;
          });
      
          //console.log(res);
        	this.setState({searchData:new_res});
          //console.log("yes")
        
        
        }
         
    }).catch(err=>{
      console.log(err);
    })
    }
  	else
    {
      this.setState({searchData:[]});
    }
  }

ChangeBook = (Book,shelf)=>{
  var oldShelf = Book.shelf
  if(Book.shelf!==shelf)
  {
    BooksAPI.update(Book, shelf).then(response => {
      	if(oldShelf!==undefined)
    	  alert("Moved "+Book.title+" from "+oldShelf+" to "+shelf)
      	else
          alert("Added "+Book.title+" to your "+shelf+" List")
    });
    
    Book.shelf = shelf;
    this.setState({
      data: this.state.data.filter(book => book.id !== Book.id).concat(Book)
    });
  }
}

clear = ()=>{
  this.setState({searchData:[]})
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>
      		<MainPage ChangeBook={this.ChangeBook} data={this.state.data}/>
  		}/>
        <Route exact path="/search" render={()=>
      		<Search clear={this.clear} ChangeBook={this.ChangeBook} handleSearchChange={this.handleSearchChange} searchData={this.state.searchData}/>
  		}/>
      </div>
    )
  }
}

export default BooksApp
