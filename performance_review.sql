-- MySQL dump 10.14  Distrib 5.5.56-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: performance_review
-- ------------------------------------------------------
-- Server version	5.5.56-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emp` (
  `id` int(11) DEFAULT NULL,
  `emp_id` varchar(255) NOT NULL DEFAULT '',
  `emp_name` varchar(255) DEFAULT NULL,
  `emp_type` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `emp_since` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `division` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `date_added` date DEFAULT NULL,
  `date_modified` date DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp`
--

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp` DISABLE KEYS */;
INSERT INTO `emp` VALUES (NULL,'001','devid','admin','123456','2016-12-12','dev',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `emp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_rev`
--

DROP TABLE IF EXISTS `emp_rev`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emp_rev` (
  `id` int(11) DEFAULT NULL,
  `emp_id` varchar(255) DEFAULT NULL,
  `review_date` date DEFAULT NULL,
  `period` varchar(255) DEFAULT NULL,
  `review_by` varchar(255) DEFAULT NULL,
  `productivity` varchar(255) DEFAULT NULL,
  `job_knowledge` varchar(255) DEFAULT NULL,
  `relationships` varchar(255) DEFAULT NULL,
  `initiative` varchar(255) DEFAULT NULL,
  `creativity` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `overall_performance` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_rev`
--

LOCK TABLES `emp_rev` WRITE;
/*!40000 ALTER TABLE `emp_rev` DISABLE KEYS */;
INSERT INTO `emp_rev` VALUES (NULL,'001','2019-07-31','anual','undefined','3','2','3','4','undefined','undefined','undefined'),(NULL,'001','2019-07-30','annual','undefined','2','3','5','6','undefined','undefined','undefined'),(NULL,'001','2019-07-29','annual','undefined','1','2','3','4','undefined','undefined','undefined'),(NULL,'001','2019-07-30','annual','undefined','2','4','3','4','undefined','undefined','undefined');
/*!40000 ALTER TABLE `emp_rev` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-27 14:31:29
