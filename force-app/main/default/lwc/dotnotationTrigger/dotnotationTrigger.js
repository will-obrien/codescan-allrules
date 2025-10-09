// This component is generated to trigger the rule: cs-js:dot-notation
import { LightningElement, track } from 'lwc';

export default class dotnotationTrigger extends LightningElement {
    // Rule: enforce dot notation
    @track userData = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@example.com',
        preferences: {
            theme: 'dark',
            language: 'en',
            notifications: true
        }
    };
    
    @track systemConfig = {
        apiUrl: 'https://api.example.com',
        timeout: 5000,
        retries: 3,
        features: {
            logging: true,
            debug: false,
            analytics: true
        }
    };
    
    connectedCallback() {
        console.log('Triggering CSJS rule: cs-js:dot-notation - enforce dot notation');
        this.demonstrateBracketNotation();
        this.processUserData();
        this.handleSystemConfiguration();
        this.performDataOperations();
    }
    
    // Example 1: Basic bracket notation usage - triggers cs-js:dot-notation
    demonstrateBracketNotation() {
        const user = this.userData;
        const config = this.systemConfig;
        
        // BAD: Using bracket notation for simple property access - triggers cs-js:dot-notation
        const firstName = user['firstName'];        // BAD: Should use user.firstName
        const lastName = user['lastName'];          // BAD: Should use user.lastName
        const age = user['age'];                    // BAD: Should use user.age
        const email = user['email'];                // BAD: Should use user.email
        
        // BAD: Using bracket notation for nested properties - triggers cs-js:dot-notation
        const theme = user['preferences']['theme'];           // BAD: Should use user.preferences.theme
        const language = user['preferences']['language'];     // BAD: Should use user.preferences.language
        const notifications = user['preferences']['notifications']; // BAD: Should use user.preferences.notifications
        
        // BAD: Using bracket notation for system config - triggers cs-js:dot-notation
        const apiUrl = config['apiUrl'];            // BAD: Should use config.apiUrl
        const timeout = config['timeout'];          // BAD: Should use config.timeout
        const retries = config['retries'];          // BAD: Should use config.retries
        
        // BAD: Mixed bracket and dot notation - triggers cs-js:dot-notation
        const logging = config['features'].logging;         // BAD: Should use config.features.logging
        const debug = config.features['debug'];             // BAD: Should use config.features.debug
        const analytics = config['features']['analytics'];   // BAD: Should use config.features.analytics
        
        console.log('User info:', firstName, lastName, age, email);
        console.log('Preferences:', theme, language, notifications);
        console.log('Config:', apiUrl, timeout, retries);
        console.log('Features:', logging, debug, analytics);
    }
    
    // Example 2: Bracket notation in user data processing - triggers cs-js:dot-notation
    processUserData() {
        const user = this.userData;
        
        // BAD: Using bracket notation in conditions - triggers cs-js:dot-notation
        if (user['age'] > 18) {                     // BAD: Should use user.age
            console.log('User is adult');
        }
        
        if (user['email'].includes('@')) {          // BAD: Should use user.email
            console.log('Valid email format');
        }
        
        // BAD: Using bracket notation in assignments - triggers cs-js:dot-notation
        user['firstName'] = 'Jane';                 // BAD: Should use user.firstName
        user['lastName'] = 'Smith';                 // BAD: Should use user.lastName
        user['age'] = 25;                           // BAD: Should use user.age
        
        // BAD: Using bracket notation for nested assignments - triggers cs-js:dot-notation
        user['preferences']['theme'] = 'light';     // BAD: Should use user.preferences.theme
        user['preferences']['language'] = 'es';     // BAD: Should use user.preferences.language
        user['preferences']['notifications'] = false; // BAD: Should use user.preferences.notifications
        
        // BAD: Using bracket notation in method calls - triggers cs-js:dot-notation
        const fullName = user['firstName'] + ' ' + user['lastName']; // BAD: Should use dot notation
        const upperEmail = user['email'].toUpperCase();              // BAD: Should use user.email
        
        // BAD: Using bracket notation in array operations - triggers cs-js:dot-notation
        const userProperties = ['firstName', 'lastName', 'age', 'email'];
        const userValues = userProperties.map(prop => user[prop]); // This is OK - dynamic property access
        
        // But these are BAD - static property names in brackets
        const staticValues = [
            user['firstName'],  // BAD: Should use user.firstName
            user['lastName'],   // BAD: Should use user.lastName
            user['age'],        // BAD: Should use user.age
            user['email']       // BAD: Should use user.email
        ];
        
        console.log('Updated user:', fullName, upperEmail);
        console.log('Static values:', staticValues);
    }
    
    // Example 3: Bracket notation in system configuration - triggers cs-js:dot-notation
    handleSystemConfiguration() {
        const config = this.systemConfig;
        
        // BAD: Using bracket notation for configuration checks - triggers cs-js:dot-notation
        if (config['timeout'] > 3000) {            // BAD: Should use config.timeout
            console.log('High timeout configured');
        }
        
        if (config['retries'] < 5) {               // BAD: Should use config.retries
            console.log('Low retry count');
        }
        
        // BAD: Using bracket notation in feature toggles - triggers cs-js:dot-notation
        if (config['features']['logging']) {       // BAD: Should use config.features.logging
            console.log('Logging is enabled');
        }
        
        if (!config['features']['debug']) {        // BAD: Should use config.features.debug
            console.log('Debug mode is disabled');
        }
        
        // BAD: Using bracket notation in configuration updates - triggers cs-js:dot-notation
        config['timeout'] = 8000;                 // BAD: Should use config.timeout
        config['retries'] = 5;                    // BAD: Should use config.retries
        config['apiUrl'] = 'https://api.new.com'; // BAD: Should use config.apiUrl
        
        // BAD: Using bracket notation for nested configuration - triggers cs-js:dot-notation
        config['features']['logging'] = false;    // BAD: Should use config.features.logging
        config['features']['debug'] = true;       // BAD: Should use config.features.debug
        config['features']['analytics'] = false;  // BAD: Should use config.features.analytics
        
        // BAD: Using bracket notation in ternary operations - triggers cs-js:dot-notation
        const logLevel = config['features']['debug'] ? 'debug' : 'info'; // BAD: Should use dot notation
        const endpoint = config['features']['analytics'] ? '/analytics' : '/basic'; // BAD: Should use dot notation
        
        console.log('Config updated:', logLevel, endpoint);
    }
    
    // Example 4: Complex bracket notation patterns - triggers cs-js:dot-notation
    performDataOperations() {
        const data = {
            users: [
                { id: 1, name: 'Alice', active: true },
                { id: 2, name: 'Bob', active: false },
                { id: 3, name: 'Charlie', active: true }
            ],
            settings: {
                pagination: { limit: 10, offset: 0 },
                sorting: { field: 'name', order: 'asc' },
                filtering: { active: true, search: '' }
            }
        };
        
        // BAD: Using bracket notation for array access patterns - triggers cs-js:dot-notation
        const users = data['users'];               // BAD: Should use data.users
        const settings = data['settings'];         // BAD: Should use data.settings
        
        // BAD: Using bracket notation in array processing - triggers cs-js:dot-notation
        const activeUsers = users.filter(user => user['active']); // BAD: Should use user.active
        const userNames = users.map(user => user['name']);        // BAD: Should use user.name
        const userIds = users.map(user => user['id']);            // BAD: Should use user.id
        
        // BAD: Using bracket notation for nested settings - triggers cs-js:dot-notation
        const limit = settings['pagination']['limit'];        // BAD: Should use settings.pagination.limit
        const offset = settings['pagination']['offset'];      // BAD: Should use settings.pagination.offset
        const sortField = settings['sorting']['field'];       // BAD: Should use settings.sorting.field
        const sortOrder = settings['sorting']['order'];       // BAD: Should use settings.sorting.order
        
        // BAD: Using bracket notation in object construction - triggers cs-js:dot-notation
        const queryParams = {
            limit: settings['pagination']['limit'],           // BAD: Should use dot notation
            offset: settings['pagination']['offset'],         // BAD: Should use dot notation
            sort: settings['sorting']['field'],               // BAD: Should use dot notation
            order: settings['sorting']['order'],              // BAD: Should use dot notation
            active: settings['filtering']['active']           // BAD: Should use dot notation
        };
        
        // BAD: Using bracket notation in return statements - triggers cs-js:dot-notation
        return {
            users: activeUsers,
            count: data['users'].length,                      // BAD: Should use data.users.length
            hasMore: data['users'].length > settings['pagination']['limit'] // BAD: Should use dot notation
        };
    }
    
    // Helper method with bracket notation - triggers cs-js:dot-notation
    getUserInfo(user) {
        // BAD: Using bracket notation in helper method - triggers cs-js:dot-notation
        return {
            fullName: user['firstName'] + ' ' + user['lastName'], // BAD: Should use dot notation
            contact: user['email'],                               // BAD: Should use user.email
            age: user['age'],                                     // BAD: Should use user.age
            theme: user['preferences']['theme'],                  // BAD: Should use dot notation
            lang: user['preferences']['language']                 // BAD: Should use dot notation
        };
    }
    
    // BAD: Bracket notation in getters - triggers cs-js:dot-notation
    get userDisplayName() {
        return this.userData['firstName'] + ' ' + this.userData['lastName']; // BAD: Should use dot notation
    }
    
    get systemStatus() {
        return {
            url: this.systemConfig['apiUrl'],                 // BAD: Should use dot notation
            timeout: this.systemConfig['timeout'],            // BAD: Should use dot notation
            logging: this.systemConfig['features']['logging'] // BAD: Should use dot notation
        };
    }
    
    // BAD: Bracket notation in setters - triggers cs-js:dot-notation
    set userTheme(theme) {
        this.userData['preferences']['theme'] = theme;        // BAD: Should use dot notation
    }
    
    set systemTimeout(timeout) {
        this.systemConfig['timeout'] = timeout;              // BAD: Should use dot notation
    }
}