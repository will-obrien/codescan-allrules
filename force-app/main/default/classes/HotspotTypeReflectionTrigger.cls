public class HotspotTypeReflectionTrigger {
    // This class triggers the HotspotTypeReflection security hotspot
    
    private interface Implementation {
        void run();
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
    
    public void init(String implementationName) {
        // Security hotspot: Dynamic type reflection with untrusted input
        Implementation i = (Implementation)Type.forName(implementationName).newInstance();
        i.run(); // Bad: This unchecked implementation could lead to unexpectedly running the AdminImplementation code.
    }
    
    public void dynamicTypeUsage() {
        String className = 'MyDynamicClass';
        Type dynamicType = Type.forName(className); // Security hotspot
        Object instance = dynamicType.newInstance(); // Unsafe reflection
    }
}