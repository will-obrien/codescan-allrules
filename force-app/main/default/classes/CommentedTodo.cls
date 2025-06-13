/**
 * This class demonstrates violation of sf:CommentedTodo rule
 * TODO/FIXME's should either be resolved before committing to version control.
 */
public class CommentedTodo {
    
    public void processAccount(Account acc) {
        // TODO: Add validation for account type
        if (acc != null) {
            acc.Name = acc.Name.trim();
        }
        
        // FIXME: This method needs better error handling
        try {
            update acc;
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
    
    /**
     * TODO: Optimize this method for better performance
     * FIXME: Handle null pointer exceptions properly
     */
    public List<Contact> getContacts(Id accountId) {
        // TODO: Add caching mechanism
        List<Contact> contacts = [SELECT Id, Name FROM Contact WHERE AccountId = :accountId];
        
        // FIXME: This loop is inefficient
        for (Contact con : contacts) {
            con.Description = 'Updated';
        }
        
        return contacts;
    }
    
    public void validateData() {
        /*
         * TODO: Implement comprehensive data validation
         * - Check required fields
         * - Validate email format
         * - Ensure phone number format
         * FIXME: Remove hardcoded values
         */
        String defaultEmail = 'test@example.com'; // TODO: Move to custom setting
    }
    
    // TODO: Remove this method if not needed
    public void unusedMethod() {
        // FIXME: This method doesn't do anything useful
        System.debug('Placeholder method');
    }
    
    public class InnerClass {
        // TODO: Implement inner class functionality
        // FIXME: Add proper documentation
        public void innerMethod() {
            // TODO: Add implementation
        }
    }
} 