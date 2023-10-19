import { HStack, Heading, IconButton, useTheme, StyledProps } from "native-base";
import { CaretLeft } from 'phosphor-react-native';
import { useNavigation } from "@react-navigation/native";

type Props = StyledProps & {
    title: string;
}

export function Header({title, ...rest}: Props) {
    const { colors } = useTheme();
    const navigaton = useNavigation();

    function handleGoBack(){
        navigaton.goBack();
    }

    return (
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="header.400"
            pb={6}
            pt={12}
            {...rest}
        >
            <IconButton
                icon={<CaretLeft color={colors.text[600]} size={24}/>}
                onPress={handleGoBack}
            />
            <Heading color="text.600" textAlign="center" fontSize="lg" flex={1} ml={-6} >
                {title}
            </Heading>
        </HStack>
    )
}