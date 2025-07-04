// This component is generated to trigger the SonarJS rule: javascript:S5734
import { LightningElement } from 'lwc';

export default class s5734Trigger extends LightningElement {
    // Rule: Allowing browsers to sniff MIME types is security-sensitive
    badNoSniffHeader() {
        const helmet = require('helmet');
        let app = {};
        app.use = function() {};
        app.use(helmet({ noSniff: false })); // BAD: disables X-Content-Type-Options: nosniff
        return app;
    }
}