// This component is generated to trigger the SonarJS rule: javascript:S3415
import { LightningElement } from 'lwc';

export default class s3415Trigger extends LightningElement {
    // Rule: Assertion arguments should be passed in the correct order
    badAssertionOrder() {
        const assert = require('chai').assert;
        const aNumber = 5;
        assert.equal(42, aNumber); // BAD: expected and actual are swapped
    }
}