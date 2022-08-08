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
  ...nativeProps
}: ButtonProps) {
  const btnType = `kc-button--${model}`;
  const btnSize = `kc-button--${size}`;
  const btnLoading = loading ? 'kc-button--loading' : '';

  return (
    <button
      type="button"
      className={`kc-button ${btnSize} ${btnType} ${btnLoading}`}
      disabled={disabled || loading}
      {...nativeProps}
    >
      <div className="kc-button--content">
        {
          loading ? <span className="spinner-border" />
            : (
              <>
                { withIcon ? <i className={`kc-button--icon ${iconName}`} /> : null }
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
