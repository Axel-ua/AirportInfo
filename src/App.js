import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Flights from './Flights/Flights';
import Search from './components/Search';
import './App.css';
import TabNav from './components/TabNav';
import Tab from './components/Tab';
import { tabs } from './constants';

<h1>Поиск рейса</h1>

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


  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth()+1).padStart(2, '0');
  let yyyy = today.getFullYear();
  

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (`https://api.iev.aero/api/flights/${dd}-${mm}-${yyyy}`) 

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Search onChange={(q) => setQuerty(q)} query={query} />
      <Opp activeTab={tab} setTab={setTab} />
      <Flights activeTab={tab} isLoading={isLoading} items={items} query={query} />
    </div>
  )
  }

export default App