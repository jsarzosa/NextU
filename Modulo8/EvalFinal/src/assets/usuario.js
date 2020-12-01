function VerificarUsuario(){
		var login_ingresado;
		var password_ingresado;
		var login_bdd;
		var password_bdd;
		
		login_ingresado = $("#email-input").val();
		password_ingresado = $("#password-input").val();
		login_bdd = $(".login_bdd").text().trim();
		password_bdd = $(".contrasena_bdd").text().trim();

		if (login_ingresado == login_bdd && password_ingresado == password_bdd) {
			var pageURL = $(location).attr("href");
			pageURL = pageURL+"/principal";
			window.location.replace(pageURL);
		} else {
			alert ("Usuario o contraseña incorrecta");
		}
}


