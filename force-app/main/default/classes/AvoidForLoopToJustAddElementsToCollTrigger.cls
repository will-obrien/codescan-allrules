public class AvoidForLoopToJustAddElementsToCollTrigger {
    public void badCombine() {
        List<String> listOne = new List<String>{'one', 'two'};
        List<String> listTwo = new List<String>{'A', 'B'};
        
        for (String item : listOne) { // Should use addAll instead
            listTwo.add(item);
        }
    }
}