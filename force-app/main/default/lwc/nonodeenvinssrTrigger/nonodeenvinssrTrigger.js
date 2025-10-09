// This component is generated to trigger the rule: cs-js:no-node-env-in-ssr
import { LightningElement } from 'lwc';

export default class nonodeenvinssrTrigger extends LightningElement {
    // Rule: disallow process.env usage in SSR context
    
    connectedCallback() {
        // This component triggers: cs-js:no-node-env-in-ssr
        console.log('Triggering rule: cs-js:no-node-env-in-ssr');
        
        // Antipattern 1: Accessing process.env directly
        const nodeEnv = process.env.NODE_ENV; // Violation: accessing process.env in SSR
        console.log('NODE_ENV:', nodeEnv);
        
        // Antipattern 2: Accessing specific environment variables
        const apiUrl = process.env.API_URL; // Violation: accessing process.env.API_URL
        const debugMode = process.env.DEBUG; // Violation: accessing process.env.DEBUG
        
        // Antipattern 3: Using process.env in conditional logic
        if (process.env.NODE_ENV === 'development') { // Violation: process.env in condition
            console.log('Development mode');
        }
        
        // Antipattern 4: Using process.env in method calls
        this.configureEnvironment(process.env.CONFIG_VALUE); // Violation: passing process.env
        
        // Antipattern 5: Destructuring process.env
        const { PORT, HOST } = process.env; // Violation: destructuring process.env
        console.log('Server config:', PORT, HOST);
        
        // Antipattern 6: Using process.env in template literals
        const message = `Running in ${process.env.NODE_ENV} mode`; // Violation: process.env in template
        console.log(message);
        
        // Antipattern 7: Storing process.env in variables
        const envVars = process.env; // Violation: storing entire process.env
        console.log('Environment variables:', envVars);
        
        console.log('Environment access completed:', apiUrl, debugMode);
    }
    
    configureEnvironment(configValue) {
        // Antipattern 8: Method that uses process.env
        const fallback = process.env.FALLBACK_VALUE || 'default'; // Violation: process.env in method
        console.log('Config:', configValue, 'Fallback:', fallback);
        
        // Antipattern 9: Nested process.env access
        const config = {
            env: process.env.NODE_ENV, // Violation: process.env in object
            debug: process.env.DEBUG === 'true' // Violation: process.env comparison
        };
        
        return config;
    }
    
    handleEnvironmentCheck() {
        // Antipattern 10: Event handler using process.env
        const isDev = process.env.NODE_ENV !== 'production'; // Violation: process.env in handler
        
        if (isDev) {
            console.log('Development features enabled');
        }
        
        return isDev;
    }
}
