import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput) `
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 5px;

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`