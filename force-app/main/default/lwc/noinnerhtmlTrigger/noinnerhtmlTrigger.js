// This component is generated to trigger the rule: cs-js:no-inner-html
import { LightningElement } from 'lwc';

export default class noinnerhtmlTrigger extends LightningElement {
    // Rule: disallow innerHTML usage
    
    connectedCallback() {
        // This component triggers: cs-js:no-inner-html
        console.log('Triggering rule: cs-js:no-inner-html');
        
        // Antipattern 1: Using innerHTML directly
        const element = this.template.querySelector('.content');
        if (element) {
            element.innerHTML = '<p>This is dangerous content</p>'; // Violation: using innerHTML
        }
        
        // Antipattern 2: Using innerHTML with user input (XSS risk)
        const userInput = '<script>alert("XSS")</script>';
        const container = this.template.querySelector('.user-content');
        if (container) {
            container.innerHTML = userInput; // Violation: innerHTML with user input
        }
        
        // Antipattern 3: Using innerHTML in event handler
        this.handleInnerHtmlUsage();
        
        // Antipattern 4: Using outerHTML (also dangerous)
        const wrapper = this.template.querySelector('.wrapper');
        if (wrapper) {
            wrapper.outerHTML = '<div class="new-wrapper">Replaced content</div>'; // Violation: using outerHTML
        }
        
        // Antipattern 5: Using insertAdjacentHTML (also risky)
        const target = this.template.querySelector('.target');
        if (target) {
            target.insertAdjacentHTML('beforeend', '<span>Inserted HTML</span>'); // Violation: insertAdjacentHTML
        }
    }
    
    handleInnerHtmlUsage() {
        // Antipattern 6: innerHTML in method
        const methodElement = this.template.querySelector('.method-content');
        if (methodElement) {
            methodElement.innerHTML = '<strong>Method innerHTML</strong>'; // Violation
        }
        
        // Antipattern 7: Dynamic innerHTML construction
        const dynamicContent = '<em>Dynamic</em> <u>content</u>';
        const dynamicElement = this.template.querySelector('.dynamic');
        if (dynamicElement) {
            dynamicElement.innerHTML = dynamicContent; // Violation
        }
    }
    
    handleClick() {
        // Antipattern 8: innerHTML in event handler
        const clickElement = this.template.querySelector('.click-content');
        if (clickElement) {
            clickElement.innerHTML = '<button>Dangerous Button</button>'; // Violation
        }
        
        // Antipattern 9: Conditional innerHTML usage
        const shouldUpdate = true;
        if (shouldUpdate) {
            const conditionalElement = this.template.querySelector('.conditional');
            if (conditionalElement) {
                conditionalElement.innerHTML = '<div>Conditional HTML</div>'; // Violation
            }
        }
    }
}
