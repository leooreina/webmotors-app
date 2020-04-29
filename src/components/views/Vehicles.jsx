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
                        <div className="title-page">VEÍCULOS ENCONTRADOS: </div>
                        {
                            this.state.vehicles.map((vehicle, index) => (
                                <div key={index} className="vehicle-props">
                                    <div>
                                        <img 
                                            className="vehicle-image"
                                            src={vehicle.Image}
                                            alt="imagem do veículo"
                                        />
                                    </div>
                                    <br/><br/>
                                    <div className="prop-title">
                                        <span>Marca:</span>
                                        <span className="prop-type" >{vehicle.Make}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Modelo: </span>
                                        <span className="prop-type" >{vehicle.Model}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Versão: </span>
                                        <span className="prop-type" >{vehicle.Version}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Km: </span>
                                        <span className="prop-type" >{vehicle.KM}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Preço: </span>
                                        <span className="prop-type" >{`R$${vehicle.Price}`}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Ano: </span>
                                        <span className="prop-type" >{vehicle.YearModel}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Ano de Fabricação: </span>
                                        <span className="prop-type" >{vehicle.YearFab}</span>
                                    </div>
                                    <div className="prop-title">
                                        <span>Cor: </span>
                                        <span className="prop-type" >{vehicle.Color}</span>
                                    </div>
                                    <hr style={{width: "80%"}} />
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