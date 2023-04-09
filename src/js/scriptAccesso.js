document.addEventListener('DOMContentLoaded', init() );

function init() {

	// Riferimenti agli elementi HTML
	const form = document.getElementById('form_accesso');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const errorLabel = document.getElementById('msg_errore');

	// Aggiunta di un ascoltatore per l'invio del form
	form.addEventListener('submit', accedi);
	
	
	function accedi()  {
	
		// Verifica dei dati inseriti
		/*if (usernameInput.value.trim() === '') {
			showError('Inserisci lo username');
			return;
		}else*/ if(usernameInput.value.trim().includes(' ')){
			showError("L'username non puo' contenere spazi");
			return;	
			//Altri controlli USERNAME
		}
		/*if (passwordInput.value.trim() === '') {
			showError('Inserisci la password');
			return;
			//Altri controlli PASSWORD
		}*/
	
		// Invio del form se i dati sono validi
		else{

			form.submit();
		}
	}

	// Funzione per visualizzare un messaggio di errore
	function showError(message) {
		errorLabel.innerHTML = message;
	}

}