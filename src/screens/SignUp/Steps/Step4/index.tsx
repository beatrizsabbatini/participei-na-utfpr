import React, { useState } from 'react';

import Dropdown from '../../../../components/Dropdown';
import { mockCampuses } from '../../../../mock/activitiesMock';

const Step4: React.FC = () => {
  const [value, setValue] = useState()
  return <Dropdown list={mockCampuses} value={value} setValue={setValue} placeholder="Selecione um campus"/>
}

export default Step4;