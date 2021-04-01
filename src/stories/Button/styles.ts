import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import { ButtonProps } from '.';
import { Spinner8 as Spinner } from '@styled-icons/icomoon/Spinner8';

type Rename<T, K extends keyof T, N extends string> = Pick<
  T,
  Exclude<keyof T, K>
> &
  { [P in N]: T[K] };

type TypeProps = Rename<ButtonProps, 'type', 'buttonType'>;

type WrapperProps = { hasIcon: boolean } & Pick<
  TypeProps,
  'buttonType' | 'size' | 'fullWidth' | 'disabled'
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.lightPrimary};
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    background: ${theme.colors.lightPrimary};

    &:hover {
      background: ${theme.colors.lightPrimary};
    }
  `,
  fullWidth: () =>
    css`
      width: 100%;
    `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, buttonType, size, fullWidth, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: ${theme.border.radius.normal};
    font-weight: 600;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:focus {
      outline: 0;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!buttonType && wrapperModifiers[buttonType](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!disabled && wrapperModifiers.disabled(theme)}
  `}
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(Spinner)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-right: ${theme.spacings.xxsmall};
    animation: ${rotate} 0.5s linear infinite;
  `}
`;
