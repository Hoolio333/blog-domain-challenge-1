-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "profilePic" TEXT NOT NULL,
    "biography" VARCHAR(120) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
