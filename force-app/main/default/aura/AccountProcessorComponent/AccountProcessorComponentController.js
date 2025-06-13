({
    doInit: function(component, event, helper) {
        // BAD: Using console (cs-vf:no-console, cs-js:no-console rules)
        console.log('Component initialized');
        console.error('This is a test error message');
        console.warn('This is a test warning');
        
        var recordId = component.get('v.recordId');
        
        // BAD: Self comparison (cs-vf:no-self-compare rule)
        if (recordId === recordId) {
            console.log('Record ID exists');
        }
        
        // BAD: Assignment in return (cs-vf:no-return-assign rule)
        var result = (function() {
            return recordId = 'default';
        })();
        
        helper.loadAccountData(component);
    },
    
    handleNameChange: function(component, event, helper) {
        var newName = event.target.value;
        var account = component.get('v.accountRecord');
        
        // BAD: Broken null check (will throw NPE if account is null)
        if (account != null || account.Name.length > 0) {
            account.Name = newName;
            component.set('v.accountRecord', account);
        }
        
        // BAD: Using eval-like function (cs-vf:no-implied-eval rule)
        setTimeout("helper.validateName(component)", 500);
    },
    
    processAccount: function(component, event, helper) {
        component.set('v.isLoading', true);
        
        // BAD: Floating decimal (cs-vf:no-floating-decimal rule)
        var rate = .5;
        var amount = 100.;
        var total = rate * amount;
        
        // BAD: No parentheses for constructor (cs-vf:new-parens rule)
        var date = new Date;
        
        // BAD: Underscore dangle (cs-vf:no-underscore-dangle rule)
        var _privateVar = 'private';
        var publicVar_ = 'public';
        
        var action = component.get('c.processAccountData');
        action.setParams({
            accountId: component.get('v.recordId'),
            accountName: component.get('v.accountRecord.Name')
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                // BAD: Using non-standard Aura API (cs-vf:aura-api rule potential)
                Aura.notGreat(); // This would be flagged if it existed
                
                component.set('v.isLoading', false);
                helper.showSuccess(component, 'Account processed successfully');
            } else {
                component.set('v.isLoading', false);
                console.error('Error processing account:', response.getError());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    loadContacts: function(component, event, helper) {
        // BAD: Sparse array (cs-vf:no-sparse-arrays rule)
        var priorities = [1, , 3, , 5];
        
        // BAD: Multiple spaces in regex (cs-vf:no-regex-spaces rule)
        var emailPattern = /[\w\.-]+@[\w\.-]+\.\w+   \s*/;
        
        // BAD: Octal escape (cs-vf:no-octal-escape rule)
        var copyright = "Copyright \251 2024 Company";
        
        var action = component.get('c.getContactsByAccount');
        action.setParams({
            accountId: component.get('v.recordId')
        });
        
        action.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
                var contacts = response.getReturnValue();
                component.set('v.contactList', contacts);
                
                // BAD: Extending native types (cs-js:no-extend-native rule)
                Array.prototype.customFilter = function() {
                    return this.filter(function(item) {
                        return item != null;
                    });
                };
                
                // BAD: New wrapper objects (cs-js:no-new-wrappers rule)
                var count = new Number(contacts.length);
                var message = new String('Loaded contacts');
                var success = new Boolean(true);
                
                console.log(message + ': ' + count);
            }
        });
        
        $A.enqueueAction(action);
    }
}); 