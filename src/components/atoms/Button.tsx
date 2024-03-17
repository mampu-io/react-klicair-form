/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';

type ButtonWithIconProps = {
  withIcon: true;
  iconName: string;
} | {
  withIcon?: false;
  iconName?: string;
};

export type ButtonProps = {
  label: string,
  model?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'short' | 'long' | 'fluid' | 'fit-content';
  disabled?: boolean;
  loading?: boolean;
} & ButtonWithIconProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label,
  model = 'primary',
  size = 'short',
  disabled = false,
  loading = false,
  withIcon,
  iconName,
  type,
  className,
  ...nativeProps
}: ButtonProps) {
  const getClassName = () => {
    const btnModel = `kc-button--${model}`;
    const btnSize = `kc-button--${size}`;
    const result = className ? `kc-button ${btnSize} ${btnModel} ${className}` : `kc-button ${btnSize} ${btnModel}`;
    return result.replace(/\s{2,}/, ' ').trim();
  };

  return (
    <button
      type={type || 'button'}
      className={getClassName()}
      disabled={disabled || loading}
      {...nativeProps}
    >
      <div className="kc-button__content">
        {loading ? <span className="spinner-border" />
          : (
            <>
              {withIcon ? (
                <div className="kc-button__icon">
                  <i className={iconName} />
                </div>
              ) : null}
              <span className="kc-button-label">{label}</span>
            </>
          )}
      </div>
    </button>
  );
}
