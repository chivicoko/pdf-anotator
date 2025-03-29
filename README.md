## Setup and running instructions

### Install the dependencies with the command:
```bash
npm install
```

### Run the server with the command:
```bash
npm run dev
```

## Libraries and Tools
- pdf-lib
- react-signature-canvas
- react-pdf
- react-dropzone
- pdfjs-dist
- fabric
- @react-pdf-viewer

## Challenges
The challenging part of the development was implementing the tools for editing the pdf file - the actual editing.
I also had some challenges with some of the dependencies that I needed for the task, like pdfjs-dist and react-pdf version incompatibility. But I was able to fix them. Though I had to downgrade the pdfjs-dist.
I also had to localize the reference file pdfjs-dist uses - took it from the node-modules where it is normally supposed to be, to the public directory. This was because I wasn't able to reach it in the node-modules for some reason.


## Features I would like to add if I had more time
I would like to add some features like:
 - Conversion to another document format
 - Ability to export the annotated pdf file in another format
 - Full text editing ability









## Frontend Technical Assessment - Document Signer & Annotation Tool

## Overview

This technical assessment is designed to evaluate your skills in building interactive, modern web applications using Next.js. You'll be creating a single-page document signer and annotation tool that allows users to work with PDF documents.

## Requirements

### Core Functionality

1. **Document Upload**
   - Users should be able to upload PDF documents
   - Implement drag-and-drop functionality and/or file selection dialog
   - Display uploaded document in the viewport

2. **Annotation Features**
   - Implement the following annotation capabilities:
     - Highlight text with customizable colors
     - Underline text with customizable colors
     - Add comments attached to specific parts of the document
     - Draw signatures anywhere on the document

3. **Document Export**
   - Allow users to export the annotated document as a PDF
   - All annotations and signatures must be properly embedded in the exported PDF
   - Exported document should maintain the quality of the original

### Technical Requirements

- Use **Next.js** as your framework
- Implement a single-page application (SPA) design where all actions occur without page reloads
- Create a responsive design that works well on different screen sizes
- Ensure the application has a clean, intuitive, and professional UI/UX

### UI/UX Requirements

- Design a sleek, modern interface with clear visual hierarchy
- Implement intuitive controls for all annotation tools
- Create smooth transitions between different states of the application
- Provide appropriate feedback for user actions (loading states, success/error messages)

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Functionality** - Does the application meet all the requirements?
2. **Code Quality** - Is your code well-structured, readable, and maintainable?
3. **UI/UX Design** - Is the interface intuitive, responsive, and visually appealing?
4. **Performance** - Does the application handle operations efficiently?
5. **Best Practices** - Do you follow modern web development best practices?

## Submission Guidelines

1. Fork this repository
2. Implement your solution
3. Create a README with:
   - Setup and running instructions
   - Any libraries or tools you used and why
   - Any challenges you faced and how you solved them
   - Any features you would add if you had more time
4. Submit a pull request or send us a link to your repository

## Time Allocation

You have three days to complete this assessment. We estimate it should take approximately 8-10 hours of focused work.

## Questions

If you have any questions or need clarification, please reach out to [dev.ritease@gmail.com](mailto:dev.ritease@gmail.com).

Good luck!


