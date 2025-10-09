public class AvoidMethodsBeforeInitializersTrigger {
    private String status;
    
    public AvoidMethodsBeforeInitializersTrigger(String status) {
        if (getStatus() == 'something') { // Method called before initialization
            System.debug('Status check');
        }
        this.status = status;
    }
    
    public String getStatus() {
        return this.status;
    }
}