export type ButtonProps = {
  /** Classname to be applied to <Button>. */
  className?: string;
  /** If `true`, the button will be disabled. */
  disabled?: boolean;
  /** Callback fired when button is clicked */
  onClick?: (event?: any) => void;
  /** If `true`, the button will be in loading state. */
  isLoading?: boolean;
  loadingText?: string;
  styleType?: string;
  title?: string;
  children?: React.ReactNode;
  id?: string;
  role?: string;
  setRef?: (e: React.RefObject<HTMLButtonElement> | HTMLButtonElement | null | undefined) => void;
  onKeyDown?: (event: any) => void;
  tabIndex?: number;
};
