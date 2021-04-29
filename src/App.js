import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Flights from './Flights/Flights';
import Search from './components/Search';
import './App.css';
import TabNav from './components/TabNav';
import Tab from './components/Tab';
import { tabs } from './constants';
import DatePicker from './components/Date';


// const Data = () => {
//   const [startDate,] = useState(new Date());
//   return (
//     <DatePicker
//       dateFormat="dd-MM-yyyy"
//       onChange={date}
//     />
//   );
// };
class Opp extends React.Component {

  render () {
    const { setTab, activeTab } = this.props;

    return (
      <div className="Opp">
        <TabNav tabs={[tabs.ARRIVALS, tabs.DEPARUTURE]} selected={activeTab} setSelected={(tab) => setTab(tab)}>
          <Tab isSelected={ activeTab === tabs.ARRIVALS}>
          </Tab>
          <Tab isSelected={ activeTab === tabs.DEPARUTURE}>
          </Tab>
        </TabNav>
      </div>
    );
  }
}


const App = () => {
  const[items, setItems] = useState({});
  const[isLoading, setIsLoading] = useState(true)
  const[query, setQuerty] = useState('')
  const [tab, setTab] = useState(tabs.ARRIVALS);

  // const dateValue: Date = new Date(new Date().getDay, new Date().getMonth(), new Date().getFullYear())
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (`https://api.iev.aero/api/flights/29-04-2021`) 

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      {/* <Header /> */}
      <Search onChange={(q) => setQuerty(q)} query={query} />
      <Opp activeTab={tab} setTab={setTab} />
      <Flights activeTab={tab} isLoading={isLoading} items={items} query={query} />
      {/* <NewDatePicker /> */}
    </div>
  )
  }

export default App