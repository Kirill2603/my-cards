import {ColorModeScript} from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import {App} from "./App"
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ColorModeScript/>
            <Provider store={store}>
            <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
)