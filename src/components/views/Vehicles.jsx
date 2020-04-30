import React from 'react';
import '../styles/Vehicles.scss';

export const Vehicles = (props) => {
    return (
        <div>
            <div className="vehicles-page">
                <div className="title-page">VEÍCULOS ENCONTRADOS: </div>
                {
                    props.vehiclesFiltered && props.vehiclesFiltered.map((vehicle, index) => (
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
                                <span className="prop-type" >{`R$ ${vehicle.Price}`}</span>
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
                {
                    props.vehiclesFiltered.length === 0 ?
                        <div className="empty-filter">
                            Nenhum veículo encontrado...
                        </div>
                    : null
                }
            </div>
        </div>
    )
}