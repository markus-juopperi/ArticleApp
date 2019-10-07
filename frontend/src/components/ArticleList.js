import React from 'react';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      data: null,
      status: "initial"
    };
  }

  removeItem(item){
    fetch(process.env.REACT_APP_API_URL + item.id, {
      method: 'delete'
    })
    .then(
      this.setState({data: this.state.data.filter(function(data) { 
        return data !== item
    })})
    )
  }

  fetchDataFromApi(){
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }


  componentDidMount() {
    this.fetchDataFromApi();
  }
  render() {
    if(this.state.data != null){
      console.log(this.state.data);
      this.items = [];
      const items = this.state.data.map((item, key) =>
      <div key={item.id} className="row">
        <div className="col">{item.title}</div>
        <div className="col">{item.author.firstName} {item.author.lastName}</div>
        <div className="col">
        <button type="button" className="btn btn-primary" onClick={() => this.removeItem(item)}>Remove</button>
        </div>
      </div>);
      return <div className="col">
       {items}
      </div>;
    }
    else return <div>Loading...</div>;
  }
}

export default ArticleList;