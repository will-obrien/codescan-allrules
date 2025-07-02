public class HotspotEncryptTrigger {
    // This class triggers the HotspotEncrypt security hotspot
    
    public void encryptSensitiveData() {
        String sensitiveData = 'confidential information';
        String key = 'hardcoded-key-123'; // Security hotspot: hardcoded key
        
        // Security hotspot: Using encryption with potentially unsafe practices
        Blob encryptedData = Crypto.encrypt('AES128', Blob.valueOf(key), Blob.valueOf(sensitiveData)); // Triggers hotspot
        
        System.debug('Encrypted data: ' + EncodingUtil.base64Encode(encryptedData));
    }
    
    public void generateEncryptionKey() {
        // Security hotspot: Key generation and storage
        Blob cryptoKey = Crypto.generateAesKey(128); // Triggers hotspot
        String keyString = EncodingUtil.base64Encode(cryptoKey);
        
        // Potentially unsafe key storage
        System.debug('Generated key: ' + keyString); // Should use secure storage
    }
    
    public void encryptWithUserInput(String userKey) {
        String data = 'sensitive data';
        // Security hotspot: Using user-provided encryption key
        Blob encrypted = Crypto.encrypt('AES256', Blob.valueOf(userKey), Blob.valueOf(data)); // Triggers hotspot
    }

    public void cryptoExamples(){
        Blob hardCodedKey = Blob.valueOf('0000000000000000');
        Blob hardCodedIV = Blob.valueOf('Hardcoded IV 123');
        Blob data = Blob.valueOf('Data to be encrypted');
        //Bad: use of hard coded key/iv.
        Blob encrypted = Crypto.encrypt('AES128', hardCodedKey, hardCodedIV, data);
    }
}