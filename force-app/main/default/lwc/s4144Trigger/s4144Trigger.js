// This component is generated to trigger the SonarJS rule: javascript:S4144
import { LightningElement } from 'lwc';

export default class s4144Trigger extends LightningElement {
    // Rule: Functions should not have identical implementations
    badDuplicateFunctions() {
        function calculateCode() {
            this.doTheThing();
            this.doOtherThing();
            return 'code';
        }
        function getName() {  // BAD: identical implementation
            this.doTheThing();
            this.doOtherThing();
            return 'code';
        }
        return { calculateCode, getName };
    }
    doTheThing() {}
    doOtherThing() {}
}