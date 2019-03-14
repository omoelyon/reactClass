import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NestedComponent extends Component {
render(){
  const{studentSchool, studentClass }= this.props
  return(
    <div>
      <ul>
        <li>First name : John</li>
        <li>Last name: Doe </li>
        <li> Score: 67</li>
        <li> School: {studentSchool}</li>
        <li> class: {studentClass}</li>
      </ul>
    </div>
  )
}
}
export default NestedComponent
