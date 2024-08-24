import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type Credential = { email: string, password: string };

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	email: string = '';
	password: string = '';
	validCreds: Credential[] = [
		{ email: 'leesa.ward@griffithuni.edu.au', password: 'password' },
		{ email: 'leesa.ward@outlook.com', password: 'password' },
		{ email: 'test@example.com', password: 'password' },
	];

	constructor(private router: Router) {
	}

	onSubmit() {
		if (this.email && this.password) {
			const valid = this.validCreds.find(cred => cred.email === this.email && cred.password === this.password);
			if (valid) {
				this.router.navigate(['/account']);
			} else {
				alert('Invalid credentials');
			}
		}
	}
}
