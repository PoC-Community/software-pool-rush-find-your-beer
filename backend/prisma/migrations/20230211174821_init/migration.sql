-- CreateTable
CREATE TABLE "beer" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "ABV" INTEGER NOT NULL,
    "minIBU" INTEGER NOT NULL,
    "maxIBU" INTEGER NOT NULL,
    "astringency" INTEGER NOT NULL,
    "body" INTEGER NOT NULL,
    "alcohol" INTEGER NOT NULL,
    "bitter" INTEGER NOT NULL,
    "sweet" INTEGER NOT NULL,
    "sour" INTEGER NOT NULL,
    "salty" INTEGER NOT NULL,
    "fruit" INTEGER NOT NULL,
    "hoppy" INTEGER NOT NULL,
    "spices" INTEGER NOT NULL,
    "malty" INTEGER NOT NULL,

    CONSTRAINT "beer_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "beer_uuid_key" ON "beer"("uuid");
