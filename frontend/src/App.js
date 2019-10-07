import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

removeItem = (item) =>{
    fetch(process.env.REACT_APP_API_URL + item.id, {
      method: 'delete'
    })
    .then(
      this.setState({data: this.state.data.filter(function(data) { 
        return data !== item
    })})
    )
  }

addItem = (event, article) =>{
    event.preventDefault();
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      body: JSON.stringify(article),
      headers: headers
    });
    event.target.reset();
    this.fetchDataFromApi();
  }

  fetchDataFromApi(){
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }

  componentDidMount(){
    this.fetchDataFromApi();
  }

  render(){
    return (
      <div className="App row">
        <ArticleList data={this.state.data} callbackFromParent={this.removeItem}></ArticleList>
        <ArticleForm callbackFromParent={this.addItem}></ArticleForm>
      </div>
    );
  }
}

export default App;
