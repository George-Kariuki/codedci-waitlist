# Codedci Waitlist Landing Page

A modern, dark-themed landing page for Codedci's waitlist signup. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, Airtable integration, and a premium design aesthetic.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient accents
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Layout**: Fully responsive design for all screen sizes
- **Airtable Integration**: Form submissions automatically saved to Airtable
- **Performance Monitoring**: Vercel Speed Insights for real-time performance tracking
- **Multiple Sections**:
  - Hero section with waitlist form
  - Features showcase
  - "Why Codedci is different" section
  - FAQ accordion
  - Final CTA section

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Airtable
- **Deployment**: Vercel
- **Analytics**: Vercel Speed Insights

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Airtable account and API credentials

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/George-Kariuki/codedci-waitlist.git
cd codedci-waitlist
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=your_table_name_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Description |
|----------|-------------|
| `AIRTABLE_API_KEY` | Your Airtable API key (get from https://airtable.com/account) |
| `AIRTABLE_BASE_ID` | Your Airtable Base ID (found in API docs URL) |
| `AIRTABLE_TABLE_NAME` | Your Airtable table name (exact name, case-sensitive) |

### Getting Airtable Credentials

1. **API Key**: 
   - Go to https://airtable.com/account
   - Scroll to "API" section
   - Generate and copy your API key

2. **Base ID**:
   - Go to https://airtable.com/api
   - Select your base
   - Base ID is in the URL: `https://airtable.com/[BASE_ID]/api/docs`

3. **Table Name**:
   - Use the exact table name as it appears in Airtable
   - Ensure the table has `Name` and `Email` fields

## 📁 Project Structure

```
codedci-waitlist/
├── app/
│   ├── api/
│   │   └── submit-waitlist/    # Airtable integration API route
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with Speed Insights
│   └── page.tsx                 # Main page component
├── components/
│   ├── HeroSection.tsx          # Hero section with form
│   ├── FeaturesSection.tsx      # Features showcase
│   ├── DifferenceSection.tsx    # "Why Codedci is different"
│   ├── FAQSection.tsx           # FAQ accordion
│   └── FinalCTASection.tsx      # Final CTA section
├── public/
│   ├── background/              # Background images
│   ├── faq/                     # FAQ decorative images
│   └── profiles/                 # Profile images for social proof
└── .env.local                   # Environment variables (not in git)
```

## 🎨 Design Features

- **Dark Theme**: Deep black (#0a0a0f) background with subtle gradients
- **Glassmorphism**: Translucent cards with backdrop blur effects
- **Gradient Accents**: Blue → Purple → Violet gradients on CTAs and highlights
- **Particle Effects**: Subtle star particles for atmospheric effect
- **Smooth Animations**: Spring-based animations with Framer Motion
- **Responsive Typography**: Fluid typography that scales across devices

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_NAME`
4. Deploy!

The site will automatically deploy on every push to the main branch.

### Connect Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## 📊 Performance Monitoring

This project includes Vercel Speed Insights for performance tracking:
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Performance metrics dashboard

View metrics in your Vercel dashboard under "Speed Insights".

## 🔄 Form Submissions

Form submissions are automatically sent to Airtable via the API route at `/api/submit-waitlist`. The API:
- Validates name and email fields
- Sends data to Airtable
- Returns success/error responses
- Shows user feedback in the UI

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a private project. For issues or suggestions, please contact the maintainer.

## 📄 License

Private project - All rights reserved.

## 👤 Author

**George Kariuki**
- GitHub: [@George-Kariuki](https://github.com/George-Kariuki)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com)

