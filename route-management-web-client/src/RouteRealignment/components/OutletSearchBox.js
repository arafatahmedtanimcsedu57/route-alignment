import React, { Component } from 'react'

import SearchImg from './../assets/Rectangle.svg'
import CrossImg from './../assets/ic_close.svg'

import './../styles/outletSearchBox.css'

export class OutletSearchBox extends Component {
    constructor() {
        super();

        this.state = {
            searchIconShow: true,
            clearIconShow: false,
            inputClass: 'with-search-icon'
        };

        this.searchInput = React.createRef();
    }



    render() {
        return (
            <div className="input-group input-group--biponon ">
                {this.state.searchIconShow ?
                    <label className="search">
                        <img src={SearchImg} alt="Search" />
                    </label> : null}


                <input
                    type="text"
                    className={this.state.inputClass}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="বিকাশ নাম্বার দিয়ে খুঁজুন ..."
                    name='search'
                    id='search'

                    onTouchStart={() => {
                        this.setState({ searchIconShow: false })
                        this.setState({ inputClass: 'without-icon' })
                    }}

                    onMouseDown={() => {
                        this.setState({ searchIconShow: false })
                        this.setState({ inputClass: 'without-icon' })
                    }}

                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            this.setState({ clearIconShow: true })
                            this.setState({ inputClass: 'with-cross-icon' })

                            if (e.target.value.length === 11) console.log("Submit this number : " + e.target.value)

                        } else {
                            this.setState({ clearIconShow: false })
                            this.setState({ inputClass: 'without-icon' })
                        }
                    }}

                    ref={this.searchInput}
                />

                {this.state.clearIconShow ?
                    <label
                        className="cross"
                        onClick={() => {
                            this.searchInput.current.value = ''

                            this.setState({ clearIconShow: false })
                            this.setState({ inputClass: 'without-icon' })

                            this.setState({ searchIconShow: true })
                            this.setState({ inputClass: 'with-search-icon' })
                        }}
                    >
                        <img src={CrossImg} alt="Cross" />
                    </label> : null}
            </div>
        )
    }
}

export default OutletSearchBox
