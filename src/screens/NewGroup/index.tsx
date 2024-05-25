import { Header } from "@components/Header"
import { Container, Content, Icon } from "./styles"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { groupCreate } from "@storage/group/groupCreate"
import { AppError } from "@utils/AppError"
import { Alert } from "react-native"

export function NewGroup() {
    const [group, setGroup] = useState<string>('');

    const navigation = useNavigation();

    const handleNew = async () => {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Por favor, informe o nome da turma');
            }
            
            await groupCreate(group.trim());
            navigation.navigate('players', { group });
        } catch (error) {
            if (error instanceof AppError) {
                return Alert.alert('Novo Grupo', error.message);
            } else {
                console.log(error);
                return Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo');
            }
        }
    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title='Nova turma' 
                    subtitle='Crie uma turma para adicionar as pessoas' 
                />
                <Input placeholder='Nome da turma' onChangeText={setGroup} />
                <Button title="Criar" style={{marginTop: 20}} onPress={handleNew} />
            </Content>
        </Container>
    )
}