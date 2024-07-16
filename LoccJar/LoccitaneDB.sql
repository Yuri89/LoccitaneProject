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
INSERT INTO `tb_niveis` VALUES (_binary ':\�A,�C\�\�\Zc�և|','04','2024-07-15',1,_binary '�����yM����\Z Sg',_binary '8�V\�c�Cp�\�m?��'),(_binary '\n�\'DAI��\�\�I\�,5�','03','2024-07-15',0,_binary '\�KX\�sjM;�1�u_\�',NULL),(_binary '�3\�K��i�\�^\�Y','05','2024-07-15',0,_binary '+�ewH��&n�\�\�;5',NULL),(_binary '�71�ZJ>�~zĦ�P\�','01','2024-07-15',2,_binary '\�2\�A$�\�\\nq\r�o',NULL),(_binary '�\�4��Nz���\�&�','01','2024-07-15',0,_binary '+�ewH��&n�\�\�;5',NULL),(_binary '�0��O׽W�\���','02','2024-07-15',0,_binary 'S�\�<�fDw��!\�\�\�',NULL),(_binary '\�Q�.�Hl��ϔ���','05','2024-07-15',2,_binary '\�2\�A$�\�\\nq\r�o',NULL),(_binary '�\�H-�1�p\�$��','05','2024-07-15',0,_binary '��\�\�G\'��\�:���g',NULL),(_binary '\Z\����7B��a\r\�״Y\�','04','2024-07-15',0,_binary '\�zo8vC!��MPp\'�I',NULL),(_binary '�k\�\�Cο\něn\�','03','2024-07-15',0,_binary '\�zo8vC!��MPp\'�I',NULL),(_binary '#o.Z�G҆\��hB�k ','03','2024-07-15',0,_binary '�3\�I����\�\�g��',NULL),(_binary '#�\���Fc�E�\�\�]\�h','03','2024-07-15',0,_binary 'rPh-r�D}��а���',NULL),(_binary '$\�1��@��\�\�H:','01','2024-07-15',0,_binary '��d�I�@X�n��[�F',NULL),(_binary '%�ާ�mGO��\�P̿�','01','2024-07-15',0,_binary 'rPh-r�D}��а���',NULL),(_binary '*wK�� I\�\�C\\�ބ','03','2024-07-15',0,_binary 'P�\�� KºѪ/�\�uY',NULL),(_binary '2�/�]H��W�,���y','02','2024-07-15',1,_binary '�����yM����\Z Sg',_binary '\�-;\�DU��\�\rM\�\�\�'),(_binary '3\���$Mɳ\�&\�M�0�','03','2024-07-15',2,_binary '\�2\�A$�\�\\nq\r�o',NULL),(_binary '6���I���\�\�\r\�,','03','2024-07-15',1,_binary '�����yM����\Z Sg',_binary '\�f��fJ\�#x�cT�'),(_binary ':g�:�J%���\�.��y','01','2024-07-15',0,_binary '�\���ZCB|��H�\�\�',NULL),(_binary 'C�l��M&��P헇C\"','03','2024-07-15',0,_binary '��\�\�G\'��\�:���g',NULL),(_binary 'D y}	�F��mRz\�w�','04','2024-07-15',0,_binary '\�KX\�sjM;�1�u_\�',NULL),(_binary 'H�\�\0&oL\0�\�r�٦','01','2024-07-15',0,_binary '��\�\�G\'��\�:���g',NULL),(_binary 'U�r4#K6�\�}�p��U','01','2024-07-15',0,_binary 'S�\�<�fDw��!\�\�\�',NULL),(_binary 'Y\����Bƍ��_�O','02','2024-07-15',0,_binary '��\�\�G\'��\�:���g',NULL),(_binary 'Y�N\�@}�8�R�ċ\�','02','2024-07-15',0,_binary 'rPh-r�D}��а���',NULL),(_binary 'aL\�o_L>�כ\\}��\�','05','2024-07-15',0,_binary '\�zo8vC!��MPp\'�I',NULL),(_binary '���	BD��k\�J\0\�','04','2024-07-15',0,_binary 'S�\�<�fDw��!\�\�\�',NULL),(_binary '���\�&@%�R\�*\���','04','2024-07-15',0,_binary '+�ewH��&n�\�\�;5',NULL),(_binary '�ט\Z*M�\�A�#\�','01','2024-07-15',0,_binary '\�KX\�sjM;�1�u_\�',NULL),(_binary '��C$\�L�h=W�\�C','04','2024-07-15',0,_binary 'P�\�� KºѪ/�\�uY',NULL),(_binary '��w(o\�N��&t�s�\�','02','2024-07-15',0,_binary '�3\�I����\�\�g��',NULL),(_binary '�<s\�jFC��@��(�','02','2024-07-15',2,_binary '\�2\�A$�\�\\nq\r�o',NULL),(_binary '�\�_��K���VG�\�=�','02','2024-07-15',0,_binary '��d�I�@X�n��[�F',NULL),(_binary '�K׭�;MR�\\9�\�\�\�','04','2024-07-15',0,_binary 'rPh-r�D}��а���',NULL),(_binary '�Qj,\�J3�\�,�L�:&','03','2024-07-15',0,_binary '+�ewH��&n�\�\�;5',NULL),(_binary '��_-\�E\r�/\�pNX�','02','2024-07-15',0,_binary '�\���ZCB|��H�\�\�',NULL),(_binary '�.~��\�H̿�\�*e},=','02','2024-07-15',0,_binary '\�KX\�sjM;�1�u_\�',NULL),(_binary '�W��\�D�w\�0\"��','04','2024-07-15',0,_binary '��d�I�@X�n��[�F',NULL),(_binary '�F3\���C\r�\�׶&+�','02','2024-07-15',0,_binary '\�zo8vC!��MPp\'�I',NULL),(_binary '��w��E��M�R\�n4�','04','2024-07-15',0,_binary '�\���ZCB|��H�\�\�',NULL),(_binary '��YxچMˆ\��A\�g�\�','03','2024-07-15',0,_binary '��d�I�@X�n��[�F',NULL),(_binary '�H�\�\�Nӧ��\\�\�A','02','2024-07-15',0,_binary '+�ewH��&n�\�\�;5',NULL),(_binary '\�\�\r��FJ���\�(yZ�','04','2024-07-15',2,_binary '\�2\�A$�\�\\nq\r�o',NULL),(_binary '\�\�\�	\�\�Jb�X\�\��p<R','02','2024-07-15',0,_binary 'P�\�� KºѪ/�\�uY',NULL),(_binary '\�M�!.�H;�s��\�','05','2024-07-15',0,_binary '�3\�I����\�\�g��',NULL),(_binary 'ѩF�\�@ÄK�!��','05','2024-07-15',0,_binary 'rPh-r�D}��а���',NULL),(_binary '\�\�B�[�NӴ���\�{l','03','2024-07-15',0,_binary '�\���ZCB|��H�\�\�',NULL),(_binary '\�R�ν\�G̢�U��\�','04','2024-07-15',0,_binary '�3\�I����\�\�g��',NULL),(_binary 'ݪ|2|2I��&`�gڊ*','01','2024-07-15',0,_binary 'P�\�� KºѪ/�\�uY',NULL),(_binary '\�t5e\�Fi�\�\��I�r\\','01','2024-07-15',0,_binary '\�zo8vC!��MPp\'�I',NULL),(_binary '\�K+�[A����\�X�\�\�','05','2024-07-15',0,_binary 'S�\�<�fDw��!\�\�\�',NULL),(_binary '\�\�8˵J��Y��Wa','05','2024-07-15',0,_binary 'P�\�� KºѪ/�\�uY',NULL),(_binary '\�xC<Q�I��s<�ĭQ�','01','2024-07-15',0,_binary '�3\�I����\�\�g��',NULL),(_binary '�~�G<VNc��\�\�P\�','05','2024-07-15',0,_binary '\�KX\�sjM;�1�u_\�',NULL),(_binary '�ߐ�ݏG\�Zec�ʌ\�','04','2024-07-15',0,_binary '��\�\�G\'��\�:���g',NULL),(_binary '��TaRN\�gh\�D*k�','05','2024-07-15',0,_binary '��d�I�@X�n��[�F',NULL),(_binary '���M�Eo�\�\�\�\�\\','03','2024-07-15',0,_binary 'S�\�<�fDw��!\�\�\�',NULL),(_binary '���LyE��\��+aV','01','2024-07-15',1,_binary '�����yM����\Z Sg',_binary '�\��ELR�5�,;�Z'),(_binary '�����{N5�\�B�IP','05','2024-07-15',1,_binary '�����yM����\Z Sg',_binary 'P��\"0�J��[\0K�<'),(_binary '�&�Y��H��q\�n�\�K','05','2024-07-15',0,_binary '�\���ZCB|��H�\�\�',NULL);
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
INSERT INTO `tb_prateleira` VALUES (_binary '��\�\�G\'��\�:���g','02','2024-07-15',0,_binary '\�lK\'\�*CM�d\�\�9�w�'),(_binary '+�ewH��&n�\�\�;5','01','2024-07-15',0,_binary 'ϊp\��MMi�3>h?i��'),(_binary 'P�\�� KºѪ/�\�uY','04','2024-07-15',0,_binary '2�\�)\��HЌ7�c\�~��'),(_binary 'S�\�<�fDw��!\�\�\�','03','2024-07-15',0,_binary '���K!KT�\�|�Y�'),(_binary 'rPh-r�D}��а���','03','2024-07-15',0,_binary 'ϊp\��MMi�3>h?i��'),(_binary '��d�I�@X�n��[�F','04','2024-07-15',0,_binary '���K!KT�\�|�Y�'),(_binary '�3\�I����\�\�g��','02','2024-07-15',0,_binary '2�\�)\��HЌ7�c\�~��'),(_binary '�\���ZCB|��H�\�\�','04','2024-07-15',0,_binary '\�lK\'\�*CM�d\�\�9�w�'),(_binary '�����yM����\Z Sg','04','2024-07-15',0,_binary '�jq\��ACu�f��w\�'),(_binary '\�zo8vC!��MPp\'�I','03','2024-07-15',0,_binary '2�\�)\��HЌ7�c\�~��'),(_binary '\�2\�A$�\�\\nq\r�o','03','2024-07-15',0,_binary '�jq\��ACu�f��w\�'),(_binary '\�KX\�sjM;�1�u_\�','05','2024-07-15',0,_binary '�jq\��ACu�f��w\�');
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
INSERT INTO `tb_produtos` VALUES (_binary '8�V\�c�Cp�\�m?��','AA.04.04','2024-07-16','1034','material 4','produto test',10),(_binary 'P��\"0�J��[\0K�<','AA.04.05','2024-07-16','1034','material 4','produto test',10),(_binary '�\��ELR�5�,;�Z','AA.04.01','2024-07-16','1034','material 4','produto test',10),(_binary '\�f��fJ\�#x�cT�','AA.04.03','2024-07-16','1034','material 4','produto test',10),(_binary '\�-;\�DU��\�\rM\�\�\�','AA.04.02','2024-07-16','1034','material 4','produto test',10);
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
INSERT INTO `tb_ruas` VALUES (_binary '2�\�)\��HЌ7�c\�~��','CC',0,15,3,0,15,'2024-07-15',0),(_binary '�jq\��ACu�f��w\�','AA',0,15,3,5,10,'2024-07-15',0),(_binary '\�lK\'\�*CM�d\�\�9�w�','BB',0,10,2,0,10,'2024-07-15',0),(_binary 'ϊp\��MMi�3>h?i��','HH',0,10,2,0,10,'2024-07-15',0),(_binary '���K!KT�\�|�Y�','DD',0,10,2,0,10,'2024-07-15',0);
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
INSERT INTO `tb_usuarios` VALUES (_binary '�\�9��N��\�p\r�c','usuario','admin','admin@root.root','$2a$10$gDBUsNryIngceIRet6AHNuPV4eUNz84eV6D/AFCr1UZCGfrZg1VSa','2024-07-07',0,'1234');
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
