// This component triggers VF/Lightning rule: no-div-regex
import { LightningElement } from 'lwc';

export default class nodivregexTrigger extends LightningElement {
    validatePattern() {
        // Triggers no-div-regex - division operator at beginning of regex
        function bar() { 
            return /=foo/; // Should be /\=foo/
        }
        
        return bar();
    }
}