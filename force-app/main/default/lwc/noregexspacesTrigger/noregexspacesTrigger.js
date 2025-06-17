// This component triggers VF/Lightning rule: no-regex-spaces
import { LightningElement } from 'lwc';

export default class noregexspacesTrigger extends LightningElement {
    validateInput() {
        // Triggers no-regex-spaces - multiple spaces in regex
        var re = /foo   bar/; // Should be /foo {3}bar/
        var anotherRe = new RegExp("test   pattern"); // Multiple spaces
        return re.test('foo   bar');
    }
}