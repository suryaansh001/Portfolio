

- Responsive design that works on all devices
- Modern UI with smooth animations
- Project showcase section
- About me section
- Contact information
- Built with cutting-edge web technologies

## Technologies Used

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [v0.dev](https://v0.dev) - AI-powered UI component generator
- [Vercel](https://vercel.com) - Deployment platform

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/shinekyaw/Creative-Portfolio.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd Creative-Portfolio
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Customization

To customize this portfolio for your own use:

1. Update the content in the appropriate components
2. Replace placeholder images with your own in the `public` folder
3. Modify the color scheme in `tailwind.config.js`
4. Update the metadata in `app/layout.tsx`

## Deployment

This project is configured for easy deployment on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new project on Vercel
3. Connect your GitHub account and select this repository
4. Click "Deploy"

Vercel will automatically deploy your portfolio and provide you with a live URL.

### Troubleshooting Deployment Issues

If you encounter build failures due to package installation timeouts:

1. **Network Timeout Issues**: The project includes a `.npmrc` file with retry configurations to handle npm registry timeouts
2. **Lockfile Issues**: If you see "lockfile is not up to date" errors, run `pnpm install` locally and commit the updated `pnpm-lock.yaml`
3. **Dependency Conflicts**: Ensure all dependencies in `package.json` are compatible with each other

### Alternative Deployment Options

- **Netlify**: Import your repository and deploy with automatic builds
- **GitHub Pages**: Use GitHub Actions for static deployment
- **Railway**: Simple deployment with automatic builds from GitHub

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](./LICENSE).


## Project Structure

The main structure of this portfolio project is as follows:

```text
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── contact-form.tsx
│   ├── creative-hero.tsx
│   ├── floating-nav.tsx
│   ├── glassmorphic-card.tsx
│   ├── hero-animation.tsx
│   ├── mouse-follower.tsx
│   ├── project-card.tsx
│   ├── Projects.tsx
│   ├── scroll-progress.tsx
│   ├── section-heading.tsx
│   ├── skill-badge.tsx
│   ├── theme-provider.tsx
│   ├── timeline.tsx
│   └── ui/
│       ├── ... (UI components)
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   ├── placeholder.svg
│   ├── resume.pdf
│   └── suryaansh.png
├── styles/
│   └── globals.css
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── portfolio.zip
├── postcss.config.mjs
├── preview.png
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

This structure separates pages, components, hooks, utilities, public assets, and configuration files for clarity and maintainability.
