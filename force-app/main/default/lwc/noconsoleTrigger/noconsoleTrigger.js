// This component triggers the no-console rule
import { LightningElement } from 'lwc';

export default class noconsoleTrigger extends LightningElement {
    connectedCallback() {
        // This component triggers: cs-js:no-console

        var actualInformation = "This is actual information";
        
        // Antipattern 1: console.log usage
        console.log('This console.log triggers the no-console rule by exposing ' + actualInformation); // Violation
        
        // Antipattern 2: console.error usage
        console.error('Error message'); // Violation
        
        // Antipattern 3: console.warn usage
        console.warn('Warning message'); // Violation
        
        // Antipattern 4: console.info usage
        console.info('Info message'); // Violation
        
        // Antipattern 5: console.debug usage
        console.debug('Debug message'); // Violation
        
        // Antipattern 6: console.trace usage
        console.trace('Trace message'); // Violation
        
        // Antipattern 7: console.table usage
        console.table(['data']); // Violation
        
        // Antipattern 8: console.time usage
        console.time('timer'); // Violation
        console.timeEnd('timer'); // Violation
        
        // Antipattern 9: console.group usage
        console.group('group'); // Violation
        console.groupEnd(); // Violation
    }
}