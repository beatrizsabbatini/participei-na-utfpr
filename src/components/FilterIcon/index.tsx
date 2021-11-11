import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Container, FilterNumberBadge, FiltersNumber } from './styles';
import { useGroupSelect } from '../../hooks/GroupsSelect';

const FilterIcon: React.FC = () => {

  const { groups } = useGroupSelect();

  return (
    <Container>
      <MaterialCommunityIcons name="filter" size={24} color="white"/>
      <FilterNumberBadge>
        <FiltersNumber>{groups.length}</FiltersNumber>
      </FilterNumberBadge>
    </Container>
  )
}

export default FilterIcon;