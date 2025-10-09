public class ExceptionClassNamingTrigger extends Exception {
    // This class name doesn't end with 'Exception' properly
    public ExceptionClassNamingTrigger() {
        super('Custom exception');
    }
}