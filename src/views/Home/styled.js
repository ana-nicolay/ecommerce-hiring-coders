import styled from 'styled-components';

export const HomeContainer = styled.div`
  	align-items: center;
  	align-content: center;
  	background-color: #C3D4EA99;
  	background-position-x: 50%;
    background-position-y: center;
    border-radius: 0.6rem;
    box-shadow: 9px 4px 4px rgba(0, 0, 0, 0.2);
  	display: block;
  	justify-content: center;
  	margin: auto;
  	max-width: 40%;
  	padding-bottom: 0.5rem;
`;

export const DivContent = styled.div`
  	align-items: center;
  	align-content: center;  
  	display: flex;
  	flex-direction: row;
	justify-content: space-around;
  	margin: 5vh;
  	padding: 0.25rem 1rem;
  	text-align: center;
`;	

export const DivTitle = styled.div`
  	align-items: center;
  	align-content: center;
	color: #0E1A2F;
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	margin: 25vh auto 0 auto;
  	text-align: center;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	font-weight: 600;
	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
`;

export const Button = styled.button `
	border: 1.5px solid #6290C8;
	border-radius: 1rem;
	font-size: 1.2rem;
	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
	font-weight: 600;
	height: 2rem;
	padding: 0.25rem 0.75rem;
	text-align: center;
	box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.1);
	
	&:hover{
		cursor: pointer;
		background-color: ${props => props.cliente ? "#1D3461" : "#FF415F"};
		color: #fff;
		border: none;
	}

	&:focus,
	&:active{
		outline: none;
		box-shadow: none;
	}

	color: ${props => props.cliente ? "#1D3461" : "#FF415F"};

`;


