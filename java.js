
function logar() {
		var email = document.getElementsByName('gmail')[0].value;
		var senha = document.getElementsByName('snh')[0].value;
		var senhaConf = document.getElementsByName('snhconf')[0].value;
		var nickname = document.getElementsByName('nick')[0].value;
		var nome = document.getElementsByName('nome')[0].value;
		var falhas = 0;
		if ((senha == senhaConf)){
			alert("As senhas estão iguais")
			if (nome.length < 10){
				alert("O nome deve possuir mais de 10 letras");
			}
			else{
				if (nickname.length > 10){
					alert("O nickname deve possuir menos de 10 letras");
				}else{
					//aqui já terá tds os procvedimentos verificados
					alert("foi")
				}
		
			}
		}else{
			alert("As senhas estão diferentes.")
			falhas += 1;
		}
		
		if (nickname.length > 10){
			alert("O nickname deve possuir menos de 10 letras");
		}

}
