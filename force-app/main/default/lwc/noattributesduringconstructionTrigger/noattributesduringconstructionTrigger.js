// This component is generated to trigger the rule: cs-js:no-attributes-during-construction
import { LightningElement, api } from 'lwc';

export default class Test extends LightningElement {
    constructor() {
        super();
        this.title = 'this causes the element to gain the title attribute during construction';
    }
}
