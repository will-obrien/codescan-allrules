public class FieldDeclarationsShouldBeAtStartOfClassTrigger {
    public String getMessage() {
        return 'Hello World!';
    }
    private String _fieldInWrongLocation; //Bad: Field declared after methods and/or inner classes.
} 