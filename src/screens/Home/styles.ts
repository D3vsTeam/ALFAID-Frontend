import styled from "styled-components/native";

export const Header = styled.View`
    flex-Direction: row;
    justify-content: space-between;
    background-color: #263894;
    height: 200px;
    padding: 20px;
`

export const HeaderAll = styled.View`
    flex:1;
`

export const ViewButtons = styled.View`
    flex: 1;
    padding: 20px;
    align-Items: flex-start;
    justify-Content: flex-start;
    margin: 20px;
`

export const CustomBotoes = styled.TouchableOpacity`
    height: 110px;
    width: 300px;
    borderWidth: 0.2px;
    borderRadius: 30px;
    flexDirection: row;
`

export const SignOut = styled.TouchableOpacity`

`

export const TextNome = styled.Text`
    color: white;
    margin-Right: 20px;
    font-Size:20px;
`

export const TextTitulo = styled.Text`
    color: white;
    margin-Right: 20px;
    font-Size:30px;
    margin-Top: 30px;
`

export const TextBtn = styled.Text`
    font-Size: 18px;
    font-Weight: bold;
`