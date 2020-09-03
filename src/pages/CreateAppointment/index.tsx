import React from 'react'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import { useAuth } from '../../hooks/auth'

import { Container, Header, BackButton, HeaderTitle, UserAvatar } from './styles'


interface RouteParams {
    providerId: string;
}

const CreateAppointment: React.FC = () => {
    const {user} = useAuth()
    const route = useRoute()
    const {providerId} = route.params as RouteParams;



    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}}>
                    <Icon name="chevron-left" size={} color="#999591"/>

                    <HeaderTitle>Cabeleireiros</HeaderTitle>

                    <UserAvatar source={{uri: user.avatar_url}}/>
                </BackButton>
            </Header>
        </Container>
    )
}

export default CreateAppointment;