import styled from 'styled-components';

export const AppCont = styled.div`
    margin: 50px 75px 0;
    border: 1px solid grey;
    box-shadow: 0 0 25px rgba(0,0,0,0.5);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;


export const CabeceraCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ddd;
    border: 1px solid #e5e5e5;
    padding: 1rem;
    margin-bottom: 1rem;
    
        @media (max-width: 842px) {
            text-align: center;
        }
    
    span {
        background-color: black;
        color: white;
        padding: 3px 5px;
        border-radius: 5px;
    }
`;

export const ListadoCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
    @media (max-width: 1900px) {
        flex-wrap: wrap;
    }
`;

export const ItemCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ddd;
    border: 1px solid #e5e5e5; 
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 30%;
    @media (max-width: 1900px) {
        width: 25%;
    }
    @media (max-width: 842px) {
        width: 80%;
    }
    h3 {
        text-align: center;
        font-size: 1.2rem;
    }
    p {
        font-size: 1rem;
    }
  
    }
    h5 {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 7px;
        span {
            background-color: black;
            padding: 3px;
            font-weight: lighter;
            color: white;
            border-radius: 3px;
        }
    }
`;

export const Button = styled.button`
    background-color: #f5f5f5; 
    border: 1px solid #e5e5e5;  
    text-transform: uppercase;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
    &:disabled {
        background-color: rgb(255, 178, 178);
        cursor: not-allowed;
    }
`;




