package com.pgfinder.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

public class Helpers {
    
    public static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes());
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
    
    public static String generateBookingId() {
        return "BK" + System.currentTimeMillis() + new Random().nextInt(1000);
    }
    
    public static String generateOTP() {
        return String.format("%06d", new Random().nextInt(999999));
    }
    
    public static double calculateCompatibility(String[] lifestyle1, String[] lifestyle2) {
        if (lifestyle1 == null || lifestyle2 == null) return 0.0;
        
        int matches = 0;
        for (String trait1 : lifestyle1) {
            for (String trait2 : lifestyle2) {
                if (trait1.equalsIgnoreCase(trait2)) {
                    matches++;
                    break;
                }
            }
        }
        
        int total = Math.max(lifestyle1.length, lifestyle2.length);
        return total > 0 ? (matches * 100.0 / total) : 0.0;
    }
}
