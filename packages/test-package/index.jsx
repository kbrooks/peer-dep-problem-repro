import {Provider} from 'jotai';
import React from 'react';


function JotaiProviderInWorkspace({children}) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}

export default JotaiProviderInWorkspace;
