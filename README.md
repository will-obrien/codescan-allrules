# CodeScan All Rules Test Repository

This repository is designed to trigger all CodeScan rules from the **APEX**, **Visualforce and Lightning**, **Salesforce Metadata**, and **CodeScan JavaScript** rule sets. It serves as a comprehensive test environment to validate rule coverage and ensure proper detection of code quality issues across Salesforce development platforms.

## Purpose

The primary goal of this repository is to:

- **Trigger all available CodeScan rules** across different Salesforce development technologies
- **Validate rule detection** by providing code examples that should trigger specific rules
- **Test rule coverage** to ensure comprehensive code quality analysis
- **Provide a reference implementation** for CodeScan rule testing

## Repository Structure

```
├── force-app/main/default/          # Salesforce source code
│   ├── aura/                        # Aura Components (Lightning)
│   ├── classes/                     # Apex Classes (270 files)
│   ├── lwc/                         # Lightning Web Components
│   ├── pages/                       # Visualforce Pages
│   ├── triggers/                    # Apex Triggers
│   ├── objects/                     # Custom Objects and Metadata
│   ├── flows/                       # Salesforce Flows
│   └── ...                          # Other Salesforce metadata
```

## Rule Sets Covered

This repository targets the following CodeScan rule sets:

1. **APEX Rules** - Apex-specific code quality rules
2. **Visualforce and Lightning Rules** - UI component rules
3. **Salesforce Metadata Rules** - Configuration and metadata rules
4. **CodeScan JavaScript Rules** - CodeScan added JavaScript code quality rules

## Excluded Rules

The following rules are intentionally excluded from this repository and are documented in `tools/ignore_rules.txt`. These exclusions are categorized as follows:

### Common and Unit Test Rules
These rules are excluded as they relate to testing coverage and code duplication metrics that are not applicable to this test repository:
- `common-sf:DuplicatedBlocks`
- `common-sf:FailedUnitTests`
- `common-sf:InsufficientBranchCoverage`
- `common-sf:InsufficientCommentDensity`
- `common-sf:InsufficientLineCoverage`
- `common-sf:SkippedUnitTests`
- Similar rules for `common-vf` and `common-sfmeta` prefixes
- `sf:XPathRule`, `vf:XPathRule`, `sfmeta:XPathRule`
- `sf:FailedUnitTest`

### JavaScript Dependency Rules
These rules require external dependencies and package management that are not relevant to this test repository:
- `cs-vf:unsecure-js-dependency`
- `cs-js:unsecure-js-dependency`
- `cs-vf:npm-audit`
- `cs-js:npm-audit`

### Placeholder and Deprecated Rules
- `cs-vf:unknown`
- `cs-js:unknown`

### Rules with Parsing Issues
These rules have known parsing errors that prevent them from functioning correctly:
- `cs-vf:no-irregular-whitespace`
- `cs-vf:no-octal-escape`
- `cs-js:no-irregular-whitespace`
- `cs-js:no-octal-escape`

### nCino-Specific Rules
These rules are specific to nCino platform customizations and are not applicable to general Salesforce development:
- `sf:NcinoTriggerHandler`
- `sf:SystemBypassLogicTrigger`
- Multiple `sfmeta:Ncino*` rules (20+ rules)

### Rules with Salesforce Queries
These rules require specific Salesforce org configurations and cannot be properly tested in a static code repository:
- `sfmeta:CheckSystemAdministrator`
- `sfmeta:ExcessiveWorkflowsOrgWide`
- `sfmeta:ExcessivePageLayout`
- `sfmeta:CustomProfilesPermission`

## Usage

This repository is primarily used for:

1. **CodeScan rule validation** - Ensuring all rules are properly detected
2. **Rule coverage testing** - Verifying comprehensive rule coverage
3. **Quality assurance** - Testing CodeScan functionality across different Salesforce technologies

## Notes

- This repository contains intentionally problematic code designed to trigger CodeScan rules
- The code should not be used as a reference for best practices
- The code will not function correctly (or even deploy) in a Salesforce environment
- Regular updates may be needed as CodeScan rules evolve
