// This component is generated to trigger the SonarJS rule: javascript:S1313
import { LightningElement } from 'lwc';

export default class s1313Trigger extends LightningElement {
    // Antipattern for S1313: Using hardcoded IP addresses is security-sensitive
    connectedCallback() {
        // BAD: Hardcoded IP address
        let ip = "192.168.12.42";
        // Example use
        this.connectToIp(ip);
    }
    connectToIp(ip) {
        // ...
    }
}