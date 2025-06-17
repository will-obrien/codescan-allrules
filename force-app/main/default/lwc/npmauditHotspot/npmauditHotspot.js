// This component triggers VF/Lightning security hotspot: npm-audit
import { LightningElement } from 'lwc';

export default class npmauditHotspot extends LightningElement {
    connectedCallback() {
        // Triggers npm-audit - This component would be flagged if package.json
        // contains vulnerable dependencies
        console.log('Component with potential npm security vulnerabilities');
        
        // Simulated usage of potentially vulnerable libraries
        this.loadExternalLibraries();
    }
    
    loadExternalLibraries() {
        // This would trigger npm-audit if vulnerable versions are used
        // Examples of libraries that might have vulnerabilities:
        // - lodash < 4.17.21 (prototype pollution)
        // - moment < 2.29.4 (ReDoS)
        // - jquery < 3.5.0 (XSS)
        
        console.log('Loading external libraries with potential vulnerabilities');
    }
    
    handleSensitiveOperation() {
        // Security-sensitive operations that might be flagged
        console.log('Performing security-sensitive operations');
    }
}