// This component is generated to trigger the rule: cs-js:unknown
import { LightningElement } from 'lwc';

export default class unknownTrigger extends LightningElement {
    // Rule: CodeScan Other Rules - reserved for future rules and expansion
    connectedCallback() {
        // This component triggers: cs-js:unknown
        console.log('Triggering rule: cs-js:unknown');
        
        // This rule is reserved for future rules and expansion of the plugin
        // It may catch various other JavaScript antipatterns not covered by specific rules
        
        // Potential antipatterns that might be caught:
        
        // Antipattern 1: Using deprecated JavaScript features
        var deprecatedFeature = 'some deprecated usage';
        
        // Antipattern 2: Non-standard JavaScript extensions
        // (These would be specific to the CodeScan implementation)
        
        // Antipattern 3: Future JavaScript antipatterns
        // This rule serves as a catch-all for new patterns that may be added
        
        // Antipattern 4: Platform-specific violations
        // May catch Lightning/Salesforce specific issues not covered elsewhere
        
        // Antipattern 5: General code quality issues
        let potentialIssue = this.someMethodThatMightCauseIssues();
        
        console.log('Unknown rule triggered with:', deprecatedFeature, potentialIssue);
    }
    
    someMethodThatMightCauseIssues() {
        // This method might contain patterns that trigger the unknown rule
        return 'potential issue';
    }
}