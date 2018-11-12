import React, {Component} from 'react';
import {connect} from 'react-redux';

import { fetchCompany } from '../actions';

class CompaniesList extends Component{

    componentDidMount () {
      this.props.fetchCompany();
    }
    


renderCompaniesList(companies){
    console.log('Comapnies : -->', companies);

}


render(){
        return(
        <table className="table table-hover">
            <thead>
            <tr>
                <th>City</th>
                <th>Temperature (K)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
            </tr>
            </thead>
            <tbody>
            {this.props.companies.map(this.renderCompaniesList)}
            </tbody>
        </table>
        );
    }  
}

function  mapStateToProps({companies})  {
    return {companies};
}

export default connect(mapStateToProps,{fetchCompany})(CompaniesList);