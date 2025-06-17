// This component triggers VF/Lightning rule: ecma-intrinsics
import { LightningElement } from 'lwc';

export default class ecmaintrinsicsTrigger extends LightningElement {
    connectedCallback() {
        // Triggers ecma-intrinsics - modifying intrinsic types
        String.doSomething = function() {
            return 'custom method';
        }; // Violation: modifying intrinsic String type
        
        Array.customMethod = function() {
            return [];
        }; // Another intrinsic modification
    }
}