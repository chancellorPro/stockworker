-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: homestead
-- ------------------------------------------------------
-- Server version	5.7.27

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
-- Table structure for table `action_log`
--

DROP TABLE IF EXISTS `action_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `income` tinyint(1) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `count` int(10) unsigned DEFAULT NULL,
  `partition` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_id` int(10) unsigned DEFAULT NULL,
  `created_by` int(10) unsigned NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `action_log_date_index` (`date`),
  KEY `action_log_income_index` (`income`),
  KEY `action_log_product_id_index` (`product_id`),
  KEY `action_log_created_by_index` (`created_by`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_log`
--

LOCK TABLES `action_log` WRITE;
/*!40000 ALTER TABLE `action_log` DISABLE KEYS */;
INSERT INTO `action_log` VALUES (18,'2019-10-08',0,78,12000,NULL,NULL,1,NULL,'2019-10-08 18:21:08','2019-10-08 18:21:08'),(19,'2019-10-08',1,78,24000,NULL,NULL,1,NULL,'2019-10-08 18:36:50','2019-10-08 18:36:50'),(26,'2019-10-08',1,79,15750,NULL,NULL,1,NULL,'2019-10-08 20:06:50','2019-10-08 20:06:50'),(27,'2019-10-19',0,38,24800,NULL,NULL,1,NULL,'2019-10-20 19:09:36','2019-10-20 19:09:36'),(28,'2019-10-19',0,33,28320,NULL,NULL,1,NULL,'2019-10-20 19:17:59','2019-10-20 19:17:59'),(29,'2019-10-19',0,84,6000,NULL,NULL,1,NULL,'2019-10-20 19:21:34','2019-10-20 19:21:34'),(30,'2019-10-19',0,84,6000,NULL,6,1,NULL,'2019-10-20 19:25:31','2019-10-20 19:25:31'),(31,'2019-10-19',0,27,16000,NULL,NULL,1,NULL,'2019-10-20 19:28:10','2019-10-20 19:28:10'),(32,'2019-10-19',0,28,18400,NULL,NULL,1,NULL,'2019-10-20 19:29:49','2019-10-20 19:29:49'),(33,'2019-10-19',0,28,18400,NULL,NULL,1,NULL,'2019-10-20 19:31:36','2019-10-20 19:31:36'),(34,'2019-10-19',0,30,22400,NULL,NULL,1,NULL,'2019-10-20 19:33:20','2019-10-20 19:36:05'),(35,'2019-10-19',0,31,360,NULL,NULL,1,NULL,'2019-10-20 19:34:41','2019-10-20 19:34:41'),(36,'2019-10-19',0,31,360,NULL,NULL,1,NULL,'2019-10-20 19:37:10','2019-10-20 19:37:10'),(37,'2019-10-19',0,81,5000,NULL,NULL,1,NULL,'2019-10-20 19:39:17','2019-10-20 19:39:17'),(38,'2019-10-19',0,85,15600,NULL,2,1,NULL,'2019-10-20 19:46:17','2019-10-20 19:46:17'),(39,'2019-10-19',0,79,9000,NULL,NULL,1,NULL,'2019-10-20 19:47:29','2019-10-20 19:47:29'),(40,'2019-10-19',0,79,9000,NULL,NULL,1,NULL,'2019-10-20 19:49:11','2019-10-20 19:49:11'),(41,'2019-10-19',0,80,5000,NULL,5,1,NULL,'2019-10-20 19:55:00','2019-10-20 19:55:00'),(42,'2019-10-19',0,43,37440,NULL,3,1,NULL,'2019-10-20 19:56:31','2019-10-20 19:56:31'),(43,'2019-10-18',0,82,10000,NULL,NULL,1,NULL,'2019-10-20 19:58:56','2019-10-20 19:58:56'),(44,'2019-10-18',0,49,17600,NULL,NULL,1,NULL,'2019-10-20 20:01:55','2019-10-20 20:01:55'),(45,'2019-10-17',0,71,141000,NULL,8,1,NULL,'2019-10-20 20:06:33','2019-10-20 20:37:32'),(46,'2019-10-16',0,46,12000,NULL,8,1,NULL,'2019-10-20 20:10:47','2019-10-20 20:10:47'),(47,'2019-10-16',0,47,21000,NULL,8,1,NULL,'2019-10-20 20:11:34','2019-10-20 20:11:34'),(48,'2019-10-16',0,48,11500,NULL,8,1,NULL,'2019-10-20 20:12:43','2019-10-20 20:12:43'),(49,'2019-10-16',0,50,5600,NULL,8,1,NULL,'2019-10-20 20:13:37','2019-10-20 20:13:37'),(50,'2019-10-16',0,77,18200,NULL,NULL,1,NULL,'2019-10-20 20:15:36','2019-10-20 20:15:36'),(51,'2019-10-16',0,52,71400,NULL,8,1,NULL,'2019-10-20 20:16:21','2019-10-20 20:16:21'),(52,'2019-10-16',0,53,60000,NULL,8,1,NULL,'2019-10-20 20:17:12','2019-10-20 20:17:12'),(53,'2019-10-16',0,73,7200,NULL,8,1,NULL,'2019-10-20 20:18:27','2019-10-20 20:18:27'),(54,'2019-10-16',0,74,7200,NULL,8,1,NULL,'2019-10-20 20:19:27','2019-10-20 20:19:27'),(55,'2019-10-16',0,47,12000,NULL,8,1,NULL,'2019-10-20 20:20:20','2019-10-20 20:20:20'),(56,'2019-10-16',0,45,6000,NULL,8,1,NULL,'2019-10-20 20:21:16','2019-10-20 20:21:16'),(57,'2019-10-16',0,78,28800,NULL,8,1,NULL,'2019-10-20 20:22:30','2019-10-20 20:22:30'),(58,'2019-10-16',0,78,2200,NULL,8,1,NULL,'2019-10-20 20:23:11','2019-10-20 20:23:11'),(59,'2019-10-16',0,55,9000,NULL,8,1,NULL,'2019-10-20 20:24:43','2019-10-20 20:24:43'),(60,'2019-10-16',0,56,12000,NULL,8,1,NULL,'2019-10-20 20:25:30','2019-10-20 20:25:30'),(61,'2019-10-16',0,57,36000,NULL,8,1,NULL,'2019-10-20 20:26:00','2019-10-20 20:26:00'),(62,'2019-10-16',0,58,21000,NULL,8,1,NULL,'2019-10-20 20:26:54','2019-10-20 20:26:54'),(63,'2019-10-16',0,59,11200,NULL,8,1,NULL,'2019-10-20 20:27:36','2019-10-20 20:27:36'),(64,'2019-10-16',0,60,9800,NULL,8,1,NULL,'2019-10-20 20:28:12','2019-10-20 20:28:12'),(65,'2019-10-16',0,61,27600,NULL,8,1,NULL,'2019-10-20 20:28:51','2019-10-20 20:28:51'),(66,'2019-10-16',0,64,11250,NULL,NULL,1,NULL,'2019-10-20 20:29:59','2019-10-20 20:29:59'),(67,'2019-10-16',0,76,8000,NULL,8,1,NULL,'2019-10-20 20:30:39','2019-10-20 20:30:39'),(68,'2019-10-16',0,63,57000,NULL,NULL,1,NULL,'2019-10-20 20:31:39','2019-10-20 20:31:39'),(69,'2019-10-21',0,34,17760,NULL,NULL,1,NULL,'2019-10-21 14:21:22','2019-10-21 14:21:22'),(70,'2019-10-21',0,27,24400,NULL,NULL,1,NULL,'2019-10-21 14:22:33','2019-10-21 14:22:33'),(71,'2019-10-21',0,86,9000,NULL,5,1,NULL,'2019-10-21 14:29:34','2019-10-21 14:29:34'),(72,'2019-10-21',0,86,1000,NULL,5,1,'1 ящик 1000 шт','2019-10-21 14:30:31','2019-10-21 14:30:31'),(73,'2019-10-21',0,86,1000,NULL,5,1,NULL,'2019-10-21 14:50:55','2019-10-21 14:51:17'),(74,'2019-10-21',0,79,6750,NULL,7,1,NULL,'2019-10-21 14:52:55','2019-10-21 14:52:55'),(75,'2019-10-21',0,85,7200,NULL,2,1,NULL,'2019-10-21 14:53:48','2019-10-21 14:53:48'),(76,'2019-10-21',0,56,7000,NULL,8,1,NULL,'2019-10-21 14:54:55','2019-10-21 14:54:55'),(77,'2019-10-21',0,87,2400,NULL,8,1,NULL,'2019-10-21 14:57:38','2019-10-21 14:57:38'),(78,'2019-10-21',0,54,1200,NULL,8,1,NULL,'2019-10-21 14:58:21','2019-10-21 14:58:21'),(79,'2019-10-21',1,85,19200,NULL,2,1,NULL,'2019-10-21 14:59:33','2019-10-21 14:59:33'),(80,'2019-10-21',1,73,7200,NULL,8,1,NULL,'2019-10-21 15:00:40','2019-10-21 15:00:40'),(81,'2019-10-21',1,74,7200,NULL,8,1,NULL,'2019-10-21 15:01:36','2019-10-21 15:01:36'),(82,'2019-10-21',1,87,56400,NULL,8,1,NULL,'2019-10-21 15:04:49','2019-10-21 15:04:49'),(83,'2019-10-21',1,25,800,NULL,9,1,NULL,'2019-10-21 15:06:59','2019-10-21 15:06:59'),(84,'2019-10-21',1,36,2700,NULL,10,1,NULL,'2019-10-21 15:09:07','2019-10-21 15:09:07'),(85,'2019-10-21',1,37,2700,NULL,10,1,NULL,'2019-10-21 15:10:01','2019-10-21 15:10:01'),(86,'2019-10-21',1,33,960,NULL,10,1,NULL,'2019-10-21 15:12:51','2019-10-21 15:12:51'),(87,'2019-10-21',1,34,960,NULL,10,1,NULL,'2019-10-21 15:13:32','2019-10-21 15:13:32'),(88,'2019-10-21',1,24,800,NULL,10,1,NULL,'2019-10-21 15:14:37','2019-10-21 15:14:37'),(89,'2019-10-21',1,8,640,NULL,10,1,NULL,'2019-10-21 15:15:19','2019-10-21 15:15:19'),(90,'2019-10-21',1,30,360,NULL,10,1,NULL,'2019-10-21 15:16:12','2019-10-21 15:16:12'),(91,'2019-10-21',1,31,360,NULL,10,1,NULL,'2019-10-21 15:16:47','2019-10-21 15:16:47'),(92,'2019-10-21',1,84,7200,NULL,11,1,NULL,'2019-10-21 15:20:34','2019-10-21 15:22:09'),(93,'2019-10-21',1,8,320,NULL,9,1,NULL,'2019-10-21 15:22:58','2019-10-21 15:22:58'),(94,'2019-10-21',1,80,5000,NULL,5,1,NULL,'2019-10-21 15:25:30','2019-10-21 15:25:30'),(95,'2019-10-21',1,81,5000,NULL,5,1,NULL,'2019-10-21 15:26:04','2019-10-21 15:26:04'),(96,'2019-10-21',1,86,1000,NULL,5,1,NULL,'2019-10-21 15:26:59','2019-10-21 15:26:59'),(97,'2019-10-21',1,24,100,NULL,12,1,NULL,'2019-10-21 15:27:42','2019-10-21 15:28:22');
/*!40000 ALTER TABLE `action_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boxes`
--

DROP TABLE IF EXISTS `boxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `boxes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `volume` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boxes`
--

LOCK TABLES `boxes` WRITE;
/*!40000 ALTER TABLE `boxes` DISABLE KEYS */;
/*!40000 ALTER TABLE `boxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'ТОВ \"КФ \"КВIТЕНЬ\"','Лоток 182х136хh78','2019-10-08 18:51:43','2019-10-08 18:51:43'),(2,'ДН \"Классик\"','Ваф труб \"МАРИЯ\"','2019-10-08 18:42:46','2019-10-08 18:42:46'),(3,'ООО КПФ \"Рома\"','Лоток 310х76хh36','2019-10-08 18:46:09','2019-10-08 18:46:09'),(4,'ЧАО \"ПО  \"КОНТИ\"','BELISSIMO Лоток 125Х68Х24','2019-10-08 18:49:50','2019-10-08 18:49:50'),(5,'ЗАО \"Житомирськi Ласощi\"',NULL,'2019-10-20 18:59:24','2019-10-20 18:59:24'),(6,'\"Полтава Кондитер\"',NULL,'2019-10-20 19:22:31','2019-10-20 19:22:31'),(7,'БКК',NULL,'2019-10-20 19:48:16','2019-10-20 19:48:16'),(8,'ХБФ',NULL,'2019-10-20 20:07:03','2019-10-20 20:07:03'),(9,'\"Катюша\"',NULL,'2019-10-21 15:05:22','2019-10-21 15:05:22'),(10,'\"Нахлебник\"',NULL,'2019-10-21 15:05:44','2019-10-21 15:05:44'),(11,'АТ \"Домiнiк\" Полтава',NULL,'2019-10-21 15:21:51','2019-10-21 15:21:51'),(12,'Маренич ПН',NULL,'2019-10-21 15:28:07','2019-10-21 15:28:07');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_10_04_113510_create_products_table',1),(4,'2019_10_04_151028_create_action_log_table',1),(5,'2019_10_04_151128_create_customers_table',1),(6,'2019_10_04_151135_create_plan_table',1),(7,'2019_10_05_145445_create_stock_table',1),(8,'2019_10_05_153143_create_boxes_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `count` int(10) unsigned NOT NULL,
  `progress` int(10) unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `plan_product_id_unique` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (12,71,70000,0,'2019-10-20 20:32:57','2019-10-20 20:32:57');
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `box_id` int(10) unsigned DEFAULT NULL,
  `box_size` int(10) unsigned DEFAULT NULL,
  `box_weight` double(8,2) DEFAULT NULL,
  `parent_product` int(10) unsigned DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Универсальная упаковка GP-01 ПЭТ',0,800,2.50,NULL,'Описание','2019-10-05 16:36:43','2019-10-07 18:06:02'),(2,'Универсальная упаковка GP-03 ПЭТ корпус',0,1350,8.50,6,NULL,'2019-10-05 16:40:05','2019-10-07 18:19:09'),(3,'Универсальная упаковка GP-03 ПЭТ крышка',0,1350,2.50,6,NULL,'2019-10-05 16:42:58','2019-10-07 18:18:19'),(4,'Универсальная упаковка GP-04 ПЭТ корпус',2,800,NULL,7,NULL,'2019-10-05 16:50:23','2019-10-07 18:17:37'),(5,'Универсальная упаковка GP-04 ПЭТ крышка',1,800,NULL,7,NULL,'2019-10-05 16:50:55','2019-10-07 18:17:42'),(6,'Универсальная упаковка GP-03 ПЭТ',NULL,1350,NULL,NULL,NULL,'2019-10-05 17:02:21','2019-10-05 17:24:30'),(7,'Универсальная упаковка GP-04 ПЭТ',NULL,800,NULL,NULL,NULL,'2019-10-05 17:02:52','2019-10-05 17:24:45'),(8,'Универсальная упаковка GP-05 ОПС',NULL,320,NULL,NULL,NULL,'2019-10-05 17:08:08','2019-10-05 17:08:08'),(9,'Тортница пластиковая GP-07 ПЭТ дно',NULL,250,NULL,11,NULL,'2019-10-05 17:14:37','2019-10-05 17:28:55'),(10,'Тортница пластиковая GP-07 ПЭТ крышка',NULL,250,NULL,11,NULL,'2019-10-05 17:27:38','2019-10-05 17:32:24'),(11,'Тортница пластиковая GP-07 ПЭТ',NULL,250,NULL,NULL,'В наличии еще по 5 ящиков ОПС купола и ПС белого дна по 200 штук в ящике','2019-10-05 17:28:38','2019-10-05 18:30:57'),(12,'Тортница пластиковая GP-07 ПС белый дно',NULL,250,NULL,NULL,NULL,'2019-10-05 17:41:53','2019-10-05 17:45:51'),(13,'Тортница пластиковая GP-07 ОПС крышка',NULL,250,NULL,NULL,NULL,'2019-10-05 17:44:49','2019-10-05 17:44:49'),(14,'Тортница пластиковая GP-10 ОПС  купол',NULL,250,NULL,NULL,NULL,'2019-10-05 18:02:23','2019-10-05 18:02:23'),(15,'Тортница пластиковая GP-07 ПЭТ коричневый дно',NULL,250,NULL,NULL,NULL,'2019-10-05 18:04:21','2019-10-05 18:04:21'),(16,'Тортница пластиковая GP-10 ОПС купол',NULL,250,NULL,18,NULL,'2019-10-05 18:16:09','2019-10-05 18:19:04'),(17,'Тортница пластиковая GP-10 ПЭТ коричневый дно',NULL,250,NULL,18,NULL,'2019-10-05 18:17:25','2019-10-05 18:19:22'),(18,'Тортница пластиковая GP-10 с коричневым дном',NULL,250,NULL,NULL,NULL,'2019-10-05 18:18:42','2019-10-05 18:18:42'),(19,'Тортница пластиковая GP-06 0,5 кг.',NULL,500,NULL,NULL,NULL,'2019-10-05 18:39:15','2019-10-05 18:39:15'),(20,'Тортница пластиковая GP-06 0,5 кг. дно',NULL,500,NULL,19,NULL,'2019-10-05 18:41:46','2019-10-05 18:41:46'),(21,'Тортница пластиковая GP-06 0,5 кг. крышка',NULL,500,NULL,19,NULL,'2019-10-05 18:43:17','2019-10-05 18:43:17'),(22,'Универсальная упаковка GP-02 ОПС250 \"SPAR\"',NULL,400,NULL,NULL,NULL,'2019-10-05 18:45:44','2019-10-05 18:45:44'),(23,'Универсальная упаковка GP-01 ОПС \"SPAR\"',NULL,800,NULL,NULL,NULL,'2019-10-05 18:46:28','2019-10-05 18:52:24'),(24,'Универсальная упаковка GP-02 ОПС250',NULL,400,NULL,NULL,NULL,'2019-10-05 18:53:19','2019-10-05 18:53:19'),(25,'Универсальная упаковка GP-01 ОПС',NULL,800,NULL,NULL,NULL,'2019-10-05 18:53:51','2019-10-05 18:53:51'),(26,'Универсальная упаковка GP-04U ОПС 700мл',NULL,400,NULL,NULL,NULL,'2019-10-05 18:55:27','2019-10-05 18:55:27'),(27,'Универсальная упаковка GP-04U ОПС 700мл корпус',NULL,400,NULL,26,NULL,'2019-10-05 18:57:11','2019-10-05 18:57:11'),(28,'Универсальная упаковка GP-04U ОПС 700мл крышка',NULL,400,NULL,26,NULL,'2019-10-05 19:02:36','2019-10-05 19:02:36'),(29,'Универсальная упаковка GP-04 ОПС',NULL,360,NULL,NULL,NULL,'2019-10-05 19:05:20','2019-10-05 19:05:20'),(30,'Универсальная упаковка GP-04 ОПС корпус',NULL,360,NULL,29,NULL,'2019-10-05 19:06:29','2019-10-05 19:06:29'),(31,'Универсальная упаковка GP-04 ОПС крышка',NULL,360,NULL,29,NULL,'2019-10-05 19:07:29','2019-10-05 19:07:29'),(32,'Универсальная упаковка GP-09 ОПС 500мл',NULL,480,NULL,NULL,NULL,'2019-10-05 19:08:50','2019-10-05 19:08:50'),(33,'Универсальная упаковка GP-09 ОПС 500мл крышка',NULL,480,NULL,32,NULL,'2019-10-05 19:09:39','2019-10-05 19:11:18'),(34,'Универсальная упаковка GP-09 ОПС 500мл корпус',NULL,480,NULL,32,NULL,'2019-10-05 19:10:34','2019-10-05 19:11:44'),(35,'Универсальная упаковка GP-03 ОПС 240мл',NULL,1350,NULL,NULL,NULL,'2019-10-05 19:49:33','2019-10-05 19:49:33'),(36,'Универсальная упаковка GP-03 ОПС 240мл корпус',NULL,1350,NULL,35,NULL,'2019-10-05 19:50:39','2019-10-05 19:50:39'),(37,'Универсальная упаковка GP-03 ОПС 240мл крышка',NULL,1350,NULL,35,NULL,'2019-10-05 19:51:22','2019-10-05 19:51:22'),(38,'ЛУКАС лоток 270х140х60',NULL,800,NULL,NULL,NULL,'2019-10-05 19:53:12','2019-10-05 19:53:12'),(39,'Тортница пластиковая GP-08',NULL,200,NULL,NULL,NULL,'2019-10-05 19:57:49','2019-10-05 20:03:14'),(40,'Тортница пластиковая GP-08 ПЭТ коричневый дно',NULL,200,NULL,39,NULL,'2019-10-05 19:59:19','2019-10-05 19:59:19'),(41,'Тортница пластиковая GP-08 ОПС купол',NULL,200,NULL,39,NULL,'2019-10-05 20:00:28','2019-10-05 20:00:28'),(42,'Тортница пластиковая GP-08 ПС белый дно',NULL,200,NULL,39,NULL,'2019-10-05 20:02:55','2019-10-05 20:02:55'),(43,'Лоток 310х76хh36',NULL,780,NULL,NULL,'Замовник КПФ \"Рома\"','2019-10-05 20:06:55','2019-10-05 20:06:55'),(44,'Лоток 182х136х78',NULL,300,NULL,NULL,'Замовник ТОВ КФ \"Квiтень\"','2019-10-05 20:09:44','2019-10-05 20:09:44'),(45,'Коррекс \"Грильяж\"',NULL,1500,NULL,NULL,'Замовник ХБФ','2019-10-05 20:12:25','2019-10-05 20:14:03'),(46,'Коррекс \"Прометей\"',NULL,1500,NULL,NULL,'Замовник ХБФ','2019-10-05 20:13:39','2019-10-05 20:13:39'),(47,'Коррекс \"Птичье молоко\"',NULL,1500,NULL,NULL,'Замовник ХБФ','2019-10-05 20:15:15','2019-10-05 20:15:15'),(48,'Коррекс \"Жорж\"',NULL,500,NULL,NULL,'Замовник ХБФ.  В ящике 500 комплектов.','2019-10-05 20:18:26','2019-10-05 20:18:26'),(49,'Коррекс \"Зефир неглазированный\"',NULL,1600,NULL,NULL,'Замовник ХБФ','2019-10-05 20:19:42','2019-10-05 20:19:42'),(50,'Коррекс \"Вишня АТБ\" 350г',NULL,1400,NULL,NULL,'Замовник ХБФ','2019-10-05 20:20:42','2019-10-05 20:20:42'),(51,'Коррекс \"Ассорти премиум\" 300г',NULL,1200,NULL,NULL,'Замовник ХБФ','2019-10-05 20:21:56','2019-10-05 20:21:56'),(52,'Коррекс \"Вишневый аромат мал\"',NULL,2100,NULL,NULL,'Замовник ХБФ','2019-10-05 20:22:56','2019-10-05 20:22:56'),(53,'Коррекс \"BONBON\"',NULL,1500,NULL,NULL,'Замовник ХБФ','2019-10-05 20:24:57','2019-10-05 20:24:57'),(54,'Коррекс \"Жорж классик\"',NULL,600,NULL,NULL,'Замовник ХБФ','2019-10-05 20:25:45','2019-10-05 20:25:45'),(55,'Коррекс \"Сердце Клеопатры\"',NULL,1500,NULL,NULL,'Замовник ХБФ. Дата: февраль 2017г','2019-10-05 20:27:53','2019-10-05 20:27:53'),(56,'Коррекс \"SKARLET\"',NULL,1000,NULL,NULL,'Замовник ХБФ','2019-10-05 20:29:14','2019-10-05 20:29:14'),(57,'Коррекс \"МУАР\"',NULL,1800,NULL,NULL,'Замовник ХБФ','2019-10-05 20:30:12','2019-10-05 20:30:12'),(58,'Коррекс \"VanilaDreams\"',NULL,2100,NULL,NULL,'Замовник ХБФ','2019-10-05 20:31:37','2019-10-05 20:31:37'),(59,'Коррекс  \"Черный принц\"',NULL,1400,NULL,NULL,'Замовник ХБФ','2019-10-05 20:32:31','2019-10-05 20:32:31'),(60,'Коррекс \"Стрела\"',NULL,1400,NULL,NULL,'Замовник ХБФ','2019-10-05 20:33:27','2019-10-05 20:33:27'),(61,'Коррекс \"Лимонные дольки\"',NULL,1200,NULL,NULL,'Замовник ХБФ','2019-10-05 20:34:30','2019-10-05 20:34:30'),(62,'Коррекс \"Jelly fruit slices lemon and orange flavour\"',NULL,1700,NULL,NULL,'Замовник ХБФ','2019-10-05 20:38:23','2019-10-05 20:38:23'),(63,'Коррекс \"CHERRY\" 270Х140',NULL,1500,NULL,NULL,'Замовник ХБФ','2019-10-05 20:40:22','2019-10-05 20:40:22'),(64,'Укладка 175х266х7',NULL,750,NULL,NULL,'Замовник БКК','2019-10-05 20:41:58','2019-10-05 20:56:51'),(65,'Коррекс \"Ассорти \"Доминик\"',NULL,1100,NULL,NULL,'Замовник Полтава Кондитер','2019-10-05 20:43:29','2019-10-05 20:43:29'),(66,'Коррекс \"Белочка\" 150г',NULL,1,NULL,NULL,'Замовник Полтава Кондитер','2019-10-05 20:46:54','2019-10-05 20:46:54'),(67,'Коррекс \"Белочка\" 250г',NULL,600,NULL,NULL,'Замовник Полтава Кондитер','2019-10-05 20:47:43','2019-10-05 20:48:16'),(68,'Коррекс \"Экспрессия\"',NULL,900,NULL,NULL,'Замовник Полтава Кондитер','2019-10-05 20:49:02','2019-10-05 20:49:02'),(69,'Коррекс \"CERRY 87х260\"',NULL,3000,NULL,NULL,'Замовник ХБФ','2019-10-05 20:51:03','2019-10-05 20:51:18'),(70,'Коррекс\"Вишня пяигранная\"',NULL,900,NULL,NULL,'Замовник Полтава Кондитер','2019-10-05 20:54:41','2019-10-05 20:54:56'),(71,'Коррекс  \"Ваф труб МАРИЯ\"',NULL,3000,NULL,NULL,'Замовник ДН \"КЛАССИК\"','2019-10-05 20:58:45','2019-10-05 20:58:45'),(72,'Коррекс \"Old collection\" 320г',NULL,600,NULL,NULL,'Замовник ХБФ','2019-10-05 21:00:37','2019-10-05 21:02:43'),(73,'Коррекс \"Old collection\" 320г крышка',NULL,600,NULL,72,'Замовник ХБФ','2019-10-05 21:02:27','2019-10-05 21:02:27'),(74,'Коррекс \"Old collection\" 320г дно',NULL,600,NULL,72,'Замовник ХБФ','2019-10-05 21:03:50','2019-10-05 21:03:50'),(75,'Коррекс \"BELISSIMO\"',NULL,3000,NULL,NULL,'Замовник ЧАО  \"ПО \"КОНТИ\"','2019-10-05 21:06:48','2019-10-05 21:06:48'),(76,'Коррекс \"Зефир в шоколаде\"',NULL,800,NULL,NULL,'Замовник ХБФ','2019-10-05 21:08:13','2019-10-05 21:08:13'),(77,'Коррекс \"Ассорти прем\" 300г NEW',NULL,1400,NULL,NULL,'Замовник ХБФ','2019-10-05 21:11:11','2019-10-05 21:11:11'),(78,'Коррекс \"Ассорти прем\" 200г',NULL,2400,NULL,NULL,'Замовник ХБФ','2019-10-05 21:12:42','2019-10-05 21:12:42'),(79,'Коррекс \"Трюфель\"',NULL,2250,NULL,NULL,'Замовник БКК','2019-10-05 21:13:54','2019-10-05 21:13:54'),(80,'Коррекс ЛУБ 260г',NULL,900,NULL,NULL,'Замовник ЗАО \"Житомирськi Ласощi\"','2019-10-20 18:57:21','2019-10-20 19:01:50'),(81,'Коррекс ЛУБ 400г',NULL,500,NULL,NULL,'Замовник ЗАО \"Житомирськi Ласощi\"','2019-10-20 19:02:49','2019-10-20 19:03:14'),(82,'Мармелад 16',NULL,2500,NULL,NULL,NULL,'2019-10-20 19:11:23','2019-10-20 19:11:23'),(83,'Мармелад 19',NULL,2500,NULL,NULL,NULL,'2019-10-20 19:12:31','2019-10-20 19:12:31'),(84,'Лоток яйцо \"Хто там\" 22г',NULL,600,NULL,NULL,'Замовник \"Полтава Кондитер\"','2019-10-20 19:20:14','2019-10-21 15:19:31'),(85,'Шоколаднi фiгурки',NULL,1200,NULL,NULL,'Замовник ООО \"ДН Класик\"','2019-10-20 19:44:04','2019-10-20 19:44:04'),(86,'Коррекс Вишня',NULL,1800,NULL,NULL,'Замовник ЗАО \"Житомирськi Ласощi\"','2019-10-21 14:28:26','2019-10-21 14:28:26'),(87,'Вафельные трубочки 14шт/144г',NULL,1200,NULL,NULL,NULL,'2019-10-21 14:56:33','2019-10-21 14:56:33');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock` (
  `product_id` int(10) unsigned NOT NULL,
  `partition` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `count` int(10) unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `stock_product_id_index` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,NULL,NULL,0,NULL,NULL),(2,NULL,NULL,0,NULL,NULL),(3,NULL,NULL,0,NULL,NULL),(4,NULL,NULL,22400,NULL,'2019-10-20 19:33:20'),(5,NULL,NULL,0,NULL,NULL),(6,NULL,NULL,0,NULL,NULL),(7,NULL,NULL,0,NULL,NULL),(9,NULL,NULL,0,NULL,NULL),(10,NULL,NULL,0,NULL,NULL),(11,NULL,NULL,0,NULL,NULL),(12,NULL,NULL,0,NULL,NULL),(13,NULL,NULL,0,NULL,NULL),(14,NULL,NULL,0,NULL,NULL),(15,NULL,NULL,0,NULL,NULL),(16,NULL,NULL,0,NULL,NULL),(17,NULL,NULL,0,NULL,NULL),(18,NULL,NULL,0,NULL,NULL),(19,NULL,NULL,0,NULL,NULL),(20,NULL,NULL,0,NULL,NULL),(21,NULL,NULL,0,NULL,NULL),(22,NULL,NULL,0,NULL,NULL),(23,NULL,NULL,0,NULL,NULL),(24,NULL,NULL,0,NULL,NULL),(25,NULL,NULL,0,NULL,NULL),(26,NULL,NULL,0,NULL,NULL),(28,NULL,NULL,36800,NULL,'2019-10-20 19:31:36'),(29,NULL,NULL,0,NULL,NULL),(30,NULL,NULL,0,NULL,NULL),(31,NULL,NULL,720,NULL,'2019-10-20 19:37:10'),(32,NULL,NULL,0,NULL,NULL),(33,NULL,NULL,28320,NULL,'2019-10-20 19:17:59'),(34,NULL,NULL,17760,NULL,'2019-10-21 14:21:22'),(35,NULL,NULL,0,NULL,NULL),(36,NULL,NULL,0,NULL,NULL),(37,NULL,NULL,0,NULL,NULL),(39,NULL,NULL,0,NULL,NULL),(40,NULL,NULL,0,NULL,NULL),(41,NULL,NULL,0,NULL,NULL),(42,NULL,NULL,0,NULL,NULL),(43,NULL,NULL,37440,NULL,'2019-10-20 19:56:31'),(45,NULL,NULL,6000,NULL,'2019-10-20 20:21:16'),(46,NULL,NULL,12000,NULL,'2019-10-20 20:10:47'),(47,NULL,NULL,33000,NULL,'2019-10-20 20:20:20'),(48,NULL,NULL,11500,NULL,'2019-10-20 20:12:43'),(49,NULL,NULL,17600,NULL,'2019-10-20 20:01:55'),(50,NULL,NULL,5600,NULL,'2019-10-20 20:13:37'),(51,NULL,NULL,0,NULL,NULL),(52,NULL,NULL,71400,NULL,'2019-10-20 20:16:21'),(8,NULL,NULL,500,NULL,'2019-10-07 18:24:41'),(54,NULL,NULL,1200,NULL,'2019-10-21 14:58:21'),(55,NULL,NULL,9000,NULL,'2019-10-20 20:24:43'),(56,NULL,NULL,19000,NULL,'2019-10-21 14:54:55'),(57,NULL,NULL,36000,NULL,'2019-10-20 20:26:00'),(58,NULL,NULL,21000,NULL,'2019-10-20 20:26:54'),(59,NULL,NULL,11200,NULL,'2019-10-20 20:27:36'),(60,NULL,NULL,9800,NULL,'2019-10-20 20:28:12'),(61,NULL,NULL,27600,NULL,'2019-10-20 20:28:51'),(62,NULL,NULL,0,NULL,NULL),(63,NULL,NULL,57000,NULL,'2019-10-20 20:31:39'),(64,NULL,NULL,11250,NULL,'2019-10-20 20:29:59'),(65,NULL,NULL,0,NULL,NULL),(66,NULL,NULL,0,NULL,NULL),(67,NULL,NULL,0,NULL,NULL),(68,NULL,NULL,0,NULL,NULL),(69,NULL,NULL,0,NULL,NULL),(70,NULL,NULL,0,NULL,NULL),(71,NULL,NULL,141000,NULL,'2019-10-20 20:06:33'),(72,NULL,NULL,0,NULL,NULL),(73,NULL,NULL,7200,NULL,'2019-10-20 20:18:27'),(74,NULL,NULL,7200,NULL,'2019-10-20 20:19:27'),(76,NULL,NULL,8000,NULL,'2019-10-20 20:30:39'),(77,NULL,NULL,18200,NULL,'2019-10-20 20:15:36'),(80,NULL,NULL,5000,NULL,'2019-10-20 19:55:00'),(81,NULL,NULL,5000,NULL,'2019-10-20 19:39:17'),(82,NULL,NULL,10000,NULL,'2019-10-20 19:58:56'),(83,NULL,NULL,0,NULL,NULL),(84,NULL,NULL,12000,NULL,'2019-10-20 19:25:30'),(85,NULL,NULL,22800,NULL,'2019-10-21 14:53:48'),(86,NULL,NULL,11000,NULL,'2019-10-21 14:50:55'),(87,NULL,NULL,2400,NULL,'2019-10-21 14:57:38'),(88,NULL,NULL,0,NULL,NULL),(89,NULL,NULL,0,NULL,NULL),(90,NULL,NULL,0,NULL,NULL),(91,NULL,NULL,0,NULL,NULL),(92,NULL,NULL,0,NULL,NULL),(93,NULL,NULL,0,NULL,NULL),(94,NULL,NULL,0,NULL,NULL),(95,NULL,NULL,0,NULL,NULL),(96,NULL,NULL,0,NULL,NULL),(97,NULL,NULL,0,NULL,NULL),(98,NULL,NULL,0,NULL,NULL),(99,NULL,NULL,0,NULL,NULL),(100,NULL,NULL,0,NULL,NULL),(101,NULL,NULL,0,NULL,NULL),(102,NULL,NULL,0,NULL,NULL),(103,NULL,NULL,0,NULL,NULL),(104,NULL,NULL,0,NULL,NULL),(105,NULL,NULL,0,NULL,NULL),(106,NULL,NULL,0,NULL,NULL),(107,NULL,NULL,0,NULL,NULL),(108,NULL,NULL,0,NULL,NULL),(109,NULL,NULL,0,NULL,NULL),(110,NULL,NULL,0,NULL,NULL),(111,NULL,NULL,0,NULL,NULL),(112,NULL,NULL,0,NULL,NULL),(113,NULL,NULL,0,NULL,NULL),(114,NULL,NULL,0,NULL,NULL),(115,NULL,NULL,0,NULL,NULL),(116,NULL,NULL,0,NULL,NULL),(117,NULL,NULL,0,NULL,NULL),(118,NULL,NULL,0,NULL,NULL),(119,NULL,NULL,0,NULL,NULL),(120,NULL,NULL,0,NULL,NULL),(75,NULL,NULL,189000,NULL,'2019-10-08 18:03:49'),(53,NULL,NULL,117000,NULL,'2019-10-20 20:17:12'),(78,NULL,NULL,50200,NULL,'2019-10-20 20:23:11'),(27,NULL,NULL,40400,NULL,'2019-10-21 14:22:33'),(44,NULL,NULL,59400,NULL,'2019-10-08 19:26:45'),(38,NULL,NULL,44800,NULL,'2019-10-20 19:09:36'),(79,NULL,NULL,56250,NULL,'2019-10-21 14:52:55');
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'root@gmail.com','root','$2y$10$CnURhubMJVkC8Fr/sVS12ul1mjuZSbdmWrMjLzELd5z6E.o.T2T72','6CiDE2oHjufIDN6wzw7VTqkB4jxZr2BSrJ5Aw6OHBZb6iU0bTYBWGoRSdVTz',NULL,'2019-10-05 16:31:13','2019-10-05 16:31:13'),(2,'admin@gmail.com','admin','$2y$10$kxsQ/K/QN4LxC1Ec4G2xQuqQI4cb/kyqBOA2K3Lp1h.D8.Et0XTZW','MbgS5lkVHZ',NULL,'2019-10-05 16:31:13','2019-10-05 16:31:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-21 18:41:13
