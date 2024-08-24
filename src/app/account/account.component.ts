import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [
		NgOptimizedImage
	],
	templateUrl: './account.component.html',
	styleUrl: './account.component.scss'
})
export class AccountComponent {

}
