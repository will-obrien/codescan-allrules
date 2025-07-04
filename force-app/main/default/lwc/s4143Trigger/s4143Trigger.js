// This component is generated to trigger the SonarJS rule: javascript:S4143
import { LightningElement } from 'lwc';

export default class s4143Trigger extends LightningElement {
    // Rule: Collection elements should not be replaced unconditionally
    badCollectionReplacement() {
        let fruits = [];
        fruits[1] = "banana";
        fruits[1] = "apple";  // BAD: value on index 1 is overwritten
        let myMap = new Map();
        myMap.set("key", 1);
        myMap.set("key", 2); // BAD: value for key "key" is replaced
        let mySet = new Set();
        mySet.add(1);
        mySet.add(1); // BAD: element is already in the set
        return { fruits, myMap, mySet };
    }
}