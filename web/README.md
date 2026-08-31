# TradingView Signals Web

Read-only dashboard for the daily files under `reports/YYYY-MM-DD`.

## Local Setup

```bash
cd web
yarn install
cp .env.example .env
yarn prisma generate
yarn prisma db push
yarn import:all
yarn dev
```

Generate the password hash:

```bash
node -e "console.log('sha256:' + require('crypto').createHash('sha256').update(process.argv[1]).digest('hex'))" "your-password"
```

Set the output as `WEB_ADMIN_PASSWORD_HASH`, and set `WEB_SESSION_SECRET` to a long random string.

## Data Flow

The importer scans `REPORTS_DIR` and normalizes:

- `<market>_news_signals.json`
- `<market>_tech_signals.json`
- `<market>_combined_signals.md`
- `<market>_review.json`

The existing pipeline remains the source of truth. This app only imports and displays snapshots.

## Useful Commands

```bash
yarn import --date=2026-06-14 --market=cn
yarn import:all
yarn build
```
