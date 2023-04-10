document.addEventListener('DOMContentLoaded', attivaEventi );

function attivaEventi() {

	// Riferimenti agli elementi HTML
	const form = document.getElementById('form');
	const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const passwordConfermataInput = document.getElementById("passwordConfermata");
	const errorLabel = document.getElementById('msg_errore');

	// Aggiunta di un ascoltatore per l'invio del form
	form.addEventListener('submit', (event) => {
	// Prevenzione del comportamento predefinito del form (ricarica della pagina)
	event.preventDefault();
  
	// Verifica dei dati inseriti
	if(usernameInput.value.trim().includes(' ')){
		showError("L'username non puo' contenere spazi");
		return;	
		//controlli USERNAME
	}
	
    if(passwordInput.value.length<8){
		showError("La password deve essere di minimo 8 caratteri");
		return;		
	}else if(passwordInput.value != passwordConfermataInput.value){
		showError("Le password non coincidono");
		return;	
	}else if(!(/\d/.test(passwordConfermataInput.value))){
		showError("La password deve contenere numeri e lettere");
		return;	
		//controlli PASSWORD
	}
	

	// Invio del form se i dati sono validi
	form.submit();
	});

	// Funzione per visualizzare un messaggio di errore
	function showError(message) {
	errorLabel.textContent = message;
	}

}

/*
email gia esistente
username gia esistente
conferma email
*/