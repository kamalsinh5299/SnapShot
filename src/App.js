import React from 'react';
import ImageSearch from './images/ImageSearch.js';
import ImageList from './images/ImageList.js';
import ManImageSearch from './images/ManImageSearch';
import './App.css';
const API_KEY="25605016-7c37ea89c48504eef902e9736"

class App extends React.Component {
  state = {
    images:[]
  } 
  handleGetRequest=async(e)=>{
    e.preventDefault()
    const  searchTerm=e.target.elements.searchValue.value
      const url=`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
   const request=await fetch(url)
   const response=await request.json()
   this.setState({images:response.hits})
   }
   Handel=async(name)=>{
    const url=`https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo`
    const request=await fetch(url)
    const response=await request.json()
    this.setState({images:response.hits})
    
   }
  
  render() { 
    return (
    
      <div className='App'>
        <h1 className='heading'>Snap Shot</h1>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        <ManImageSearch Handel={this.Handel}/>
        <ImageList  images={this.state.images} />

      </div>
    );
  }
}
 
export default App;