import React from 'react';
import  { FetchCities, FetchAirports } from '../api';
import { connect } from 'react-redux';
import { RetrievedCities , ClearCities }  from '../actions/citiesactions';
// import { connect } from 'react-redux';
import { RetrievedAirports , ClearAirports }  from '../actions/airportactions'

class CitiesButton extends React.Component{

    componentDidMount(){
        // console.log(this.props.airportList)
        this.props.getcities();
    }

  render(){
    return(
      <div className='container' style={{paddingTop:'5%'}}>
      {this.props.citiesList ? 
      <div className='fluid-container'>
      <ol>
          {this.props.citiesList.map((item,i) => 
              <li key={i} style={{paddingBottom:'10px'}}>
                {/* <Link to={'/watch/' + (item.id.videoId || item.id)}> */}
                <button onClick={this.props.airports} className='btn btn-primary'>{item.city}</button>
                  {/* </Link> */}
              </li>
          )}  
              </ol>
              </div>
            :
          <h3>Loading....</h3>
          
      }
      </div>

    )
  }
}

function mapStateToProps(state){
  return{
      citiesList : state.citiesReducer.citiesList,

    // airportList: state.airportsReducer.airportList
  }
}

function mapActionToProps(dispatch){
    return{
        getcities : function(){
            dispatch(ClearCities())
            FetchCities()
            .then(result => dispatch(RetrievedCities(result)))},
        airports : function(e){
          dispatch(ClearAirports())
          // console.log(e.target.innerText)
          FetchAirports(e.target.innerText)
          .then(result => dispatch(RetrievedAirports(result)))
        }
    }
}


export default connect(mapStateToProps, mapActionToProps)(CitiesButton)
