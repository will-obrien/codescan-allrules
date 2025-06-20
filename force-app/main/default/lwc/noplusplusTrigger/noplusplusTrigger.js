// This component is generated to trigger the rule: cs-js:no-plusplus
import { LightningElement } from 'lwc';

export default class noplusplusTrigger extends LightningElement {
    // Rule: disallow the unary operators `++` and `--`
    connectedCallback() {
        // This component triggers: cs-js:no-plusplus
        console.log('Triggering rule: cs-js:no-plusplus');
    }
}