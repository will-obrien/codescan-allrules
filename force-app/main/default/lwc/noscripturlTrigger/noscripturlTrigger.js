// This component is generated to trigger the rule: cs-js:no-script-url
import { LightningElement } from 'lwc';

export default class noscripturlTrigger extends LightningElement {
    // Rule: disallow `javascript:` urls
    connectedCallback() {
        // This component triggers: cs-js:no-script-url
        console.log('Triggering rule: cs-js:no-script-url');
        
        // Antipattern 1: javascript: URL in location.href
        location.href = "javascript:void(0)"; // Violation
        
        // Antipattern 2: javascript: URL in window.location
        window.location = "javascript:alert('test')"; // Violation
        
        // Antipattern 3: javascript: URL in assignment
        let url = "javascript:console.log('unsafe')"; // Violation
        
        // Antipattern 4: javascript: URL in function call
        this.navigateToUrl("javascript:doSomething()"); // Violation
        
        // Antipattern 5: javascript: URL with encoded characters
        let encodedUrl = "javascript:eval('alert(1)')"; // Violation
    }
    
    navigateToUrl(url) {
        // This would normally navigate to the URL
        console.log('Navigating to:', url);
    }
}