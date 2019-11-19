import React, { Component } from 'react'

import { cursor } from './../../routePlan'
import axios from 'axios'

import './../styles/form.css'

export class form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_number: '1924252248',
            outlet_number: this.props.outlet.outlet_number,
            outlet_type: this.props.outlet.outlet_type,
            distribution_house_code: this.props.outlet.distribution_house_code,
            distributor_code: this.props.outlet.distributor_code,
            area: this.props.outlet.area,
            day: this.props.outlet.cursor,
            interval: this.props.outlet.interval,
            offset: this.props.outlet.offset
        }
    }

    handleIntervalChange(event) {
        if (parseInt(event.target.value) === 7) {
            this.setState({
                offset: "0"
            })
        }
        this.setState({
            interval: event.target.value
        });
    }

    handleOffsetChange(event) {
        this.setState({
            offset: event.target.value
        })
    }

    handleDayChange(event) {
        this.setState({
            day: event.target.value
        })
    }

    handleSubmit() {
        const data = {
            cursor: this.state.day,
            interval: this.state.interval,
            offset: this.state.offset
        }
        axios.put(`http://127.0.0.1:8000/api/rewrite-routes/${this.props.outlet.id}`, data)
    }

    render() {
        return (
            <div>
                <form className="form-edit--biponon">
                    <div className="select-container">
                        <label>
                            এই আউটলেটটি কি বারে ভিজিট করতে চান?
                        </label>
                        <p className="select-sub-label">বার নির্বাচন করুন</p>
                        <select
                            className="select-day"
                            onChange={(e) => this.handleDayChange(e)}
                        >{
                                cursor.map((item, index) =>
                                    <option value={index} selected={parseInt(this.state.day) == index ? true : false}>{item}</option>
                                )
                            }</select>

                    </div>

                    <div className="check-box-container">
                        <label>
                            আউটলেটটি কতদিন পরপর ভিজিট করতে চান?
                        </label>

                        <div className="check-box-options">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interval"
                                    id="interval1"
                                    value="7"
                                    checked={this.state.interval == "7"}
                                    onChange={(e) => this.handleIntervalChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    for="interval1"
                                >
                                    ৭ দিন
                        </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="interval"
                                    id="interval2"
                                    value="14"
                                    checked={this.state.interval == "14"}
                                    onChange={(e) => this.handleIntervalChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    for="interval2"
                                >
                                    ১৪ দিন
                            </label>
                            </div>
                        </div>
                    </div>

                    {this.state.interval > 7 ?
                        <div className="check-box-container">
                            <label>
                                আউটলেটটি মাসের কোন সপ্তাহে ভিজিট করতে চান?
                        </label>

                            <div className="check-box-options">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="offset"
                                        id="offset1"
                                        value="1"
                                        checked={this.state.offset == "1"}
                                        onChange={(e) => this.handleOffsetChange(e)}
                                    />
                                    <label
                                        className="form-check-label"
                                        for="offset1"
                                    >
                                        ১ম ও ৩য় সপ্তাহে
                                </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="offset"
                                        id="offset2"
                                        value="2"

                                        checked={this.state.offset == "2"}
                                        onChange={(e) => this.handleOffsetChange(e)}
                                    />
                                    <label
                                        className="form-check-label"
                                        for="offset2"
                                    >
                                        ২য় ও ৪র্থ সপ্তাহে
                                </label>
                                </div>
                            </div>
                        </div> : null}
                    <button
                        onSubmit={this.handleSubmit()}
                        className="edit-submit"
                    >
                        সাবমিট করুন
                    </button>
                </form>
            </div>
        )
    }
}

export default form

