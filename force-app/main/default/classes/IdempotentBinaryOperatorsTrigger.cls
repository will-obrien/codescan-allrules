public class IdempotentBinaryOperatorsTrigger {
    // This class triggers the rule: sf:IdempotentBinaryOperators by having identical expressions on both sides of binary operators
    
    public void processAccountData(Account acc) {
        // Triggers sf:IdempotentBinaryOperators - identical expressions on both sides
        if (acc.Name == acc.Name) {
            System.debug('Account name equals itself');
        }
        
        if (acc.Type != acc.Type) {
            System.debug('This will never be true');
        }
        
        // More idempotent binary operations
        Boolean result = acc.Id == acc.Id; // Always true
        Boolean impossible = acc.AnnualRevenue != acc.AnnualRevenue; // Always false
        
        System.debug('Results: ' + result + ', ' + impossible);
    }
    
    public void validateNumbers(Integer value) {
        // Triggers sf:IdempotentBinaryOperators - numeric comparisons with identical operands
        if (value == value) {
            System.debug('Value equals itself');
        }
        
        if (value < value) {
            System.debug('This is impossible');
        }
        
        if (value > value) {
            System.debug('This is also impossible');
        }
        
        Boolean alwaysTrue = value <= value; // Always true
        Boolean alwaysFalse = value != value; // Always false
        
        System.debug('Always true: ' + alwaysTrue + ', Always false: ' + alwaysFalse);
    }
    
    public void checkStringValues(String input) {
        // Triggers sf:IdempotentBinaryOperators - string comparisons with identical operands
        if (input == input) {
            System.debug('String equals itself');
        }
        
        if (input != input) {
            System.debug('This will never happen');
        }
        
        Boolean stringCheck = input.equals(input); // Always true
        Boolean stringInequality = !input.equals(input); // Always false
        
        System.debug('String check: ' + stringCheck + ', Inequality: ' + stringInequality);
    }
    
    public void performCalculations(Decimal amount) {
        // Triggers sf:IdempotentBinaryOperators - mathematical operations
        Decimal result1 = amount - amount; // Always 0
        Decimal result2 = amount / amount; // Always 1 (if not zero)
        Boolean comparison = amount >= amount; // Always true
        
        if (amount == amount) {
            System.debug('Amount equals itself: ' + amount);
        }
        
        System.debug('Calculations: ' + result1 + ', ' + result2 + ', ' + comparison);
    }
    
    public void processCollections(List<String> items) {
        // Triggers sf:IdempotentBinaryOperators - collection comparisons
        if (items == items) {
            System.debug('List equals itself');
        }
        
        if (items.size() == items.size()) {
            System.debug('Size equals itself');
        }
        
        Boolean sameList = items.equals(items); // Always true
        Boolean differentList = !items.equals(items); // Always false
        
        System.debug('Same list: ' + sameList + ', Different: ' + differentList);
    }
    
    public void dateComparisons(Date testDate) {
        // Triggers sf:IdempotentBinaryOperators - date comparisons
        if (testDate == testDate) {
            System.debug('Date equals itself');
        }
        
        if (testDate < testDate) {
            System.debug('Date less than itself - impossible');
        }
        
        Boolean dateEquality = testDate.isSameDay(testDate); // Always true
        Integer dateComparison = testDate.daysBetween(testDate); // Always 0
        
        System.debug('Date equality: ' + dateEquality + ', Days between: ' + dateComparison);
    }
    
    public void booleanOperations(Boolean flag) {
        // Triggers sf:IdempotentBinaryOperators - boolean operations
        Boolean and = flag && flag; // Same as flag
        Boolean or = flag || flag; // Same as flag
        Boolean equals = flag == flag; // Always true
        Boolean notEquals = flag != flag; // Always false
        
        if (flag == flag) {
            System.debug('Boolean equals itself');
        }
        
        System.debug('Boolean operations: ' + and + ', ' + or + ', ' + equals + ', ' + notEquals);
    }
    
    public void objectComparisons(Contact con) {
        // Triggers sf:IdempotentBinaryOperators - object field comparisons
        if (con.Email == con.Email) {
            System.debug('Email equals itself');
        }
        
        if (con.FirstName != con.FirstName) {
            System.debug('This condition will never be true');
        }
        
        Boolean idCheck = con.Id == con.Id; // Always true if not null
        Boolean nameCheck = con.LastName.equals(con.LastName); // Always true if not null
        
        System.debug('ID check: ' + idCheck + ', Name check: ' + nameCheck);
    }
    
    private void helperMethodWithIdempotentOperations() {
        // Triggers sf:IdempotentBinaryOperators - helper method with violations
        Integer x = 5;
        Integer y = 10;
        
        if (x == x) { // Idempotent
            System.debug('X equals itself');
        }
        
        if (y != y) { // Idempotent
            System.debug('Y not equal to itself - impossible');
        }
        
        Boolean result = (x + y) == (x + y); // Always true
        System.debug('Sum comparison: ' + result);
    }
}