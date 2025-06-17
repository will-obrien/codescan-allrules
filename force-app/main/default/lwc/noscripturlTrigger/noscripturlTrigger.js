// This component triggers VF/Lightning rule: no-script-url
import { LightningElement } from 'lwc';

export default class noscripturlTrigger extends LightningElement {
    handleClick() {
        // Triggers no-script-url - javascript: URL
        if (typeof window !== 'undefined') {
            window.location.href = "javascript:void(0)";
        }
    }
}