import React from 'react';
import './demonymApp.css';
import Demonym from './demonym';
import CountrySelector from './countrySelector';

export default class DemonymApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selected: null
        };
    }

    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
        .then(response => response.json())
        .then(data => {
            const countries = Object.keys(data)
                .map(key => data[key].item[0]);
            console.log(countries);
        });
    }

    render() {
        return (
            <div className='demonym_app'>
                <CountrySelector countries={[{name: 'Barbados'}, {name:'Bahrain'}]}/>
                <Demonym name='Barbadian' country='Barbados' />
            </div>
        )
    }
}