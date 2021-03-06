import styled from 'styled-components';



export const Container = styled.div`

    width:260px;
    height:60px;
    background:${props => props.actived ? '#E57512' : '#20295F'};
    border-radius:5px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    cursor:pointer;
    

    img{
        width:25px;
        height:25px;
    }

    span{
        color:#fff;
        font-weight:bold;
        align-self:flex-end;
        font-size: 18px;
    }

    &:hover{
        background:#E57512;
    }

    #Alert{
        background:red;
    }
`;