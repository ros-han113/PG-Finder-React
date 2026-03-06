package com.pgfinder.util;

import java.text.NumberFormat;
import java.util.Locale;

public class FormatPrice {
    
    public static String formatIndianCurrency(double amount) {
        NumberFormat formatter = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        return formatter.format(amount);
    }
    
    public static String formatWithoutSymbol(double amount) {
        NumberFormat formatter = NumberFormat.getNumberInstance(new Locale("en", "IN"));
        return formatter.format(amount);
    }
    
    public static String formatCompact(double amount) {
        if (amount >= 100000) {
            return String.format("%.1fL", amount / 100000);
        } else if (amount >= 1000) {
            return String.format("%.1fK", amount / 1000);
        }
        return String.format("%.0f", amount);
    }
}
