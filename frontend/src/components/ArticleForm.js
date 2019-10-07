import React from 'react';


class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            author: {
                firstName: '',
                lastName:''
            }
};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
          event.preventDefault();
          event.persist();
          if(event.target.name === 'firstName' || event.target.name === 'lastName'){
              this.setState(prevState => {
                  let author = Object.assign({}, prevState.author);  
                  author[event.target.name] = event.target.value;          
              return { author };                                 
              })
          }
          else {
              this.setState({[event.target.name]: event.target.value});
          }
      }
      
      render() {
        return (
            <div className='col'>
          <form onSubmit={(event) => this.props.callbackFromParent(event, this.state)}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" type="text" id='title' name='title' onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Content</label>
              <textarea className="form-control" rows="3"  id='content' name='content' onChange={this.handleChange} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">First Name</label>
              <input className="form-control" type="text" id='firstName' name='firstName' onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Last name</label>
              <input className="form-control" type="text" id='lastName' name='lastName' onChange={this.handleChange} required/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add Article</button>
          </form>
          </div>
        );
      }

}

export default ArticleForm;