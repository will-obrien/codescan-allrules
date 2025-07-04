// This component is generated to trigger the SonarJS rule: javascript:S5843
import { LightningElement } from 'lwc';

export default class s5843Trigger extends LightningElement {
    // Rule: Regular expressions should not be too complicated
    connectedCallback() {
        // This component triggers: javascript:S5843
        console.log('Triggering SonarJS rule: javascript:S5843');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5843";
        return example;
    }

    // Antipattern for S5843: Regular expressions should not be too complicated
    badComplexRegex() {
        const datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return datePattern;
    }
}