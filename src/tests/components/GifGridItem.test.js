import React from 'react';
const { shallow } = require("enzyme")
import {GifGridItem} from '../../components/GifGridItem'

describe('Pruebas en Gifgriditem', () => {
    
    const tittle = 'Un titulo';
    const url = 'https://localhost/algo.png';

    test('Debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifGridItem title={tittle} url={url}/>)
        expect(wrapper).toMatchSnapshot();

    })
    
})
