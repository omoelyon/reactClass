import React, {Component} from 'react'
  class DeleteStudents extends Component{
    constructor(){
      super();
      this.state = {id:null}
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (e)=>{
      e.preventDefault()
      this.props.deleteStudents(e.target.id.value)
    }
    render(){
      return(
        <div>
          <h5>Delete Student</h5>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="id">ID</label>
              <input type="number" id="id" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )
    }
  }
export default DeleteStudents
