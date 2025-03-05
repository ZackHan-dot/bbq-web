/*
  Warnings:

  - Added the required column `excerpt` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `excerpt` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NULL;
