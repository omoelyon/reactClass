import React, {Component} from 'react'
class Artistes extends Component{
render(){
  const artistes = this.props.artistes.map((artistes, key) =>{
    return artistes.age <30 ? (
      <tr key ={key}>
        <td>Name: {artistes.name}</td>
        <td>Age: {artistes.age} Young</td>
      </tr>
    ): (
      <tr key ={key}>
        <td>Name: {artistes.name}</td>
        <td>Score: {artistes.age} Old</td>
      </tr>
  )
  })

  return(
    <div>
    <h1>artistes</h1>
    <table>
      <tbody>
        {artistes}
      </tbody>
    </table>
    </div>
    )
  }
}
export default Artistes
