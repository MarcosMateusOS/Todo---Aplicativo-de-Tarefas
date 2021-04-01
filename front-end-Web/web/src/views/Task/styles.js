
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;

`;


export const Form = styled.div`
    width: 50%;
    margin-bottom:100px;
    

`;

export const Icons = styled.div`

    width: 100%;
    display: flex;
    justify-content:center;
    padding-top:7px;
    


   .inative{
        opacity:0.5;
    }

    
    button{
        background:none;
        border:none;
    }
    

    
    img{
        width: 60px;
        height:60px;
        margin:10px;
        cursor:pointer;

        &:hover{
            opacity:0.5;
        }
    
        
    }
    

`;

export const Input= styled.div`

    width: 100%;
    display:flex;
    flex-direction:column;
    margin:30px 0;
       
        
   
    
    
    span{
        color:#707070;
        margin-bottom: 5px 0;
        font-weight: bold;
        
    }
    
    input{
        font-size:16px;
        padding:15px;
        border:none;
        border-bottom:1px solid #E57512;
        
    }
   

`;

export const TextArea= styled.div`

    width: 100%;
    display:flex;
    flex-direction:column;
    margin:30px 0;

    span{
        color:#707070;
        margin-top: 5px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    textarea{
        border:1px solid #E57512;
        font-size:15px;
        padding:15px;
        
    }



`;
 
 
    
export const Options= styled.div`

    display:flex;
    justify-content: space-between;
    margin-top:30px;    
        
   


    button{
        font-weight:bold;
        color: #20295F;
        border: none;
        background: none;
        font-size:18px;
        cursor:pointer;

        &:hover{
            opacity:0.7;
        }
    }
    
    div{
        display: flex;
        align-items:center;
        color: #E57512;
        font-weight:bold;
        font-size:18px;
    }


`;

export const Save = styled.div`

    width:100%;
    display:flex;
    justify-content: center;
   

    button{
        width:50%;
        background: #E57512;
        border:none;
        font-size:20px;
        color:#fff;
        font-weight: bold;
        padding:20px;
        border-radius:30px;
        
        

    }

`;