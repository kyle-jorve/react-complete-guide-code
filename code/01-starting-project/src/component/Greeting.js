import { useState } from 'react';
import Output from './Output';

function Greeting() {
    const [textChanged, setTextChanged] = useState(false);

    function textChangeHandler() {
        setTextChanged(true);
    }
    
    return (
        <div>
            <h1>This is a greeting</h1>
            {
                textChanged ?
                <Output>This text has been changed</Output> :
                <Output>You have been successfully greeted.</Output>
            }
            <button onClick={textChangeHandler}>Change Text</button>
        </div>
    )
}

export default Greeting;