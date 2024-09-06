import { useState } from 'react';
import { Box, Text, Slider, Space, NumberFormatter } from '@mantine/core';
import { set } from 'lodash';

function generateMarks(start: number, end: number, step: number): { value: number, label: string }[] {
  const marks = [];
  for (let i = start; i <= end; i += step) {
    marks.push({ value: i, label: `${i}%` });
  }
  return marks;
}


export function PriceSLiderInput() {

  const startPrice = 2300.12;
  const startValue = 100;

  const [value, setValue] = useState(startValue);
  const [endValue, setEndValue] = useState(startValue);
  const [price, setPrice] = useState(startPrice);

  const marks = generateMarks(10, 150, 10);

  function valueLabelFormat(value: number) {
    return `${'$'}${price}`;
  }


  const handleOnChange = (value: number) => {
    setValue(value);
    setPrice(Math.round(startPrice * (value / 100) * 100) / 100);
  };

  const handleOnChangeEnd = (value: number) => {
    setEndValue(value);
    setPrice(Math.round(startPrice * (value / 100) * 100) / 100);
  };

  return (
    <>
      <Space h="xl" />
      <Box mx="auto">
        <Slider
        color='dark'
          showLabelOnHover={true}
          value={value}
          onChange={handleOnChange}
          onChangeEnd={handleOnChangeEnd}
          marks={marks}
          min={30}
          max={150}
          labelAlwaysOn={true}
          label={valueLabelFormat}
        />
      </Box>
      <Space h="xl" />

      <Text mt="md" size="sm">Price {value < 100 ? 'Drop' : 'Up'}
        &nbsp; by {value < 100 ? startValue - value : value - startValue}% </Text>
      <Text mt="md" size="sm">Current ETH price: &nbsp;
        <NumberFormatter prefix="$" value={startPrice} decimalScale={2} thousandSeparator="." decimalSeparator="," />
      </Text>
      <Text mt={5} size="sm">Changed ETH price:
        <NumberFormatter prefix="$" value={price} decimalScale={2} thousandSeparator="." decimalSeparator="," />
      </Text>
    </>
  );
}