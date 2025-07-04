// This component is generated to trigger the SonarJS rule: javascript:S5742
import { LightningElement } from 'lwc';

export default class s5742Trigger extends LightningElement {
    // Rule: Disabling Certificate Transparency monitoring is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5742
        console.log('Triggering SonarJS rule: javascript:S5742');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5742";
        return example;
    }

    // Antipattern for S5742: Disabling Certificate Transparency monitoring is security-sensitive
    badExpectCt() {
        const helmet = require('helmet');
        let app = {};
        app.use = function() {};
        app.use(helmet({ expectCt: false })); // BAD: disables Expect-CT
        return app;
    }
}