// This component triggers SonarJS rule S1539
import { LightningElement } from 'lwc';

export default class s1539Trigger extends LightningElement {
    strictFunction() {
        'use strict'; // Triggers S1539
        var a = 10;
        return a;
    }

    connectedCallback() {
        function strict() {
            'use strict'; // BAD: strict mode may cause issues in some browsers
        }
    }
}