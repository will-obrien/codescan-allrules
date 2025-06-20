// This component triggers the secure-document rule
import { LightningElement } from 'lwc';

export default class securedocumentTrigger extends LightningElement {
    connectedCallback() {
        const curScript = document.currentScript; // Unsupported document API - triggers rule
        document.write("content"); // Unsupported document method - triggers rule
    }
}