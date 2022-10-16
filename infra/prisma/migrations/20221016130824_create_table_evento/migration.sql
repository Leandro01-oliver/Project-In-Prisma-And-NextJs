/*
  Warnings:

  - You are about to drop the `eventos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `eventos`;

-- CreateTable
CREATE TABLE `tb_evento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(150) NOT NULL,
    `description` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
