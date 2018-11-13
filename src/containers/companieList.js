import React, {Component} from 'react';
import {connect} from 'react-redux';

import { fetchCompany } from '../actions';

class CompaniesList extends Component{

    componentDidMount () {
      this.props.fetchCompany();
    }
    
    renderCompaniesList(companies){
       
        return (            
            Object.keys(companies).map(i =>{
                console.log(i);
                   return companies[i].map((items,i)=>{
                        console.log('Items: ', items.brand+i); 
                            return(
                                    <tr key={items.brand+i} className={items.brand+i}>
                                        <td>{items.brand}</td>
                                        <td>{items.sector}</td>
                                        <td>{items.changeInBrandValue}</td>
                                        <td>{items.brandValue}</td>
                                    </tr>
                                )
                            })
                    })
        );

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
                {console.log(this.props.companies)}    
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