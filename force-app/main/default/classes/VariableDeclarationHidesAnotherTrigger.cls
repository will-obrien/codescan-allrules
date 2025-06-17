public class VariableDeclarationHidesAnotherTrigger {
    private Integer x = 5;
    
    public void someMethod() {
        Integer x = 10; // This hides the field x
        System.debug('Hidden variable: ' + x);
    }
}