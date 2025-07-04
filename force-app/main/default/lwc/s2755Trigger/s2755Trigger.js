// This component is generated to trigger the SonarJS rule: javascript:S2755
import { LightningElement } from 'lwc';

export default class s2755Trigger extends LightningElement {
    // Rule: XML parsers should not be vulnerable to XXE attacks
    connectedCallback() {
        // This component triggers: javascript:S2755
        console.log('Triggering SonarJS rule: javascript:S2755');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2755";
        return example;
    }

    // Antipattern for S2755: XML parsers should not be vulnerable to XXE attacks
    badXXE() {
        // BAD: XXE vulnerability example (Node.js style)
        const libxmljs = require('libxmljs');
        var xml = '<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]><foo>&xxe;</foo>';
        var xmlDoc = libxmljs.parseXmlString(xml, { noblanks: true, noent: true, nocdata: true }); // BAD: noent set to true
        return xmlDoc;
    }
}