# BizPulse SA 💹

> A financial dashboard built for South African small businesses — with AI-powered business report generation.

**Live Demo:** https://bizplus-sa.vercel.app/

---

## Overview

BizPulse SA helps small business owners in South Africa track their income, expenses, and profit in real time — and generate instant AI business reports using natural language.

Built as a portfolio project by a BCom Business Informatics student at UNISA, combining business management knowledge with web development and AI integration.

---

## Features

### Dashboard
- Live KPI cards — Revenue, Expenses, Net Profit, Profit Margin
- Income vs Expenses bar chart (6-month view)
- Expense breakdown donut chart by category
- Monthly targets with progress tracking

### Transactions
- Add income and expense transactions
- Search, filter by type/category, and sort
- Delete entries with instant dashboard updates

### Analytics
- Revenue and expense breakdown by category
- Monthly profit trend chart
- Key business ratios (margin, expense ratio, avg sale value)
- Top transactions by value

### AI Reports (Powered by Groq)
- Ask any business question in plain English
- Get AI-generated reports with strengths, risks, and recommendations
- Save reports and access them from the Reports page
- Quick prompts for common analyses

### Forecasts
- Next-month projections based on historical data
- 6 forecast cards (revenue, expenses, profit, margin, growth, break-even)
- Projected vs actual chart
- AI Deep Forecast using Groq for detailed analysis

### Settings
- Customise business name, industry, city, province
- Set monthly revenue targets, expense limits, and profit goals
- Export data as JSON

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| AI / LLM | Groq API (Llama 3.3 70B) |
| Backend | Vercel Serverless Functions |
| Hosting | Vercel |

---

## Project Structure

```
bizpulse-sa/
├── index.html        # Full frontend — dashboard, all pages, navigation
├── vercel.json       # Vercel routing config
└── api/
    └── report.js     # Serverless function — securely calls Groq API
```

---

## How It Works

The AI report generator sends your business data (totals, categories, targets) to a **Vercel serverless function** at `/api/report`. The function calls the **Groq API** server-side, keeping the API key secure and never exposing it in the browser.

```
Browser → /api/report (Vercel) → Groq API → JSON response → Dashboard
```

---

## Running Locally

1. Clone the repo
```bash
git clone https://github.com/LethaboMH14/bizpulse-sa.git
cd bizpulse-sa
```

2. Install Vercel CLI
```bash
npm install -g vercel
```

3. Add your Groq API key
```bash
# Create a .env.local file
echo "GROQ_API_KEY=your_key_here" > .env.local
```

4. Run locally
```bash
vercel dev
```

5. Open `http://localhost:3000`

---

## Deploying to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variable: `GROQ_API_KEY` = your Groq key
4. Deploy

---

## Roadmap

- [ ] Supabase database integration (persistent storage)
- [ ] User authentication (multi-business support)
- [ ] PDF report export
- [ ] Invoice generation
- [ ] Mobile responsive layout
- [ ] VAT calculator for SA businesses

---

## Author

**Lethabo Masilo Hoaeane**  
BCom Business Informatics — University of South Africa (UNISA)  
Johannesburg, South Africa

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black)](https://github.com/LethaboMH14)

---

## License

MIT License — see [LICENSE](LICENSE) for details.
