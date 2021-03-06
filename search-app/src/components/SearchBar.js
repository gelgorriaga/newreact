import React, { Component } from "react";

export class SearchBar extends Component {
  state ={
      term:''
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
            <div className='ui field'>
                <label htmlFor="">Image Search</label>

            <input 
            type="text" 
            onChange={e =>this.setState({term: e.target.value})} 
            name='term' 
            value={this.state.term} 
            />
            </div>
         
        </form>
      </div>
    );
  }
}

export default SearchBar;
