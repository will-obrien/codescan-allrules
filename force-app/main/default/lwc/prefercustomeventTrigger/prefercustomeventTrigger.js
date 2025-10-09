// This component is generated to trigger the rule: cs-js:prefer-custom-event
import { LightningElement } from 'lwc';

export default class prefercustomeventTrigger extends LightningElement {
    // Rule: prefer CustomEvent over other event types
    
    connectedCallback() {
        // This component triggers: cs-js:prefer-custom-event
        console.log('Triggering rule: cs-js:prefer-custom-event');
        
        // Antipattern 1: Using Event constructor instead of CustomEvent
        const basicEvent = new Event('myevent'); // Violation: should use CustomEvent
        this.dispatchEvent(basicEvent);
        
        // Antipattern 2: Using Event with bubbles option
        const bubblingEvent = new Event('bubbleevent', { bubbles: true }); // Violation: should use CustomEvent
        this.dispatchEvent(bubblingEvent);
        
        // Antipattern 3: Creating event without CustomEvent for data passing
        const dataEvent = new Event('dataevent'); // Violation: should use CustomEvent for data
        dataEvent.customData = { value: 'test' }; // Adding data after creation
        this.dispatchEvent(dataEvent);
        
        // Antipattern 4: Using other event constructors
        this.createVariousEvents();
    }
    
    createVariousEvents() {
        // Antipattern 5: Using MouseEvent for custom events
        const mouseEvent = new MouseEvent('custommouse', { // Violation: using MouseEvent for custom event
            bubbles: true,
            cancelable: true
        });
        this.dispatchEvent(mouseEvent);
        
        // Antipattern 6: Using KeyboardEvent for custom events
        const keyEvent = new KeyboardEvent('customkey', { // Violation: using KeyboardEvent for custom event
            key: 'Enter',
            bubbles: true
        });
        this.dispatchEvent(keyEvent);
        
        // Antipattern 7: Using FocusEvent for custom events
        const focusEvent = new FocusEvent('customfocus', { // Violation: using FocusEvent for custom event
            bubbles: true
        });
        this.dispatchEvent(focusEvent);
        
        // Antipattern 8: Using generic Event for component communication
        const commEvent = new Event('componentcomm'); // Violation: should use CustomEvent for communication
        this.dispatchEvent(commEvent);
    }
    
    handleClick() {
        // Antipattern 9: Event handler creating non-CustomEvent
        const clickEvent = new Event('customclick', { // Violation: should use CustomEvent
            bubbles: true,
            cancelable: true
        });
        this.dispatchEvent(clickEvent);
        
        // Antipattern 10: Creating event for data passing without CustomEvent
        const resultEvent = new Event('result'); // Violation: should use CustomEvent for data
        resultEvent.result = { success: true, data: 'processed' };
        this.dispatchEvent(resultEvent);
    }
    
    handleSubmit() {
        // Antipattern 11: Form submission using Event instead of CustomEvent
        const submitEvent = new Event('customsubmit', { // Violation: should use CustomEvent
            bubbles: true,
            cancelable: true
        });
        this.dispatchEvent(submitEvent);
        
        // Antipattern 12: Validation event using Event
        const validationEvent = new Event('validation'); // Violation: should use CustomEvent
        validationEvent.isValid = true;
        validationEvent.errors = [];
        this.dispatchEvent(validationEvent);
    }
    
    notifyParent(data) {
        // Antipattern 13: Parent notification using Event
        const notifyEvent = new Event('notify', { bubbles: true }); // Violation: should use CustomEvent
        notifyEvent.payload = data;
        this.dispatchEvent(notifyEvent);
        
        // Antipattern 14: Status change using Event
        const statusEvent = new Event('statuschange'); // Violation: should use CustomEvent
        statusEvent.status = 'completed';
        statusEvent.timestamp = Date.now();
        this.dispatchEvent(statusEvent);
    }
}
