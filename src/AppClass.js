import React from "react";


export default class AppClass extends React.Component {
  
  
    render()
    {
        const {name , age} = this.props;

      return (
        <>
        <p>Hello developer, zovem se {name} i imam {age} godina.</p>
        </>
      );
  
    }
      
  }