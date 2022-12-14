import React from "react";
import { Slider, Stack, Text, Box } from "native-base";
import { useTarefa } from "../../hook/useTarefa";

export const Rating = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(1);
  const { updateTarefa } = useTarefa();

  return <Stack mx={5} space={4} alignItems="center" w="100%">
    <Text>Nota: {onChangeValue}</Text>

    <Box mx={5} w="250">
      <Slider maxValue={5} minValue={1} defaultValue={50} colorScheme="cyan" onChange={v => {
        setOnChangeValue(Math.floor(v));
      }}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  </Stack>;
};
