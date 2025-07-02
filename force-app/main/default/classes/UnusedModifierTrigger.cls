public interface UnusedModifierTrigger {
    public abstract void bar(); //Both abstract and public are ignored by the compiler.
    public static final Integer X = 0; //Public, static, and final all ignored.
    public static class Bar {} //Public and static are ignored.
    public static interface Baz {} //Public and static are ignored.
}