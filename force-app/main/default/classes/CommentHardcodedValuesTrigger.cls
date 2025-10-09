public class CommentHardcodedValuesTrigger {
    // This class triggers the rule: sf:CommentHardcodedValues by having hardcoded values without comments
    
    public void processData() {
        // Triggers sf:CommentHardcodedValues - hardcoded strings without comments
        String apiEndpoint = 'https://api.salesforce.com/v50.0/sobjects/Account';
        String maxRetries = '5';
        Integer timeout = 30000;
        Decimal rate = 0.085;
        
        // More hardcoded values without proper documentation
        List<String> statuses = new List<String>{'Active', 'Inactive', 'Pending', 'Closed'};
        Map<String, Integer> limits = new Map<String, Integer>{
            'max_users' => 1000,
            'max_records' => 50000,
            'timeout_seconds' => 300
        };
        
        if (UserInfo.getUserType() == 'Standard') {
            processStandardUser();
        }
    }
    
    private void processStandardUser() {
        String defaultRegion = 'US-EAST-1';
        String environment = 'PRODUCTION';
        Integer batchSize = 200;
        
        System.debug('Processing with defaults: ' + defaultRegion + ', ' + environment + ', Batch: ' + batchSize);
    }
}