import React from 'react';
import { connect } from 'react-redux';

class Airports extends React.Component{
    
  render(){
    return(
        
        <div className='container' style={{paddingTop:'5%'}}>
      {this.props.airportList ? 
      <div className='fluid-container'>
          <h3>Aiport of the selected city is - </h3>
            {this.props.airportList.map((item,i) => 
              <li key={i} style={{paddingBottom:'10px'}}>
                  <h1>Airport name : {item.name}</h1>
                  <h3> IATA_code : {item.code}</h3>
              </li>
          )}  
          </div>
            :
          <h3>Aiport of the selected city is -</h3>
      }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    airportList: state.airportsReducer.airportList
  }
}



export default connect(mapStateToProps)(Airports)
