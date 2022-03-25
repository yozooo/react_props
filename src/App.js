
import React from 'react';
import './App.css';
import AppClass from './AppClass';
import UserFun from './UserFun';
import ChildFun from './ChildFun';


const users = [
  {name: 'Jozo' , age: 30},
  {name: 'Anka' , age: 25},
  {name: 'Mika' , age: 40}
];

export default class App extends React.Component {
  
  render ()
  {
    return (
      <>
      <p>blabla app</p> 
      <AppClass name={users[0].name} age={users[0].age} />
      <UserFun name={users[1].name} age={users[1].age}/>
      <ChildFun name={users[2].name} age={users[2].age}>
        Bavim se web developmentom.
      </ChildFun>
      </>
    );

  }
    
}


