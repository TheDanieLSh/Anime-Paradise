'use client'
import { Provider } from "react-redux"
import { store } from "./reduxStateStore"

export default function reduxProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}