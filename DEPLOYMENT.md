# Deployment Setup

This project uses GitHub Actions for continuous integration and deployment to GitHub Pages with a custom domain.

## GitHub Actions Workflows

### 1. CI Workflow (`ci.yml`)
- **Triggers**: Push to `main`/`develop` branches, Pull requests to `main`
- **Actions**:
  - Runs ESLint for code quality checks
  - Builds the Next.js application
  - Uploads build artifacts

### 2. Deploy Workflow (`deploy.yml`)
- **Triggers**: Push to `main` branch (after CI passes)
- **Actions**:
  - Builds Next.js as static export
  - Deploys to GitHub Pages
  - Available at `baffocaffe.rasna.dev`

## Setup Instructions

### 1. GitHub Repository Settings
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Add custom domain: `baffocaffe.rasna.dev`
4. Enable "Enforce HTTPS"

### 2. Namecheap DNS Configuration
In your Namecheap dashboard for `rasna.dev`:

#### Add CNAME Record:
- **Type**: CNAME Record
- **Host**: `baffocaffe`
- **Value**: `yourusername.github.io` (replace with your GitHub username)
- **TTL**: Automatic

#### Alternative: A Records (if CNAME doesn't work)
Add these A records for `baffocaffe.rasna.dev`:
- **Type**: A Record
- **Host**: `baffocaffe`
- **Value**: `185.199.108.153`
- **TTL**: Automatic

Repeat for these additional GitHub Pages IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### 3. Domain Verification
1. After DNS setup, go to GitHub Settings → Pages
2. Add custom domain: `baffocaffe.rasna.dev`
3. Wait for DNS check to pass (may take up to 24 hours)
4. Enable "Enforce HTTPS" once verification completes

## Next.js Configuration
The project is configured for static export:
- `output: 'export'` - Generates static files
- `trailingSlash: true` - Ensures proper routing
- `images: { unoptimized: true }` - Disables Next.js image optimization

## Workflow Behavior
- **Pull Requests**: Only run CI (lint + build)
- **Push to main**: Run CI, then deploy to GitHub Pages
- **Push to develop**: Only run CI

## Manual Build
You can build locally using:
```bash
pnpm build
```
Static files will be generated in the `out/` directory.
