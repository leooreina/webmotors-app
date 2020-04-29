import React, { Component } from 'react';

export default class Vehicles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: []
        }
        this.buildVehiclesPage = this.buildVehiclesPage.bind(this)
    }

    componentDidMount() {
        this.buildVehiclesPage();
    }

    buildVehiclesPage() {
        fetch('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1')
            .then((res) => res.json()
                .then(data => this.setState({ vehicles: data }))
            )
            .catch((error) => console.log(error))
    }
    
    render() {
        return (
            this.props.mostrar ?
            <div>
                {
                    this.state.vehicles ? 
                    <div>
                        Mostra Veículos
                    </div>
                    : null
                }
            </div>
            : null
        )
    }
}