import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    fetch('http://localhost:8091/api/articles')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }
  render() {
    if(this.state.data != null){
      console.log(this.state.data);
      const items = this.state.data.map((item, key) =>
      <div key={item.id}><h1>{item.title}</h1><h2>{item.author.firstName} {item.author.lastName}</h2>
      </div>);
      return <div>
       {items}
      </div>;
    }
    else return <div>Loading...</div>;
  }
}
export default Article;