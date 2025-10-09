// This component triggers the ecma-intrinsics rule
import { LightningElement } from 'lwc';

export default class ecmaintrinsicsTrigger extends LightningElement {
    connectedCallback() {
        String.customMethod = function() {}; // Modifying intrinsic String - triggers rule
        Array.prototype.nonStandard = "test"; // Non-standard extension - triggers rule
    }
}