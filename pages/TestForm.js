import React from 'react'
import axios from 'axios';
export default function Testfrom() {
    const adddata = async(e)=>{
        e.preventDefault();
        let city={city:e.target.city.value}
        let area={area:e.target.area.value}
        const area_id = await axios.post('http://127.0.0.1:8000/address/area/',area)
        const city_id = await axios.post('http://127.0.0.1:8000/address/city/',city)
        
        let address={
            area:area_id.data.id,
            city:city_id.data.id,
            direction:e.target.direction.value
        }
        const address_id = await axios.post('http://127.0.0.1:8000/address/address/',address)
        console.log(address_id.data);
    }
    return (
        <div>
            <form onSubmit={adddata}>
            <input type="text" name='area' />
            <input type="text" name='city' />
            <input type="text" name='direction' />
            <button type='onsubmit'> add </button>
            </form>
        </div>
    )
}