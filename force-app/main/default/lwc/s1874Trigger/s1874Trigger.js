// This component is generated to trigger the SonarJS rule: javascript:S1874
import { LightningElement } from 'lwc';

export default class s1874Trigger extends LightningElement {
    // Rule: Deprecated APIs should not be used
    connectedCallback() {
        // This component triggers: javascript:S1874
        // Noncompliant: Use of deprecated API
        getLanguageService().getSyntacticClassifications('file', {}); // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S1874');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1874";
        return example;
    }
}