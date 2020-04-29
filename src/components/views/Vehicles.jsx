import React, { Component } from 'react';
import '../styles/Vehicles.scss';

export default class Vehicles extends Component {
    state = {
        vehicles: [],
    }

    filters = {
        make: this.props.make,
        model: this.props.model,
        version: this.props.version,
        year: this.props.year,
        price: this.props.price
    }

    constructor(props) {
        super(props)
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
                    <div className="vehicles-page">
                        <div className="title-page">Veículos encontrados: </div>
                        {
                            this.state.vehicles.map(vehicle => (
                                <div className="vehicle-props">
                                    <div>
                                        <img 
                                            className="vehicle-image"
                                            src={vehicle.Image}
                                            alt="imagem do veículo"
                                        />
                                    </div>
                                    <br/><br/>
                                    <div>Marca: {vehicle.Make}</div>
                                    <div>Modelo: {vehicle.Model}</div>
                                    <div>Versão: {vehicle.Version}</div>
                                    <div>Km: {vehicle.KM}</div>
                                    <div>Preço: {vehicle.Price}</div>
                                    <div>Ano: {vehicle.YearModel}</div>
                                    <div>Ano de Fabricação: {vehicle.YearFab}</div>
                                    <div>Cor: {vehicle.Color}</div>
                                </div>
                            ))
                        }
                    </div>
                    : null
                }
            </div>
            : null
        )
    }
}