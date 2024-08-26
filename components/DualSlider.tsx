'use client';

import * as React from 'react';

import { useState } from 'react';
import { DualRangeSlider } from './ui/slider';

const DualRangeSliderCustomLabel = () => {
  const [values, setValues] = useState([20, 80]);

  return (
    <div className="w-full space-y-5">
      <DualRangeSlider
        label={(value) => <span>{value}</span>}
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={5}
      />
      <div className="flex gap-4">
        <span className="bg-[#81919110] flex-1 px-4 rounded-full ">{values[0]} €</span>
        <span>-</span>
        <span className="bg-[#81919110] flex-1 px-4 rounded-full ">{values[1]} €</span>
      </div>
    </div>
  );
};
export default DualRangeSliderCustomLabel;
