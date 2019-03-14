import React, {Component} from 'react'
class StudentsGrades extends Component{
  render(){
    const students = this.props.student.map((student, key)=>{
      return student.score > 50 ? (
        <tr key ={key}>
          <td>Name: {student.name}</td>
          <td>Score: {student.score}PASSED</td>
        </tr>
      ): (
        <tr key ={key}>
          <td>Name: {student.name}</td>
          <td>Score: {student.score}FAILED</td>
        </tr>
    )
    })
    return(
        <div>
          <h1>Grades</h1>
          <table>
            <tbody>
              {students}
            </tbody>
          </table>
        </div>
      )
    }
  }
export default StudentsGrades
