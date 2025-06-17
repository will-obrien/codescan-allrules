// This component triggers VF/Lightning rule: no-octal-escape
import { LightningElement } from 'lwc';

export default class nooctalescapeTrigger extends LightningElement {
    connectedCallback() {
        // Triggers no-octal-escape - octal escape sequences
        var copyright = "Copyright \251"; // Should use \u00A9
        var another = "Some text \377"; // Another octal escape
        console.log(copyright, another);
    }
}