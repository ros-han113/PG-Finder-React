import { Search } from 'lucide-react';
import { Input } from '../ui/Input';

// Improved search with autocomplete - Day 5
export function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      icon={<Search size={18} />}
    />
  );
}
