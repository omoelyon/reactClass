import React, {Component} from 'react'
import AddStudents from './AddStudents'
import DeleteStudents from './DeleteStudents'
import  './Style.css'
class student extends Component{
  state ={
    student:this.props.student
  }
  addStudents = (student)=>{
    let students = [...this.state.student, student]
    this.setState({
      student:students
    })
  }

      deleteStudents = (id)=>{
      let students = this.state.student.filter(student=>parseInt(student.id) !== parseInt(id))
      this.setState({
      student:students
      })
  }
render(){

  console.log(this.props.student)
  const student = this.state.student.map((student, key) =>{
    return(
      <tr key = {key}>
        <td> id :{student.id}</td>
        <td> Name :{student.name}</td>
        <td> Score :{student.score}</td>
      </tr>
    )
  })

  return(
    <div>
    <h1>Students</h1>
    <table className='student-table' >
      <tbody>
        {student}
      </tbody>
    </table>
    <AddStudents addStudents={this.addStudents}/>
    <DeleteStudents deleteStudents= {this.deleteStudents}/>
    </div>
    )
  }
}
export default student
