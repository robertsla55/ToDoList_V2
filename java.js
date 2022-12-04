// const { NOT } = require("sequelize/types/deferrable");

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
				falhas += 1
			}
			else{
				if (nickname.length > 10){
					falhas += 1;
					alert("O nickname deve possuir menos de 10 letras");
				}else{
					//aqui já terá tds os procvedimentos verificados
					falhas = 0;
					
				}
		
			}
		}else{
			alert("As senhas estão diferentes.")
			falhas += 1;
		}


	
if (email != null && senha != null && nickname != null && nome != null && falhas == 0){
	document.getElementsByClassName("acaixa")[0].style.display = "none";
	document.getElementById("email").innerHTML += email;
	document.getElementById("name").innerHTML += nome;
	document.getElementById("senha").innerHTML += senha;
	document.getElementById("nickname").innerHTML += nickname;

	
}
	}
