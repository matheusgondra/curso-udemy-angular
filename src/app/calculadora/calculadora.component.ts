import { Component } from "@angular/core";

@Component({
	selector: "app-calculadora",
	imports: [],
	templateUrl: "./calculadora.component.html",
	styleUrl: "./calculadora.component.scss"
})
export class CalculadoraComponent {
	numero1 = 0;
	numero2 = 0;
	resultado = 0;

	calcularResultado() {
		this.resultado = this.numero1 + this.numero2;
	}
}
