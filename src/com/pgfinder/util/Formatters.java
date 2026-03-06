package com.pgfinder.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Formatters {
    
    private static final SimpleDateFormat DATE_FORMAT = 
        new SimpleDateFormat("dd MMM yyyy");
    
    private static final SimpleDateFormat DATETIME_FORMAT = 
        new SimpleDateFormat("dd MMM yyyy HH:mm");
    
    public static String formatDate(Date date) {
        if (date == null) return "";
        return DATE_FORMAT.format(date);
    }
    
    public static String formatDateTime(Date date) {
        if (date == null) return "";
        return DATETIME_FORMAT.format(date);
    }
    
    public static String formatTimeAgo(Date date) {
        if (date == null) return "";
        
        long diff = System.currentTimeMillis() - date.getTime();
        long seconds = diff / 1000;
        long minutes = seconds / 60;
        long hours = minutes / 60;
        long days = hours / 24;
        
        if (days > 0) return days + " day" + (days > 1 ? "s" : "") + " ago";
        if (hours > 0) return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
        if (minutes > 0) return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
        return "Just now";
    }
    
    public static String truncate(String text, int length) {
        if (text == null || text.length() <= length) return text;
        return text.substring(0, length) + "...";
    }
}
