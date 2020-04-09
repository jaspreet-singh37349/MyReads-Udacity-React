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
    console.log(event.target.value);
    
    
    BooksAPI.search(event.target.value,20).then(res=>{
      	console.log(res)
    	//this.setState({data:res});
      	if(!Array.isArray(res))
          res=[]
      		
      	var new_res = res.map(item => {
          let same_book = this.state.data.find(eachitem => eachitem.id === item.id);
          if (same_book) item.shelf = same_book.shelf;
          return item;
        });
      
          //console.log(res);
        this.setState({searchData:new_res});
         
    }).catch(err=>{
      //console.log("error");
      this.setState({searchData:[]});
    })
    
  }

ChangeBook = (Book,shelf)=>{
  BooksAPI.update(Book, shelf).then(() => {
            Book.shelf = shelf;
            this.myBooks()
  });
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
