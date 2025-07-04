// This component is generated to trigger the SonarJS rule: javascript:S2612
import { LightningElement } from 'lwc';

export default class s2612Trigger extends LightningElement {
    // Rule: Setting loose POSIX file permissions is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S2612
        // Noncompliant: setting loose POSIX file permissions
        /*
        const fs = require('fs');
        fs.chmodSync('/tmp/fs', 0o777); // Noncompliant
        */
        console.log('Triggering SonarJS rule: javascript:S2612');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2612";
        return example;
    }
}