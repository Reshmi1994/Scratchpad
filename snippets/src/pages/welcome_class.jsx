import React, { Component } from 'react';

class Welcome_Class extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <p>
                
            welcome {this.props.name} 
            
          </p>
         );
    }
}
 
export default Welcome_Class;
