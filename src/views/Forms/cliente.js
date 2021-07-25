import React, { useEffect, useState } from 'react';
import * as S from './styled'

export default function FormCliente () {	
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ address, setAddress] = useState('');

	function handleSubmit(e) {

		e.preventDefault();
		let data = {
			name,
			email,
			address,
		}

		if(!name) { return alert("Cliente não cadastrado! O nome deve ser preenchido."); }
		if(!email) { return alert("Cliente não cadastrado!O email deve ser preenchido."); }
		if(!address) { return alert("Cliente não cadastrado! O endereço deve ser preenchida."); }
		else{
			let clientData = localStorage.getItem('Clientes');
			if(!clientData) { clientData =[]; }
			clientData.push(data)

			localStorage.setItem('Clientes', JSON.stringify(clientData));

			alert("Cliente cadastrado com sucesso!");
			setName ('');
			setEmail('');
			setAddress('');
		};
	};

		return (
			<S.Container cliente>
				<S.Title>Cadastro do cliente</S.Title>
				<S.Form formCliente>
					<S.Label cliente htmlFor="nome">Nome</S.Label>
					<S.Input 
						type="text" 
						name="nome" 
						placeholder="Nome do Cliente"
						value= {name} 
		          		onChange={e => setName(e.target.value)} 
					/>
					<S.Label cliente htmlFor="email">Email</S.Label>
					<S.Input 
						type="email" 
						name="email" 
						placeholder="Email do Cliente"
						value= {email} 
		          		onChange={e => setEmail(e.target.value)} 
					/>
					<S.Label cliente htmlFor="address">Endereço</S.Label>
					<S.Input 
						type="text" 
						name="address" 
						placeholder="Endereço do Cliente"
						value= {address} 
		          		onChange={e => setAddress(e.target.value)} 
					/>
					<S.Button cliente name="enviar" onClick = {handleSubmit}>Cadastrar</S.Button>
				</S.Form>
				<S.LinkHome cliente to="/">Voltar</S.LinkHome>
			</S.Container>
		)
}