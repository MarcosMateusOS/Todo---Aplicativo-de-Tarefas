import styled from 'styled-components';


export const Container = styled.div`

    width:100%;
    height:70px;
    background: #20295F;
    display:flex;
    border-bottom: 5px solid #E57512;
    
`;



export const LeftSide = styled.div`

    width:50%;
    height:70px;
    display:flex;
    align-items:center;
    padding-left:10px;
    
    img{
        width:100px;
        height:40px;
        cursor:pointer;

        &:hover{
            opacity:0.5;
             
        }
       
    }

    
`;


export const RightSide = styled.div`

    width:50%;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
      

    a,button{
        color:#fff;
        font-weight: bold;
        text-decoration:none;
        margin: 0 10px;

        &:hover{
            color:#E57512;
        }


    }
   

    #notification{

        background:none;
        border:none;

        img{
            width:25px;
            height:30px
        }

        span{
            background: #FFF;
            color: #E57512;
            padding: 3px 7px;
            border-radius: 50%;
            position:relative;
            top:-20px;
            right: 10px;
        }

        &:hover{
            opacity:0.5;
        }

        

    }

    .dividir::after{

        content:"|";
        margin: 0 10px;
        color:#fff;

    }
    

`;