document.addEventListener('DOMContentLoaded', init() );

function init() {

	// Riferimenti agli elementi HTML
	const form = document.getElementById("form_accesso");
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const errorLabel = document.getElementById('msg_errore');

	// Aggiunta di un ascoltatore per l'invio del form
	form.addEventListener("submit", controlli_input.bind(null, form, usernameInput, passwordInput, errorLabel) );
	

}


function controlli_input(form, usernameInput, passwordInput, errorLabel)  {
	
		
		// Verifica campi non vuoti (non necessario)
		errorLabel.innerHTML = "";
		if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
			//showError('I campi sono obbligatori'); 
			errorLabel.innerHTML = 'I campi sono obbligatori';
			return;
		}
		//verifica spazi nell'username
		else if(usernameInput.value.trim().includes(' ')){
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
			form.reset();
			sendData();
		}
		 
		
		
}

function sendData(){
	console.log("mandare i dati");
}

/* Funzione per visualizzare un messaggio di errore. Non trovo necessario scrivere una funzione per stampare un messaggio
	function showError(message) {
		errorLabel.innerHTML = message;
	}*/