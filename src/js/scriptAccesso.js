document.addEventListener('DOMContentLoaded', attivaEventi );

function attivaEventi() {

	// Riferimenti agli elementi HTML
	const form = document.querySelector('form');
	const usernameInput = document.querySelector('input[name="username"]');
	const passwordInput = document.querySelector('input[name="password"]');
	const errorLabel = document.getElementById('msg_errore');

	// Aggiunta di un ascoltatore per l'invio del form
	form.addEventListener('submit', (event) => {
	// Prevenzione del comportamento predefinito del form (ricarica della pagina)
	event.preventDefault();
  
	// Verifica dei dati inseriti
	if (usernameInput.value.trim() === '') {
		showError('Inserisci lo username');
		return;
	}else if(usernameInput.value.trim().includes(' ')){
		showError("L'username non puo' contenere spazi");
		return;	
		//Altri controlli USERNAME
	}
	if (passwordInput.value.trim() === '') {
		showError('Inserisci la password');
		return;
		//Altri controlli PASSWORD
	}
  
	// Invio del form se i dati sono validi
	form.submit();
	});

	// Funzione per visualizzare un messaggio di errore
	function showError(message) {
	errorLabel.textContent = message;
	}

}