import {Component} from 'react';
import Counter from "../containers/CounterContainer";
import React from "react";

class CounterGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let couterItems = [];
        for (let i = 0; i < this.props.amount; i++) {
            couterItems.push(<Counter key={i} index={i}/>);
        }
        return <div>{couterItems}</div>;
    }
}

export default CounterGroup;