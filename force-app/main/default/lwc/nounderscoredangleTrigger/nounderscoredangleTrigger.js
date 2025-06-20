// This component is generated to trigger the rule: cs-js:no-underscore-dangle
import { LightningElement } from 'lwc';

export default class nounderscoredangleTrigger extends LightningElement {
    // Rule: disallow dangling underscores in identifiers
    connectedCallback() {
        // This component triggers: cs-js:no-underscore-dangle
        console.log('Triggering rule: cs-js:no-underscore-dangle');
    }
}