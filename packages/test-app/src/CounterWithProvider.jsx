import React from 'react';
import JotaiProviderInWorkspace from 'test-package'
import Counter from "./Counter";
import {Provider} from "jotai";

function CounterWithProvider() {
    return (
        <div>
            <Counter name={'outer'}/>
            <JotaiProviderInWorkspace>
                <Counter name={'inner (workspace dependency)'}/>
            </JotaiProviderInWorkspace>
            <Provider>
                <Counter name={'inner (direct dependency)'}/>
            </Provider>
        </div>
    );
}

export default CounterWithProvider;
