// This component is generated to trigger the rule: cs-js:handle-callback-err
import { LightningElement } from 'lwc';

export default class handlecallbackerrTrigger extends LightningElement {
    // Rule: require error handling in callbacks
    connectedCallback() {
        // This component triggers: cs-js:handle-callback-err
        console.log('Triggering rule: cs-js:handle-callback-err');
        
        function callbackErrorHandlingExamples() {
            // Bad: Callback function that doesn't handle the error parameter
            function loadData(err, data) {
                doSomething();  // Forgot to handle error
                console.log("Data loaded:", data);
            }
            
            // Bad: Another callback without error handling
            function processFile(error, content) {
                // Error parameter is ignored
                var processed = content.toUpperCase();
                return processed;
            }
            
            // Bad: Callback in async operation without error handling
            function fetchUserData(err, userData) {
                // Error is not checked
                displayUser(userData);
                updateUI(userData);
            }
            
            // Bad: Multiple parameter callback ignoring error
            function saveDocument(err, result, metadata) {
                // err parameter is completely ignored
                console.log("Save result:", result);
                console.log("Metadata:", metadata);
            }
            
            // Bad: Error parameter present but not used
            function validateInput(validationError, isValid) {
                if (isValid) {
                    console.log("Input is valid");
                } else {
                    console.log("Input is invalid");
                }
                // validationError parameter is ignored
            }
            
            // Bad: Nested callback without error handling
            function processChain(err, step1Result) {
                processStep2(step1Result, function(err2, step2Result) {
                    // Both err and err2 are ignored
                    finalizeProcess(step2Result);
                });
            }
            
            // Simulating callback usage
            console.log("Callback functions defined without proper error handling");
            loadData(null, "test data");
            processFile(null, "file content");
        }
    }
}