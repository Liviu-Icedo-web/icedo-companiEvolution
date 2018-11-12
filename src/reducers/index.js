import {combineReducers} from 'redux';
import CompaniesReducer from './reducersCompany';

const rootReducers = combineReducers({
    companies: CompaniesReducer
});

export default rootReducers;