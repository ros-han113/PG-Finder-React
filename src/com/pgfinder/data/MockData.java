package com.pgfinder.data;

import com.pgfinder.model.PG;
import com.pgfinder.model.Roommate;
import java.util.ArrayList;
import java.util.List;

public class MockData {
    
    public static List<PG> getPGListings() {
        List<PG> pgList = new ArrayList<>();
        
        PG pg1 = new PG(1, "Sunrise PG for Men", "Koramangala, Bangalore", 12000, 4.5, "Double Sharing", true);
        pg1.setCity("bangalore");
        pg1.setDeposit(24000);
        pg1.setReviews(45);
        pg1.setImage("https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?w=800");
        pg1.setAmenities(new String[]{"WiFi", "AC", "Laundry", "Food", "Parking"});
        pg1.setGender("Male");
        pg1.setAvailableRooms(3);
        pg1.setOwnerName("Rajesh Kumar");
        pg1.setOwnerPhone("+91 98765 43210");
        pg1.setDescription("Spacious PG accommodation near tech parks with all modern amenities.");
        pg1.setRules(new String[]{"No smoking", "No pets", "Guest allowed with prior notice"});
        pgList.add(pg1);
        
        PG pg2 = new PG(2, "Green Valley Girls Hostel", "HSR Layout, Bangalore", 10000, 4.8, "Triple Sharing", true);
        pg2.setCity("bangalore");
        pg2.setDeposit(20000);
        pg2.setReviews(62);
        pg2.setImage("https://images.unsplash.com/photo-1758523669073-edfbea249144?w=800");
        pg2.setAmenities(new String[]{"WiFi", "AC", "Laundry", "Food", "Security"});
        pg2.setGender("Female");
        pg2.setAvailableRooms(5);
        pg2.setOwnerName("Priya Sharma");
        pg2.setOwnerPhone("+91 98765 43211");
        pg2.setDescription("Safe and comfortable accommodation for working women and students.");
        pg2.setRules(new String[]{"No smoking", "Curfew at 10 PM", "ID proof required"});
        pgList.add(pg2);
        
        PG pg3 = new PG(3, "Tech Park Residency", "Whitefield, Bangalore", 15000, 4.6, "Single Room", true);
        pg3.setCity("bangalore");
        pg3.setDeposit(30000);
        pg3.setReviews(38);
        pg3.setImage("https://images.unsplash.com/photo-1661258412259-fe5a585c1450?w=800");
        pg3.setAmenities(new String[]{"WiFi", "AC", "Gym", "Food", "Parking", "Power Backup"});
        pg3.setGender("Unisex");
        pg3.setAvailableRooms(2);
        pg3.setOwnerName("Amit Patel");
        pg3.setOwnerPhone("+91 98765 43212");
        pg3.setDescription("Premium PG near IT parks with modern facilities.");
        pg3.setRules(new String[]{"No smoking", "Visitors allowed till 9 PM"});
        pgList.add(pg3);
        
        return pgList;
    }
    
    public static List<Roommate> getRoommateProfiles() {
        List<Roommate> roommateList = new ArrayList<>();
        
        Roommate r1 = new Roommate(1, "Arjun Mehta", 24, "Software Engineer", "Koramangala", 92, true);
        r1.setGender("Male");
        r1.setImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150");
        r1.setCompany("Tech Corp");
        r1.setBudget("10000-12000");
        r1.setLifestyle(new String[]{"Early Bird", "Non-Smoker", "Vegetarian"});
        r1.setBio("Software engineer looking for a clean and quiet roommate.");
        roommateList.add(r1);
        
        Roommate r2 = new Roommate(2, "Sneha Reddy", 23, "Product Manager", "HSR Layout", 88, true);
        r2.setGender("Female");
        r2.setImage("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150");
        r2.setCompany("StartupXYZ");
        r2.setBudget("12000-15000");
        r2.setLifestyle(new String[]{"Night Owl", "Non-Smoker", "Foodie"});
        r2.setBio("Product manager seeking a friendly and social roommate.");
        roommateList.add(r2);
        
        return roommateList;
    }
}
