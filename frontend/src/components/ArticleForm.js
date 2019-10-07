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
        this.handleSubmit = this.handleSubmit.bind(this);
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
      
    
      handleSubmit(event) {
        event.preventDefault();

        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        console.log(this.state)
        fetch(process.env.REACT_APP_API_URL, {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: headers
        });
        event.target.reset();
      }
    
      render() {
        return (
            <div className='col'>
          <form onSubmit={this.handleSubmit}>
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
              <label htmlFor="exampleFormControlTextarea1">Lat name</label>
              <input className="form-control" type="text" id='lastName' name='lastName' onChange={this.handleChange} required/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add Article</button>
          </form>
          </div>
        );
      }

}

export default ArticleForm;