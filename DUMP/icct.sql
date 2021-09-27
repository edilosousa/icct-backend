-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.26 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando dados para a tabela icct.dqc84: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `dqc84` DISABLE KEYS */;
INSERT INTO `dqc84` (`ID`, `MODEL`, `FAT_PART_NO`, `TOTAL_LOCATION`, `UPDATE_DT`, `CREATE_DT`) VALUES
	(10, 24, 'SD018CMAB1R', 111, '2021-09-26 16:39:57', '2021-09-26 16:39:57'),
	(11, 25, 'SD018CMAB0T', 2233, '2021-09-26 16:41:17', '2021-09-26 16:41:17');
/*!40000 ALTER TABLE `dqc84` ENABLE KEYS */;

-- Copiando dados para a tabela icct.dqc841: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `dqc841` DISABLE KEYS */;
INSERT INTO `dqc841` (`ID`, `FAT_PART_NO`, `PARTS_NO`, `UNT_USG`, `DESCRIPTION`, `REF_DESIGNATOR`, `UPDATE_DT`, `CREATE_DT`) VALUES
	(4, 10, 'SDH40012Z08', 8, 'CHIP RES. 1/16W 47 +-5% 0402', 'R31', '2021-09-26 21:25:32', '2021-09-26 16:49:43'),
	(5, 11, 'SEH40004Z04', 212, 'CHIP CAP. (MLCC) 1U 6.3V +-10% X5R 0402', 'C1003,C33,C34,C39,C45,C46,C51,C57,C75,C87,C9', '2021-09-26 21:26:06', '2021-09-26 16:49:57');
/*!40000 ALTER TABLE `dqc841` ENABLE KEYS */;

-- Copiando dados para a tabela icct.dqcmodel: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `dqcmodel` DISABLE KEYS */;
INSERT INTO `dqcmodel` (`ID`, `MODEL`) VALUES
	(24, 'SSD018'),
	(25, 'SSD019'),
	(27, 'SSD021'),
	(28, 'SSD022'),
	(29, 'SSD023'),
	(30, 'SSD024');
/*!40000 ALTER TABLE `dqcmodel` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
