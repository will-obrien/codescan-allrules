// This component is generated to trigger the SonarJS rule: javascript:S1862
import { LightningElement } from 'lwc';

export default class s1862Trigger extends LightningElement {
    // Rule: Related "if/else if" statements should not have the same condition
    connectedCallback() {
        // This component triggers: javascript:S1862
        console.log('Triggering SonarJS rule: javascript:S1862');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1862";
        return example;
    }

    // Antipattern for S1862: Related "if/else if" statements should not have the same condition
    connectedCallback() {
        let param = 1;
        if (param == 1)
            this.openWindow();
        else if (param == 2)
            this.closeWindow();
        else if (param == 1) // BAD: duplicate condition
            this.moveWindowToTheBackground();
    }
    openWindow() {}
    closeWindow() {}
    moveWindowToTheBackground() {}
}