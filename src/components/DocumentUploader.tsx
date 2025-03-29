'use client';

import { ArrowCircleDownOutlined, ArrowCircleUpOutlined } from '@mui/icons-material';
import { useCallback, useState, useRef } from 'react';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { Document, Page, pdfjs } from 'react-pdf';
import { useDropzone, Accept } from 'react-dropzone';
import AnnotationToolbar from './AnnotationToolbar';
import { fabric } from 'fabric';
import { CommentModal } from './CommentModal';
import { SignatureTool } from './SignatureTool';
import { showToast } from './HotToast';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const accept: Accept = {
  'application/pdf': ['.pdf']
};

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface DocumentUploaderProps {
  onDocumentLoadSuccess: (pdf: PDFDocumentProxy) => void;
  onFileSelect: (file: File) => void;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({ onDocumentLoadSuccess, onFileSelect }) => {
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState('#ffeb3b');
  const [signatureMode, setSignatureMode] = useState(false);
  const [commentMode, setCommentMode] = useState(false);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const initializeFabric = () => {
    if (!canvasRef.current) return;
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });
    setCanvas(fabricCanvas);
  };

  initializeFabric()

  const handleDocumentLoadSuccess = (pdf: PDFDocumentProxy) => {
    setNumPages(pdf.numPages);
    setPageNum(1);
    onDocumentLoadSuccess(pdf);
  };

  const handleToolSelection = (tool: string) => {
    setSelectedTool(tool);
    if (canvas && selectedTool) {
      canvas.isDrawingMode = tool === 'highlight' || tool === 'underline';
      canvas.freeDrawingBrush.color = selectedColor;
    }
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    if (canvas) {
      canvas.freeDrawingBrush.color = color;
    }
  };

  const handleSignatureSubmit = (signature: string) => {
    const img = new fabric.Image(signature);
    canvas?.add(img);
    setSignatureMode(false);
  };

  const handleCommentSubmit = (comment: string) => {
    const text = new fabric.Text(comment, { fill: selectedColor });
    canvas?.add(text);
    setCommentMode(false);
  };

  const exportFile = async () => {
    const pdfBytes = await canvas?.toDataURL();
    if (pdfBytes) {
      const link = document.createElement('a');
      link.href = pdfBytes;
      link.download = 'annotated_document.pdf';
      link.click();
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (!uploadedFile || uploadedFile.type !== 'application/pdf') {
      showToast('Please upload a valid PDF file.', 'error');
      return;
    }
    setFile(uploadedFile);
    onFileSelect(uploadedFile);
    setPdfFile(uploadedFile);
    showToast(`${file?.name} has been uploaded! Start annotating.`);
  }, [onFileSelect, file?.name]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, });

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-4 cursor-pointer w-full h-20 flex items-center justify-center ${
          isDragActive ? 'border-blue-500' : 'border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the PDF file here ...</p>
        ) : (
          <p className="text-gray-700">Drag &apos;n&apos; drop a PDF file here, or click to select a file</p>
        )}
      </div>

      {pdfFile && (
        <>
          <div className='flex items-center justify-between gap-4 mt-4'>
            <AnnotationToolbar onToolSelect={handleToolSelection} onColorSelect={handleColorSelection} />
            <button onClick={() => setSignatureMode(true)} className='border py-1 px-4'>Add Signature</button>
            <button onClick={() => setCommentMode(true)} className='border py-1 px-4'>Add Comment</button>
            <button onClick={exportFile} className='border py-1 px-4'>Export</button>
          </div>
          <div className='mt-4 w-fit max-w-fit flex items-start gap-3'>
            <button onClick={() => setPageNum((prev) => prev < (numPages || 1) ? prev + 1 : prev)}><ArrowCircleUpOutlined /></button>
            
            <div className="">
              <Document
                file={pdfFile}
                onLoadSuccess={handleDocumentLoadSuccess}
                className="border border-gray-300"
              >
                <Page pageNumber={pageNum} renderAnnotationLayer={false} />
              </Document>
              <canvas ref={canvasRef} className="absolute" />
              <p className='text-center'>Page {pageNum} of {numPages}</p>
            </div>
            
            <button onClick={() => setPageNum((prev) => prev > 1 ? prev - 1 : prev)}><ArrowCircleDownOutlined /></button>
          </div>
        </>
      )}

      {signatureMode && <SignatureTool onSignatureSubmit={handleSignatureSubmit} />}
      {commentMode && <CommentModal isOpen={commentMode} onClose={() => setCommentMode(false)} onSubmit={handleCommentSubmit} />}
    </div>
  );
};

export default DocumentUploader;
