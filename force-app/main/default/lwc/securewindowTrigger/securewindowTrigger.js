// This component is generated to trigger the rule: cs-js:secure-window
import { LightningElement } from 'lwc';

export default class securewindowTrigger extends LightningElement {
    // Rule: validate window global access
    connectedCallback() {
        // This component triggers: cs-js:secure-window
        console.log('Triggering rule: cs-js:secure-window');
        
        // Antipattern 1: Using window.top (disallowed)
        window.top; // Violation: window.top is disallowed
        
        // Antipattern 2: Using window.setImmediate() (disallowed)
        window.setImmediate(); // Violation: window.setImmediate() is disallowed
        
        // Antipattern 3: Accessing window.parent (disallowed)
        let parent = window.parent; // Violation: window.parent access
        
        // Antipattern 4: Using window.opener (disallowed)
        let opener = window.opener; // Violation: window.opener access
        
        // Antipattern 5: Accessing window.frames (disallowed)
        let frames = window.frames; // Violation: window.frames access
        
        // Antipattern 6: Using window.external (disallowed)
        window.external.AddFavorite(); // Violation: window.external usage
        
        // Antipattern 7: Accessing window.history.back() inappropriately
        window.history.back(); // May be disallowed depending on context
        
        // Antipattern 8: Using window.postMessage to untrusted origins
        window.postMessage('data', '*'); // Violation: posting to any origin
    }
}