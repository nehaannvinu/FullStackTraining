import React from 'react'


class ClassComponent extends React.Component {
    state = {
        time: new Date().toString()
    };

    componentDidMount(){
        console.log("Component Mounted")
        this.interval = setInterval(this.showDate,1000);
    }

    componentWillUnmount(){
        console.log("Component unmounted");
        clearInterval(this.interval)
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    showDate = () => {
        this.setState({ time: new Date().toString()})
    };

    render(){
        return(
            <div>
                <h3>Time</h3>
                <div>{this.state.time}</div>
            </div>
        )
    }

}

export default ClassComponent;