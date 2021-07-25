import React, { useEffect, useState } from 'react';
import * as S from './styled'

export default function FormProduto () {	
	const [ name, setName ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ photo, setPhoto] = useState('');

	function handleSubmit(e) {

		e.preventDefault();
		let data = {
			name,
			price,
			description,
			photo
		}
		
		if(!name) { return alert("Produto não cadastrado! O nome deve ser preenchido."); }
		if(!price) { return alert("Produto não cadastrado!O preço deve ser preenchido."); }
		if(!description) { return alert("Produto não cadastrado! A descrição deve ser preenchida."); }
		if(!photo) { return alert("Produto não cadastrado! O link de imagem deve ser preenchido."); }
		
		else{
			let productData = localStorage.getItem('Produtos');
			if(!productData) { productData = []; 
			} else { productData = JSON.parse(productData); }

			productData.push(data);

			localStorage.setItem('Produtos', JSON.stringify(productData))
			alert("Produto cadastrado com sucesso!");
			setName ('');
			setPrice('');
			setDescription('');
			setPhoto('');
		};
	};

		return (
			<S.Container produto>
				<S.Title>Cadastro do produto</S.Title>
				<S.Form formProduto>
					<S.Label produto htmlFor="nome">Nome</S.Label>
					<S.Input 
						type="text" 
						name="nome" 
						placeholder="Nome do Produto"
						value= {name} 
		          		onChange={e => setName(e.target.value)} 
					/>
					<S.Label produto htmlFor="price">Preço</S.Label>
					<S.Input 
						type="number" 
						name="price" 
						placeholder="Preço do Produto"
						value= {price} 
		          		onChange={e => setPrice(e.target.value)} 
					/>
					<S.Label produto htmlFor="description">Descrição</S.Label>
					<S.Input 
						type="text" 
						name="description" 
						placeholder="Descrição do Produto"
						value= {description} 
		          		onChange={e => setDescription(e.target.value)} 
					/>
					<S.Label produto htmlFor="photo">Imagem do produto</S.Label>
					<S.Input 
						type="text" 
						name="photo" 
						placeholder="Insira link para imagem do Produto"
						value= {photo} 
		          		onChange={e => setPhoto(e.target.value)} 
					/>
					<S.Button produto name="enviar" onClick = {handleSubmit}>Cadastrar</S.Button>
				</S.Form>
				<S.LinkHome produto to="/">Voltar</S.LinkHome>
			</S.Container>
		)
}