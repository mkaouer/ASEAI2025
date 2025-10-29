# GitHub Pages Deployment Guide

This document provides step-by-step instructions for deploying the ASEAI 2025 website to GitHub Pages.

## Prerequisites

Before deploying, ensure you have:
- A GitHub account
- Git installed on your local machine
- Node.js 22+ and pnpm installed (for local testing)

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `aseai-2025` or `ASEAI2025`)
4. Choose "Public" visibility
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Initialize Git and Push Code

Open a terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ASEAI 2025 website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically trigger on the next push

### 4. Access Your Website

After the GitHub Actions workflow completes (usually 2-5 minutes):
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- Check the "Actions" tab to monitor deployment progress
- Once complete, the URL will appear in the Pages settings

## Custom Domain (Optional)

To use a custom domain:

1. In repository Settings → Pages → Custom domain
2. Enter your domain name (e.g., `aseai2025.org`)
3. Click "Save"
4. Add DNS records at your domain registrar:
   - For apex domain (example.com): Add A records pointing to GitHub's IPs
   - For subdomain (www.example.com): Add CNAME record pointing to `YOUR_USERNAME.github.io`
5. Enable "Enforce HTTPS" after DNS propagation

See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Local Development

To run the website locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Updating the Website

To make changes:

1. Edit the files locally
2. Test changes with `pnpm dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Actions will automatically rebuild and deploy

## Troubleshooting

### Build Fails
- Check the "Actions" tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version matches the workflow (22.x)

### Images Not Loading
- Ensure images are in `client/public/images/`
- Check that image paths start with `/images/`
- Verify images were committed to the repository

### 404 Errors
- Ensure `.nojekyll` file exists in `client/public/`
- Check that `base` path in `vite.config.ts` is correct
- For custom routes, ensure proper routing configuration

### Deployment Not Triggering
- Check that workflow file is in `.github/workflows/deploy.yml`
- Verify repository has Pages enabled
- Ensure you're pushing to the `main` branch

## Project Structure

```
aseai-2025/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── client/
│   ├── public/
│   │   ├── images/             # All images
│   │   └── .nojekyll           # Required for GitHub Pages
│   └── src/
│       ├── components/         # React components
│       ├── data/               # Data files
│       └── pages/              # Page components
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies
```

## Support

For issues or questions:
- Email: africa.aseai@gmail.com
- Website: https://africaseai.github.io/ASEAI2025

## License

© 2025 ASEAI. All rights reserved.
