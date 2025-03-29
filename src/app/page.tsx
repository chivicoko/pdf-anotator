'use client';

import { useState } from 'react';
import DocumentUploader from '../components/DocumentUploader';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { showToast } from '@/components/HotToast';

const HomePage: React.FC = () => {
  const [currentpdf, setCurrentPdf] = useState<PDFDocumentProxy | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDocumentLoadSuccess = (pdf: PDFDocumentProxy) => {
    setCurrentPdf(pdf);
    if (currentpdf) {
      showToast(`${selectedFile?.name} has been loaded successfully!`);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Document Signer & Annotation Tool</h1>
      <div className="w-full">
        <DocumentUploader
          onDocumentLoadSuccess={handleDocumentLoadSuccess}
          onFileSelect={handleFileSelect}
        />
      </div>
    </div>
  );
};

export default HomePage;
