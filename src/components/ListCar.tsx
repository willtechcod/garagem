import React from 'react';
import { HStack, Text, Pressable, Circle, IPressableProps } from 'native-base';
import { Car, Bicycle } from 'phosphor-react-native';

export type ListCarProps = {
    id: string;
    placa: string;
    tipo: 'car' | 'bike';
    when: string;
    status: 'open' | 'closed';
}

type Props = IPressableProps & {
    data: ListCarProps;
}

export function ListCar({ data, ...rest}: Props) {
  return (
    <Pressable {...rest} >
        <HStack 
            bg="primary.700"
            mb={4}
            alignItems="center"
            justifyContent="space-between"
            rounded="sm"
            w="90%"
            ml={4}
        >
            <Text my={4} ml={2}  fontSize="md">{data.placa}</Text>
            <Text mr={5} ml={5} color="time.600" fontSize="md">{data.when}</Text>

            <Circle bg="circo.700" h={10} w={10} mr={5}>
                {
                    data.tipo === 'car'
                    ? <Car color='#FFF' />
                    : <Bicycle color='#FFF' />
                }
            </Circle>
        </HStack>
    </Pressable>
  );
}