// This component is generated to trigger the rule: cs-js:no-constant-condition
import { LightningElement } from 'lwc';

export default class noconstantconditionTrigger extends LightningElement {
    // Rule: disallow constant expressions in conditions
    connectedCallback() {
        // This component triggers: cs-js:no-constant-condition
        console.log('Triggering rule: cs-js:no-constant-condition');
    }
}