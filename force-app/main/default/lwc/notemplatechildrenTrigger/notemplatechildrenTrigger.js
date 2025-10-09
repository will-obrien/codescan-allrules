// This component is generated to trigger the rule: cs-js:no-template-children
import { LightningElement } from 'lwc';

export default class notemplatechildrenTrigger extends LightningElement {
    // Rule: disallow accessing template children directly
    
    connectedCallback() {
        // This component triggers: cs-js:no-template-children
        console.log('Triggering rule: cs-js:no-template-children');
        
        // Antipattern 1: Accessing template.children directly
        const children = this.template.children; // Violation: accessing template.children
        console.log('Template children:', children);
        
        // Antipattern 2: Iterating over template.children
        for (let child of this.template.children) { // Violation: iterating template.children
            console.log('Child element:', child);
        }
        
        // Antipattern 3: Getting children length
        const childCount = this.template.children.length; // Violation: accessing children.length
        console.log('Child count:', childCount);
        
        // Antipattern 4: Accessing specific child by index
        const firstChild = this.template.children[0]; // Violation: accessing children by index
        console.log('First child:', firstChild);
        
        // Antipattern 5: Using children in array methods
        const childArray = Array.from(this.template.children); // Violation: converting children to array
        console.log('Child array:', childArray);
        
        // Antipattern 6: Accessing children in method
        this.processTemplateChildren();
    }
    
    processTemplateChildren() {
        // Antipattern 7: Method that accesses template.children
        const allChildren = this.template.children; // Violation: accessing children in method
        
        // Antipattern 8: Filtering children
        const divChildren = Array.from(this.template.children).filter(child => 
            child.tagName === 'DIV' // Violation: filtering template children
        );
        
        // Antipattern 9: Mapping over children
        const childData = Array.from(this.template.children).map(child => ({ // Violation: mapping children
            tag: child.tagName,
            id: child.id
        }));
        
        console.log('Processed children:', divChildren, childData);
        return allChildren;
    }
    
    handleClick() {
        // Antipattern 10: Event handler accessing template.children
        const clickChildren = this.template.children; // Violation: accessing children in handler
        
        // Antipattern 11: Modifying children in event handler
        if (this.template.children.length > 0) { // Violation: checking children length
            this.template.children[0].style.color = 'red'; // Violation: modifying first child
        }
        
        // Antipattern 12: Looping through children in handler
        for (let i = 0; i < this.template.children.length; i++) { // Violation: loop using children
            const child = this.template.children[i]; // Violation: accessing child by index
            child.classList.add('highlighted'); // Modifying child
        }
        
        console.log('Click handler processed children:', clickChildren);
    }
    
    renderedCallback() {
        // Antipattern 13: Accessing children in lifecycle hook
        const renderedChildren = this.template.children; // Violation: accessing children in lifecycle
        
        // Antipattern 14: Using children for DOM manipulation
        if (renderedChildren.length > 1) { // Violation: using children length
            renderedChildren[1].addEventListener('click', this.handleChildClick); // Violation: accessing child
        }
        
        console.log('Rendered callback children:', renderedChildren);
    }
    
    handleChildClick = () => {
        console.log('Child clicked');
    }
}
