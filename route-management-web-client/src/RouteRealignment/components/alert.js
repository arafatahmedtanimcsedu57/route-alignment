import React, { Component } from 'react'

import './../styles/alert.css'

export class alert extends Component {
    render() {
        return (
            <div className="outlet-alert">
                <div className="heading-alert">
                    আউটলেট খুঁজে পাওয়া যায়নি!
                </div>
                <div className="body-alert">
                    দুঃখিত! আপনার দেয়া নাম্বারটি দিয়ে কোন আউটলেট খুঁজে পাওয়া যায়নি। দয়া করে নাম্বারটি ঠিক আছে কি না দেখুন এবং আবার চেষ্টা করুন।
                </div>
            </div>
        )
    }
}

export default alert
