import React from 'react'

const Teachers = (props)=>{
  const teachers=props.teachers.map((teacher, key)=>{
    return(
      <tr key ={key}>
        <td>Name: {teacher.name}</td>
        <td>Age: {teacher.age}</td>
      </tr>
    )
  })
  return(
    <div>
      <h3>Teachers</h3>
      <table>
        <tbody>
          {teachers}
        </tbody>
      </table>
    </div>
  )
}
export default Teachers
