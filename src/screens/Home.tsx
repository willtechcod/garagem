import { useState } from 'react';
import { 
    Box, 
    VStack, 
    Select, 
    CheckIcon, 
    IconButton, 
    useTheme, 
    HStack,
    FlatList,
    Text,
    Center
 } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import { SignOut, Car } from 'phosphor-react-native';

import { Alert } from 'react-native';

import Slog from '../assets/header.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ListCar, ListCarProps } from '../components/ListCar';


export function Home() {
    const navigation = useNavigation();
    const [tipo, setTipo] = useState('');
    const [placa, setPlaca] = useState('');
    const [patio, setPatio] = useState<ListCarProps[]>([
        {
            id: '123',
            placa: 'HQR-5522',
            tipo: 'car',
            when: '09/10/2023 ás 22:34',
            status: 'open'
        },
        {
            id: '1234',
            placa: 'FEI-5522',
            tipo: 'bike',
            when: '09/10/2023 ás 23:34',
            status: 'open'
        },
    ]);
    const [showModal, setShowModal] = useState(false);
    const { colors } = useTheme();

    function handlePatio() {
        Alert.alert(placa, tipo);
        setPlaca('');
        setTipo('');
    }

    function handleOpenDetail(patioId: string){
        navigation.navigate('detail', { patioId })
    }

    
    return (
        <VStack flex={1} pb={6} bg="background.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                pt={12}
                pb={5}
                px={6}
            >
                <Center ml={6}>
                <Slog />
                <Text color="text.600">Estacione com comodidade.</Text>
                </Center>
                <IconButton icon={<SignOut size={26} color={colors.text[600]} />} mt={-6} mr={-3}  />
            </HStack>

            <Box flexDirection="row" alignItems="center" justifyContent="center">
                <Input
                    w="97px"
                    h="37px"
                    p="4px"
                    bg="background.700"
                    color="text.600"
                    placeholder='Placa'
                    value={placa}
                    onChangeText={setPlaca} />
                <Select
                    selectedValue={tipo}
                    minWidth="95px"
                    h="37px"
                    ml={2}
                    accessibilityLabel="Tipo"
                    placeholder="Tipo"
                    placeholderTextColor="text.600"
                    color="text.600"
                    _selectedItem={{
                        bg: "primary.700",
                        endIcon: <CheckIcon size="5" />
                    }} onValueChange={itemValue => setTipo(itemValue)}>
                    <Select.Item label="Carro" value="car" />
                    <Select.Item label="Moto" value="bike" />
                </Select>
                <Button
                    title='+'
                    w="47px"
                    h="37px"
                    ml={2}
                    mb={4}
                    onPress={handlePatio} />
            </Box>
            <Box w="90%" mb={10} ml={4} alignItems="center" justifyContent="center" h="1px" bg="secondary.700" />

            
                    <FlatList
                        data={patio}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <ListCar  data={item} onPress={() => handleOpenDetail(item.id)}/>}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 50}}
                        ListEmptyComponent={() => (
                            <Center>
                                <Car color={colors.text[600]} size={64}/>
                                <Text color={colors.text[600]}>Sem veículos no pátio</Text>
                            </Center>
                        )}
                    />
        </VStack>
    );
}
