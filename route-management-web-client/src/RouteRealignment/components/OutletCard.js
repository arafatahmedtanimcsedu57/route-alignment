import React, { Component } from 'react';

import moment from 'moment';
import axios from 'axios';

import { cursor, offset, type } from './../../routePlan';

import EditButton from './EditButton';

import PlaceImg from './../assets/ic_place.svg';
import StoreImg from './../assets/ic_store.svg';
import CalImg from './../assets/ic_cal.svg';
import DeleteImg from './../assets/ic_delete.svg';

import './../styles/outletCard.css'



export class OutletCard extends Component {
    render() {
        return (
            this.props.outlet ?
                <div key={this.props.outlet.id} className="card card--biponon">
                    <div className="card-heading--biponon">+880{this.props.outlet.outlet_number}</div>
                    <div className="card-body--biponon">
                        <div className="name">
                            <img src={StoreImg} alt="outlet name" />
                            {this.props.outlet.name}
                        </div>
                        <div className="address">
                            <img src={PlaceImg} alt="address" />
                            {this.props.outlet.area}, {this.props.outlet.territory}
                        </div>
                        <div className="route">
                            <img src={CalImg} alt="route" />
                            {cursor[this.props.outlet.cursor]}, {offset[this.props.outlet.offset] ? type[1] : type[0]} পর পর
                        </div>
                    </div>
                    <hr />
                    <div className="card-footer--biponon">
                        <div className="type">
                            <div className="circle"></div>
                            {this.props.outlet.outlet_type}
                        </div>

                        <div className="realignment-date">
                            অন্তর্ভুক্তির তারিখঃ
                        <div className="date">
                                {moment(this.props.outlet.updated_at).format('ll')}
                            </div>
                        </div>
                    </div>{
                        this.props.action ?
                            <>
                                <hr />
                                <div className="card-action--biponon">
                                    <button
                                        className="delete"
                                        data-toggle="modal"
                                        data-target="#deleteModal"
                                    >
                                        <img src={DeleteImg} alt="delete button" /> ডিলিট করুন
                                    </button>

                                    <div
                                        className="modal fade"
                                        id="deleteModal"
                                        tabIndex="-1"
                                        role="dialog"
                                        aria-labelledby="deleteModal"
                                        aria-hidden="true"
                                    >
                                        <div
                                            className="modal-dialog"
                                            role="document"
                                        >
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title"
                                                        id="deleteModal"
                                                    >
                                                        ডিলিট করবেন?
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    আপনি কি আউটলেটটি আপনার রুটপ্ল্যান থেকে ডিলিট করতে চান?
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary no"
                                                        data-dismiss="modal"
                                                    >
                                                        না
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-primary yes"
                                                        data-dismiss="modal"
                                                        onClick={() => axios.delete(`http://127.0.0.1:8000/api/rewrite-routes/${this.props.outlet.id}`)
                                                            .then(res => this.props.getHistory())
                                                        }
                                                    >
                                                        হ্যাঁ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <EditButton
                                        path={`/route-realignment/${this.props.outlet.id}`}
                                    />

                                </div>
                            </>
                            : null
                    }
                </div> : null
        )
    }
}

export default OutletCard
