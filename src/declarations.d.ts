declare module 'react-signature-canvas' {
    import React from 'react';
  
    export interface ReactSignatureCanvasProps {
      ref?: React.RefObject<ReactSignatureCanvas>;
      canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
      clearOnResize?: boolean;
      minWidth?: number;
      maxWidth?: number;
      penColor?: string;
      backgroundColor?: string;
      dotSize?: number | (() => number);
      velocityFilterWeight?: number;
      disabled?: boolean;
    }
  
    export interface PointGroup {
      x: number;
      y: number;
      pressure: number;
      time: number;
    }
  
    export default class ReactSignatureCanvas extends React.Component<ReactSignatureCanvasProps> {
      clear(): void;
      isEmpty(): boolean;
      fromDataURL(dataURL: string): void;
      toDataURL(type?: string, encoderOptions?: number): string;
      fromData(pointGroups: PointGroup[]): void;
      toData(): PointGroup[];
    }
  }

  

declare module 'react-modal';
