declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';

declare module "react-native-step-indicator"

declare module "react-native-loading-spinner-overlay"

declare type DocumentInfo = {
  uri: string;
};
declare type DocumentPickerResult = {
  cancelled: true;
} | ({
  cancelled: false;
  } & DocumentInfo);