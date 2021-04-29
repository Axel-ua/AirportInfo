import React from 'react'
import { tabs } from '../constants';

const Flights = ({ items, isLoading, activeTab, query }) => {
    console.log(items)
    const nameProp = activeTab === tabs.ARRIVALS ? "airportFromID.city_ru" : "airportToID.city_ru"


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const filterItems = (items) => {
        if (!query) {
            return items;
        }

        const _query = query.toLowerCase();
        return items.filter(item => item[nameProp].toLowerCase().includes(_query) || item.fltNo.includes(_query));
    }

    return activeTab === tabs.ARRIVALS ? (
    <section className='slotA'>
        {filterItems(items.body.arrival).map((item, index) => {
                return <li key={index}>{item.term} {item.timeArrShedule} {item[nameProp]}, , {item.fltNo} {item.status}, </li>
        })}
    </section>
    ) : (
    <section className='slotB'>
        {filterItems(items.body.departure).map((item, index) => {
                return <li key={index}>{item.term} {item.gateNO} {item.timeDepShedule} {item[nameProp]}, , {item.fltNo} {item.status} </li>
        })}
    </section>
    )  
}

export default Flights
