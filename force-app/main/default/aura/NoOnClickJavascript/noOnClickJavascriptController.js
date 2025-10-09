({
    handleToggle : function(component, event, helper) {
        var currentState = component.get("v.showContent");
        component.set("v.showContent", !currentState);
    },
    
    handleInputChange : function(component, event, helper) {
        var inputValue = event.getSource().get("v.value");
        console.log("Input value changed to: " + inputValue);
        // Add any additional logic here
    }
})
