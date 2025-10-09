public class SinglularFieldTrigger {
    private Integer x;
    public void foo(Integer y) {             
        x = y + 5;            //Bad: x has no reason to exist at the instance level.
        System.debug(x);
    }
} 