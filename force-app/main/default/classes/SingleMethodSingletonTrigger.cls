public class SingleMethodSingletonTrigger {
    // This class triggers the rule: sf:SingleMethodSingleton by implementing a singleton with only one method
    
    private static SingletonSingleMethodSingletonTrigger singleton = new SingletonSingleMethodSingletonTrigger( );
	
    private SingletonSingleMethodSingletonTrigger(){ }
      
    public static SingletonSingleMethodSingletonTrigger getInstance() {
      return singleton;
    }
    
    
    public static SingletonSingleMethodSingletonTrigger getInstance(Object obj){   //Bad: You should only have one getInstance() method. 
      SingletonSingleMethodSingletonTrigger singleton = (SingletonSingleMethodSingletonTrigger) obj;
          return singleton;			
    }
    
    // Note: Having only getInstance() and one other method triggers the SingleMethodSingleton rule
    // This pattern suggests the singleton might be unnecessary and could be replaced with a static method
}