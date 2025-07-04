// This component is generated to trigger the SonarJS rule: javascript:S4502
import { LightningElement } from 'lwc';

export default class s4502Trigger extends LightningElement {
    // Rule: Disabling CSRF protections is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4502
        console.log('Triggering SonarJS rule: javascript:S4502');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4502";
        return example;
    }

    // Antipattern for S4502: Disabling CSRF protections is security-sensitive
    badCsrfProtection() {
        const csrf = require('csurf');
        let app = {};
        app.use = function() {};
        app.use(csrf({ cookie: true, ignoreMethods: ['POST', 'GET'] })); // BAD: disables CSRF protection for POST
        return app;
    }
}