import React from 'react';
import CitiesButton from './components/citiesbutton';
import Airports from './components/airports'

class App extends React.Component{
  render(){
    return(
      <div className='container'>
      <div className='row'>
      <div className='col-md-4'>
      <CitiesButton />
      </div>
      <div className='col-md-6'>
      <Airports />
      </div>
      </div>
      </div>
    )
  }
}

export default App;
