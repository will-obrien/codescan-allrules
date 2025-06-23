// This component is generated to trigger the SonarJS rule: javascript:S1192
import { LightningElement, track } from 'lwc';

export default class s1192Trigger extends LightningElement {
    // Rule: String literals should not be duplicated
    @track userData = {
        name: 'John Doe',
        email: 'john@example.com'
    };
    
    connectedCallback() {
        console.log('Triggering SonarJS rule: javascript:S1192 - String literals should not be duplicated');
        this.demonstrateDuplicatedStrings();
        this.processUserMessages();
        this.handleValidationMessages();
        this.manageApiEndpoints();
    }
    
    // Example 1: Duplicated string literals in logging - triggers S1192
    demonstrateDuplicatedStrings() {
        console.log('Processing user data');  // BAD: Duplicated string - triggers S1192
        console.log('Processing user data');  // BAD: Duplicated string - triggers S1192
        console.log('Processing user data');  // BAD: Duplicated string - triggers S1192
        
        console.error('Invalid user input');  // BAD: Duplicated string - triggers S1192
        console.error('Invalid user input');  // BAD: Duplicated string - triggers S1192
        console.error('Invalid user input');  // BAD: Duplicated string - triggers S1192
        
        console.warn('Configuration not found');  // BAD: Duplicated string - triggers S1192
        console.warn('Configuration not found');  // BAD: Duplicated string - triggers S1192
        console.warn('Configuration not found');  // BAD: Duplicated string - triggers S1192
    }
    
    // Example 2: Duplicated strings in user messages - triggers S1192
    processUserMessages() {
        const messages = [
            'Welcome to the application',  // BAD: Duplicated string - triggers S1192
            'Welcome to the application',  // BAD: Duplicated string - triggers S1192
            'Welcome to the application',  // BAD: Duplicated string - triggers S1192
            'Please check your email',     // BAD: Duplicated string - triggers S1192
            'Please check your email',     // BAD: Duplicated string - triggers S1192
            'Please check your email'      // BAD: Duplicated string - triggers S1192
        ];
        
        messages.forEach(message => {
            console.log(message);
        });
        
        // More duplicated strings in different contexts
        this.showMessage('Operation completed successfully');  // BAD: Duplicated string - triggers S1192
        this.displayAlert('Operation completed successfully'); // BAD: Duplicated string - triggers S1192
        this.logResult('Operation completed successfully');    // BAD: Duplicated string - triggers S1192
    }
    
    showMessage(message) {
        console.log('Showing message: ' + message);
    }
    
    displayAlert(message) {
        console.log('Alert: ' + message);
    }
    
    logResult(message) {
        console.log('Result: ' + message);
    }
    
    // Example 3: Duplicated validation messages - triggers S1192
    handleValidationMessages() {
        const validationRules = {
            required: 'This field is required',      // BAD: Duplicated string - triggers S1192
            email: 'Please enter a valid email',     // BAD: Duplicated string - triggers S1192
            password: 'Password must be at least 8 characters',  // BAD: Duplicated string - triggers S1192
            confirm: 'Passwords do not match'        // BAD: Duplicated string - triggers S1192
        };
        
        // Duplicating the same validation messages in different methods
        this.validateRequired('This field is required');     // BAD: Duplicated string - triggers S1192
        this.validateEmail('Please enter a valid email');    // BAD: Duplicated string - triggers S1192
        this.validatePassword('Password must be at least 8 characters');  // BAD: Duplicated string - triggers S1192
        this.validateConfirm('Passwords do not match');      // BAD: Duplicated string - triggers S1192
        
        // More duplications in error handling
        if (!this.userData.name) {
            throw new Error('This field is required');        // BAD: Duplicated string - triggers S1192
        }
        
        if (!this.userData.email) {
            console.error('Please enter a valid email');     // BAD: Duplicated string - triggers S1192
        }
    }
    
    validateRequired(message) {
        console.log('Required validation: ' + message);
    }
    
    validateEmail(message) {
        console.log('Email validation: ' + message);
    }
    
    validatePassword(message) {
        console.log('Password validation: ' + message);
    }
    
    validateConfirm(message) {
        console.log('Confirm validation: ' + message);
    }
    
    // Example 4: Duplicated API endpoints and URLs - triggers S1192
    manageApiEndpoints() {
        const endpoints = {
            users: '/api/v1/users',          // BAD: Duplicated string - triggers S1192
            profiles: '/api/v1/profiles',    // BAD: Duplicated string - triggers S1192
            settings: '/api/v1/settings'     // BAD: Duplicated string - triggers S1192
        };
        
        // Duplicating the same endpoints in different methods
        this.fetchUsers('/api/v1/users');           // BAD: Duplicated string - triggers S1192
        this.updateUser('/api/v1/users');           // BAD: Duplicated string - triggers S1192
        this.deleteUser('/api/v1/users');           // BAD: Duplicated string - triggers S1192
        
        this.getProfile('/api/v1/profiles');        // BAD: Duplicated string - triggers S1192
        this.updateProfile('/api/v1/profiles');     // BAD: Duplicated string - triggers S1192
        this.saveProfile('/api/v1/profiles');       // BAD: Duplicated string - triggers S1192
        
        this.loadSettings('/api/v1/settings');      // BAD: Duplicated string - triggers S1192
        this.saveSettings('/api/v1/settings');      // BAD: Duplicated string - triggers S1192
        this.resetSettings('/api/v1/settings');     // BAD: Duplicated string - triggers S1192
    }
    
    fetchUsers(endpoint) {
        console.log('Fetching from: ' + endpoint);
    }
    
    updateUser(endpoint) {
        console.log('Updating at: ' + endpoint);
    }
    
    deleteUser(endpoint) {
        console.log('Deleting at: ' + endpoint);
    }
    
    getProfile(endpoint) {
        console.log('Getting profile from: ' + endpoint);
    }
    
    updateProfile(endpoint) {
        console.log('Updating profile at: ' + endpoint);
    }
    
    saveProfile(endpoint) {
        console.log('Saving profile to: ' + endpoint);
    }
    
    loadSettings(endpoint) {
        console.log('Loading settings from: ' + endpoint);
    }
    
    saveSettings(endpoint) {
        console.log('Saving settings to: ' + endpoint);
    }
    
    resetSettings(endpoint) {
        console.log('Resetting settings at: ' + endpoint);
    }
    
    // Example 5: Duplicated CSS classes and selectors - triggers S1192
    handleStyleClasses() {
        const elements = document.querySelectorAll('.user-card');  // BAD: Duplicated string - triggers S1192
        elements.forEach(element => {
            element.classList.add('active');                       // BAD: Duplicated string - triggers S1192
        });
        
        const buttons = document.querySelectorAll('.btn-primary'); // BAD: Duplicated string - triggers S1192
        buttons.forEach(button => {
            button.classList.add('disabled');                      // BAD: Duplicated string - triggers S1192
        });
        
        // More duplicated class names
        this.addClass('.user-card', 'highlighted');                // BAD: Duplicated string - triggers S1192
        this.removeClass('.user-card', 'active');                  // BAD: Duplicated string - triggers S1192
        this.toggleClass('.user-card', 'selected');                // BAD: Duplicated string - triggers S1192
        
        this.styleButton('.btn-primary', 'loading');               // BAD: Duplicated string - triggers S1192
        this.enableButton('.btn-primary', 'disabled');             // BAD: Duplicated string - triggers S1192
        this.disableButton('.btn-primary', 'active');              // BAD: Duplicated string - triggers S1192
    }
    
    addClass(selector, className) {
        console.log(`Adding class ${className} to ${selector}`);
    }
    
    removeClass(selector, className) {
        console.log(`Removing class ${className} from ${selector}`);
    }
    
    toggleClass(selector, className) {
        console.log(`Toggling class ${className} on ${selector}`);
    }
    
    styleButton(selector, state) {
        console.log(`Styling button ${selector} with state ${state}`);
    }
    
    enableButton(selector, removeClass) {
        console.log(`Enabling button ${selector}, removing ${removeClass}`);
    }
    
    disableButton(selector, addClass) {
        console.log(`Disabling button ${selector}, adding ${addClass}`);
    }
    
    // Example 6: Duplicated event names and types - triggers S1192
    handleEvents() {
        this.addEventListener('click', this.handleClick);           // BAD: Duplicated string - triggers S1192
        this.addEventListener('change', this.handleChange);         // BAD: Duplicated string - triggers S1192
        this.addEventListener('input', this.handleInput);           // BAD: Duplicated string - triggers S1192
        
        // More duplicated event names
        this.dispatchEvent(new CustomEvent('user-updated'));       // BAD: Duplicated string - triggers S1192
        this.dispatchEvent(new CustomEvent('data-loaded'));        // BAD: Duplicated string - triggers S1192
        this.dispatchEvent(new CustomEvent('validation-failed'));  // BAD: Duplicated string - triggers S1192
        
        // Duplicated in different contexts
        this.fireEvent('user-updated', { user: this.userData });   // BAD: Duplicated string - triggers S1192
        this.emitEvent('data-loaded', { data: [] });               // BAD: Duplicated string - triggers S1192
        this.triggerEvent('validation-failed', { errors: [] });    // BAD: Duplicated string - triggers S1192
        
        // Event listener duplications
        document.addEventListener('click', this.globalClick);       // BAD: Duplicated string - triggers S1192
        window.addEventListener('change', this.windowChange);       // BAD: Duplicated string - triggers S1192
        this.template.addEventListener('input', this.templateInput); // BAD: Duplicated string - triggers S1192
    }
    
    handleClick() {
        console.log('Click handled');
    }
    
    handleChange() {
        console.log('Change handled');
    }
    
    handleInput() {
        console.log('Input handled');
    }
    
    fireEvent(eventName, data) {
        console.log(`Firing event: ${eventName}`, data);
    }
    
    emitEvent(eventName, data) {
        console.log(`Emitting event: ${eventName}`, data);
    }
    
    triggerEvent(eventName, data) {
        console.log(`Triggering event: ${eventName}`, data);
    }
    
    globalClick() {
        console.log('Global click');
    }
    
    windowChange() {
        console.log('Window change');
    }
    
    templateInput() {
        console.log('Template input');
    }
    
    // Example 7: Duplicated configuration keys - triggers S1192
    handleConfiguration() {
        const config = {
            'app.name': 'My Application',           // BAD: Duplicated string - triggers S1192
            'app.version': '1.0.0',                 // BAD: Duplicated string - triggers S1192
            'app.environment': 'production',        // BAD: Duplicated string - triggers S1192
            'api.timeout': 5000,
            'api.retries': 3
        };
        
        // Duplicated configuration keys in different methods
        this.getConfig('app.name');                 // BAD: Duplicated string - triggers S1192
        this.setConfig('app.version', '1.0.1');     // BAD: Duplicated string - triggers S1192
        this.updateConfig('app.environment', 'dev'); // BAD: Duplicated string - triggers S1192
        
        this.loadConfig('app.name');                // BAD: Duplicated string - triggers S1192
        this.saveConfig('app.version');             // BAD: Duplicated string - triggers S1192
        this.resetConfig('app.environment');        // BAD: Duplicated string - triggers S1192
    }
    
    getConfig(key) {
        console.log(`Getting config: ${key}`);
    }
    
    setConfig(key, value) {
        console.log(`Setting config: ${key} = ${value}`);
    }
    
    updateConfig(key, value) {
        console.log(`Updating config: ${key} = ${value}`);
    }
    
    loadConfig(key) {
        console.log(`Loading config: ${key}`);
    }
    
    saveConfig(key) {
        console.log(`Saving config: ${key}`);
    }
    
    resetConfig(key) {
        console.log(`Resetting config: ${key}`);
    }
}