import React, { Component } from 'react'

import OutletSearchBox from './OutletSearchBox';
import OutletCard from './OutletCard';
import OutletAlert from './alert';

export class Realignment extends Component {


    render() {

        return (
            <div id="পুণঃনির্ধারণ" className="tab-pane fade active show">
                <OutletSearchBox />

                <OutletAlert />

                <OutletCard />

            </div>
        )
    }
}

export default Realignment
