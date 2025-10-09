public class ExceptionAsFlowControlTrigger {
    // This class is generated to trigger the rule: sf:ExceptionAsFlowControl
    // Rule: Exception as Flow Control
    public void bar() {
        try {
          try {
          } catch (Exception e) {
            throw new WrapperException(e); //Bad: this is essentially a GOTO to the WrapperException catch block.	
           }
         } catch (WrapperException e) {
         // do some more stuff
        }
      }
}