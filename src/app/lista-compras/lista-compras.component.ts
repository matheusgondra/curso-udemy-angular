import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ItemLista } from "./itemLista";
import { CommonModule, NgClass } from "@angular/common";

@Component({
	selector: "app-lista-compras",
	imports: [FormsModule, NgClass],
	templateUrl: "./lista-compras.component.html",
	styleUrl: "./lista-compras.component.scss"
})
export class ListaComprasComponent {
	item = "";
	lista: ItemLista[] = [];

	adicionarItem() {
		const itemLista = new ItemLista();

		itemLista.id = this.lista.length + 1;
		itemLista.nome = this.item;

		this.lista.push(itemLista);

		this.item = "";
		console.table(this.lista);
	}

	riscarItem(item: ItemLista) {
		item.comprado = !item.comprado;
	}

	limparLista() {
		this.lista = [];
	}
}
