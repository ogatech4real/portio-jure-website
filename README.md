# Portio Jure Legal Partners Website

A modern, responsive website for Portio Jure Legal Partners, a prestigious law firm in Cameroon. Built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- 🏛️ **Professional Design**: Modern, elegant design reflecting legal professionalism
- 📱 **Responsive**: Fully responsive across all devices
- ⚡ **Fast Performance**: Optimized for speed with static generation
- 🤖 **AI Chatbot**: Interactive legal assistant (with fallback responses)
- 📞 **Contact Integration**: WhatsApp and direct contact options
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📊 **SEO Optimized**: Complete meta tags and OpenGraph support
- 🔒 **Security**: Proper security headers and best practices

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: OpenAI API Key for enhanced chatbot functionality
OPENAI_API_KEY=your_openai_api_key_here
```

**Note**: The chatbot works without the API key using fallback responses.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`

### Option 3: Deploy via GitHub Integration

1. Connect your GitHub account to Vercel
2. Select your repository
3. Vercel will automatically detect Next.js settings
4. Deploy with one click

## Environment Variables in Vercel

1. Go to your project dashboard in Vercel
2. Navigate to Settings → Environment Variables
3. Add your environment variables:
   - `OPENAI_API_KEY` (optional)

## Project Structure

```
project/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── practice-areas/    # Practice areas page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── theme-provider.tsx # Theme context
├── lib/                  # Utility functions
├── public/               # Static assets
├── vercel.json           # Vercel configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Colors and Branding

The color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  'navy-primary': '#0A2342',
  'gold-secondary': '#C7A008',
  'soft-gray': '#F8F9FA',
  // ... other colors
}
```

### Content Updates

- **Pages**: Edit files in the `app/` directory
- **Components**: Modify components in the `components/` directory
- **Styling**: Update `globals.css` or component-specific styles
- **Images**: Replace files in the `public/` directory

## Performance Optimization

- ✅ Static site generation for fast loading
- ✅ Optimized images and assets
- ✅ Minimal JavaScript bundle
- ✅ Proper caching headers
- ✅ SEO optimization

## Security Features

- ✅ Security headers configured
- ✅ XSS protection
- ✅ Content type sniffing prevention
- ✅ Frame options protection
- ✅ Referrer policy

## Support

For technical support or questions about deployment, please contact the development team.

## License

This project is proprietary software for Portio Jure Legal Partners.
