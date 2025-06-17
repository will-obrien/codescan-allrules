public class HotspotDeserializeJsonTrigger {
    // This class triggers the HotspotDeserializeJson security hotspot
    
    public class Car {
        public String make;
        public String year;
        public String model;
    }
    
    public Car createCarFromUserInput(String userMake, String userYear) {
        // Security hotspot: Deserializing JSON with untrusted input
        String jsonString = '{' + '"make":"' + userMake + '","year":"' + userYear + '"' + '}';
        Car c = (Car) JSON.deserializeStrict(jsonString, Car.class); // Triggers hotspot
        return c;
    }
    
    public Object deserializeUnknownJson(String jsonData) {
        // Security hotspot: Deserializing arbitrary JSON
        Object result = JSON.deserializeUntyped(jsonData); // Triggers hotspot
        return result;
    }
    
    public void processExternalJsonData(String externalJson) {
        try {
            // Security hotspot: Deserializing external JSON data
            Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(externalJson); // Triggers hotspot
            System.debug('Processed data: ' + data);
        } catch (Exception e) {
            System.debug('JSON parsing error: ' + e.getMessage());
        }
    }
    
    public Car deserializeCarWithValidation(String jsonInput) {
        // Security hotspot: Even with validation, deserialization is flagged
        if (String.isNotBlank(jsonInput)) {
            Car deserializedCar = (Car) JSON.deserialize(jsonInput, Car.class); // Triggers hotspot
            return deserializedCar;
        }
        return null;
    }
}