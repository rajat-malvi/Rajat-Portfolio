import React, { useRef, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

const Resume = () => {
  const canvasRef = useRef(null);
  const fileUrl = '../assets/rajat_resume.pdf'; // Replace with your PDF file path

  useEffect(() => {
    const loadPDF = async () => {
      const pdf = await pdfjs.getDocument(fileUrl).promise;
      const numPages = pdf.numPages;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const viewport = page.getViewport({ scale: 1 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;
      }
    };

    loadPDF();
  }, []);

  return (
    <div className="resume-viewer">
      <h1>My Resume</h1>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Resume;
