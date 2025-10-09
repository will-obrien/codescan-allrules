public class FixDuplicateConditionsTrigger {
    // This class triggers the rule: sf:FixDuplicateConditions by having duplicate conditions in if-else if and switch statements
    
    public void processAccountWithDuplicateConditions(Account acc) {
        // Triggers sf:FixDuplicateConditions - duplicate conditions in if-else if
        if (acc.Type == 'Customer') {
            System.debug('Processing Customer account');
        } else if (acc.Type == 'Prospect') {
            System.debug('Processing Prospect account');
        } else if (acc.Type == 'Customer') { // Duplicate condition
            System.debug('This is unreachable code due to duplicate condition');
        }
    }
    
    public void validateAccountData(Account acc) {
        // Triggers sf:FixDuplicateConditions - more duplicate conditions
        if (acc.AnnualRevenue > 1000000) {
            acc.Rating = 'Hot';
        } else if (acc.AnnualRevenue > 100000) {
            acc.Rating = 'Warm';
        } else if (acc.AnnualRevenue > 1000000) { // Duplicate condition
            acc.Rating = 'This will never execute';
        } else {
            acc.Rating = 'Cold';
        }
    }
    
    public String getAccountPriority(Account acc) {
        // Triggers sf:FixDuplicateConditions - switch with duplicate cases
        switch on acc.Type {
            when 'Customer' {
                return 'High Priority';
            }
            when 'Prospect' {
                return 'Medium Priority';
            }
            when 'Partner' {
                return 'High Priority';
            }
            when 'Customer' { // Duplicate case - unreachable
                return 'This will never execute';
            }
            when else {
                return 'Low Priority';
            }
        }
    }
    
    public void processContactStatus(Contact con) {
        // Triggers sf:FixDuplicateConditions - complex duplicate conditions
        if (con.Email != null && con.Email.contains('@')) {
            System.debug('Valid email contact');
        } else if (con.Phone != null) {
            System.debug('Phone contact');
        } else if (con.Email != null && con.Email.contains('@')) { // Duplicate complex condition
            System.debug('This condition is duplicated');
        }
    }
    
    public Integer calculateDiscount(Opportunity opp) {
        // Triggers sf:FixDuplicateConditions - duplicate numeric conditions
        if (opp.Amount > 100000) {
            return 15;
        } else if (opp.Amount > 50000) {
            return 10;
        } else if (opp.Amount > 100000) { // Duplicate condition
            return 20; // This will never execute
        } else if (opp.Amount > 25000) {
            return 5;
        } else {
            return 0;
        }
    }
    
    public void processLeadRating(Lead lead) {
        // Triggers sf:FixDuplicateConditions - duplicate string conditions with complex expressions
        if (lead.Status == 'Open - Not Contacted' && lead.Rating == 'Hot') {
            System.debug('Hot new lead');
        } else if (lead.Status == 'Working - Contacted' && lead.Rating == 'Warm') {
            System.debug('Warm working lead');
        } else if (lead.Status == 'Open - Not Contacted' && lead.Rating == 'Hot') { // Duplicate
            System.debug('This is unreachable due to duplication');
        }
    }
    
    public String getCaseUrgency(Case caseRecord) {
        // Triggers sf:FixDuplicateConditions - switch with multiple duplicate cases
        switch on caseRecord.Priority {
            when 'High' {
                return 'Urgent';
            }
            when 'Medium' {
                return 'Normal';
            }
            when 'Low' {
                return 'Low Priority';
            }
            when 'High' { // First duplicate
                return 'This will not execute';
            }
            when 'Critical' {
                return 'Emergency';
            }
            when 'Medium' { // Second duplicate
                return 'Also unreachable';
            }
            when else {
                return 'Unknown Priority';
            }
        }
    }
    
    public void processTaskAssignment(Task task) {
        // Triggers sf:FixDuplicateConditions - nested duplicate conditions
        if (task.Type == 'Call') {
            if (task.Priority == 'High') {
                System.debug('High priority call');
            } else if (task.Priority == 'Normal') {
                System.debug('Normal priority call');
            } else if (task.Priority == 'High') { // Duplicate nested condition
                System.debug('Unreachable high priority call');
            }
        } else if (task.Type == 'Email') {
            System.debug('Email task');
        } else if (task.Type == 'Call') { // Duplicate outer condition
            System.debug('This entire block is unreachable');
        }
    }
    
    public Boolean validateUserAccess(User user) {
        // Triggers sf:FixDuplicateConditions - boolean duplicate conditions
        if (user.IsActive && user.Profile.Name == 'System Administrator') {
            return true;
        } else if (!user.IsActive) {
            return false;
        } else if (user.IsActive && user.Profile.Name == 'System Administrator') { // Duplicate
            return true; // Unreachable
        } else if (user.Profile.Name == 'Standard User') {
            return true;
        } else {
            return false;
        }
    }
    
    public void categorizeProducts(Product2 product) {
        // Triggers sf:FixDuplicateConditions - complex switch with duplicates
        switch on product.Family {
            when 'Hardware' {
                System.debug('Hardware product');
            }
            when 'Software' {
                System.debug('Software product');
            }
            when 'Services', 'Support' {
                System.debug('Service-related product');
            }
            when 'Hardware' { // Duplicate case
                System.debug('This hardware case will never execute');
            }
            when 'Training' {
                System.debug('Training product');
            }
            when 'Services' { // Another duplicate (part of previous multi-value when)
                System.debug('This service case is also unreachable');
            }
            when else {
                System.debug('Unknown product family');
            }
        }
    }
}