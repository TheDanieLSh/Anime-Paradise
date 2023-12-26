import { makeAutoObservable } from "mobx";

class fetchDataState {
    products = null;

    constructor() {
        makeAutoObservable(this)
    }

    async fetchProducts() {
        const response = await fetch('/products.json');
        const data = await response.json();
        this.products = data;
    }
}

export default fetchDataState