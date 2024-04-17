-- CreateTable
CREATE TABLE "WTGPart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT DEFAULT '',
    "wtg" TEXT DEFAULT '',
    "site" TEXT DEFAULT '',
    "status" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "WTGDoor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wtg" TEXT DEFAULT '',
    "site" TEXT DEFAULT '',
    "door_path" TEXT DEFAULT '',
    "status" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "Archive" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "part" TEXT DEFAULT '',
    "wtg" TEXT DEFAULT '',
    "site" TEXT DEFAULT '',
    "path" TEXT DEFAULT '',
    "status" TEXT DEFAULT '',
    "size" TEXT DEFAULT '',
    "uploaded" TEXT DEFAULT '',
    "upload_time" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "UploadItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT DEFAULT '',
    "size" TEXT DEFAULT '',
    "status" TEXT DEFAULT '',
    "uploaded" TEXT DEFAULT '',
    "upload_time" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "ScoresPaths" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wtg" TEXT DEFAULT '',
    "site" TEXT DEFAULT '',
    "path" TEXT DEFAULT ''
);
