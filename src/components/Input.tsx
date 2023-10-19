import React from 'react';
import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
        bg="secondary.700"
        size="md"
        borderColor="border.800"
        fontSize="md"
        fontFamily="body"
        color="text.600"
        placeholderTextColor="border.800"
        _focus={{
          borderWidth: 1,
          borderColor: "outline.600",
          bg: "secondary.700"
        }}
        {...rest}
    />
  );
}