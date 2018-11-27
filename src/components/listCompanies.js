import React, {Component} from 'react';

export default class Listing extends Component{
    constructor(props){
        super(props);
        this.renderListings = this.renderListings.bind(this);
    }

    renderListings(){
        const {year,arrCompanie} = this.props;

        return (
        arrCompanie.map(i =>(
             <tr key={i.brandValue+year} className={i.brandValue+year}>
                        <td>{i.brand}</td>
                        <td>{i.sector}</td>
                        <td>{i.changeInBrandValue}</td>
                        <td>{i.brandValue}</td>
            </tr>    
        ))
        )
        

    }

    render (){
        return (this.renderListings())
    }

}