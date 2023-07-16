import React from 'react'
import {Country, State} from "country-state-city" 

const Shipping = () => {
    return <section className="shipping">
        <main>
            <h1>Delivery Details</h1>
            <form action="">
                <div>
                    <label>H.No</label>
                    <input type="text" placeholder='Enter your House No.' />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter your City.' />
                </div>
                <div>
                    <label>State</label>
                    <select>
                        <option value="">State</option>
                        {
                            State && State.getStatesOfCountry("IN").map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>Country</label>
                    <select>
                        <option value="">Country</option>
                        {
                            Country && Country.getAllCountries().map(i=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>

                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>PinCode</label>
                    <input type="number" placeholder='Enter your Pincode.' />
                </div>
                <div>
                    <label>Phone No.</label>
                    <input type="number" placeholder='Enter your Phone No.' />
                </div>
                <button type="submit">Confirm Order</button>
            </form>
        </main>
    </section>
}

export default Shipping