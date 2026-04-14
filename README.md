# GAMERS Portal

פורטל משחקים ותוכן - בנוי עם Next.js 15 ומפורס על Cloudflare Pages.

## פיצ'רים
- דף בית עם משחקים מובחרים, חדשות, וקהילה
- פורטל משחקים עם קטגוריות
- מדור חדשות גיימינג
- קהילה ופורום
- **פאנל ניהול מוגן בסיסמה** (`/admin`)

## כניסה לניהול
נווט אל `/admin` והשתמש בסיסמה: `gamers2025`

## פיתוח מקומי
\`\`\`bash
npm install
npm run dev
\`\`\`

## פריסה ל-Cloudflare Pages
\`\`\`bash
npm run build
npx wrangler pages deploy .open-next/assets
\`\`\`
