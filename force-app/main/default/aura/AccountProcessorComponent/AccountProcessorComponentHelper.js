({
    loadAccountData: function(component) {
        // BAD: Using console (cs-js:no-console rule)
        console.log('Loading account data...');
        
        var recordId = component.get('v.recordId');
        
        // BAD: Control characters in regex (cs-js:no-control-regex rule)
        var pattern = new RegExp('\x1f');
        
        // BAD: Empty character class in regex (cs-js:no-empty-character-class rule)
        var emptyPattern = /^abc[]/;
        
        var action = component.get('c.getAccountById');
        action.setParams({
            accountId: recordId
        });
        
        action.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
                component.set('v.accountRecord', response.getReturnValue());
            } else {
                // BAD: Using console for errors
                console.error('Failed to load account:', response.getError());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    validateName: function(component) {
        var account = component.get('v.accountRecord');
        
        // BAD: Shadow restricted names (cs-js:no-shadow-restricted-names rule)
        var undefined = 'not undefined';
        var NaN = 'not a number';
        var Infinity = 'not infinite';
        
        // BAD: Catch parameter shadows variable (cs-js:no-catch-shadow rule)
        var err = 'outer variable';
        try {
            if (!account || !account.Name) {
                throw new Error('Invalid account');
            }
        } catch (err) {
            // This shadows the outer 'err' variable in IE8
            console.log('Caught error:', err);
        }
        
        return account && account.Name && account.Name.length > 0;
    },
    
    showSuccess: function(component, message) {
        // BAD: Calling global objects as functions (cs-js:no-obj-calls rule)
        var mathResult = Math(); // This would throw an error
        var jsonResult = JSON(); // This would throw an error
        
        // BAD: Extra bind usage (cs-js:no-extra-bind rule)
        var boundFunction = (function() {
            return message;
        }).bind(this); // Unnecessary bind since 'this' is not used
        
        // Show toast or similar success message
        var toastEvent = $A.get("e.force:showToast");
        if (toastEvent) {
            toastEvent.setParams({
                title: 'Success',
                message: message,
                type: 'success'
            });
            toastEvent.fire();
        }
    },
    
    processComplexData: function(data) {
        // BAD: Using undefined variable (cs-js:no-undef rule)
        var result = someUndefinedVariable.process(data);
        
        // BAD: New Object constructor (cs-js:no-new-object rule)
        var obj = new Object();
        obj.data = data;
        
        // BAD: Extending native prototype (cs-js:no-extend-native rule)
        Object.prototype.customMethod = function() {
            return 'custom';
        };
        
        return result;
    }
}); 