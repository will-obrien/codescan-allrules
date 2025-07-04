// This component triggers SonarJS rule S105
import { LightningElement } from 'lwc';

export default class s105Trigger extends LightningElement {
    badIndentation() {
		var a = 10;	// Triggers S105 - tabs used instead of spaces
		if (a > 5) {
			console.log('Using tabs');	// Triggers S105
		}
    }

    connectedCallback() {
        // BAD: Tab character used
        let str = 'Hello\tWorld';
    }
}