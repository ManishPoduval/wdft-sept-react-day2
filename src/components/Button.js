import React from "react";
class Button extends React.Component {
    //initializing a state
    state = {
        count: this.props.start,
        // name: ['Jorge', 'Manish', 'Marta']
    }
    handleClick = () => {
        //console.log(this)
        console.log('Clicked')
        if (this.props.isDislike) {
            this.setState({
                count: this.state.count - 1,
            })
        }
        else {
            this.setState({
                count: this.state.count + 1,
            })
        }
    }
    render =() => {
        return <div>
            {/* <p>{this.state.name[Math.floor(Math.random() * 3)]}</p> */}
            <button onClick={this.handleClick}>{this.state.count} Like</button>
        </div>
    }
}
export default Button