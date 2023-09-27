import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fc_increment,fc_decrement} from '../../actions'
export class Home extends Component {
    constructor(props) {
        super(props)
 
    }
     
    render() {
        return (
            <div>
                <button onClick={()=>this.props.Decrement()}>Decrement</button>
                <button onClick={()=>this.props.Increment()}>Increment</button>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
      Increment: () => dispatch(fc_increment()),
      Decrement: () => dispatch(fc_decrement())
      
    };
  }
export default connect(null,mapDispatchToProps)(Home)
