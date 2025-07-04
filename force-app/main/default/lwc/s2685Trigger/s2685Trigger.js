// This component is generated to trigger the SonarJS rule: javascript:S2685
import { LightningElement } from 'lwc';

export default class s2685Trigger extends LightningElement {
    // Rule: "arguments.caller" and "arguments.callee" should not be used
    connectedCallback() {
        // This component triggers: javascript:S2685
        console.log('Triggering SonarJS rule: javascript:S2685');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2685";
        return example;
    }

    // Antipattern for S2685: "arguments.caller" and "arguments.callee" should not be used
    badArgumentsCallerCallee() {
        function whoCalled() {
            if (arguments.caller == null)
                console.log('I was called from the global scope.');
            else
                console.log(arguments.caller + ' called me!');
            console.log(whoCalled.caller);
            console.log(whoCalled.arguments);
        }
        whoCalled();
    }
}