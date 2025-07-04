// This component triggers SonarJS rule S3686
import { LightningElement } from 'lwc';

export default class s3686Trigger extends LightningElement {
    connectedCallback() {
        function getNum() {
            return 5;
        }
        function Num(numeric, alphabetic) {
            this.numeric = numeric;
            this.alphabetic = alphabetic;
        }
        var myFirstNum = getNum();
        var my2ndNum = new getNum();  // BAD: called with new
        var myNumObj1 = new Num();
        var myNumObj2 = Num();  // BAD: called without new
    }
}