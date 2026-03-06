import { Card } from '../ui/Card';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export function PGFilters({ filters, onChange, onClear }) {
  return (
    <Card>
      <h4 style={{ marginBottom: '1rem' }}>Filters</h4>
      
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          Rent Range
        </label>
        <input 
          type="range" 
          min="3000" 
          max="20000" 
          value={filters.maxRent}
          onChange={(e) => onChange({ ...filters, maxRent: e.target.value })}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#6b7280' }}>
          <span>₹3,000</span>
          <span>₹{filters.maxRent}</span>
        </div>
      </div>

      <Select
        label="Gender"
        value={filters.gender}
        onChange={(e) => onChange({ ...filters, gender: e.target.value })}
        options={[
          { value: 'all', label: 'All' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' }
        ]}
      />

      <Button variant="outline" onClick={onClear} style={{ width: '100%', marginTop: '1rem' }}>
        Clear Filters
      </Button>
    </Card>
  );
}
