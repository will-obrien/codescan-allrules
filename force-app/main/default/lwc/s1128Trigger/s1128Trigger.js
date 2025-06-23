// This component is generated to trigger the SonarJS rule: javascript:S1128
import { LightningElement, track, api, wire } from 'lwc';  // BAD: api and wire are unused - triggers S1128
import { getRecord } from 'lightning/uiRecordApi';  // BAD: Unused import - triggers S1128
import { ShowToastEvent } from 'lightning/platformShowToastEvent';  // BAD: Unused import - triggers S1128
import { NavigationMixin } from 'lightning/navigation';  // BAD: Unused import - triggers S1128
import { refreshApex } from '@salesforce/apex';  // BAD: Unused import - triggers S1128
import { createRecord, updateRecord, deleteRecord } from 'lightning/uiRecordApi';  // BAD: All unused - triggers S1128
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';  // BAD: All unused - triggers S1128
import USER_ID from '@salesforce/user/Id';  // BAD: Unused import - triggers S1128
import ACCOUNT_OBJECT from '@salesforce/schema/Account';  // BAD: Unused import - triggers S1128
import NAME_FIELD from '@salesforce/schema/Account.Name';  // BAD: Unused import - triggers S1128
import PHONE_FIELD from '@salesforce/schema/Account.Phone';  // BAD: Unused import - triggers S1128
import EMAIL_FIELD from '@salesforce/schema/Account.Email__c';  // BAD: Unused import - triggers S1128

export default class s1128Trigger extends LightningElement {
    // Rule: Unnecessary imports should be removed
    @track userData = {
        name: 'John Doe',
        email: 'john@example.com'
    };
    
    connectedCallback() {
        console.log('Triggering SonarJS rule: javascript:S1128 - Unnecessary imports should be removed');
        this.processUserData();
        this.handleBusinessLogic();
    }
    
    // Only using basic LightningElement and track from the imports
    // All other imports are unused and should trigger S1128
    processUserData() {
        // Only using track decorator and basic component functionality
        this.userData.name = 'Updated Name';
        console.log('User data processed:', this.userData);
    }
    
    handleBusinessLogic() {
        // Simple logic that doesn't use any of the imported modules
        const isValid = this.userData.name && this.userData.email;
        console.log('User is valid:', isValid);
        
        // Not using any of the imported Lightning platform features:
        // - getRecord (unused)
        // - ShowToastEvent (unused)
        // - NavigationMixin (unused) 
        // - refreshApex (unused)
        // - createRecord, updateRecord, deleteRecord (unused)
        // - getObjectInfo, getPicklistValues (unused)
        // - USER_ID (unused)
        // - Schema imports (unused)
    }
    
    // Example of what would make imports necessary (but we're NOT doing this to trigger S1128):
    // 
    // showToast() {
    //     const event = new ShowToastEvent({  // This would use ShowToastEvent
    //         title: 'Success',
    //         message: 'Record saved'
    //     });
    //     this.dispatchEvent(event);
    // }
    //
    // @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD] })  // This would use wire, getRecord, NAME_FIELD
    // wiredRecord;
    //
    // async createAccount() {
    //     const fields = {};
    //     fields[NAME_FIELD.fieldApiName] = 'Test Account';  // This would use NAME_FIELD
    //     const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };  // This would use ACCOUNT_OBJECT
    //     await createRecord(recordInput);  // This would use createRecord
    // }
}