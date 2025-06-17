// This component triggers VF/Lightning security hotspot: unsecure-js-dependency
import { LightningElement } from 'lwc';

export default class unsecurejsdependencyHotspot extends LightningElement {
    connectedCallback() {
        // Triggers unsecure-js-dependency - Usage of potentially vulnerable JS components
        this.initializeVulnerableComponents();
    }
    
    initializeVulnerableComponents() {
        // Simulated usage of JavaScript components with known CVEs
        // This would be flagged by security scanners
        
        try {
            // Example: Using eval-like functions (security risk)
            const dynamicCode = 'console.log("Dynamic execution")';
            // eval(dynamicCode); // Commented to prevent actual execution
            
            // Example: DOM manipulation that could lead to XSS
            if (typeof document !== 'undefined') {
                // document.innerHTML = userInput; // Potential XSS vector
            }
            
            // Example: Insecure random number generation
            const weakRandom = Math.random(); // Not cryptographically secure
            console.log('Weak random:', weakRandom);
            
        } catch (error) {
            console.error('Security-sensitive operation failed:', error);
        }
    }
    
    handleUserInput(event) {
        // Security hotspot: Handling user input without proper validation
        const userInput = event.target.value;
        
        // This could be flagged as a security hotspot
        this.processUserInput(userInput);
    }
    
    processUserInput(input) {
        // Processing user input without sanitization
        console.log('Processing user input:', input);
        
        // Security-sensitive: Direct usage of user input
        this.sensitiveData = input;
    }
}