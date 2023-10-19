import { Center, Spinner } from "native-base";

export function Loading(){
    return(
        <Center flex={1} bg="background.700">
            <Spinner color="text.800"/>
        </Center>
    )
}