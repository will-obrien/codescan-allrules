// This component is generated to trigger the rule: cs-js:new-parens
import { LightningElement } from 'lwc';

export default class newparensTrigger extends LightningElement {
    // Rule: require parentheses when invoking a constructor with no arguments
    connectedCallback() {
        // This component triggers: cs-js:new-parens
        console.log('Triggering rule: cs-js:new-parens');
    }
}