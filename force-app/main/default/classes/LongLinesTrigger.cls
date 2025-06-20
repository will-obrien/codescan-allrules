public class LongLinesTrigger {
    // This class triggers the rule: sf:LongLines by having lines that are too long
    
    public void processAccountDataWithVeryLongMethodNameAndParametersAndImplementationThatExceedsRecommendedLineLengthLimitsInApexCodebaseStandardsAndBestPractices(Account accountRecordWithVeryLongVariableNameThatShouldBeRefactoredForBetterReadability, String additionalParameterWithExtremelyLongNameThatMakesTheLineVeryLongAndHardToRead) {
        // Triggers sf:LongLines - method signature exceeds line length limit
        System.debug('Processing account with extremely long method signature and parameters that exceed the recommended line length limits for Apex code readability and maintainability standards: ' + accountRecordWithVeryLongVariableNameThatShouldBeRefactoredForBetterReadability.Name);
    }
    
    public void createContactWithLongImplementation() {
        // Triggers sf:LongLines - very long variable assignment and method calls
        Contact newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards = new Contact(FirstName = 'TestFirstNameThatIsVeryLongAndShouldBeShortenedForBetterCodeReadability', LastName = 'TestLastNameThatIsAlsoVeryLongAndContributesToOverallLineLengthIssues', Email = 'very.long.email.address.that.exceeds.normal.length.standards@company-with-very-long-domain-name-that-should-be-shortened.com');
        
        // Triggers sf:LongLines - long conditional with multiple conditions
        if (newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards.FirstName != null && newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards.LastName != null && newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards.Email != null && newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards.Email.contains('@') && !String.isBlank(newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards.FirstName) && !String.isBlank(newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards.LastName)) {
            insert newContactRecordWithVeryLongVariableNameThatExceedsRecommendedLengthStandards;
        }
    }
    
    public String buildVeryLongStringWithMultipleConcatenationsAndFormattingThatExceedsLineLengthLimits() {
        // Triggers sf:LongLines - very long string concatenation
        return 'This is a very long string that contains multiple concatenated parts and formatting that exceeds the recommended line length limits for Apex code readability and maintainability standards and best practices in software development' + ' and continues with even more text that makes the line extremely long and difficult to read without horizontal scrolling' + ' and adds even more content to demonstrate how long lines can become problematic for code review and maintenance activities';
    }
    
    private void performComplexDataProcessingWithMultipleParametersAndLongMethodCallsAndValidationLogicThatExceedsRecommendedLineLengthStandards(List<Account> accountRecordsListWithVeryLongVariableNameForDemonstrationPurposes, Map<Id, Contact> contactsMapWithVeryLongVariableNameThatExceedsStandards, Set<Id> accountIdsSetWithLongVariableName) {
        // Triggers sf:LongLines - complex processing with long variable names and method calls
        for (Account individualAccountRecordWithExtremelyLongVariableNameThatShouldBeRefactoredForBetterCodeReadabilityAndMaintainability : accountRecordsListWithVeryLongVariableNameForDemonstrationPurposes) {
            if (contactsMapWithVeryLongVariableNameThatExceedsStandards.containsKey(individualAccountRecordWithExtremelyLongVariableNameThatShouldBeRefactoredForBetterCodeReadabilityAndMaintainability.Id) && !String.isBlank(individualAccountRecordWithExtremelyLongVariableNameThatShouldBeRefactoredForBetterCodeReadabilityAndMaintainability.Name) && individualAccountRecordWithExtremelyLongVariableNameThatShouldBeRefactoredForBetterCodeReadabilityAndMaintainability.Type != null) {
                System.debug('Processing account with very long debugging message that includes multiple variable references and formatting: ' + individualAccountRecordWithExtremelyLongVariableNameThatShouldBeRefactoredForBetterCodeReadabilityAndMaintainability.Name + ' with type: ' + individualAccountRecordWithExtremelyLongVariableNameThatShouldBeRefactoredForBetterCodeReadabilityAndMaintainability.Type);
            }
        }
    }
    
    // Triggers sf:LongLines - very long comment that exceeds recommended line length limits and continues with additional text that makes it extremely difficult to read without horizontal scrolling and should be broken into multiple lines for better readability and code maintenance
    public void methodWithLongComment() {
        // This method demonstrates how long comments can trigger the sf:LongLines rule when they exceed the recommended character limit per line and continue with extensive explanations that should be refactored into multiple shorter lines for better code readability and maintainability
        System.debug('Method with long comment executed');
    }
}