// This component triggers SonarJS rule S3686
import { LightningElement } from 'lwc';

export default class s3686Trigger extends LightningElement {
    confusingConstructor() {
        function getNum() {
            return 5;
        }
        
        var myFirstNum = getNum();
        var my2ndNum = new getNum(); // Triggers S3686 - inconsistent usage
    }
}