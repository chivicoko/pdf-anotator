'use client';

import SignatureCanvas from 'react-signature-canvas';
import { useRef } from 'react';

export const SignatureTool = ({ onSignatureSubmit }: {onSignatureSubmit: (signature: string) => void}) => {
  const sigPad = useRef<SignatureCanvas>(null);

  const clearSignature = () => sigPad.current?.clear();
  
  const saveSignature = () => {
    if (sigPad.current) {
      const signature = sigPad.current.toDataURL();
      onSignatureSubmit(signature);
    }
  };

  return (
    <div>
      <SignatureCanvas ref={sigPad} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
      <button onClick={clearSignature}>Clear</button>
      <button onClick={saveSignature}>Save Signature</button>
    </div>
  );
};
