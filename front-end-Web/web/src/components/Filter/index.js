import React from 'react';
import * as S from './styles';
import filter from '../../assets/filter.png';

function Filter({ title, actived }){

    return (

        <S.Container actived={actived}>
           <img src={filter} alt="Filter"/>
        <span>{title}</span>
            
        </S.Container>



    )



}

export default Filter;