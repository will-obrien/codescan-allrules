public class VariableDeclarationHidesAnotherTrigger {
    private Integer x = 5;
    
    public void someMethod() {
        Integer x = 10; // This hides the field x
        System.debug('Hidden variable: ' + x);
    }

    integer x;
    public void asdf(){
        integer x = 0;      //Bad: The variable x defined as a field will be hidden.
    }
}