# FNM Law Advocates LLP Website

Professional website for FNM Law Advocates LLP - Commissioners for Oath & Notaries Public, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏢 About FNM Law Advocates

**FNM Law Advocates LLP** is a professional law firm based in Nairobi, Kenya, specializing in comprehensive legal services with integrity and excellence.

- **Location**: Greyville Hub, 3rd Floor, Wing B Suite 8, Off Eastern Bypass, Ruai, Nairobi, Kenya
- **Contact**: +254 728 657 560 | +254 713 286 796
- **Email**: info@fnmlawadvocates.com
- **Specialization**: Commissioners for Oath & Notaries Public

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 👥 Team Members

### Partners
- **Fiona Kasyoka Nyamai** - Managing Partner
  - Real Estate & Conveyancing, Corporate Law, IP Law, Family Law, Probate & Estate Planning
- **Maureen Auma Nekesa Nasiboye** - Partner
  - Civil & Commercial Litigation, Employment & Labour Law, Insurance Law

### Associates
- **Abigael Mbesa Kimanzi** - Senior Associate
  - Data Protection Law, Conveyancing, Corporate Law, Commercial Contracts

## ⚖️ Practice Areas

1. **Real Estate & Conveyancing**
   - Land purchases, joint ventures, mortgages, charges, leases, transfers
   - Title applications and financing assistance

2. **Intellectual Property Law**
   - Trademarks, patents, licensing, copyrights
   - Registration services, renewals, infringement proceedings

3. **Debt Recovery**
   - Collection services, legal proceedings

4. **Corporate and Commercial Law**
   - Company incorporation, M&A, joint ventures
   - Banking, finance, competition law, insolvency

5. **Alternative Dispute Resolution**
   - Arbitration, mediation, saving time and costs

6. **Litigation**
   - Insurance law, tort law, contract law, land law
   - Family & succession, employment & labour
   - Constitutional petitions, judicial review, election petitions

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: Next Themes
- **Typography**: @tailwindcss/typography

## 🎨 Design System

### Brand Colors
- **FNM Gold**: `#D4AF37` - Primary accent color
- **FNM Black**: `#000000` - Primary brand color  
- **FNM White**: `#FFFFFF` - Background color

### Typography
- **Heading Font**: Playfair Display (serif)
- **Body Font**: Inter (sans-serif)

### Custom Components
- `.btn-primary` - Gold primary button
- `.btn-secondary` - Black secondary button
- `.btn-outline` - Gold outlined button
- `.btn-outline-black` - Black outlined button
- `.text-gradient-fnm` - Gold to black gradient
- `.fnm-container` - Responsive container
- `.fnm-section` - Standard section spacing

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind utilities
│   ├── layout.tsx       # Root layout with metadata and providers
│   └── page.tsx         # Homepage with hero, services, and CTA sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Header with navigation and contact info
│   │   ├── Footer.tsx   # Footer with firm details and links
│   │   └── Layout.tsx   # Layout wrapper component
│   ├── sections/
│   │   └── Hero.tsx     # Hero section component
│   └── ui/              # Reusable UI components (future)
├── lib/                 # Utility functions (future)
├── types/               # TypeScript type definitions (future)
├── utils/               # Helper utilities (future)
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## ✨ Phase 1 Features (Completed)

- ✅ **Professional Header** with FNM branding and navigation
- ✅ **Hero Section** with compelling messaging and CTAs
- ✅ **Practice Areas Grid** showcasing all legal services
- ✅ **Why Choose Us Section** with key differentiators
- ✅ **Professional Footer** with comprehensive firm information
- ✅ **Responsive Design** optimized for all devices
- ✅ **FNM Brand Colors** integrated throughout
- ✅ **SEO Optimized** with proper metadata
- ✅ **TypeScript Support** for code quality
- ✅ **Professional Animations** with Framer Motion

## 🔮 Next Development Phases

### Phase 2: Core Pages
- About Us page (mission, vision, team)
- Practice Areas overview
- Individual practice area pages (6 total)
- Contact page with firm details
- Basic navigation between pages

### Phase 3: Components & Interactivity
- Responsive navigation with mobile menu
- Service cards with hover effects
- Team member profile cards
- Contact form with validation
- Professional animations and transitions

### Phase 4: Advanced Features
- Consultation booking form
- Document upload portal concept
- Newsletter signup
- Client testimonials section
- Legal resources/FAQ section

### Phase 5: Polish & Optimization
- Mobile responsiveness refinement
- Performance optimization
- SEO implementation
- Accessibility compliance
- Cross-browser testing

## 🚀 Deployment

The website is ready for deployment to Vercel, Netlify, or any hosting platform that supports Next.js.

For Vercel deployment:
```bash
npm run build
```

## 📝 Development Notes

- Uses Next.js 14 App Router for modern React development
- Tailwind CSS configured with FNM brand colors
- Professional law firm aesthetic with gold and black theme
- SEO optimized for Kenya/Nairobi legal market
- Fully responsive and mobile-friendly
- TypeScript for enhanced development experience

---

**FNM Law Advocates LLP** - Professional Legal Services with Integrity and Excellence