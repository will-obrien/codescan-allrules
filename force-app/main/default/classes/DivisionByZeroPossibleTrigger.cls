public class DivisionByZeroPossibleTrigger {
    // This class triggers the rule: sf:DivisionByZeroPossible by having division operations that could divide by zero
    
    public Decimal calculateAverage(Decimal total, Integer count) {
        // Triggers sf:DivisionByZeroPossible - no check if count is zero
        return total / count; // Could throw exception if count is 0
    }
    
    public Decimal getPercentage(Decimal part, Decimal whole) {
        // Triggers sf:DivisionByZeroPossible - division without zero check
        return (part / whole) * 100; // Could fail if whole is 0
    }
    
    public void processAccountMetrics(List<Account> accounts) {
        // Triggers sf:DivisionByZeroPossible - multiple division operations without validation
        Integer totalAccounts = accounts.size();
        Decimal totalRevenue = 0;
        Integer activeAccounts = 0;
        
        for (Account acc : accounts) {
            if (acc.AnnualRevenue != null) {
                totalRevenue += acc.AnnualRevenue;
            }
            if (acc.Type == 'Customer') {
                activeAccounts++;
            }
        }
        
        // Potential division by zero - no validation
        Decimal avgRevenue = totalRevenue / totalAccounts; // Could fail if totalAccounts is 0
        Decimal activeRatio = activeAccounts / totalAccounts; // Could fail if totalAccounts is 0
        Decimal avgActiveRevenue = totalRevenue / activeAccounts; // Could fail if activeAccounts is 0
        
        System.debug('Average Revenue: ' + avgRevenue);
        System.debug('Active Ratio: ' + activeRatio);
        System.debug('Average Active Revenue: ' + avgActiveRevenue);
    }
    
    public Decimal calculateGrowthRate(Decimal currentValue, Decimal previousValue) {
        // Triggers sf:DivisionByZeroPossible - growth calculation without checking for zero
        Decimal growth = currentValue - previousValue;
        return (growth / previousValue) * 100; // Could fail if previousValue is 0
    }
    
    public void analyzeOpportunityData(List<Opportunity> opportunities) {
        // Triggers sf:DivisionByZeroPossible - complex calculations with potential zero division
        Map<String, Decimal> stageAmounts = new Map<String, Decimal>();
        Map<String, Integer> stageCounts = new Map<String, Integer>();
        
        for (Opportunity opp : opportunities) {
            String stage = opp.StageName;
            Decimal amount = opp.Amount != null ? opp.Amount : 0;
            
            if (!stageAmounts.containsKey(stage)) {
                stageAmounts.put(stage, 0);
                stageCounts.put(stage, 0);
            }
            
            stageAmounts.put(stage, stageAmounts.get(stage) + amount);
            stageCounts.put(stage, stageCounts.get(stage) + 1);
        }
        
        // Potential division by zero in loop
        for (String stage : stageAmounts.keySet()) {
            Decimal totalAmount = stageAmounts.get(stage);
            Integer count = stageCounts.get(stage);
            
            // Could fail if count is 0
            Decimal averageAmount = totalAmount / count;
            System.debug('Stage: ' + stage + ', Average: ' + averageAmount);
        }
    }
    
    public Integer getRecordsPerPage(Integer totalRecords, Integer numberOfPages) {
        // Triggers sf:DivisionByZeroPossible - pagination calculation
        return totalRecords / numberOfPages; // Could fail if numberOfPages is 0
    }
    
    public Decimal calculateMargin(Decimal revenue, Decimal cost) {
        // Triggers sf:DivisionByZeroPossible - margin calculation
        Decimal profit = revenue - cost;
        return (profit / revenue) * 100; // Could fail if revenue is 0
    }
    
    public void processFinancialRatios(Decimal assets, Decimal liabilities, Decimal equity) {
        // Triggers sf:DivisionByZeroPossible - multiple financial ratio calculations
        
        // Debt-to-equity ratio
        Decimal debtToEquity = liabilities / equity; // Could fail if equity is 0
        
        // Asset turnover ratio (assuming some revenue value)
        Decimal revenue = 1000000;
        Decimal assetTurnover = revenue / assets; // Could fail if assets is 0
        
        // Equity multiplier
        Decimal equityMultiplier = assets / equity; // Could fail if equity is 0
        
        System.debug('Debt-to-Equity: ' + debtToEquity);
        System.debug('Asset Turnover: ' + assetTurnover);
        System.debug('Equity Multiplier: ' + equityMultiplier);
    }
    
    public Decimal calculateTimeToComplete(Integer totalTasks, Integer tasksPerDay) {
        // Triggers sf:DivisionByZeroPossible - time calculation
        return totalTasks / tasksPerDay; // Could fail if tasksPerDay is 0
    }
    
    public void calculateProductionRates(List<Integer> dailyProduction) {
        // Triggers sf:DivisionByZeroPossible - production analysis
        Integer totalProduction = 0;
        Integer workingDays = 0;
        
        for (Integer production : dailyProduction) {
            totalProduction += production;
            if (production > 0) {
                workingDays++;
            }
        }
        
        // Multiple potential division by zero scenarios
        Integer totalDays = dailyProduction.size();
        Decimal avgDailyProduction = totalProduction / totalDays; // Could fail if totalDays is 0
        Decimal avgWorkingDayProduction = totalProduction / workingDays; // Could fail if workingDays is 0
        Decimal efficiencyRate = workingDays / totalDays; // Could fail if totalDays is 0
        
        System.debug('Average Daily Production: ' + avgDailyProduction);
        System.debug('Average Working Day Production: ' + avgWorkingDayProduction);
        System.debug('Efficiency Rate: ' + efficiencyRate);
    }
    
    private Decimal divideWithoutValidation(Decimal numerator, Decimal denominator) {
        // Triggers sf:DivisionByZeroPossible - helper method without validation
        return numerator / denominator; // Could fail if denominator is 0
    }
}