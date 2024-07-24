import React from 'react';

import * as formStyles from '../styles/modules/form.module.scss';

const Form: React.FC = () => {
	return (
		<div className={formStyles.form}>
			<div>
				<h5>Vul hieronder je gegevens in</h5>
				<p>En we komen spoedig met je in contact!</p>
			</div>

			<form
				name='kir-netlifyform'
				method='POST'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
				action='/success/'>
				<input type='hidden' name='form-name' value='kir-netlifyform' />

				<div>
					<label htmlFor='formFirstName'>Voornaam</label>
					<input
						type='text'
						name='firstName'
						id='formFirstName'
						placeholder='Voornaam'
					/>
				</div>
				<div>
					<label htmlFor='formLastName'>Achternaam</label>
					<input
						type='text'
						name='lastName'
						id='formLastName'
						placeholder='Achternaam'
					/>
				</div>
				<div>
					<label htmlFor='formCompany'>Bedrijfsnaam</label>
					<input
						type='text'
						name='company'
						id='formCompany'
						placeholder='Bedrijfsnaam'
					/>
				</div>
				<div>
					<label htmlFor='formPhoneNr'>Telefoonnummer</label>
					<input
						type='tel'
						name='phone'
						id='formPhoneNr'
						placeholder='Telefoonnummer'
					/>
				</div>
				<div>
					<label htmlFor='formEmail'>E-mailadres</label>
					<input
						type='email'
						name='email'
						id='formEmail'
						placeholder='E-mailadres'
					/>
				</div>
				<div>
					<label htmlFor='formMessage'>Bericht</label>
					<textarea
						name='message'
						id='formMessage'
						rows={7}
						placeholder='Bericht'
					/>
				</div>
				<div>
					<button type='submit'>Versturen</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
