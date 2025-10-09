public class HotspotTypeReflectionTrigger {
    // This class triggers the HotspotTypeReflection security hotspot
    
    private interface Implementation {
        void run();
    }

    void bar1(string name){  
    	Type t = System.Type.forName('', name);
    }

    void bar2(System.Type t, string name){  
    	t.newInstance();
    }

    void bar3(Type t, string name){  
    	t.newInstance();
    }

    void bar4(string name){  
    	Type t = Type.forName('something');
    }

    void bar5(string name){  
    	Type t = System.Type.forName('', name);
    }

    void bar6(string name){  
    	Type t = Type.forName(name);
    }
    
    private class AdminImplementation implements Implementation {
        public void run() {
            System.debug('Admin privileged operation');
        }
    }
    
    private class StandardImplementation implements Implementation {
        public void run() {
            System.debug('Standard operation');
        }
    }
    
    public void init(){
        Implementation i = Type.forName(implementationName);
          i.run(); //Bad: This unchecked implementation could lead to unexpectedly running the AdminImplementation code.
      }
    
    public void dynamicTypeUsage() {
        String className = 'MyDynamicClass';
        Type dynamicType = Type.forName(className); // Security hotspot
        Object instance = dynamicType.newInstance(); // Unsafe reflection
    }
   
}