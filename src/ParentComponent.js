import React, {Component} from 'react';
import Student from './Student'
import StudentsGrades from './StudentsGrades'
import NestedComponent from './NestedComponent';
import Teachers from './Teachers';
import Artistes from './Artistes';
import {Row, Col} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ParentComponent extends Component {

    state = {
      student:[
      {'id':1, 'name':'Moyin Akinbolwale', 'score': 52},
      {'id':2, 'name':'Oyekunle Opeyemi', 'score': 92},
      {'id':3, 'name':'Adeferanmi Tolulope', 'score': 32},
      {'id':4, 'name':'John Doe', 'score': 36},
      ],
      teachers:[
      {'name':'Oyekunle Opeyemi', 'age': 52},
      {'name':'Moyin Akinbolwale', 'age': 78},
      {'name':'Adeferanmi Tolulope', 'age': 43},
    ],
    artistes:[
      {'name': 'Lauren Daigle', 'age':28, 'gender':'female'},
      {'name': 'Don Moen', 'age':68, 'gender':'Male'},
      {'name': 'Steffany Gretzinger', 'age':34, 'gender':'female'}
    ]
}
render(){
  const backgroundStyle = {
    backgroundColor: "black",
    color: "#fff",
    fontFamily:"Cursive",
    border:"2px solid red"
  }
  return(
      <div style= {backgroundStyle}>
        <h1>theses are the list of studentd in my class : </h1>
        <NestedComponent studentClass="level 2" studentSchool="UNILAG"/>
        <Row>
          <Col>
            <Student student ={this.state.student}/>
          </Col>
          <Col>
            <Teachers teachers={this.state.teachers} />
          </Col>
          <Col>
            <StudentsGrades student ={this.state.student}/>
          </Col>
        </Row>
        <Artistes artistes ={this.state.artistes}/>
    </div>
  )
}
}
export default ParentComponent
