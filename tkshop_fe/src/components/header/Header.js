import React, { Component } from 'react'
import {connect} from  'react-redux'
export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { 
                
        }
    }
    componentDidMount(){
        console.log(this.props.count)
    }
    render() {
        const {count} = this.props.count;
        if(count>0){
            return (
                <div className="header">
                    <h2>Count : {count}</h2>
                </div>
            )
        }
        return (
            <div className="header">
                <h2>Count :0</h2>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { count: state.dataApp };
};
export default connect(mapStateToProps,null)(Header);
