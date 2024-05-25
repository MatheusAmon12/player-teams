import { Header } from "@components/Header"
import { Container, Content, Icon } from "./styles"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { groupCreate } from "@storage/group/groupCreate"

export function NewGroup() {
    const [group, setGroup] = useState<string>('');

    const navigation = useNavigation();

    const handleNew = async () => {
        await groupCreate(group);
        navigation.navigate('players', { group });
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
                <Button title="Criar" style={{marginTop: 20}}  onPress={handleNew} />
            </Content>
        </Container>
    )
}