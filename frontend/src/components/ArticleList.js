import React from 'react';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    if(this.props.data != null){
      this.items = [];
      const items = this.props.data.map((item, key) =>
      <div key={item.id} className="row">
        <div className="col">{item.title}</div>
        <div className="col">{item.author.firstName} {item.author.lastName}</div>
        <div className="col">
        <button type="button" className="btn btn-primary" onClick={() => this.props.callbackFromParent(item)}>Remove</button>
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