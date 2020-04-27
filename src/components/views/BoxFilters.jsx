import React, { Component } from 'react'
import '../styles/BoxFilter.scss';
import { tabs } from '../data/local/tabs';
import '../../assets/css/checkbox.css';

export default class BoxFilters extends Component {

    state = {
        initialRequests: [
            'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make',
            'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=1',
            'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=1',
            'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1'
        ],
        dataAPI: []
    }

    componentDidMount() {
        this.getRequest();
    }

    getRequest() {
        this.state.initialRequests.map(request => {
            fetch(request)
                .then((res) => {
                    if (res.ok) {
                        res.json().then(response => this.state.dataAPI.push(response));
                    }
                    else console.log('Bad request, please try again.');
                })
                .catch(error => console.log(error));
            }
        )
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="tabs">
                        {
                            tabs.map(tab => (
                                <div className="tab">
                                    <i className={tab.icon}></i>
                                    <div className="comprar-tab">
                                        <div className="comprar">COMPRAR</div>
                                        <div className="tab-name">{tab.name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="botao-vender">
                        <button className="vender-meu-carro">Vender meu carro</button>
                    </div>
                </div>
                <div className="box">

                    <div className="first-row">
                        <form className="form-first-row">
                            <input
                                htmlFor="novos" 
                                className="css-checkbox"
                                type="checkbox"
                                name="novos"
                            />
                            <label id="novos" htmlFor="novos" className="css-label lite-red-check">Novos</label>

                            <input 
                                htmlFor="usados"
                                className="css-checkbox"
                                type="checkbox"
                                name="usados"
                            />
                            <label id="usados" htmlFor="usados" className="css-label lite-red-check">Usados</label>
                        </form>
                    </div>

                    <div className="row">
                        <div className="group-form-localizacao">
                            <form className="form-input">
                                <i className="fas fa-map-marker-alt"></i>
                                <label className="label" htmlFor="localizacao">Onde: </label>
                                <input className="localizacao" type="text" name="localizacao"/>
                                <i className="fas fa-times-circle"></i>
                            </form>
                            <form className="forms">
                                <label className="label" htmlFor="raio">Raio: </label>
                                <select name="raio" defaultValue="100">
                                    <option value="10">10km</option>
                                    <option value="20">20km</option>
                                    <option value="30">30km</option>
                                    <option value="40">40km</option>
                                    <option value="50">50km</option>
                                    <option value="100">100km</option>
                                </select>
                            </form>
                        </div>
                        <div className="group-form">
                            <form className="forms">
                                <label className="label" htmlFor="marca">Marca: </label>
                                <select name="marca">
                                    {
                                        this.state.dataAPI ? this.state.dataAPI.map(make => (
                                            <option value={make.ID}>{make.Name}</option>
                                        )) : null
                                    }
                                </select>
                            </form>
                            <form className="forms">
                                <label className="label" htmlFor="modelo">Modelo: </label >
                                <select name="modelo">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-form">
                            <form className="forms">
                                <label className="label" htmlFor="ano">Ano Desejado: </label>
                                <select name="ano">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                            <form className="forms">
                                <label className="label" htmlFor="preco">Faixa de preço: </label>
                                <select name="preco">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                        <div>
                            <form className="forms">
                                <label className="label" htmlFor="versao">Versão: </label>
                                <select name="versao">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <button className="busca-avancada">
                                <i className="fas fa-angle-right busca-icone"></i>
                                <span className="busca-avancada-label">Busca avançada</span>
                            </button>
                            <div className="opcoes-avancadas-box">
                                <div className="opcoes-avancadas">
                                    <input
                                        htmlFor="opcao1" 
                                        className="css-checkbox"
                                        type="checkbox"
                                        name="opcao1"
                                    />
                                    <label id="opcao1" htmlFor="opcao1" className="css-label lite-red-check">4 Portas</label>
                                </div>

                                <div className="opcoes-avancadas">
                                    <input
                                        htmlFor="opcao2" 
                                        className="css-checkbox"
                                        type="checkbox"
                                        name="opcao2"
                                    />
                                    <label id="opcao2" htmlFor="opcao2" className="css-label lite-red-check">2 Portas</label>
                                </div>

                                <div className="opcoes-avancadas">
                                    <input
                                        htmlFor="opcao3" 
                                        className="css-checkbox"
                                        type="checkbox"
                                        name="opcao3"
                                    />
                                    <label id="opcao3" htmlFor="opcao3" className="css-label lite-red-check">Com ar condicionado</label>
                                </div>

                                <div className="opcoes-avancadas">
                                    <input
                                        htmlFor="opcao3" 
                                        className="css-checkbox"
                                        type="checkbox"
                                        name="opcao3"
                                    />
                                    <label id="opcao3" htmlFor="opcao3" className="css-label lite-red-check">Sem ar condicionado</label>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="botao-limpar-filtros">Limpar Filtros</span>
                                <button className="botao-ofertas">VER OFERTAS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}