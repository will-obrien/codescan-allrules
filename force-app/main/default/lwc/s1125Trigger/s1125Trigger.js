// This component is generated to trigger the SonarJS rule: javascript:S1125
import { LightningElement, track } from 'lwc';

export default class s1125Trigger extends LightningElement {
    // Rule: Boolean literals should not be used in comparisons
    @track userSettings = {
        isActive: true,
        hasPermission: false,
        isVerified: true,
        isAdmin: false
    };
    
    @track systemFlags = {
        enableLogging: true,
        debugMode: false,
        maintenanceMode: false
    };
    
    connectedCallback() {
        console.log('Triggering SonarJS rule: javascript:S1125 - Boolean literals should not be used in comparisons');
        this.validateUserAccess();
        this.processSystemSettings();
        this.handleBusinessLogic();
        this.demonstrateBooleanComparisons();
    }
    
    // Example 1: Boolean literal comparisons in conditions - triggers S1125
    validateUserAccess() {
        const user = this.userSettings;
        
        // BAD: Comparing boolean with true literal - triggers S1125
        if (user.isActive === true) {  // BAD: Should just use user.isActive
            console.log('User is active');
        }
        
        // BAD: Comparing boolean with false literal - triggers S1125
        if (user.hasPermission === false) {  // BAD: Should use !user.hasPermission
            console.log('User has no permission');
        }
        
        // BAD: Using != with boolean literals - triggers S1125
        if (user.isVerified != false) {  // BAD: Should just use user.isVerified
            console.log('User is verified');
        }
        
        // BAD: Using != with true literal - triggers S1125
        if (user.isAdmin != true) {  // BAD: Should use !user.isAdmin
            console.log('User is not admin');
        }
        
        // BAD: Complex boolean literal comparisons - triggers S1125
        if ((user.isActive === true) && (user.hasPermission === false)) {  // BAD: Multiple boolean literal comparisons
            console.log('Active user without permission');
        }
        
        // BAD: Boolean literal comparisons in ternary - triggers S1125
        const accessLevel = user.isAdmin === true ? 'high' : 'low';  // BAD: Should use user.isAdmin
        const status = user.isActive === false ? 'inactive' : 'active';  // BAD: Should use !user.isActive
        
        console.log('Access level:', accessLevel, 'Status:', status);
    }
    
    // Example 2: Boolean literal comparisons in system settings - triggers S1125
    processSystemSettings() {
        const settings = this.systemFlags;
        
        // BAD: Comparing with boolean literals in if statements - triggers S1125
        if (settings.enableLogging == true) {  // BAD: Should just use settings.enableLogging
            console.log('Logging is enabled');
            this.initializeLogging();
        }
        
        if (settings.debugMode == false) {  // BAD: Should use !settings.debugMode
            console.log('Debug mode is disabled');
        }
        
        // BAD: Boolean literal comparisons in else if - triggers S1125
        if (settings.maintenanceMode === true) {  // BAD: Should use settings.maintenanceMode
            console.log('System is in maintenance mode');
        } else if (settings.enableLogging === false) {  // BAD: Should use !settings.enableLogging
            console.log('Logging is disabled');
        }
        
        // BAD: Boolean literal comparisons in while loops - triggers S1125
        let processingComplete = false;
        while (processingComplete === false) {  // BAD: Should use !processingComplete
            console.log('Processing...');
            // Simulate processing
            processingComplete = Math.random() > 0.8;
        }
        
        // BAD: Boolean literal comparisons in for loops - triggers S1125
        const features = [
            { name: 'feature1', enabled: true },
            { name: 'feature2', enabled: false },
            { name: 'feature3', enabled: true }
        ];
        
        for (const feature of features) {
            if (feature.enabled === true) {  // BAD: Should use feature.enabled
                console.log('Feature enabled:', feature.name);
            }
            if (feature.enabled !== false) {  // BAD: Should use feature.enabled
                this.activateFeature(feature.name);
            }
        }
    }
    
    // Example 3: Boolean literal comparisons in business logic - triggers S1125
    handleBusinessLogic() {
        const order = {
            isValid: true,
            isPaid: false,
            isShipped: false,
            isComplete: false
        };
        
        const customer = {
            isActive: true,
            hasCredit: false,
            isVip: true
        };
        
        // BAD: Boolean literal comparisons in complex conditions - triggers S1125
        if (order.isValid === true && customer.isActive === true) {  // BAD: Should use order.isValid && customer.isActive
            console.log('Valid order from active customer');
        }
        
        if (order.isPaid === false && customer.hasCredit === false) {  // BAD: Should use !order.isPaid && !customer.hasCredit
            console.log('Unpaid order from customer without credit');
        }
        
        // BAD: Boolean literal comparisons with logical operators - triggers S1125
        const canProcess = (order.isValid === true) && (order.isPaid !== false);  // BAD: Mixed boolean literal comparisons
        const needsReview = (customer.isVip === false) || (order.isComplete === false);  // BAD: Multiple boolean literal comparisons
        
        // BAD: Boolean literal comparisons in switch-like logic - triggers S1125
        if (order.isShipped === true) {  // BAD: Should use order.isShipped
            console.log('Order has been shipped');
        } else if (order.isShipped === false) {  // BAD: Should use !order.isShipped
            console.log('Order not yet shipped');
        }
        
        // BAD: Boolean literal comparisons in array methods - triggers S1125
        const orders = [order, { ...order, isValid: false }, { ...order, isPaid: true }];
        
        const validOrders = orders.filter(o => o.isValid === true);  // BAD: Should use o.isValid
        const unpaidOrders = orders.filter(o => o.isPaid === false);  // BAD: Should use !o.isPaid
        const incompleteOrders = orders.filter(o => o.isComplete != true);  // BAD: Should use !o.isComplete
        
        console.log('Valid orders:', validOrders.length);
        console.log('Unpaid orders:', unpaidOrders.length);
        console.log('Incomplete orders:', incompleteOrders.length);
    }
    
    // Example 4: More boolean literal comparison patterns - triggers S1125
    demonstrateBooleanComparisons() {
        const flags = {
            autoSave: true,
            showNotifications: false,
            enableSync: true,
            darkMode: false
        };
        
        // BAD: Boolean literal comparisons in object methods - triggers S1125
        const preferences = {
            autoSave: flags.autoSave === true ? 'enabled' : 'disabled',  // BAD: Should use flags.autoSave
            notifications: flags.showNotifications === false ? 'off' : 'on',  // BAD: Should use !flags.showNotifications
            sync: flags.enableSync !== false ? 'active' : 'inactive',  // BAD: Should use flags.enableSync
            theme: flags.darkMode === true ? 'dark' : 'light'  // BAD: Should use flags.darkMode
        };
        
        // BAD: Boolean literal comparisons in function calls - triggers S1125
        this.updateSetting('autoSave', flags.autoSave === true);  // BAD: Should use flags.autoSave
        this.updateSetting('notifications', flags.showNotifications !== false);  // BAD: Should use flags.showNotifications
        this.updateSetting('sync', flags.enableSync == true);  // BAD: Should use flags.enableSync
        
        // BAD: Boolean literal comparisons in return statements - triggers S1125
        return this.validateSettings(flags.autoSave === true, flags.darkMode === false);  // BAD: Should use flags.autoSave, !flags.darkMode
    }
    
    // Helper methods with boolean literal comparisons - triggers S1125
    initializeLogging() {
        const logLevel = this.systemFlags.debugMode === true ? 'debug' : 'info';  // BAD: Should use this.systemFlags.debugMode
        console.log('Initializing logging with level:', logLevel);
    }
    
    activateFeature(featureName) {
        const isSystemReady = this.systemFlags.maintenanceMode === false;  // BAD: Should use !this.systemFlags.maintenanceMode
        if (isSystemReady === true) {  // BAD: Should use isSystemReady
            console.log('Activating feature:', featureName);
        }
    }
    
    updateSetting(key, value) {
        if (value === true) {  // BAD: Should use just value
            console.log('Enabling setting:', key);
        } else if (value === false) {  // BAD: Should use !value
            console.log('Disabling setting:', key);
        }
    }
    
    validateSettings(autoSave, darkMode) {
        // BAD: Boolean literal comparisons in validation - triggers S1125
        const isValid = (autoSave === true) && (darkMode === false);  // BAD: Should use autoSave && !darkMode
        return isValid === true;  // BAD: Should just return isValid
    }
    
    // BAD: Boolean literal comparisons in getters - triggers S1125
    get isUserActive() {
        return this.userSettings.isActive === true;  // BAD: Should return this.userSettings.isActive
    }
    
    get hasUserPermission() {
        return this.userSettings.hasPermission !== false;  // BAD: Should return this.userSettings.hasPermission
    }
    
    // BAD: Boolean literal comparisons in setters - triggers S1125
    set userActiveStatus(status) {
        this.userSettings.isActive = status === true;  // BAD: Should use status directly
    }
}