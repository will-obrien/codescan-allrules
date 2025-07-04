// This component is generated to trigger the SonarJS rule: javascript:S2817
import { LightningElement } from 'lwc';

export default class s2817Trigger extends LightningElement {
    // Rule: Web SQL databases should not be used
    connectedCallback() {
        // This component triggers: javascript:S2817
        // Noncompliant: use of Web SQL database
        // The following is deprecated and should not be used
        // var db = window.openDatabase("myDb", "1.0", "Personal secrets stored here", 2*1024*1024); // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S2817');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2817";
        return example;
    }
}