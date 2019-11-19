import React from 'react';

import Realignment from './components/Realignment';
import PreInformation from './components/PreInformation';

import { getAvailableOutlets, getHistory } from './queries';

import './styles/index.css'
import RealignmentImg from './assets/ic_realignment.svg';
import PreInformationImg from './assets/ic_preinformation.svg';

import axios from 'axios';

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            availableOutlets: null,
            history: null,
        }
    }

    componentDidMount() {
        const availableOutlets = getAvailableOutlets()

        this.setState({ availableOutlets: availableOutlets })
    }

    getHistory = () => axios.get('http://127.0.0.1:8000/api/rewrite-routes/')
        .then(res => this.setState({
            history: res.data
        }))

    render() {
        return (
            <div>
                <section>
                    <ul id="tabsJustified" className="nav nav-tabs nav-bg--biponon">
                        <li
                            className="nav-item nav-item--biponon"
                            onClick={() =>
                                this.setState({
                                    availableOutlets: getAvailableOutlets()
                                })
                            }
                        >
                            <a
                                href=""
                                data-target="#পুণঃনির্ধারণ"
                                data-toggle="tab"
                                className="nav-link nav-link--biponon small text-uppercase active"
                            >
                                <img className="nav-link-icon--biponon" src={RealignmentImg} alt="পুণঃনির্ধারণ" />   পুণঃনির্ধারণ
                                </a>
                        </li>
                        <li
                            className="nav-item nav-item--biponon"
                            onClick={() => this.getHistory()}
                        >
                            <a
                                href=""
                                data-target="#পূর্বের তথ্য"
                                data-toggle="tab"
                                className="nav-link small nav-link--biponon text-uppercase"
                            >
                                <img className="nav-link-icon--biponon" src={PreInformationImg} alt="পুণঃনির্ধারণ" />   পূর্বের তথ্য
                                </a>
                        </li>
                    </ul>


                    <div id="tabsJustifiedContent" className="tab-content tab-content--biponon">
                        <Realignment availableOutlets={this.state.availableOutlets} />
                        <PreInformation history={this.state.history} getHistory={this.getHistory} />
                    </div>

                </section>
            </div>
        );
    }
}


