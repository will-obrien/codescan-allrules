public class MultiLineCommentTrigger {
    // This class triggers the rule: sf:MultiLineComment by having empty multi-line comments
    
    /*
    
    */
    
    public void processData() {
        // Some processing logic
        
        /*
        
        
        */
        
        System.debug('Processing data');
        
        /*
        
        
        
        */
        
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 5];
        
        /*
         
         
         */
        
        for (Account acc : accounts) {
            /*
            
            */
            System.debug('Account: ' + acc.Name);
            /*
            
            
            */
        }
    }
    
    /*
    
    
    */
    
    public void validateInput(String input) {
        /*
        
        */
        if (String.isBlank(input)) {
            /*
            
            */
            throw new IllegalArgumentException('Input cannot be blank');
        }
        
        /*
        
        
        
        */
        
        System.debug('Input is valid: ' + input);
    }
    
    /*
    
    */
    
    private void helperMethod() {
        /*
        
        
        */
        
        // Helper logic here
        System.debug('Helper method called');
        
        /*
        
        */
    }
    
    /*
    
    
    
    
    */
    
    public Integer calculateValue() {
        /*
        
        */
        Integer result = 0;
        
        /*
        
        
        */
        
        for (Integer i = 1; i <= 10; i++) {
            /*
            
            */
            result += i;
        }
        
        /*
        
        */
        
        return result;
    }
    
    /*
    
    
    */
}