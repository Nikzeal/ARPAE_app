document.addEventListener('DOMContentLoaded', attivaEventi );

function attivaEventi() {

	// Riferimenti agli elementi HTML
	const form = document.getElementById('form');
	const nomeInput = document.getElementById("nome");
	const cognomeInput = document.getElementById("cognome");
	const usernameInput = document.getElementById("username");
	const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPassword = document.getElementById("passwordConfermata");
	const codiceInput = document.getElementById("codice");
	const errorLabel = document.getElementById('msg_errore');
	const res_text = document.getElementById('response');
	
	// Aggiunta di un ascoltatore per l'invio del form
	form.addEventListener('submit', controlli_input.bind(null, form, nomeInput, cognomeInput, usernameInput, emailInput, passwordInput, confirmPassword, codiceInput, errorLabel, res_text) );

	

}



function controlli_input(form, nomeInput, cognomeInput, usernameInput, emailInput, passwordInput, confirmPassword, codiceInput, errorLabel, res_text)  {
	
		
	//da controllare anche nome, cognome ed email IMANEEEE
	errorLabel.innerHTML = "";
	if((usernameInput.value.trim().includes(' ')) || (usernameInput.value.startsWith(' ')) || (usernameInput.value.endsWith(' '))){
		errorLabel.innerHTML = "L'username non puo' contenere spazi";
		return;
	}



    if(passwordInput.value.length<8){
		errorLabel.innerHTML =  "La password deve essere di minimo 8 caratteri";
		return;		
	}else if(passwordInput.value != confirmPassword.value){
		errorLabel.innerHTML =  "Le password non coincidono";
		return;	
	}else if(!(/\d/.test(confirmPassword.value))){ //che e' sta roba?

		errorLabel.innerHTML =  "La password deve contenere numeri e lettere";
		return;	
		
	}

	else if(codiceInput.value.length!=16){

		errorLabel.innerHTML =  "Il codice verifica devve essere di 16 caratteri";
		return;	
		
	}
	else{
		form.reset();
		sendData(nomeInput, cognomeInput, usernameInput, emailInput, passwordInput, confirmPassword, codiceInput, errorLabel, res_text);
	}
		 
		
		
}

function sendData(nomeInput, cognomeInput, usernameInput, emailInput, passwordInput, confirmPassword, codiceInput, res_text){
	
	console.log("mandare i dati");

	 let dati = {

        "Nome":nomeInput.value,
        "Cognome":cognomeInput.value,
        "Username":usernameInput.value,
        "Email":emailInput.value,
        "Password":passwordInput.value,
        "Confirm_pass":confirmPassword.value,
        "User_key":codiceInput.value
    };


	var Datijson = JSON.stringify( dati ); //converto in JSON l’oggetto.
    console.log(Datijson);

	try{
       
        let url = "http://localhost:8080/ARPAE_webservices/RegistrazioneUtente"; 
        xhr.open('POST', url);
        xhr.onload = function() { gestisciRisposta(this); }; 
        xhr.send(Datijson);
      
    }catch (error)
    {
        console.log(error);
    }

    function gestisciRisposta( e ){ 
        if (e.status == 200) {

            let response = e.responseText;
            console.log(e.responseText);
            res_text.innerHTML = `${response}`;
            
        }
    }
}


/*
email gia esistente
username gia esistente
conferma email
*/