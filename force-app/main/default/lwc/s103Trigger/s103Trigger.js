// This component is generated to trigger the SonarJS rule: javascript:S103
import { LightningElement, track, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class s103Trigger extends LightningElement {
    // Rule: Lines should not be too long
    @track someVeryLongPropertyNameThatExceedsTheTypicalLineLengthLimitAndShouldTriggerTheSonarJSRuleForLinesTooLong = 'This is a very long string that when combined with the property name should exceed the maximum line length';
    
    connectedCallback() {
        // This component triggers: javascript:S103 - Lines should not be too long
        console.log('Triggering SonarJS rule: javascript:S103 - Lines should not be too long by having extremely long lines that exceed the recommended character limit');
        
        // Extremely long line that should trigger the rule (typically >120 or >140 characters)
        const extremelyLongVariableNameThatExceedsTheRecommendedLineLengthLimitAndShouldDefinitelyTriggerTheSonarJSRuleForLinesTooLong = 'This is an example of a line that is intentionally very long to trigger the SonarJS rule S103 which flags lines that are too long and make code harder to read and understand';
        
        // Another long line with method chaining
        this.someVeryLongPropertyNameThatExceedsTheTypicalLineLengthLimitAndShouldTriggerTheSonarJSRuleForLinesTooLong.toString().toUpperCase().toLowerCase().substring(0, 50).trim().replace(/\s+/g, ' ').split(' ').join('-').concat('-suffix');
        
        // Long conditional statement
        if (extremelyLongVariableNameThatExceedsTheRecommendedLineLengthLimitAndShouldDefinitelyTriggerTheSonarJSRuleForLinesTooLong && this.someVeryLongPropertyNameThatExceedsTheTypicalLineLengthLimitAndShouldTriggerTheSonarJSRuleForLinesTooLong) {
            console.log('This conditional statement is also intentionally very long to trigger the SonarJS rule S103 for lines that exceed the maximum recommended character count');
        }
        
        return extremelyLongVariableNameThatExceedsTheRecommendedLineLengthLimitAndShouldDefinitelyTriggerTheSonarJSRuleForLinesTooLong;
    }
    
    // Method with extremely long signature
    handleVeryLongMethodNameThatExceedsTheTypicalLineLengthLimitAndShouldTriggerTheSonarJSRuleForLinesTooLong(parameterWithVeryLongNameThatExceedsTheTypicalLineLengthLimit, anotherParameterWithVeryLongNameThatExceedsTheTypicalLineLengthLimit) {
        // Long assignment statement
        const resultOfVeryLongOperationThatExceedsTheTypicalLineLengthLimitAndShouldTriggerTheSonarJSRuleForLinesTooLong = parameterWithVeryLongNameThatExceedsTheTypicalLineLengthLimit + anotherParameterWithVeryLongNameThatExceedsTheTypicalLineLengthLimit + ' - This concatenation creates a very long line';
        return resultOfVeryLongOperationThatExceedsTheTypicalLineLengthLimitAndShouldTriggerTheSonarJSRuleForLinesTooLong;
    }
}