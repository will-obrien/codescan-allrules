// This component triggers VF/Lightning rule: aura-api
import { LightningElement } from 'lwc';

export default class auraapiTrigger extends LightningElement {
    connectedCallback() {
        // Triggers aura-api - using deprecated/private Aura API
        try {
            Aura.notGreat(); // Should use $A instead of Aura
        } catch(e) {
            console.log('Aura API error');
        }
        
        try {
            $A.util.notUtil(); // $A.util does not contain notUtil
        } catch(e) {
            console.log('Invalid $A.util method');
        }
    }
}