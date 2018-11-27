import React, {Component} from 'react';
import {connect} from 'react-redux';

import { fetchCompany } from '../actions';
import ListCompanie from '../components/listCompanies';
import ErrorBounderies from '../components/ErrorBounderies';

class CompaniesList extends Component{

    componentDidMount () {
      this.props.fetchCompany();
    }
    

   /* renderCompaniesList(companies){
       return (            
            Object.keys(companies).map(i =>{
                console.log('Companies ',companies[i]);
               console.log('Render By Year',i);
                   return ('BA',companies[i].map(items =>{
                      return (renderCompaniesByYear(items))
                   })//FIN companies[i].map
                    
                )  
                    
                })
        );

    }*/

    renderCompaniesList(companies){
            //const  years =  Object.keys(companies).map(i => <tr key={i}><td>{i}</td></tr>)
            //const dataCompanies = Object.keys(companies).map(i =>{companies[i].map(items=>{return renderCompaniesByYear(items)})})
            const dataCompanies = Object.keys(companies).map(i =>(
             
                <ListCompanie  year = {i} arrCompanie={companies[i]} />    
             
                
                //return (renderCompaniesByYear(companies[i]))
            ))

            //const dataCompanies = companies[years].map(items => renderCompaniesByYear(items))

        return ( console.log('Years: ',dataCompanies),
               <tbody>{dataCompanies}</tbody>
             
         )
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
                  {this.props.companies.map(this.renderCompaniesList)}
            </table>
            )
        }  
}

function  mapStateToProps({companies})  {
    return {companies};
}

function returnYear(year){
    
    
        Object.keys(year).map(i =>{
            return (
                <tr key={i}>
                    <td>{i}</td>
                </tr>
            ),
            console.log('returnYear',i)       
        })
       
}


function renderCompaniesByYear(year){           
                return (
                    console.log('CompaniesByYear: ',year),
                    year.map(year =>{
                        return(
                             <tr key={year.brand} className={year.brand}>
                        <td>{year.brand}</td>
                        <td>{year.sector}</td>
                        <td>{year.changeInBrandValue}</td>
                        <td>{year.brandValue}</td>
                    </tr>
                        )
                       
                    })
                        
                    )               
   
}

export default connect(mapStateToProps,{fetchCompany})(CompaniesList);