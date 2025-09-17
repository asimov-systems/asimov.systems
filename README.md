# ASIMOV.Systems Landing Page

A modern, responsive landing page for ASIMOV.Systems built with Astro, React, TypeScript, and Tailwind CSS. Features a comprehensive investor onboarding form with GetWaitlist API integration.

## 🚀 Features

- **Modern Tech Stack**: Astro 5 + React 19 + TypeScript + Tailwind CSS 4
- **Investor Onboarding**: 7-step comprehensive investor form with validation
- **API Integration**: GetWaitlist service for investor data collection
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Form Validation**: Zod schema validation with React Hook Form
- **Smooth UX**: Framer Motion animations and transitions
- **Custom UI Components**: shadcn/ui component library integration
- **Custom Typography**: SuisseIntl and Arges font families
- **Professional Styling**: Custom color palette matching ASIMOV Protocol design
- **Fast Development**: Hot module replacement and instant feedback
- **Code Quality**: ESLint, Prettier, and Husky for consistent code

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) with React integration
- **Frontend Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Integration**: GetWaitlist service
- **Code Quality**: ESLint + Prettier + Husky
- **Package Manager**: npm

## 📋 Key Features

### Investor Form

- **7-Step Process**: Comprehensive investor profiling
  1. Basic Details (Contact information)
  2. Investor Profile (Type, accreditation status)
  3. Investment Interests (Cheque size, funding rounds)
  4. Why ASIMOV? (Investment motivation)
  5. Track Record & Value Add (Experience, networks)
  6. KPIs & Operational Priorities (Metrics, timelines)
  7. Admin & Final Details (Documentation, preferences)

### Form Validation

- **Zod Schema**: Type-safe validation for all form fields
- **Real-time Validation**: Field-level validation with error messages
- **Progress Tracking**: Visual progress bar through form steps
- **Smooth Navigation**: Step-by-step navigation with animations

### API Integration

- **GetWaitlist Integration**: Automated investor data submission
- **Metadata Mapping**: Comprehensive field mapping for investor profiles
- **Error Handling**: Robust error handling and user feedback
- **Environment Configuration**: Secure API credentials management

## 🎨 Design System

### Color Palette

- **Slate**: Primary blue shades (100-950)
- **Orange**: Accent orange (#f37021)
- **Gray**: Neutral grays (100-500)

### Typography

- **SuisseIntl**: Primary font family (Regular, Medium, Bold)
- **Arges**: Secondary font family (Medium, Black)

## 🚀 Getting Started

### Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asimov-systems/asimov.systems
   cd asimov.systems
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file with required variables:

   ```env
   GETWAITLIST_ID=your_waitlist_id
   GETWAITLIST_API_URL=https://api.getwaitlist.com/api/v1/signup
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run lint` - Check code quality with ESLint
- `npm run lint:fix` - Fix linting issues automatically

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── inverstorForm/  # Investor form step components
│   ├── InvestorForm.tsx # Main form component
│   └── CTA.tsx         # Call-to-action component
├── layouts/            # Astro layouts
├── lib/                # Utilities and types
│   ├── utils.ts        # Form schema and utilities
│   └── types.ts        # TypeScript type definitions
├── pages/              # Astro pages and API routes
│   ├── api/            # API endpoints
│   │   └── waitlist.ts # GetWaitlist integration
│   ├── index.astro     # Home page
│   ├── investors.astro # Investor form page
│   └── contact.astro   # Contact page
└── styles/             # Global styles
```

## 🔧 Configuration

### Environment Variables

Required for production deployment:

- `GETWAITLIST_ID`: Your GetWaitlist project ID
- `GETWAITLIST_API_URL`: GetWaitlist API endpoint

### Form Schema

The investor form uses a comprehensive Zod schema with validation for:

- Contact information and social profiles
- Investor type and accreditation status
- Investment preferences and timeline
- Experience and value-add capabilities
- Operational preferences and requirements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential to ASIMOV.Systems.

## 🔗 Related Links

- [ASIMOV Protocol](https://www.asimovprotocol.org)
- [GitHub Organization](https://github.com/asimov-platform)
- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
