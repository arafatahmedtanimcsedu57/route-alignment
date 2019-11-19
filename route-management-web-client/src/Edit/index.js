import React, { Component } from 'react'
import axios from 'axios'

import EditForm from './components/form'

import './styles/index.css'

export class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            outlet: null
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/rewrite-routes/${this.props.match.params.id}/`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => this.setState({
                outlet: res.data[0]
            }))
    }

    render() {
        return (
            <div className="edit">
                {this.state.outlet ? <EditForm outlet={this.state.outlet} /> : null}
            </div>
        )
    }
}

export default index
