import React, {Component} from 'react';
import {connect} from 'react-redux';

import { fetchCompany } from '../actions';

class CompaniesList extends Component{

    componentDidMount () {
      this.props.fetchCompany();
    }
    


    renderCompaniesList(companies){
        console.log('Comanies : -->', companies);

        companies.map(items=>{
            console.log('Items: ', items);
            //console.log('Year: ', i);
        }) ; 

    }


    render(){
            return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Brand</th>
                    <th>sector</th>
                    <th>Change In Brand Value</th>
                    <th>Brand Value</th>
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