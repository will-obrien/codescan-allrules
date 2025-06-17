// This component triggers VF/Lightning rule: no-console
import { LightningElement } from 'lwc';

export default class noconsoleTrigger extends LightningElement {
    connectedCallback() {
        // Triggers no-console - console usage in production code
        console.log("Log a debug level message.");
        console.warn("Log a warn level message.");
        console.error("Log an error level message.");
        console.info("Log an info message.");
    }
}