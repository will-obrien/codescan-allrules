// This component is generated to trigger the SonarJS rule: javascript:S2598
import { LightningElement } from 'lwc';

export default class s2598Trigger extends LightningElement {
    // Rule: File uploads should be restricted
    connectedCallback() {
        // This component triggers: javascript:S2598
        console.log('Triggering SonarJS rule: javascript:S2598');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2598";
        return example;
    }

    // Antipattern for S2598: File uploads should be restricted
    badFileUpload() {
        const multer = require('multer');
        let diskStorage = multer.diskStorage({ // BAD: no destination specified
            filename: (req, file, cb) => {
                const buf = Buffer.from('test');
                cb(null, buf.toString('hex'));
            }
        });
        let diskupload = multer({
            storage: diskStorage,
        });
        return diskupload;
    }
}