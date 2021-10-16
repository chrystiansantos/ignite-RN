import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Header, Form, Title, Subtitle, Footer } from './styles';

export const SignIn = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos {'\n'}quase lá</Title>
        <Subtitle>
          Faça seu login para iniciar {'\n'} uma experiência incrivel
        </Subtitle>
      </Header>
      <Form>
        <Input iconName="mail" />
        <Input iconName="lock" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => console.log('Login')}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta, gratuita"
          onPress={() => console.log('Login')}
          color={colors.background_secondary}
          enabled
          light
          // loading
        />
      </Footer>
    </Container>
  );
};