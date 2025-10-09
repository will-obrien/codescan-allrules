public class CognitiveComplexityTrigger {
    // This class triggers the rule: sf:CognitiveComplexity by having methods with high cognitive complexity
    
    public void processComplexLogic(List<Account> accounts, String category, Boolean isActive) {
        // Triggers sf:CognitiveComplexity - method with very high cognitive complexity
        
        if (accounts != null && !accounts.isEmpty()) { // +1
            for (Account acc : accounts) { // +1
                if (acc.Type != null) { // +1
                    if (acc.Type == 'Customer') { // +1
                        if (isActive) { // +1
                            if (category == 'Premium') { // +1
                                for (Contact con : [SELECT Id FROM Contact WHERE AccountId = :acc.Id]) { // +1
                                    if (con.Email != null) { // +1
                                        if (con.Email.contains('@')) { // +1
                                            try {
                                                processContact(con);
                                            } catch (Exception e) { // +1
                                                if (e.getMessage().contains('REQUIRED_FIELD')) { // +1
                                                    handleRequiredFieldError(con);
                                                } else if (e.getMessage().contains('DUPLICATE')) { // +1
                                                    handleDuplicateError(con);
                                                } else { // +1
                                                    handleGenericError(e, con);
                                                }
                                            }
                                        } else { // +1
                                            updateInvalidEmail(con);
                                        }
                                    }
                                }
                            } else if (category == 'Standard') { // +1
                                processStandardAccount(acc);
                            } else { // +1
                                processBasicAccount(acc);
                            }
                        } else { // +1
                            if (acc.AnnualRevenue != null && acc.AnnualRevenue > 100000) { // +1
                                reactivateAccount(acc);
                            }
                        }
                    } else if (acc.Type == 'Prospect') { // +1
                        if (acc.Rating == 'Hot') { // +1
                            processHotProspect(acc);
                        } else if (acc.Rating == 'Warm') { // +1
                            processWarmProspect(acc);
                        }
                    }
                } else { // +1
                    assignDefaultType(acc);
                }
                
                // Additional nested complexity
                if (acc.BillingCountry != null) { // +1
                    switch on acc.BillingCountry { // +1
                        when 'USA' {
                            if (acc.BillingState == 'CA') { // +1
                                applyCaliforniaRules(acc);
                            } else if (acc.BillingState == 'TX') { // +1
                                applyTexasRules(acc);
                            }
                        }
                        when 'Canada' {
                            if (acc.BillingState == 'ON') { // +1
                                applyOntarioRules(acc);
                            }
                        }
                        when else {
                            applyInternationalRules(acc);
                        }
                    }
                }
            }
        }
    }
    
    // Supporting methods to make the complexity violations work
    private void processContact(Contact con) { System.debug('Processing contact: ' + con.Id); }
    private void handleRequiredFieldError(Contact con) { System.debug('Required field error for: ' + con.Id); }
    private void handleDuplicateError(Contact con) { System.debug('Duplicate error for: ' + con.Id); }
    private void handleGenericError(Exception e, Contact con) { System.debug('Generic error: ' + e.getMessage()); }
    private void updateInvalidEmail(Contact con) { System.debug('Invalid email for: ' + con.Id); }
    private void processStandardAccount(Account acc) { System.debug('Processing standard account: ' + acc.Id); }
    private void processBasicAccount(Account acc) { System.debug('Processing basic account: ' + acc.Id); }
    private void reactivateAccount(Account acc) { System.debug('Reactivating account: ' + acc.Id); }
    private void processHotProspect(Account acc) { System.debug('Processing hot prospect: ' + acc.Id); }
    private void processWarmProspect(Account acc) { System.debug('Processing warm prospect: ' + acc.Id); }
    private void assignDefaultType(Account acc) { System.debug('Assigning default type to: ' + acc.Id); }
    private void applyCaliforniaRules(Account acc) { System.debug('Applying CA rules to: ' + acc.Id); }
    private void applyTexasRules(Account acc) { System.debug('Applying TX rules to: ' + acc.Id); }
    private void applyOntarioRules(Account acc) { System.debug('Applying ON rules to: ' + acc.Id); }
    private void applyInternationalRules(Account acc) { System.debug('Applying international rules to: ' + acc.Id); }
}