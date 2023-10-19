import { VStack, Text } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Header } from '../components/Header';

type RouteParams = {
    patioId: string;
}

export function Detail() {
    const route = useRoute();
    const { patioId } = route.params as RouteParams;
  return (
    <VStack bg='background.700' flex={1}>
        <Header title='Veículo' />
          <Text color="text.600">
            {patioId}
          </Text>
    </VStack>
  );
}