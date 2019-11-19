import React, { Component } from 'react'

import OutletCard from './OutletCard'

export class PreInformation extends Component {
    render() {
        return (
            <div id="পূর্বের তথ্য" className="tab-pane">
                {
                    this.props.history ?
                        this.props.history.length > 0 ?
                            this.props.history.map(item =>
                                <OutletCard
                                    key={item.id}
                                    outlet={item}
                                    action={true}
                                    getHistory={this.props.getHistory}
                                />
                            )
                            : null
                        : null
                }
            </div>
        )
    }
}

export default PreInformation
