import React, { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { ButtonProps } from './types';
import './Button.scss';

const EYButton: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    id,
    setRef,
    role = undefined,
    onClick,
    disabled = false,
    children,
    className = 'inclue-Button',
    isLoading = false,
    loadingText = 'Loading...',
    onKeyDown,
    tabIndex,
    ...otherProps
  } = props;

  const handlerSetRef = (e: React.RefObject<HTMLButtonElement> | HTMLButtonElement | null | undefined) => {
    setRef && setRef(e);
  };

  useEffect(() => {
    const btnElement = document.getElementsByClassName('btnlabel') as HTMLCollectionOf<HTMLElement>;
    if (isLoading) {
      btnElement[btnElement.length - 1]?.setAttribute('aria-live', 'assertive');
    } else {
      btnElement[btnElement.length - 1]?.removeAttribute('aria-live');
    }
  }, [isLoading]);

  return (
    <Button
      ref={handlerSetRef}
      id={id}
      disabled={disabled}
      onClick={(e) => (isLoading ? null : onClick?.(e))}
      disableFocusRipple={true}
      disableRipple={true}
      fullWidth={true}
      tabIndex={tabIndex ?? 0}
      role={role}
      onKeyDown={(e) => (isLoading ? null : onKeyDown?.(e))}
      classes={{
        root: `inclue-button inclue-button-root ${className}`,
        disabled: 'inclue-button-disabled',
      }}
      className={isLoading ? `inclue-button-loading` : ''}
      {...otherProps}
    >
      <span className="inclue-button-label">{!isLoading && children}</span>
      <span className="inclue-button-label btnlabel">{isLoading && loadingText}</span>
      {isLoading && <LinearProgress className='inclue-linear-progress' classes={{barColorPrimary: 'bar-color',}} variant="indeterminate" />}
    </Button>
  );
};

export default EYButton;
