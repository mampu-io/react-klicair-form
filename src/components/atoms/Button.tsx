/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';
import '../../styles/components/atoms/_button.scss';

type ButtonWithIconProps = {
  withIcon: true;
  iconName: string;
} | {
  withIcon?: false;
  iconName?: string;
}

export type ButtonProps = {
  label: string,
  model?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'short' | 'long' | 'fluid' | 'fit-content';
  disabled?: boolean;
  loading?: boolean;
} & ButtonWithIconProps & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  label,
  model,
  size,
  disabled,
  loading,
  withIcon,
  iconName,
  type,
  ...nativeProps
}: ButtonProps) {
  const btnModel = `kc-button--${model}`;
  const btnSize = `kc-button--${size}`;

  return (
    <button
      type={type || 'button'}
      className={`kc-button ${btnSize} ${btnModel}`}
      disabled={disabled || loading}
      {...nativeProps}
    >
      <div className="kc-button__content">
        {
          loading ? <span className="spinner-border" />
            : (
              <>
                {
                  withIcon ? (
                    <div className="kc-button__icon">
                      <i className={iconName} />
                    </div>
                  ) : null
                }
                <span className="kc-button-label">{label}</span>
              </>
            )
        }
      </div>
    </button>
  );
}

Button.defaultProps = {
  model: 'primary',
  size: 'short',
  disabled: false,
  loading: false,
};
