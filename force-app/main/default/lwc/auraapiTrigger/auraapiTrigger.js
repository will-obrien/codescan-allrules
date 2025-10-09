// This component is generated to trigger the rule: cs-js:aura-api
import { LightningElement } from 'lwc';

export default class auraapiTrigger extends LightningElement {
    // Rule: validate Aura API - disallows private and undocumented features
    connectedCallback() {
        // This component triggers: cs-js:aura-api
        console.log('Triggering rule: cs-js:aura-api');
        
        // Antipattern 1: Using Aura instead of $A (incorrect)
        Aura.notGreat(); // Use $A instead of Aura
        
        // Antipattern 2: Using non-existent methods on $A.util
        $A.util.notUtil(); // $A.util does not contain notUtil
        
        // Antipattern 3: Using private/undocumented Aura methods
        $A.getContext().getGlobalValueProviders().get("$Label").getValue("c.TestLabel");
        
        // Antipattern 4: Accessing private properties
        $A.componentService.registry.dynamicNamespaces = {};
    }
}