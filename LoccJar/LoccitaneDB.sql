CREATE DATABASE  IF NOT EXISTS `db_loccitane` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_loccitane`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_loccitane
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_niveis`
--

DROP TABLE IF EXISTS `tb_niveis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_niveis` (
  `id_nivel` binary(16) NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `registro` date DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `id_prateleira` binary(16) DEFAULT NULL,
  `id_produto` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id_nivel`),
  KEY `FKh2anwlcvq8q4cgyo6vwvupfan` (`id_prateleira`),
  KEY `FK3ltqub025mc7i9wdgm90rbjk8` (`id_produto`),
  CONSTRAINT `FK3ltqub025mc7i9wdgm90rbjk8` FOREIGN KEY (`id_produto`) REFERENCES `tb_produtos` (`id_produto`),
  CONSTRAINT `FKh2anwlcvq8q4cgyo6vwvupfan` FOREIGN KEY (`id_prateleira`) REFERENCES `tb_prateleira` (`id_prateleira`),
  CONSTRAINT `tb_niveis_chk_1` CHECK ((`status` between 0 and 3))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_niveis`
--

LOCK TABLES `tb_niveis` WRITE;
/*!40000 ALTER TABLE `tb_niveis` DISABLE KEYS */;
INSERT INTO `tb_niveis` VALUES (_binary ':\‘A,æC\·ï\»\Zcπ÷á|','04','2024-07-15',1,_binary 'øû¢˘ØyM¸ÄÇ¨\Z Sg',_binary '8ÛV\”cìCpú\Ÿm?£®'),(_binary '\nó\'DAI∫ë\ﬁ\—I\·,5ß','03','2024-07-15',0,_binary '\€KX\‘sjM;î1®u_\„ò',NULL),(_binary 'ô3\ÁàKßòiÚ\œ^\◊Y','05','2024-07-15',0,_binary '+ÛewHÙû&n°\«\∆;5',NULL),(_binary 'Ω71ZJ>Å~zƒ¶ØP\Õ','01','2024-07-15',2,_binary '\∆2\⁄A$¶\÷\\nq\r∫o',NULL),(_binary '¶\⁄4õÚNzºÇı\◊&∏','01','2024-07-15',0,_binary '+ÛewHÙû&n°\«\∆;5',NULL),(_binary 'µ0πˇO◊ΩWå\Ë¡Ä','02','2024-07-15',0,_binary 'Så\Ê<ÉfDwõ≠!\≈\Ó\œ',NULL),(_binary '\ÂQ©.âHl¶óœî¿è®','05','2024-07-15',2,_binary '\∆2\⁄A$¶\÷\\nq\r∫o',NULL),(_binary '¯\—H-ã1°p\ﬁ$øå','05','2024-07-15',0,_binary '¡ü\È≠\·G\'Ç˘\Õ:¶Ñ¸g',NULL),(_binary '\Z\Êãµ7B´™a\r\‚◊¥Y\œ','04','2024-07-15',0,_binary '\¬zo8vC!øüMPp\'˛I',NULL),(_binary 'ôk\¬\ËâCŒø\nƒõn\ÍÅ','03','2024-07-15',0,_binary '\¬zo8vC!øüMPp\'˛I',NULL),(_binary '#o.ZöG“Ü\ÔÒhBÇk ','03','2024-07-15',0,_binary '¢3\ÔI∂è§û\’\ÊgØ˙',NULL),(_binary '#ö\‡ÒûFc∂E¸\»\ﬁ]\Ìh','03','2024-07-15',0,_binary 'rPh-róD}•¨–∞ı˝¸',NULL),(_binary '$\Â1∏µ@±ï\Â∏\ÍH:','01','2024-07-15',0,_binary '†•dÜI≠@X≤nÑï[˘F',NULL),(_binary '%úﬁßûmGOÇõ\»PÃøÚ∫','01','2024-07-15',0,_binary 'rPh-róD}•¨–∞ı˝¸',NULL),(_binary '*wK¥â I\Îò\ÃC\\∏ﬁÑ','03','2024-07-15',0,_binary 'PÑ\‡î K¬∫—™/ã\ËuY',NULL),(_binary '2Ö/•]HãûWè,øΩèy','02','2024-07-15',1,_binary 'øû¢˘ØyM¸ÄÇ¨\Z Sg',_binary '\„â-;\ÈDUë∞\Á\rM\¬\Ô\Ô'),(_binary '3\√˝∂$M…≥\Á&\ÿM∞0˚','03','2024-07-15',2,_binary '\∆2\⁄A$¶\÷\\nq\r∫o',NULL),(_binary '6ÜàıI∞úº\‹\Ô\r\‚Ü,','03','2024-07-15',1,_binary 'øû¢˘ØyM¸ÄÇ¨\Z Sg',_binary '\·úf∫åfJ\Íë#xØcTÑ'),(_binary ':g˛:¸J%•ñ∂\ﬂ.ö†y','01','2024-07-15',0,_binary '∑\◊˝ÉZCB|æ≥H±\Ê\Ÿ',NULL),(_binary 'C±l˜ôM&ÅµPÌóáC\"','03','2024-07-15',0,_binary '¡ü\È≠\·G\'Ç˘\Õ:¶Ñ¸g',NULL),(_binary 'D y}	ÖFÑ°mRz\—wü','04','2024-07-15',0,_binary '\€KX\‘sjM;î1®u_\„ò',NULL),(_binary 'Hı\‚\0&oL\0ã\‡rãŸ¶','01','2024-07-15',0,_binary '¡ü\È≠\·G\'Ç˘\Õ:¶Ñ¸g',NULL),(_binary 'UÛr4#K6≥\‰}™pπ´U','01','2024-07-15',0,_binary 'Så\Ê<ÉfDwõ≠!\≈\Ó\œ',NULL),(_binary 'Y\Ô˙ÅóB∆çà˝_∞O','02','2024-07-15',0,_binary '¡ü\È≠\·G\'Ç˘\Õ:¶Ñ¸g',NULL),(_binary 'Y˜N\Ã@}ß8R¥ƒã\’','02','2024-07-15',0,_binary 'rPh-róD}•¨–∞ı˝¸',NULL),(_binary 'aL\Âøo_L>ù◊õ\\}°≥\Ì','05','2024-07-15',0,_binary '\¬zo8vC!øüMPp\'˛I',NULL),(_binary 'ÑÜ™	BDÉ∑k\ƒJ\0\È','04','2024-07-15',0,_binary 'Så\Ê<ÉfDwõ≠!\≈\Ó\œ',NULL),(_binary 'á˙Ñ\ƒ&@%•R\“*\‘¶é','04','2024-07-15',0,_binary '+ÛewHÙû&n°\«\∆;5',NULL),(_binary 'â◊ò\Z*M•\ÊÜAî#\Ÿ','01','2024-07-15',0,_binary '\€KX\‘sjM;î1®u_\„ò',NULL),(_binary 'ä§C$\÷LØh=Wì\¬C','04','2024-07-15',0,_binary 'PÑ\‡î K¬∫—™/ã\ËuY',NULL),(_binary 'ç˛w(o\ÌNçΩ&tÛså\’','02','2024-07-15',0,_binary '¢3\ÔI∂è§û\’\ÊgØ˙',NULL),(_binary 'ì<s\∆jFC™ò@Òº(ó','02','2024-07-15',2,_binary '\∆2\⁄A$¶\÷\\nq\r∫o',NULL),(_binary 'î\È_ÛáÒKôÅøVGó\‹=Ò','02','2024-07-15',0,_binary '†•dÜI≠@X≤nÑï[˘F',NULL),(_binary 'úK◊≠Ç;MRÆ\\9±\—\Ã\Ã','04','2024-07-15',0,_binary 'rPh-róD}•¨–∞ı˝¸',NULL),(_binary 'üQj,\ÿJ3µ\ ,öL¿:&','03','2024-07-15',0,_binary '+ÛewHÙû&n°\«\∆;5',NULL),(_binary '®¥_-\…E\r§/\„pNX∑','02','2024-07-15',0,_binary '∑\◊˝ÉZCB|æ≥H±\Ê\Ÿ',NULL),(_binary 'Æ.~≠º\ÕHÃøß\‚*e},=','02','2024-07-15',0,_binary '\€KX\‘sjM;î1®u_\„ò',NULL),(_binary '∞Wê±\Ì±DÄw\⁄0\"ÅΩ','04','2024-07-15',0,_binary '†•dÜI≠@X≤nÑï[˘F',NULL),(_binary '≥F3\Ã˝êC\rÜ\»◊∂&+ï','02','2024-07-15',0,_binary '\¬zo8vC!øüMPp\'˛I',NULL),(_binary '∂Òwß®EöüMˇR\ÿn4¸','04','2024-07-15',0,_binary '∑\◊˝ÉZCB|æ≥H±\Ê\Ÿ',NULL),(_binary 'ªØYx⁄ÜMÀÜ\Î¡A\€g∞\«','03','2024-07-15',0,_binary '†•dÜI≠@X≤nÑï[˘F',NULL),(_binary '¿H≠\Â\»N”ßç≠\\®\„A','02','2024-07-15',0,_binary '+ÛewHÙû&n°\«\∆;5',NULL),(_binary '\∆\ﬂ\r≥∏FJ≥íø\‰(yZˇ','04','2024-07-15',2,_binary '\∆2\⁄A$¶\÷\\nq\r∫o',NULL),(_binary '\À\≈\≈	\‰\‘Jb≤X\÷\‰Òp<R','02','2024-07-15',0,_binary 'PÑ\‡î K¬∫—™/ã\ËuY',NULL),(_binary '\ŒMô!.≠H;Äs≤¸\Ô≥','05','2024-07-15',0,_binary '¢3\ÔI∂è§û\’\ÊgØ˙',NULL),(_binary '—©Fæ\∆@√ÑKò!éö','05','2024-07-15',0,_binary 'rPh-róD}•¨–∞ı˝¸',NULL),(_binary '\⁄\œBò[°N”¥∑¿Ü\«{l','03','2024-07-15',0,_binary '∑\◊˝ÉZCB|æ≥H±\Ê\Ÿ',NULL),(_binary '\›R≤ŒΩ\‰GÃ¢Û¬úUÉß\“','04','2024-07-15',0,_binary '¢3\ÔI∂è§û\’\ÊgØ˙',NULL),(_binary '›™|2|2I•é&`˜g⁄ä*','01','2024-07-15',0,_binary 'PÑ\‡î K¬∫—™/ã\ËuY',NULL),(_binary '\·t5e\‡Fià\…\÷ıIÖr\\','01','2024-07-15',0,_binary '\¬zo8vC!øüMPp\'˛I',NULL),(_binary '\„K+¢[Aûº°ó\ÿXú\÷\œ','05','2024-07-15',0,_binary 'Så\Ê<ÉfDwõ≠!\≈\Ó\œ',NULL),(_binary '\„\Ó8ÀµJòÇYçÄWa','05','2024-07-15',0,_binary 'PÑ\‡î K¬∫—™/ã\ËuY',NULL),(_binary '\ÊxC<QÜIáüs<òƒ≠Qº','01','2024-07-15',0,_binary '¢3\ÔI∂è§û\’\ÊgØ˙',NULL),(_binary 'ˆ~©G<VNcãî\œ\ÂºP\≈','05','2024-07-15',0,_binary '\€KX\‘sjM;î1®u_\„ò',NULL),(_binary 'ˆﬂê±›èG\Ì£Zec˘ å\÷','04','2024-07-15',0,_binary '¡ü\È≠\·G\'Ç˘\Õ:¶Ñ¸g',NULL),(_binary '¯ÑTaRN\È¶gh\≈D*kº','05','2024-07-15',0,_binary '†•dÜI≠@X≤nÑï[˘F',NULL),(_binary '˚πÛMÅEoØ\◊\‡\›\Ô\\','03','2024-07-15',0,_binary 'Så\Ê<ÉfDwõ≠!\≈\Ó\œ',NULL),(_binary '˚æúLyEâá\„âÒÉ+aV','01','2024-07-15',1,_binary 'øû¢˘ØyM¸ÄÇ¨\Z Sg',_binary 'ø\·âELR∑5Ü,;çZ'),(_binary '¸≥•æÆ{N5Ñ\ÈB±IP','05','2024-07-15',1,_binary 'øû¢˘ØyM¸ÄÇ¨\Z Sg',_binary 'Pµò\"0ÇJøπ[\0Kˇ<'),(_binary 'ˇ&ÚYúµHòèq\…nü\ŒK','05','2024-07-15',0,_binary '∑\◊˝ÉZCB|æ≥H±\Ê\Ÿ',NULL);
/*!40000 ALTER TABLE `tb_niveis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_prateleira`
--

DROP TABLE IF EXISTS `tb_prateleira`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_prateleira` (
  `id_prateleira` binary(16) NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `registro` date DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `id_rua` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id_prateleira`),
  KEY `FKfb416s7dgqqunu1m6c77vghjl` (`id_rua`),
  CONSTRAINT `FKfb416s7dgqqunu1m6c77vghjl` FOREIGN KEY (`id_rua`) REFERENCES `tb_ruas` (`id_rua`),
  CONSTRAINT `tb_prateleira_chk_1` CHECK ((`status` between 0 and 3))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_prateleira`
--

LOCK TABLES `tb_prateleira` WRITE;
/*!40000 ALTER TABLE `tb_prateleira` DISABLE KEYS */;
INSERT INTO `tb_prateleira` VALUES (_binary '¡ü\È≠\·G\'Ç˘\Õ:¶Ñ¸g','02','2024-07-15',0,_binary '\ÀlK\'\»*CM¶d\–\Î9Üwò'),(_binary '+ÛewHÙû&n°\«\∆;5','01','2024-07-15',0,_binary 'œäp\‹¡MMi¶3>h?i£á'),(_binary 'PÑ\‡î K¬∫—™/ã\ËuY','04','2024-07-15',0,_binary '2˙\Ô)\ ˆH–å7®c\«~Ú¡'),(_binary 'Så\Ê<ÉfDwõ≠!\≈\Ó\œ','03','2024-07-15',0,_binary 'Úæ†K!KTÅ\„|ãYÅ'),(_binary 'rPh-róD}•¨–∞ı˝¸','03','2024-07-15',0,_binary 'œäp\‹¡MMi¶3>h?i£á'),(_binary '†•dÜI≠@X≤nÑï[˘F','04','2024-07-15',0,_binary 'Úæ†K!KTÅ\„|ãYÅ'),(_binary '¢3\ÔI∂è§û\’\ÊgØ˙','02','2024-07-15',0,_binary '2˙\Ô)\ ˆH–å7®c\«~Ú¡'),(_binary '∑\◊˝ÉZCB|æ≥H±\Ê\Ÿ','04','2024-07-15',0,_binary '\ÀlK\'\»*CM¶d\–\Î9Üwò'),(_binary 'øû¢˘ØyM¸ÄÇ¨\Z Sg','04','2024-07-15',0,_binary '∫jq\«ıACu∏fåÄw\Í'),(_binary '\¬zo8vC!øüMPp\'˛I','03','2024-07-15',0,_binary '2˙\Ô)\ ˆH–å7®c\«~Ú¡'),(_binary '\∆2\⁄A$¶\÷\\nq\r∫o','03','2024-07-15',0,_binary '∫jq\«ıACu∏fåÄw\Í'),(_binary '\€KX\‘sjM;î1®u_\„ò','05','2024-07-15',0,_binary '∫jq\«ıACu∏fåÄw\Í');
/*!40000 ALTER TABLE `tb_prateleira` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produtos`
--

DROP TABLE IF EXISTS `tb_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produtos` (
  `id_produto` binary(16) NOT NULL,
  `codigo_material` varchar(255) DEFAULT NULL,
  `data_validade` date DEFAULT NULL,
  `lote_material` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produtos`
--

LOCK TABLES `tb_produtos` WRITE;
/*!40000 ALTER TABLE `tb_produtos` DISABLE KEYS */;
INSERT INTO `tb_produtos` VALUES (_binary '8ÛV\”cìCpú\Ÿm?£®','AA.04.04','2024-07-16','1034','material 4','produto test',10),(_binary 'Pµò\"0ÇJøπ[\0Kˇ<','AA.04.05','2024-07-16','1034','material 4','produto test',10),(_binary 'ø\·âELR∑5Ü,;çZ','AA.04.01','2024-07-16','1034','material 4','produto test',10),(_binary '\·úf∫åfJ\Íë#xØcTÑ','AA.04.03','2024-07-16','1034','material 4','produto test',10),(_binary '\„â-;\ÈDUë∞\Á\rM\¬\Ô\Ô','AA.04.02','2024-07-16','1034','material 4','produto test',10);
/*!40000 ALTER TABLE `tb_produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_ruas`
--

DROP TABLE IF EXISTS `tb_ruas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_ruas` (
  `id_rua` binary(16) NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `n_bloqueado` int DEFAULT NULL,
  `n_niveis` int DEFAULT NULL,
  `n_prateleiras` int DEFAULT NULL,
  `n_preenchidos` int DEFAULT NULL,
  `n_vazios` int DEFAULT NULL,
  `registro` date DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id_rua`),
  CONSTRAINT `tb_ruas_chk_1` CHECK ((`status` between 0 and 3))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_ruas`
--

LOCK TABLES `tb_ruas` WRITE;
/*!40000 ALTER TABLE `tb_ruas` DISABLE KEYS */;
INSERT INTO `tb_ruas` VALUES (_binary '2˙\Ô)\ ˆH–å7®c\«~Ú¡','CC',0,15,3,0,15,'2024-07-15',0),(_binary '∫jq\«ıACu∏fåÄw\Í','AA',0,15,3,5,10,'2024-07-15',0),(_binary '\ÀlK\'\»*CM¶d\–\Î9Üwò','BB',0,10,2,0,10,'2024-07-15',0),(_binary 'œäp\‹¡MMi¶3>h?i£á','HH',0,10,2,0,10,'2024-07-15',0),(_binary 'Úæ†K!KTÅ\„|ãYÅ','DD',0,10,2,0,10,'2024-07-15',0);
/*!40000 ALTER TABLE `tb_ruas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuarios` (
  `id_usuario` binary(16) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `registro` date NOT NULL,
  `tipo_usuario` tinyint DEFAULT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
INSERT INTO `tb_usuarios` VALUES (_binary '¿\Ÿ9£¯NúØ\Óp\rßc','usuario','admin','admin@root.root','$2a$10$gDBUsNryIngceIRet6AHNuPV4eUNz84eV6D/AFCr1UZCGfrZg1VSa','2024-07-07',0,'1234');
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-16 19:07:17
