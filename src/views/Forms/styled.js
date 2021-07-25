import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
	width: 50%;
	margin: 10vh auto;
	background-color: ${props => props.cliente ? "#1D3461": "#FF415F"};
	box-shadow: 9px 4px 4px rgba(0, 0, 0, 0.2);
	padding-bottom: 1rem;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2.5rem;
	font-family: sans-serif;
	color: white;
	padding: 1rem;
    margin: 0.5rem;
`;

export const LinkHome = styled(Link) `
	background-color: rgb(235, 251, 255);
	border-radius: 1rem;
	border: none;
	color: #1D3461;
	display: block;
	font-weight: 500;
	margin: 2rem auto;
	padding: 0.5rem 0;
	text-align: center;
	text-decoration: none;
	width: 25%;

	&:hover{
		text-weight: 600;
		background-color: ${props => props.produto ? "#1D3461": "#FF415F"};
		color: #fff;
		border: ${props => props.produto ? "1px solid #1D3461": "1px solid #FF415F"};
	}
`;
export const Form = styled.form`
	box-shadow: 9px 4px 4px rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	display: flex;
	flex-wrap: wrap;
    flex-direction: column;
    align-items: stretch;
    align-content: center;
    margin: auto;
    max-width: 80%;
    padding: 0.5rem;
`;

export const Label = styled.label`	
	color: ${props => props.produto ? "#1D3461": "#FF415F"};
	font-size: 1.2rem;
	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
	margin: 0.5rem 0.25rem 0.25rem 0.25rem;
	text-align: left;
`;

export const Input = styled.input`
	border-radius: 1rem;
	font-size: 1.2rem;
	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
	height: 1.5rem;
	padding: 0.25rem 0.75rem;
	text-align: left;
	border: none;
	color: #000; 
	margin: 0.25rem auto;
	width: 90%;

	&active,
	&hover,
	&focus{
		outline: none;
		border: none;
	}
`;

export const Button = styled.button`
	border: ${props => props.cliente ? "2px solid #1D3461": "2px solid #FF415F"};	
	border-radius: 1rem;
	box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.1);
	color: ${props => props.cliente ? "#1D3461": "#FF415F"};
	cursor: pointer;
	font-size: 1.2rem;
	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
	margin: 1rem auto;
	padding: 0.25rem 0;
	width: 30%;

	&:hover{
		text-weight: 600;
		background-color: ${props => props.produto ? "#1D3461": "#FF415F"};
		color: #fff;
		border: none;
	}
`;