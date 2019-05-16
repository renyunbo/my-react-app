import React from 'react';


export default class Detail extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
                <a href='#/'>回到home</a>
            </div>
        )
    }
}