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
        Type implementationType = Type.forName(implementationName); // Triggers hotspot
        Implementation i = (Implementation) implementationType.newInstance();
        i.run(); // Potentially dangerous dynamic execution
    }
    
    public void dynamicTypeUsage() {
        String className = 'MyDynamicClass';
        Type dynamicType = Type.forName(className); // Security hotspot
        Object instance = dynamicType.newInstance(); // Unsafe reflection
    }
}