declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.gif' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
