import styled from 'styled-components';



export const Container = styled.div`

   
    width:500px;
    height:560px;
    background:#20295F;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    flex-direction:column;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.90);
    

    input{
        width:90%;
        margin-top:30px;
        padding:10px;
        border-radius:10px;
        border:5px solid #E57512;
        font-weight: bold;
        font-size:20px;
    }


`;

export const buttonsArea = styled.div`

    width: 75%;
    display:flex;
    margin-top:25px;
    display:flex;
    align-items:center;
    justify-content:center;
    


    button{
        width:45%;
        background: #E57512;
        border:none;
        font-size:20px;
        color:#fff;
        font-weight: bold;
        padding:20px;
        border-radius:30px;
        
       
        
        

    }

`;