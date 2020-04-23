import React, { Component } from 'react'
import { tabs } from '../data/local/tabs';

export default class BoxFilters extends Component {
    render() {
        return (
            <div>
                <ul className="tabs">
                    {
                        tabs.map(tab => (
                            <li>
                                <div>{tab.icon}</div>
                                <div>{tab.name}</div>
                            </li>
                        ))
                    }
                </ul>
                <div></div>
            </div>
        )
    }
}