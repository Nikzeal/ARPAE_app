document.addEventListener('DOMContentLoaded', init() );

function init() {

	// Riferimenti agli elementi HTML
	const form = document.getElementById("form_accesso");
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const errorLabel = document.getElementById('msg_errore');
	const res_text = document.getElementById('response');
	const xhr = new XMLHttpRequest();
	

	// Aggiunta di un ascoltatore per l'invio del form
	form.addEventListener("submit", controlli_input.bind(null, form, usernameInput, passwordInput, errorLabel, res_text, xhr) );
	

}


function controlli_input(form, usernameInput, passwordInput, errorLabel, res_text, xhr)  {
	
		
		// Verifica campi non vuoti (non necessario)
		errorLabel.innerHTML = "";
		if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
			//showError('I campi sono obbligatori'); 
			errorLabel.innerHTML = 'I campi sono obbligatori';
			return;
		}
		//verifica spazi nell'username
		else if((usernameInput.value.trim().includes(' ')) || (usernameInput.value.startsWith(' ')) || (usernameInput.value.endsWith(' '))){
			//showError("L'username non puo' contenere spazi");
			errorLabel.innerHTML = "L'username non puo' contenere spazi";
			return;	
		}
		
		//verifica lunghezza password
		else if(passwordInput.value.length < 8){
			errorLabel.innerHTML = "La password deve essere di almeno 8 caratteri";
			return;	
		}
		else{
			sendData(usernameInput, passwordInput, errorLabel, res_text, xhr);
			form.reset();
		}
		 
		
		
}

function sendData(usernameInput, passwordInput, errorLabel, res_text, xhr){

	console.log("mandare i dati");

	let dati = {
		"Username": usernameInput.value,
		"Password": passwordInput.value,
	};


	var Datijson = JSON.stringify(dati); //converto in JSON l’oggetto.
	console.log(Datijson);

	try {

		let url = "http://localhost:8080/ARPAE_webservices/AccessoUtenti";
		xhr.open('POST', url);
		xhr.onload = function () { gestisciRisposta(this); };
		xhr.send(Datijson);

	} catch (error) {
		console.log(error);
	}

	function gestisciRisposta(e) {
		if (e.status == 200) {

			//jwt
			let response = e.responseText;
			console.log(e.responseText);

			//senza xampp
			localStorage.setItem('info', response);
			//con xampp
			//da implementare con libreria jsCoookies 
			document.cookie = 'info=' + response + '; expires=' + new Date(2023, 3, 22).toUTCString  +  '; path=/';
			

		}
	}
	
}

/* Funzione per visualizzare un messaggio di errore. Non trovo necessario scrivere una funzione per stampare un messaggio
	function showError(message) {
		errorLabel.innerHTML = message;
	}*/