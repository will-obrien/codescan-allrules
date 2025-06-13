/**
 * This class demonstrates violation of sf:EmptyCatchBlock rule
 * Empty Catch Block finds instances where an exception is caught, but nothing is done.
 * In most circumstances, this swallows an exception which should either be acted on or reported.
 */
public class EmptyCatchBlock {
    
    public void processData() {
        try {
            List<Account> accounts = [SELECT Id, Name FROM Account];
            for (Account acc : accounts) {
                acc.Name = acc.Name.toUpperCase();
                update acc;
            }
        } catch (Exception e) {
            // BAD: Empty catch block - exception is swallowed
        }
    }
    
    public String parseInteger(String input) {
        try {
            Integer value = Integer.valueOf(input);
            return String.valueOf(value * 2);
        } catch (TypeException e) {
            // BAD: Empty catch block for specific exception type
        }
        return null;
    }
    
    public void multipleEmptyCatchBlocks() {
        try {
            // Some risky operation
            List<Contact> contacts = [SELECT Id, Email FROM Contact WHERE Email != null];
            for (Contact con : contacts) {
                con.Email = con.Email.toLowerCase();
            }
            update contacts;
        } catch (DmlException e) {
            // BAD: Empty catch for DML exception
        } catch (QueryException e) {
            // BAD: Empty catch for Query exception  
        } catch (Exception e) {
            // BAD: Empty catch for general exception
        }
    }
    
    public void nestedTryCatchWithEmptyBlocks() {
        try {
            try {
                String result = performComplexOperation();
                System.debug(result);
            } catch (CustomException e) {
                // BAD: Empty inner catch block
            }
        } catch (Exception e) {
            // BAD: Empty outer catch block
        }
    }
    
    private String performComplexOperation() {
        return 'Complex operation result';
    }
    
    public class CustomException extends Exception {}
} 