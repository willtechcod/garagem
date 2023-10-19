import React from 'react';
import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string;
}
export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
    bg="primary.700"
    h={12}
    fontSize="sm"
    rounded="md"
    _pressed={{ bg: "click.600"}}
    mt={4}
    {...rest}
    >
        <Heading color="dark.700" fontSize="md">
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}