// This component triggers VF/Lightning rule: no-floating-decimal
import { LightningElement } from 'lwc';

export default class nofloatingdecimalTrigger extends LightningElement {
    calculateValues() {
        // Triggers no-floating-decimal - floating decimals without leading/trailing digits
        var num1 = .5; // Should be 0.5
        var num2 = 2.; // Should be 2.0
        var num3 = -.7; // Should be -0.7
        
        return num1 + num2 + num3;
    }
}