import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Container, FilterNumberBadge, FiltersNumber } from './styles';
import { useFilters } from '../../hooks/Filters';

const FilterIcon: React.FC = () => {

  const { numberOfFilters } = useFilters();
  return (
    <Container>
      <MaterialCommunityIcons name="filter" size={24} color="white"/>
      <FilterNumberBadge>
        <FiltersNumber>{numberOfFilters}</FiltersNumber>
      </FilterNumberBadge>
    </Container>
  )
}

export default FilterIcon;