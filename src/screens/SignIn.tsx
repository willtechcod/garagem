import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key} from 'phosphor-react-native';

import Logo from '../assets/Logo.svg';

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn (){
    const [ isLoading, setIsLoading ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const { colors } = useTheme();

    function handleSignIn(){
        if(!email || !password) {
            return Alert.alert('Atenção', 'Preencha todos os campos!');
        }

        setIsLoading(true);

        auth()
        .signInWithEmailAndPassword(email, password)
        
        .catch((error) => {
            console.log(error);
            setIsLoading(false);

            if (error.code === 'auth/invalid-email'){
                return Alert.alert('Atenção', 'E-mail inválido.');
            }

            if (error.code === 'auth/wrong-password'){
                return Alert.alert('Atenção', 'E-mail/ou senha inválidos!');
            }

            if (error.code === 'auth/user-not-found'){
                return Alert.alert('Atenção', 'E-mail/ou senha inválidos!');
            }

            return Alert.alert('Atenção', 'Não foi possivel acessar!');
        });
    }

    return(
        <VStack flex={1} alignItems="center" bg="background.700" px={8} pt={24}>
            <Logo />

            <Heading color="text.600" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input
                placeholder="E-mail"
                keyboardType="email-address"
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.text[600]}/>} ml={4}/>}
                value={email}
                onChangeText={setEmail}
                textTransform="lowercase"
             />
            <Input
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.text[600]}/>} ml={4}/>}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textTransform="lowercase"
             />


             <Button 
             title="Entrar"
             w="full"
             onPress={handleSignIn}
             isLoading={isLoading}
             />
        </VStack>
    )
}