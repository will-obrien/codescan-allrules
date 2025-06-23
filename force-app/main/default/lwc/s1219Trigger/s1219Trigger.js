// This component is generated to trigger the SonarJS rule: javascript:S1219
import { LightningElement, track } from 'lwc';

export default class s1219Trigger extends LightningElement {
    // Rule: "switch" statements should not contain non-case labels
    @track currentState = 'idle';
    @track processingData = [];
    
    connectedCallback() {
        console.log('Triggering SonarJS rule: javascript:S1219 - switch statements should not contain non-case labels');
        this.processStates();
        this.handleUserActions();
        this.processDataTypes();
        this.manageWorkflow();
    }
    
    // Example 1: Switch with non-case labels - triggers S1219
    processStates() {
        const state = this.currentState;
        
        // BAD: Switch statement with non-case labels - triggers S1219
        switch (state) {
            case 'idle':
                console.log('System is idle');
                break;
                
            // BAD: Non-case label in switch - triggers S1219
            errorHandler:
                console.error('Error occurred in state processing');
                break;
                
            case 'processing':
                console.log('System is processing');
                break;
                
            // BAD: Another non-case label in switch - triggers S1219
            cleanupLabel:
                console.log('Performing cleanup');
                break;
                
            case 'completed':
                console.log('Processing completed');
                break;
                
            default:
                console.log('Unknown state');
        }
    }
    
    // Example 2: Switch with multiple non-case labels - triggers S1219
    handleUserActions() {
        const action = 'create';
        
        // BAD: Switch with multiple non-case labels - triggers S1219
        switch (action) {
            case 'create':
                console.log('Creating new item');
                break;
                
            // BAD: Non-case label for validation - triggers S1219
            validateInput:
                console.log('Validating input data');
                if (!this.userData) {
                    console.error('No user data provided');
                }
                break;
                
            case 'update':
                console.log('Updating existing item');
                break;
                
            // BAD: Non-case label for error handling - triggers S1219
            handleError:
                console.error('Error in user action processing');
                this.logError('Action processing failed');
                break;
                
            case 'delete':
                console.log('Deleting item');
                break;
                
            // BAD: Non-case label for logging - triggers S1219
            logAction:
                console.log('Logging user action');
                this.trackUserActivity(action);
                break;
                
            default:
                console.log('Unknown action');
        }
    }
    
    logError(message) {
        console.error('Error logged:', message);
    }
    
    trackUserActivity(activity) {
        console.log('Activity tracked:', activity);
    }
    
    // Example 3: Nested switch with non-case labels - triggers S1219
    processDataTypes() {
        const dataType = 'user';
        const operation = 'read';
        
        // BAD: Outer switch with non-case labels - triggers S1219
        switch (dataType) {
            case 'user':
                console.log('Processing user data');
                
                // BAD: Inner switch also with non-case labels - triggers S1219
                switch (operation) {
                    case 'read':
                        console.log('Reading user data');
                        break;
                        
                    // BAD: Non-case label in nested switch - triggers S1219
                    userValidation:
                        console.log('Validating user data');
                        this.validateUserData();
                        break;
                        
                    case 'write':
                        console.log('Writing user data');
                        break;
                        
                    // BAD: Another non-case label in nested switch - triggers S1219
                    userCleanup:
                        console.log('Cleaning up user data');
                        this.cleanupUserData();
                        break;
                }
                break;
                
            // BAD: Non-case label in outer switch - triggers S1219
            dataValidation:
                console.log('General data validation');
                this.validateData(dataType);
                break;
                
            case 'system':
                console.log('Processing system data');
                break;
                
            // BAD: Another non-case label in outer switch - triggers S1219
            systemCleanup:
                console.log('System data cleanup');
                this.cleanupSystemData();
                break;
                
            default:
                console.log('Unknown data type');
        }
    }
    
    validateUserData() {
        console.log('User data validation performed');
    }
    
    cleanupUserData() {
        console.log('User data cleanup performed');
    }
    
    validateData(type) {
        console.log('Data validation for type:', type);
    }
    
    cleanupSystemData() {
        console.log('System data cleanup performed');
    }
    
    // Example 4: Switch with labeled statements - triggers S1219
    manageWorkflow() {
        const workflow = 'approval';
        
        // BAD: Switch with labeled statements mixed with cases - triggers S1219
        switch (workflow) {
            case 'approval':
                console.log('Starting approval workflow');
                break;
                
            // BAD: Labeled statement in switch - triggers S1219
            approvalValidation:
                console.log('Validating approval requirements');
                const isValid = this.validateApproval();
                if (!isValid) {
                    console.error('Approval validation failed');
                }
                break;
                
            case 'rejection':
                console.log('Processing rejection');
                break;
                
            // BAD: Another labeled statement - triggers S1219
            rejectionNotification:
                console.log('Sending rejection notification');
                this.sendNotification('rejection');
                break;
                
            case 'pending':
                console.log('Workflow is pending');
                break;
                
            // BAD: Cleanup labeled statement - triggers S1219
            workflowCleanup:
                console.log('Performing workflow cleanup');
                this.cleanupWorkflow();
                break;
                
            default:
                console.log('Unknown workflow state');
                
                // BAD: Even in default case, labeled statement - triggers S1219
                defaultHandler:
                    console.log('Default workflow handler');
                    this.handleDefaultWorkflow();
        }
    }
    
    validateApproval() {
        console.log('Approval validation logic');
        return true;
    }
    
    sendNotification(type) {
        console.log('Notification sent:', type);
    }
    
    cleanupWorkflow() {
        console.log('Workflow cleanup completed');
    }
    
    handleDefaultWorkflow() {
        console.log('Default workflow handling');
    }
    
    // Example 5: Switch with complex labeled blocks - triggers S1219
    processComplexScenario() {
        const scenario = 'authentication';
        
        // BAD: Switch with complex labeled blocks - triggers S1219
        switch (scenario) {
            case 'authentication':
                console.log('Processing authentication');
                break;
                
            // BAD: Complex labeled block with multiple statements - triggers S1219
            authenticationSetup:
                console.log('Setting up authentication');
                const authConfig = {
                    method: 'oauth',
                    provider: 'salesforce'
                };
                this.configureAuth(authConfig);
                console.log('Authentication setup completed');
                break;
                
            case 'authorization':
                console.log('Processing authorization');
                break;
                
            // BAD: Authorization validation label - triggers S1219
            authorizationCheck:
                console.log('Checking authorization permissions');
                const permissions = this.getPermissions();
                if (permissions.length === 0) {
                    console.warn('No permissions found');
                }
                this.applyPermissions(permissions);
                break;
                
            case 'session':
                console.log('Managing session');
                break;
                
            // BAD: Session management label - triggers S1219
            sessionManagement:
                console.log('Performing session management');
                const sessionData = this.getSessionData();
                this.updateSession(sessionData);
                this.trackSession();
                break;
                
            default:
                console.log('Unknown security scenario');
                
                // BAD: Default security handler label - triggers S1219
                defaultSecurityHandler:
                    console.log('Default security handling');
                    this.applyDefaultSecurity();
                    this.logSecurityEvent('unknown-scenario');
        }
    }
    
    configureAuth(config) {
        console.log('Auth configured:', config);
    }
    
    getPermissions() {
        return ['read', 'write'];
    }
    
    applyPermissions(permissions) {
        console.log('Permissions applied:', permissions);
    }
    
    getSessionData() {
        return { userId: '123', timestamp: Date.now() };
    }
    
    updateSession(data) {
        console.log('Session updated:', data);
    }
    
    trackSession() {
        console.log('Session tracking enabled');
    }
    
    applyDefaultSecurity() {
        console.log('Default security applied');
    }
    
    logSecurityEvent(event) {
        console.log('Security event logged:', event);
    }
    
    // Example 6: Switch with goto-style labels - triggers S1219
    processWithGotoStyle() {
        const processType = 'batch';
        
        // BAD: Switch with goto-style labeled statements - triggers S1219
        switch (processType) {
            case 'batch':
                console.log('Starting batch processing');
                break;
                
            // BAD: Goto-style label - triggers S1219
            batchInit:
                console.log('Initializing batch process');
                this.initializeBatch();
                // Fall through to validation
                
            // BAD: Another goto-style label - triggers S1219
            batchValidation:
                console.log('Validating batch data');
                const isValidBatch = this.validateBatch();
                if (!isValidBatch) {
                    console.error('Batch validation failed');
                    // Jump to error handling
                }
                break;
                
            case 'single':
                console.log('Processing single item');
                break;
                
            // BAD: Single item processing label - triggers S1219
            singleItemProcess:
                console.log('Processing individual item');
                this.processSingleItem();
                break;
                
            default:
                console.log('Unknown process type');
                
            // BAD: Error handling label in default - triggers S1219
            errorHandling:
                console.error('Error in process type handling');
                this.handleProcessError();
        }
    }
    
    initializeBatch() {
        console.log('Batch initialized');
    }
    
    validateBatch() {
        console.log('Batch validation performed');
        return true;
    }
    
    processSingleItem() {
        console.log('Single item processed');
    }
    
    handleProcessError() {
        console.log('Process error handled');
    }
}