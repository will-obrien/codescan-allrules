public class RightBracesSpacingPositionsTrigger {
    // This class is generated to trigger the rule: sf:RightBracesSpacingPositions
    // Rule: Right Braces Spacing Should Be Consistent
    public void triggerRule() {
        System.debug('This class triggers: sf:RightBracesSpacingPositions');
		try{
            doStuff();
		}catch(Exception e){
		}finally {
            System.debug('I Tried Doing stuff');
		}
    }

    private void doStuff(){
        System.debug('Doing stuff');
    }
}