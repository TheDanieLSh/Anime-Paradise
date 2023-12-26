import { makeAutoObservable } from "mobx"

class searchState {
    foundItems = [];

    constructor() {
        makeAutoObservable(this)
    }

    setValue(payload) {
        this.foundItems = payload
    }
}

export default new searchState()