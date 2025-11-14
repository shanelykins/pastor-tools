# Pastor Teaching Intelligence - Prototype

A modern, data-driven platform that helps pastors analyze their sermons, understand their teaching patterns, and extract meaningful insights from their entire preaching archive.

## Features

- **Sermon Upload & Analysis**: Upload sermons via YouTube link, audio file, or text transcript
- **Comprehensive Analysis**: Topic breakdown, theology alignment, scripture mapping, illustration extraction, and teaching pattern detection
- **Structured Generators**: Create discussion guides, devotionals, social posts, series outlines, and find illustrations
- **Historical Dashboard**: View insights from your entire preaching archive with:
  - Topic coverage heatmaps
  - Scripture distribution analysis
  - Repetition patterns
  - Teaching gaps detection
  - Illustration library
  - Archive timeline
- **Natural Language Query**: Ask questions about your archive in plain English

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── analysis/          # Sermon analysis components
│   ├── dashboard/         # Dashboard sub-views
│   ├── generators/        # Material generators
│   └── UploadModal.tsx    # Upload interface
├── data/
│   ├── sampleTranscript.ts  # Sample sermon transcript
│   └── fakeArchive.ts       # Mock archive data
├── pages/
│   ├── Home.tsx              # Landing page
│   ├── SermonAnalysis.tsx    # Single sermon analysis
│   ├── StructuredGenerators.tsx  # Material generators
│   └── TeachingDashboard.tsx     # Archive dashboard
└── types/
    └── index.ts              # TypeScript types
```

## Design

- **Color Scheme**: White backgrounds with blue accents (christian-blue palette)
- **Style**: Clean, modern UI with subtle Christian-inspired geometric elements
- **Framework**: React + TypeScript + Tailwind CSS

## Note

This is a front-end-only prototype. All data is mocked/simulated. No backend, authentication, or real data processing is included.

