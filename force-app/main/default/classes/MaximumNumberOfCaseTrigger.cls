public class MaximumNumberOfCaseTrigger {
    // This class triggers the rule: sf:MaximumNumberOfCase by having switch statements with too many case clauses
    
    public void processAccountType(String accountType) {
        // Triggers sf:MaximumNumberOfCase - switch with excessive case clauses
        switch on accountType {
            when 'Customer' {
                System.debug('Processing Customer account');
            }
            when 'Prospect' {
                System.debug('Processing Prospect account');
            }
            when 'Partner' {
                System.debug('Processing Partner account');
            }
            when 'Vendor' {
                System.debug('Processing Vendor account');
            }
            when 'Competitor' {
                System.debug('Processing Competitor account');
            }
            when 'Investor' {
                System.debug('Processing Investor account');
            }
            when 'Installation Partner' {
                System.debug('Processing Installation Partner account');
            }
            when 'Technology Partner' {
                System.debug('Processing Technology Partner account');
            }
            when 'Channel Partner' {
                System.debug('Processing Channel Partner account');
            }
            when 'Reseller Partner' {
                System.debug('Processing Reseller Partner account');
            }
            when 'Consultant' {
                System.debug('Processing Consultant account');
            }
            when 'Integration Partner' {
                System.debug('Processing Integration Partner account');
            }
            when 'Former Customer' {
                System.debug('Processing Former Customer account');
            }
            when 'Inactive Customer' {
                System.debug('Processing Inactive Customer account');
            }
            when 'VIP Customer' {
                System.debug('Processing VIP Customer account');
            }
            when 'Premium Customer' {
                System.debug('Processing Premium Customer account');
            }
            when 'Standard Customer' {
                System.debug('Processing Standard Customer account');
            }
            when 'Basic Customer' {
                System.debug('Processing Basic Customer account');
            }
            when 'Enterprise Customer' {
                System.debug('Processing Enterprise Customer account');
            }
            when 'SMB Customer' {
                System.debug('Processing SMB Customer account');
            }
            when else {
                System.debug('Processing Unknown account type: ' + accountType);
            }
        }
    }
    
    public Integer getPriorityScore(String rating) {
        // Triggers sf:MaximumNumberOfCase - another excessive switch statement
        Integer score = 0;
        switch on rating {
            when 'Hot' {
                score = 100;
            }
            when 'Warm' {
                score = 80;
            }
            when 'Cold' {
                score = 60;
            }
            when 'Very Hot' {
                score = 120;
            }
            when 'Extremely Hot' {
                score = 150;
            }
            when 'Lukewarm' {
                score = 70;
            }
            when 'Cool' {
                score = 50;
            }
            when 'Very Cold' {
                score = 30;
            }
            when 'Frozen' {
                score = 10;
            }
            when 'Burning' {
                score = 200;
            }
            when 'Sizzling' {
                score = 180;
            }
            when 'Boiling' {
                score = 160;
            }
            when 'Steaming' {
                score = 140;
            }
            when 'Tepid' {
                score = 45;
            }
            when 'Chilly' {
                score = 25;
            }
            when 'Arctic' {
                score = 5;
            }
            when 'Blazing' {
                score = 220;
            }
            when 'Scorching' {
                score = 210;
            }
            when 'Mild' {
                score = 55;
            }
            when 'Moderate' {
                score = 65;
            }
            when else {
                score = 40;
            }
        }
        return score;
    }
    
    public String getRegionCode(String country) {
        // Triggers sf:MaximumNumberOfCase - excessive country switch
        switch on country {
            when 'United States' { return 'US'; }
            when 'Canada' { return 'CA'; }
            when 'Mexico' { return 'MX'; }
            when 'United Kingdom' { return 'UK'; }
            when 'France' { return 'FR'; }
            when 'Germany' { return 'DE'; }
            when 'Italy' { return 'IT'; }
            when 'Spain' { return 'ES'; }
            when 'Netherlands' { return 'NL'; }
            when 'Belgium' { return 'BE'; }
            when 'Switzerland' { return 'CH'; }
            when 'Austria' { return 'AT'; }
            when 'Japan' { return 'JP'; }
            when 'China' { return 'CN'; }
            when 'India' { return 'IN'; }
            when 'Australia' { return 'AU'; }
            when 'Brazil' { return 'BR'; }
            when 'Argentina' { return 'AR'; }
            when 'Chile' { return 'CL'; }
            when 'South Africa' { return 'ZA'; }
            when else { return 'XX'; }
        }
    }
}