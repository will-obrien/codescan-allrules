// This component is generated to trigger the SonarJS rule: javascript:S1116
import { LightningElement } from 'lwc';

export default class s1116Trigger extends LightningElement {
    // Rule: Extra semicolons should be removed
    badExtraSemicolons() {
        var x = 1;; // BAD: extra semicolon
        function foo() {
        };  // BAD: extra semicolon after function
        return x;
    }
}