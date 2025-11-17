# Installation & Running Guide

## Prerequisites

You need to install **Node.js** (version 18 or higher) to run this project.

### Installing Node.js on Windows

1. **Download Node.js**
   - Visit: https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Run the Installer**
   - Double-click the downloaded .msi file
   - Follow the installation wizard
   - **Important**: Check the box "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation**
   - Open a new PowerShell or Command Prompt window
   - Run: `node --version` (should show v18.x.x or higher)
   - Run: `npm --version` (should show version number)

## Running the Project

Once Node.js is installed:

1. **Open Terminal/PowerShell**
   - Navigate to the project directory:
     ```powershell
     cd beyondtaxis
     ```

2. **Install Dependencies**
   ```powershell
   npm install
   ```
   This will install all required packages (may take 2-5 minutes)

3. **Start Development Server**
   ```powershell
   npm run dev
   ```

4. **Open Browser**
   - The terminal will show: "Ready on http://localhost:3000"
   - Open your browser and go to: **http://localhost:3000**

## Troubleshooting

### If `npm` is not recognized:
- Make sure Node.js is installed
- Close and reopen your terminal/PowerShell
- Verify Node.js is in PATH: `where.exe node`

### If port 3000 is already in use:
- The server will automatically try the next available port (3001, 3002, etc.)
- Check the terminal output for the actual URL

### If you see dependency errors:
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Check for code issues

## Next Steps

After the server is running:
- Visit http://localhost:3000 to see the homepage
- Explore the blog, videos, and topic pages
- All content is ready to view!

