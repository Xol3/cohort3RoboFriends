import React, {Component} from 'react';
import './MyComponent.css';

class MyComponent extends Component{
  render(){ // this reander my new component
    return(
      //the return should only return one item
      <div className='f2 tc'>
        <h1>OHH YEAHH MR.pancho, WEEEPPAAA</h1>
        <p>YO MAESTRO EL UNICO en tu vida </p>
        //curly tells that we are using js . and calling props
        <p>{this.props.cumbia}</p>
      </div>
    )
  }
}

export default MyComponent;
