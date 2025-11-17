# BeyondTAxis.life Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd beyondtaxis
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
beyondtaxis/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog pages
│   ├── explore/           # Topic exploration
│   ├── videos/            # Video content
│   └── about/             # About page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── public/                # Static assets
└── package.json          # Dependencies
```

## Features

✅ Modern Next.js 14+ with App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Framer Motion for animations
✅ Responsive design
✅ SEO optimized
✅ Blog system with markdown
✅ Video channel integration
✅ 8 topic areas (Math, Physics, Neurology, Spirituality, Religion, Technology, History, Relationships)

## Content Management

### Adding Blog Posts

Edit `app/blog/[slug]/page.tsx` and add new posts to the `blogPosts` object.

### Adding Topics

Edit `app/explore/[topic]/page.tsx` and add new topics to the `topics` object.

### Adding Videos

Edit `app/videos/[id]/page.tsx` and add new videos to the `videos` object.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Content

All content is in the respective page files. Edit markdown content directly in the TypeScript files.

### Styling

Global styles are in `app/globals.css`. Component styles use Tailwind classes.

## Environment Variables

Create `.env.local` for:
- OpenAI API key (if adding AI features)
- Analytics IDs
- Other API keys

## Support

For issues or questions, check the README.md or create an issue in the repository.

