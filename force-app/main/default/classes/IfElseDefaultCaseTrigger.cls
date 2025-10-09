public class IfElseDefaultCaseTrigger {
    // This class triggers the rule: sf:IfElseDefaultCase by having if-else if chains without final else
    
    public void processAccountType(String accountType) {
        // Triggers sf:IfElseDefaultCase - missing else clause
        if (accountType == 'Customer') {
            System.debug('Processing customer account');
        } else if (accountType == 'Prospect') {
            System.debug('Processing prospect account');
        } else if (accountType == 'Partner') {
            System.debug('Processing partner account');
        }
        // Missing else clause - this triggers the rule
    }
    
    public Integer getAccountPriority(String rating, String type) {
        // Triggers sf:IfElseDefaultCase - if-else if without else
        if (rating == 'Hot' && type == 'Customer') {
            return 1;
        } else if (rating == 'Warm' && type == 'Customer') {
            return 2;
        } else if (rating == 'Cold' && type == 'Customer') {
            return 3;
        } else if (rating == 'Hot' && type == 'Prospect') {
            return 4;
        } else if (rating == 'Warm' && type == 'Prospect') {
            return 5;
        }
        // Missing else clause - rule violation
        return 0; // This should be in an else clause
    }
    
    public void validateAccountData(Account acc) {
        // Triggers sf:IfElseDefaultCase - another if-else if without else
        if (acc.Type == 'Customer' && acc.AnnualRevenue > 1000000) {
            acc.Rating = 'Hot';
        } else if (acc.Type == 'Customer' && acc.AnnualRevenue > 100000) {
            acc.Rating = 'Warm';
        } else if (acc.Type == 'Prospect' && acc.AnnualRevenue > 500000) {
            acc.Rating = 'Warm';
        } else if (acc.Type == 'Prospect' && acc.AnnualRevenue > 50000) {
            acc.Rating = 'Cold';
        }
        // Missing else clause for default case
    }
    
    public String getRegionCode(String country) {
        // Triggers sf:IfElseDefaultCase - missing else for unknown countries
        if (country == 'United States' || country == 'Canada') {
            return 'NA';
        } else if (country == 'United Kingdom' || country == 'France' || country == 'Germany') {
            return 'EU';
        } else if (country == 'Japan' || country == 'China' || country == 'India') {
            return 'APAC';
        }
        // Missing else clause - what if country doesn't match any of these?
        return null; // This should be handled in else clause
    }
    
    public void processBatchSize(Integer recordCount) {
        // Triggers sf:IfElseDefaultCase - if-else if chain without else
        if (recordCount < 100) {
            System.debug('Small batch processing');
        } else if (recordCount < 1000) {
            System.debug('Medium batch processing');
        } else if (recordCount < 10000) {
            System.debug('Large batch processing');
        }
        // Missing else clause for very large batches
    }
}