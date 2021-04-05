import React from 'react';
import * as S from './styles';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * Can be set to primary or secondary
   */
  type?: 'primary';

  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * In the case of the button, have the maximum size of the container
   */
  fullWidth?: boolean;
  /**
   * An optional icon
   */
  icon?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  as?: React.ElementType;
  htmlType?: string;
  /**
   * Disabled state of button
   */
  disabled?: boolean;
  /**
   * Set the loading status of button
   */
  loading?: boolean;
} & ButtonTypes;

/**
 * Primary UI component for user interaction
 */
const Button = ({
  children,
  icon,
  type = 'primary',
  size = 'medium',
  htmlType,
  disabled = false,
  loading = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      type={htmlType}
      buttonType={type}
      disabled={loading ? true : disabled}
      {...props}
    >
      {loading ? <S.Loading size={15} /> : icon}
      {!!children && <span>{children} FINAL TEST</span>}
    </S.Wrapper>
  );
};

export default Button;
