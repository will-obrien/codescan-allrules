// This component triggers SonarJS rule S1438
import { LightningElement } from 'lwc';

export default class s1438Trigger extends LightningElement {
    badSemicolons() {
        var a = 5 // Triggers S1438 - missing semicolon
        var b = 10 // Triggers S1438 - missing semicolon
        return a + b // Triggers S1438 - missing semicolon
    }

    connectedCallback() {
        function fun() {
            return  // BAD: semicolon implicitly inserted
                 5   // BAD: semicolon implicitly inserted
        }
        // prints "undefined", not "5"
        // print(fun());
    }
}