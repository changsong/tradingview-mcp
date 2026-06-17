CREATE TABLE "Stock" (
  "id" TEXT NOT NULL,
  "market" TEXT NOT NULL,
  "symbol" TEXT NOT NULL,
  "name" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ReportRun" (
  "id" TEXT NOT NULL,
  "market" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "generatedAt" TIMESTAMP(3),
  "status" TEXT NOT NULL DEFAULT 'imported',
  "stages" JSONB NOT NULL,
  "sourceDir" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ReportRun_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "DailySignal" (
  "id" TEXT NOT NULL,
  "stockId" TEXT NOT NULL,
  "market" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "symbol" TEXT NOT NULL,
  "name" TEXT,
  "newsScore" DOUBLE PRECISION,
  "techScore" DOUBLE PRECISION,
  "combinedScore" DOUBLE PRECISION,
  "grade" TEXT,
  "newsSignal" TEXT,
  "techVerdict" TEXT,
  "techType" TEXT,
  "combinedSignal" TEXT,
  "price" DOUBLE PRECISION,
  "entry" DOUBLE PRECISION,
  "stop" DOUBLE PRECISION,
  "target" DOUBLE PRECISION,
  "rr" DOUBLE PRECISION,
  "riskFlags" JSONB,
  "newsRaw" JSONB,
  "techRaw" JSONB,
  "combinedRaw" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "DailySignal_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "NewsItem" (
  "id" TEXT NOT NULL,
  "dailySignalId" TEXT NOT NULL,
  "market" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "symbol" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "url" TEXT,
  "source" TEXT,
  "category" TEXT,
  "publishedAt" TIMESTAMP(3),
  "score" DOUBLE PRECISION,
  "sentiment" TEXT,
  "raw" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ReviewResult" (
  "id" TEXT NOT NULL,
  "reportRunId" TEXT NOT NULL,
  "market" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "raw" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ReviewResult_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Artifact" (
  "id" TEXT NOT NULL,
  "reportRunId" TEXT NOT NULL,
  "market" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "type" TEXT NOT NULL,
  "path" TEXT NOT NULL,
  "content" TEXT,
  "raw" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Artifact_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Stock_market_symbol_key" ON "Stock"("market", "symbol");
CREATE INDEX "Stock_market_name_idx" ON "Stock"("market", "name");

CREATE UNIQUE INDEX "ReportRun_market_date_key" ON "ReportRun"("market", "date");
CREATE INDEX "ReportRun_date_idx" ON "ReportRun"("date");

CREATE UNIQUE INDEX "DailySignal_market_date_symbol_key" ON "DailySignal"("market", "date", "symbol");
CREATE INDEX "DailySignal_market_date_combinedScore_idx" ON "DailySignal"("market", "date", "combinedScore");
CREATE INDEX "DailySignal_market_symbol_date_idx" ON "DailySignal"("market", "symbol", "date");

CREATE INDEX "NewsItem_market_date_symbol_idx" ON "NewsItem"("market", "date", "symbol");

CREATE UNIQUE INDEX "ReviewResult_market_date_key" ON "ReviewResult"("market", "date");

CREATE UNIQUE INDEX "Artifact_market_date_type_key" ON "Artifact"("market", "date", "type");
CREATE INDEX "Artifact_market_date_idx" ON "Artifact"("market", "date");

ALTER TABLE "DailySignal"
  ADD CONSTRAINT "DailySignal_stockId_fkey"
  FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "NewsItem"
  ADD CONSTRAINT "NewsItem_dailySignalId_fkey"
  FOREIGN KEY ("dailySignalId") REFERENCES "DailySignal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ReviewResult"
  ADD CONSTRAINT "ReviewResult_reportRunId_fkey"
  FOREIGN KEY ("reportRunId") REFERENCES "ReportRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Artifact"
  ADD CONSTRAINT "Artifact_reportRunId_fkey"
  FOREIGN KEY ("reportRunId") REFERENCES "ReportRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;
