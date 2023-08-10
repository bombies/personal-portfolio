import {Provider} from "react-redux";
import store, {persistor} from "@/utils/redux/redux-store";
import {PersistGate} from "redux-persist/integration/react";
import React from "react";

export default function ReduxProvider({children}: React.PropsWithChildren) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
    )
}