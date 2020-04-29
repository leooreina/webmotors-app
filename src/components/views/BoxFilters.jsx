import React, { Component } from 'react'
import '../styles/BoxFilter.scss';
import { tabs } from '../data/local/tabs';
import '../../assets/css/checkbox.css';
import '../../assets/css/select.css';
import Vehicles from '../views/Vehicles';

export default class BoxFilters extends Component {

    constructor(props) {
        super(props)

        this.state = {
            novos: true,
            usados: false,
            opcao1: false,
            opcao2: false,
            opcao3: false,
            opcao4: false,
            localizacao: '',
            isVehicleComponentOpened: false,
            isOpened: false,
            selectedTab: 'CARROS',
            make: [{ ID: 'Todos', Name: 'Todos'}],
            model: [{ ID: 'Todos', Name: 'Todos' }],
            version: [{ ID: 'Todas', Name: 'Todas' }]
        }

        this.getOptionsMake = this.getOptionsMake.bind(this);
        this.handleSelectedMake = this.handleSelectedMake.bind(this);
        this.handleSelectedModel = this.handleSelectedModel.bind(this);
        this.cleanFilter = this.cleanFilter.bind(this);
        this.handleInputCheckboxChange = this.handleInputCheckboxChange.bind(this);
        this.handleClearInputText = this.handleClearInputText.bind(this);
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleHideShowButton = this.handleHideShowButton.bind(this);
        this.handleSelectedTab = this.handleSelectedTab.bind(this);
        this.handleVehicleComponent = this.handleVehicleComponent.bind(this);
    }

    componentDidMount() {
        this.getOptionsMake();
        this.handleSelectedMake(this.props.initialMakeOption);
        this.handleSelectedModel(this.props.initialMakeOption);
    }

    handleInputCheckboxChange(event) {
        const { name, checked } = event.target;
        if (name === 'novos') this.setState({ novos: checked })
        if (name === 'usados') this.setState({ usados: checked })
        if (name === 'opcao1') this.setState({ opcao1: checked })
        if (name === 'opcao2') this.setState({ opcao2: checked })
        if (name === 'opcao3') this.setState({ opcao3: checked })
        if (name === 'opcao4') this.setState({ opcao4: checked })
    }

    handleInputTextChange(event) {
        const { value } = event.target;
        this.setState({
            localizacao: value
        })
    }

    handleClearInputText() {
        const localizacao = document.getElementsByName('localizacao');
        if (localizacao.value !== '') {
            this.setState({
                localizacao: ''
            })
        }
    }

    handleHideShowButton() {
        if (this.state.isOpened) this.setState({ isOpened: false}) 
        else this.setState({ isOpened: true})
    }

    handleSelectedTab() {
        const { selectedTab } = this.state;
        if (selectedTab === 'CARROS') 
            this.setState({ selectedTab: 'MOTOS' })
        if (selectedTab === 'MOTOS') 
            this.setState({ selectedTab: 'CARROS'})
    }

    cleanFilter() {
        this.getOptionsMake();
        this.setState({
            model: [{ ID: 'Todos', Name: 'Todos' }],
            version: [{ ID: 'Todas', Name: 'Todas' }]
        })
    }

    handleSelectedModel(modelId) {
        fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${modelId}`)
            .then((res) => res.json()
                .then(data => this.setState({ version: data }))
            )
            .catch((error) => console.log(error))
    }   

    handleSelectedMake(makeId) {
        fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${makeId}`)
            .then((res) => res.json()
                .then(data => this.setState({ model: data }))
            )
            .catch((error) => console.log(error))
    }

    handleVehicleComponent() {
        this.setState({
            isVehicleComponentOpened: true
        })
    }

    getOptionsMake() {
        fetch('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make')
            .then((res) => res.json()
                .then(data => this.setState({ make: data }))
            )
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="tabs">
                        {
                            tabs.map((tab, index) => (
                                <div 
                                    className={
                                        this.state.selectedTab === tab.name
                                            ? "tab tab-selected"
                                            : "tab"
                                    }
                                    key={index}
                                    onClick={this.handleSelectedTab}
                                    name={tab.name}   
                                >
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
                                id="novos_id"
                                name="novos"
                                className="css-checkbox"
                                type="checkbox"
                                checked={this.state.novos}
                                onChange={this.handleInputCheckboxChange}
                            />
                            <label id="novos" htmlFor="novos_id" className="css-label lite-red-check">Novos</label>

                            <input 
                                id="usados_id"
                                htmlFor="usados"
                                className="css-checkbox"
                                type="checkbox"
                                name="usados"
                                checked={this.state.usados}
                                onChange={this.handleInputCheckboxChange}
                            />
                            <label id="usados" htmlFor="usados_id" className="css-label lite-red-check">Usados</label>
                        </form>
                    </div>

                    <div className="row">
                        <div className="group-form-localizacao">
                            <form className="form-input">
                                <i className="fas fa-map-marker-alt"></i>
                                <label className="label" htmlFor="localizacao">Onde: </label>
                                <input 
                                    className="localizacao"
                                    type="text"
                                    name="localizacao"
                                    value={this.state.localizacao}
                                    onChange={this.handleInputTextChange}
                                />
                                <i 
                                    className="fas fa-times-circle"
                                    onClick={this.handleClearInputText}
                                ></i>
                            </form>
                            <form className="forms">
                                <label className="label" htmlFor="raio">Raio: </label>
                                <select className="select-css" name="raio" defaultValue="100">
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
                                <select 
                                    className="select-css"
                                    name="marca"
                                    onChange={(e) => this.handleSelectedMake(e.target.value)}
                                >
                                    {
                                        this.state.make ? this.state.make.map((make, index) => (
                                            <option 
                                                key={index}
                                                value={make.ID}
                                            >
                                                {make.Name}
                                            </option>
                                        )) : null
                                    }
                                </select>
                            </form>
                            <form className="forms">
                                <label className="label" htmlFor="modelo">Modelo: </label >
                                <select 
                                    className="select-css"
                                    name="modelo"
                                    onChange={(e) => this.handleSelectedModel(e.target.value)}
                                >
                                    {
                                        this.state.model ? this.state.model.map((model, index) => (
                                            <option 
                                                key={index}
                                                value={model.ID}
                                            >
                                                {model.Name}
                                            </option>
                                        )) : null
                                    }
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-form">
                            <form className="forms">
                                <label className="label" htmlFor="ano">Ano Desejado: </label>
                                <select className="select-css" name="ano">
                                    <option value="2020">2020</option>
                                    <option value=""></option>
                                </select>
                            </form>
                            <form className="forms">
                                <label className="label" htmlFor="preco">Faixa de preço: </label>
                                <select className="select-css" name="preco">
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </form>
                        </div>
                        <div>
                            <form className="forms">
                                <label className="label" htmlFor="versao">Versão: </label>
                                <select className="select-css" name="versao">
                                    {
                                        this.state.version ? this.state.version.map((version, index) => (
                                            <option 
                                                key={index}
                                                value={version.ID}
                                            >
                                                {version.Name}
                                            </option>
                                        )) : null
                                    }
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <button className="busca-avancada">
                                <i className={
                                    this.state.isOpened 
                                    ? 'fas fa-angle-down busca-icone'
                                    :'fas fa-angle-right busca-icone' 
                                }></i>
                                <span 
                                    name="avancadas"
                                    className="busca-avancada-label"
                                    onClick={this.handleHideShowButton}
                                >Busca avançada</span>
                            </button>
                            {
                            this.state.isOpened ? 
                                <div className="opcoes-avancadas-box">
                                    <div className="opcoes-avancadas">
                                        <input
                                            id="opcao1_id" 
                                            className="css-checkbox"
                                            type="checkbox"
                                            name="opcao1"
                                            checked={this.state.opcao1}
                                            onChange={this.handleInputCheckboxChange}
                                        />
                                        <label id="opcao1" htmlFor="opcao1_id" className="css-label lite-red-check">4 Portas</label>
                                    </div>

                                    <div className="opcoes-avancadas">
                                        <input
                                            id="opcao2_id" 
                                            className="css-checkbox"
                                            type="checkbox"
                                            name="opcao2"
                                            checked={this.state.opcao2}
                                            onChange={this.handleInputCheckboxChange}
                                        />
                                        <label id="opcao2" htmlFor="opcao2_id" className="css-label lite-red-check">2 Portas</label>
                                    </div>

                                    <div className="opcoes-avancadas">
                                        <input
                                            id="opcao3_id"
                                            className="css-checkbox"
                                            type="checkbox"
                                            name="opcao3"
                                            checked={this.state.opcao3}
                                            onChange={this.handleInputCheckboxChange}
                                        />
                                        <label id="opcao3" htmlFor="opcao3_id" className="css-label lite-red-check">Com ar condicionado</label>
                                    </div>

                                    <div className="opcoes-avancadas">
                                        <input
                                            id="opcao4_id" 
                                            className="css-checkbox"
                                            type="checkbox"
                                            name="opcao4"
                                            checked={this.state.opcao4}
                                            onChange={this.handleInputCheckboxChange}
                                        />
                                        <label id="opcao4" htmlFor="opcao4_id" className="css-label lite-red-check">Sem ar condicionado</label>
                                    </div>
                                
                                </div>
                            : null
                            }
                        </div>
                        <div>
                            <div>
                                <span 
                                    className="botao-limpar-filtros"
                                    onClick={this.cleanFilter}
                                >Limpar Filtros</span>
                                <button 
                                    className="botao-ofertas"
                                    onClick={this.handleVehicleComponent}
                                >VER OFERTAS</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Vehicles mostrar={this.state.isVehicleComponentOpened}/>
            </div>
        )
    }
}