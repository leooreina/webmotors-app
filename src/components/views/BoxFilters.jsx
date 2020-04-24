import React, { Component } from 'react'
import '../styles/BoxFilter.scss';
import { tabs } from '../data/local/tabs';
import { NavLink } from 'react-router-dom';

export default class BoxFilters extends Component {

    render() {
        return (
            <div>
                <div className="tabs">
                    {
                        tabs.map(tabs => (
                            <NavLink to={tabs.url}>
                                <div>{tabs.icon}</div>
                                <div>{tabs.name}</div>
                            </NavLink>
                        ))
                    }

                    <button className="vender-meu-carro">Vender meu carro</button>
                </div>
                <div className="box">

                    <div className="first-row">
                        <form>
                            <label htmlFor="novos">
                                Novos
                                <input 
                                    type="checkbox"
                                    name="novos"
                                />
                            </label>
                            <label htmlFor="usados">
                                Usados
                                <input 
                                    type="checkbox"
                                    name="usados"
                                />
                            </label>
                        </form>
                    </div>

                    <div className="row">
                        <div>
                            <form>
                                <input type="text" name="localizacao" placeholder="Onde:"/>
                                <span>Raio: </span>
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
                            <form>
                                <span>Marca: </span>
                                <select name="marca">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                            <form>
                                <span>Modelo: </span>
                                <select name="modelo">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-form">
                            <form>
                                <span>Ano Desejado</span>
                                <select name="ano">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                            <form>
                                <span>Faixa de preço</span>
                                <select name="preço">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                        <div>
                            <form>
                                <span>Versão: </span>
                                <select name="versao">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <button className="dropbtn">Busca avançada <span>:icone</span></button>
                            <div id="options-advanced">
                                <div>
                                    <label htmlFor="opcao1">
                                        opcao1
                                        <input type="checkbox" name="opcao1" />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="opcao2">
                                        opcao2
                                        <input type="checkbox" name="opcao2" />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="opcao3">
                                        opcao3
                                        <input type="checkbox" name="opcao3" />
                                    </label>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div>Limpar Filtros</div>
                            <div>
                                <button>VER OFERTAS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}