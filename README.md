# CodeScan All Rules Demo Repository

This Salesforce repository has been specifically designed to trigger every rule from CodeScan's rule set. Each file is named after the rule it violates and contains code that intentionally demonstrates that specific violation.

## Purpose

This repository serves as:
- A comprehensive test suite for CodeScan rule coverage
- A reference for understanding what each rule detects
- A training resource for developers to see examples of code issues
- A validation tool for CodeScan implementations

## Repository Structure

```
force-app/main/default/
├── classes/                          # Apex classes with rule violations
├── triggers/                         # Apex triggers with rule violations  
├── pages/                           # Visualforce pages with rule violations
├── aura/                            # Lightning Aura components with rule violations
├── objects/                         # Custom objects and fields with metadata rule violations
├── profiles/                        # Profiles with security rule violations
├── permissionsets/                  # Permission sets with security rule violations
└── flows/                           # Flows with metadata rule violations
```

## Rule Categories Covered

### Apex Rules (sf:*)
- **sf:AvoidGlobalModifier** - Global modifiers used unnecessarily
- **sf:AvoidSoqlInLoops** - SOQL queries inside loops  
- **sf:SystemDebug** - System.debug statements in code
- **sf:AuraEnabledWithoutCatchBlock** - @AuraEnabled methods without proper error handling
- **sf:AvoidHardCodedError** - Hard-coded error messages
- **sf:InsecureEndpoint** - HTTP endpoints instead of HTTPS
- **sf:EmptyCatchBlock** - Empty catch blocks that swallow exceptions
- **sf:EmailAddressInLiteral** - Hard-coded email addresses
- **sf:BrokenNullCheck** - Incorrect null check logic
- **sf:Csrf** - DML operations in constructors/action methods
- **sf:AvoidSizeOfSoql** - Using .size() on SOQL instead of COUNT()
- **sf:LongClassName** - Excessively long class names
- **sf:LongMethodName** - Excessively long method names  
- **sf:LongTriggerName** - Excessively long trigger names
- **sf:AvoidOutboundCallsInBatchApex** - Database.AllowsCallouts in Batch Apex
- **sf:ClassWithoutTestClass** - Classes without corresponding test classes
- **sf:FailedUnitTest** - Failing unit tests
- **sf:CommentedTodo** - TODO/FIXME comments in code

### Visualforce & Lightning Rules (cs-vf:*)
- **cs-vf:no-console** - console.log/error/warn usage
- **cs-vf:no-implied-eval** - setTimeout/setInterval with string arguments
- **cs-vf:no-self-compare** - Comparing variables to themselves
- **cs-vf:no-return-assign** - Assignment operators in return statements
- **cs-vf:new-parens** - Missing parentheses in constructor calls
- **cs-vf:no-floating-decimal** - Floating decimal points without leading/trailing numbers
- **cs-vf:no-underscore-dangle** - Dangling underscores in identifiers
- **cs-vf:no-sparse-arrays** - Arrays with empty slots
- **cs-vf:no-octal-escape** - Octal escape sequences in strings
- **cs-vf:no-regex-spaces** - Multiple spaces in regular expressions
- **cs-vf:aura-api** - Invalid Aura API usage

### JavaScript Rules (cs-js:*)
- **cs-js:no-control-regex** - Control characters in regular expressions
- **cs-js:no-catch-shadow** - Catch clause parameters shadowing variables
- **cs-js:no-new-wrappers** - new String(), new Number(), new Boolean()
- **cs-js:no-shadow-restricted-names** - Shadowing restricted names (undefined, NaN, etc.)
- **cs-js:no-empty-character-class** - Empty character classes in regex
- **cs-js:no-new-object** - new Object() instead of object literal
- **cs-js:no-extend-native** - Extending native prototypes
- **cs-js:no-obj-calls** - Calling Math(), JSON() as functions
- **cs-js:no-extra-bind** - Unnecessary .bind() calls
- **cs-js:no-undef** - Using undeclared variables

### Salesforce Metadata Rules (sfmeta:*)
- **sfmeta:RequireDescriptionComponent** - Custom components without descriptions
- **sfmeta:ExternalIdOveruse** - Too many External ID fields per object
- **sfmeta:LimitCustomFields** - Too many custom fields per object
- **sfmeta:ObjectLookupsOveruse** - Too many lookup relationships per object
- **sfmeta:RelationShipOveruse** - Too many relationships per object
- **sfmeta:ExcessivePageLayout** - Too many page layouts per object
- **sfmeta:ExcessWorkflowsPerObject** - Too many workflow rules per object
- **sfmeta:CheckSystemAdministrator** - Too many System Administrator users
- **sfmeta:CustomProfilesPermission** - Custom profiles with "Modify All Data" permission

### Security & Policy Rules (codescan-policy:*)
- **ProfileDataAdminPolicy** - Data admin permissions in profiles
- **ProfilePlatformAdminPolicy** - Platform admin permissions in profiles  
- **ProfileUserMgmtPolicy** - User management permissions in profiles
- **ProfilePasswordPolicy** - Password policy settings in profiles
- **OrganizationPasswordPolicy** - Organization-level password policies
- **ProfileSessionPolicy** - Session management settings in profiles

## Files and Rules Mapping

### Apex Classes (65+ rule violations)
- `AvoidGlobalModifier.cls` → sf:AvoidGlobalModifier
- `AvoidSoqlInLoops.cls` → sf:AvoidSoqlInLoops  
- `SystemDebug.cls` → sf:SystemDebug
- `AuraEnabledWithoutCatchBlock.cls` → sf:AuraEnabledWithoutCatchBlock
- `AvoidHardCodedError.cls` → sf:AvoidHardCodedError
- `InsecureEndpoint.cls` → sf:InsecureEndpoint
- `EmptyCatchBlock.cls` → sf:EmptyCatchBlock
- `EmailAddressInLiteral.cls` → sf:EmailAddressInLiteral
- `BrokenNullCheck.cls` → sf:BrokenNullCheck
- `Csrf.cls` → sf:Csrf
- `AvoidSizeOfSoql.cls` → sf:AvoidSizeOfSoql
- `AnExcessivelyLongApexClassNameAsNegativeExampleToViolateLongClassNameRule.cls` → sf:LongClassName & sf:LongMethodName
- `AvoidOutboundCallsInBatchApex.cls` → sf:AvoidOutboundCallsInBatchApex
- `ClassWithoutTestClass.cls` → sf:ClassWithoutTestClass (no corresponding test)
- `FailedUnitTest.cls` → sf:FailedUnitTest
- `CommentedTodo.cls` → sf:CommentedTodo
- `TrackSuppressWarnings.cls` → sf:TrackSuppressWarnings
- `OutboundEmailSend.cls` → sf:OutboundEmailSend
- `ExceptionClassNaming.cls` → sf:ExceptionClassNaming
- `LeftBracesLinePositions.cls` → sf:LeftBracesLinePositions
- `AvoidForLoopToJustAddElementsToCollection.cls` → sf:AvoidForLoopToJustAddElementsToCollection
- `VariableDeclarationHidesAnother.cls` → sf:VariableDeclarationHidesAnother
- `CouplingBetweenObjects.cls` → sf:CouplingBetweenObjects
- `ExcessivePublicCount.cls` → sf:ExcessivePublicCount
- `UncommentedEmptyConstructor.cls` → sf:UncommentedEmptyConstructor
- `AbstractClassWithoutAnyMethod.cls` → sf:AbstractClassWithoutAnyMethod
- `AvoidMethodsBeforeInitializers.cls` → sf:AvoidMethodsBeforeInitializers
- `AvoidSoqlWithNegativeLogic.cls` → sf:AvoidSoqlWithNegativeLogic
- `AbstractClassWithoutAbstractMethod.cls` → sf:AbstractClassWithoutAbstractMethod
- `CommentRequired.cls` → sf:CommentRequired
- `AvoidLosingExceptionInformation.cls` → sf:AvoidLosingExceptionInformation
- `AvoidLogicInTrigger.cls` → sf:AvoidLogicInTrigger (handler class)
- `CyclomaticComplexity.cls` → sf:CyclomaticComplexity
- `AvoidPublicFields.cls` → sf:AvoidPublicFields
- `AvoidMultipleUnaryOperators.cls` → sf:AvoidMultipleUnaryOperators
- `AvoidInsecureCookies.cls` → sf:AvoidInsecureCookies  
- `FieldLevelSecurity.cls` → sf:FieldLevelSecurity
- `SwitchStmtsShouldHaveDefault.cls` → sf:SwitchStmtsShouldHaveDefault
- `UnreachableCode.cls` → sf:UnreachableCode
- `AvoidHardCodedCredential.cls` → sf:AvoidHardCodedCredential
- `AvoidSoqlWithNullInWhere.cls` → sf:AvoidSoqlWithNullInWhere
- `ConstructorCallsOverridableMethod.cls` → sf:ConstructorCallsOverridableMethod
- `EmptyFinallyBlock.cls` → sf:EmptyFinallyBlock
- `CatchBlockShouldDoMoreThanRethrow.cls` → sf:CatchBlockShouldDoMoreThanRethrow
- `NPathComplexity.cls` → sf:NPathComplexity
- `UnusedFormalParameter.cls` → sf:UnusedFormalParameter
- `OpenRedirect.cls` → sf:OpenRedirect
- `UseObjectForClearerAPI.cls` → sf:UseObjectForClearerAPI
- `PreserveStackTrace.cls` → sf:PreserveStackTrace
- `TestClassNaming.cls` → sf:TestClassNaming
- `BrokenMathCast.cls` → sf:BrokenMathCast
- `UnconditionalIfStatement.cls` → sf:UnconditionalIfStatement
- `UnusedNullCheckInEquals.cls` → sf:UnusedNullCheckInEquals
- `LawOfDemeter.cls` → sf:LawOfDemeter
- `NcssConstructorCount.cls` → sf:NcssConstructorCount
- `ForLoopShouldBeWhileLoop.cls` → sf:ForLoopShouldBeWhileLoop
- `VfPageController.cls` → Multiple violations
- `AuraComponentController.cls` → Multiple violations

### Triggers
- `AnExcessivelyLongTriggerNameAsNegativeExampleViolatingLongTriggerNameRule.trigger` → sf:LongTriggerName
- `AccountTriggerWithLogic.trigger` → sf:AvoidLogicInTrigger

### Visualforce Pages
- `VfPageWithJavaScriptViolations.page` → Multiple VF and JS rules

### Lightning Components
- `AccountProcessorComponent/` → Multiple Aura and JS rules

### Metadata
- `Test_Object__c/` → Multiple metadata rules
- `fields/Field_Without_Description__c.field-meta.xml` → sfmeta:RequireDescriptionComponent
- `fields/External_ID_Field_1__c.field-meta.xml` → sfmeta:ExternalIdOveruse

## Running CodeScan

To scan this repository with CodeScan and detect all violations:

1. **CodeScan Cloud:**
   ```bash
   # Connect your repository to CodeScan Cloud
   # All violations will be detected automatically
   ```

2. **CodeScan CLI:**
   ```bash
   # Run local scan (requires CodeScan CLI setup)
   codescan-cli scan
   ```

3. **SF CLI with CodeScan:**
   ```bash
   # If using Salesforce CLI with CodeScan plugin
   sf scanner:run --target "force-app" --format table
   ```

## Expected Results

When scanning this repository, you should see violations for:
- **400+ Apex rule violations** across multiple severity levels (65+ unique rules)
- **50+ JavaScript rule violations** in VF pages and Lightning components  
- **25+ Metadata rule violations** in custom objects and configurations
- **Multiple security policy violations** in profiles and permission sets

## Notes

- **All violations are intentional** - This code should never be deployed to production
- Each file is specifically designed to trigger certain rules
- Some files may trigger multiple rules simultaneously
- The code demonstrates anti-patterns and should serve as examples of what NOT to do
- Rule violations span all severity levels: INFO, MINOR, MAJOR, CRITICAL, BLOCKER

## Contributing

To add new rule violations:
1. Create a new file named after the rule (e.g., `NewRuleName.cls`)
2. Add code that specifically violates that rule
3. Document the violation with comments
4. Update this README with the new rule mapping

## Disclaimer

This repository contains intentionally bad code for testing purposes. Do not use any of these patterns in production Salesforce applications. 