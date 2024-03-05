-- MySQL dump 10.13  Distrib 5.7.40, for Linux (x86_64)
--
-- Host: localhost    Database: portal
-- ------------------------------------------------------
-- Server version	5.7.40-log

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
-- Table structure for table `app_visits`
--

DROP TABLE IF EXISTS `app_visits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_visits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` int(11) NOT NULL,
  `visitor` int(11) NOT NULL,
  `uri` varchar(300) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_visits`
--

LOCK TABLES `app_visits` WRITE;
/*!40000 ALTER TABLE `app_visits` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_visits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apps`
--

DROP TABLE IF EXISTS `apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT '',
  `type` char(50) DEFAULT '',
  `path` char(50) DEFAULT '',
  `description` text,
  `banner` text,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apps`
--

LOCK TABLES `apps` WRITE;
/*!40000 ALTER TABLE `apps` DISABLE KEYS */;
INSERT INTO `apps` VALUES (1,'GCF LMS','app','gcf','GCFGLobal - The freedom to learn what you want, when you want, absolutely free! Check out our Everyday Life, Basic Math, and Computer Training today!','/upload/apps/16393836734080.jpg','2021-11-16 06:42:37'),(5,'OLPC','rep','olpc','OLPC delivers an educational ecosystem to create innovative learning experiences which enable children around the world to build their knowledge and encourage individual empowerment.\r\n\r\nOLPC implements its educational solutions through governments, private sector and Non-Profit organizations in schools, communities and even in mobile learning centers to promote new channels of learning, sharing and self-expression through digital technology.\r\n\r\nOLPC is more than a laptop. We are a social transformation program through learning.','/upload/apps/164129905668582.jfif','2022-01-04 12:24:16'),(7,'W3 Schools','app','w3schools','W3Schools is a freemium educational website for learning coding online. Developed in 1998, it derives its name from the World Wide Web but is not affiliated with the W3C. W3Schools offers courses covering all aspects of web development. It is run by Refsnes Data in Norway','/upload/apps/164508609074672.jpg','2022-02-17 08:21:29'),(8,'Rachel','rep','rachel','RACHEL (Remote Area Community Hotspot for Education and Learning) is a portable, battery-powered, device that contains copies of educational websites in offline format. This means RACHEL can go anywhere in the world and wirelessly deliver free digital educational content to nearby tablets, laptops, or smartphones with no internet or data plans required. RACHEL has been taken to over 53 countries since its creation, serving students in rural villages, townships, and even prisons.','/upload/apps/164611928288386.jpg','2022-03-01 07:21:22'),(9,'Snap','app','snap','Snap! is a blocks-based programming language built by UC Berkeley and used by hundrends of thousands of programmers around the world.','/upload/apps/164612394854270.png','2022-03-01 08:39:08'),(10,'Math Expression','rep','rachel/MathExpression/index.html','In maths, an expression is a combination of numbers, variables, functions (such as addition, subtraction, multiplication or division etc.) Expressions can be thought of as similar to phrases. In language, a phrase on its own may include an action, but it doesn\'t make a complete sentence','/upload/apps/164769330318601.png','2022-03-19 12:35:03');
/*!40000 ALTER TABLE `apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'Grade I'),(2,'Grade II'),(3,'Grade III'),(4,'Grade IV'),(5,'Grade V'),(6,'Grade VI'),(7,'Grade VII'),(8,'Grade VIII'),(9,'Form 1'),(10,'Form 2'),(11,'Form 3'),(12,'Form 4'),(13,'Form 5'),(14,'Form 6'),(999,'All');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` int(11) NOT NULL,
  `school` varchar(100) NOT NULL DEFAULT '',
  `category` varchar(100) NOT NULL DEFAULT '',
  `ownership` varchar(100) NOT NULL DEFAULT '',
  `region` varchar(100) NOT NULL DEFAULT '',
  `country` varchar(100) NOT NULL DEFAULT '',
  `last` varchar(50) DEFAULT '0,0,0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'Moshi Technical','secondary','public','Kilimanjaro','Tanzania','222');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `title` text NOT NULL,
  `desc` text NOT NULL,
  `cid` int(11) NOT NULL DEFAULT '0',
  `sid` int(11) NOT NULL DEFAULT '0',
  `cover` text NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doc_views`
--

DROP TABLE IF EXISTS `doc_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doc_views` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `doc_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sess_id` varchar(50) NOT NULL DEFAULT '',
  `pages` varchar(50) NOT NULL DEFAULT '',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `doc_id_user_id_sess_id` (`doc_id`,`user_id`,`sess_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doc_views`
--

LOCK TABLES `doc_views` WRITE;
/*!40000 ALTER TABLE `doc_views` DISABLE KEYS */;
/*!40000 ALTER TABLE `doc_views` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `document` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `class` text NOT NULL,
  `thumbnail` varchar(150) NOT NULL,
  `source` varchar(150) NOT NULL,
  `category` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document`
--

LOCK TABLES `document` WRITE;
/*!40000 ALTER TABLE `document` DISABLE KEYS */;
INSERT INTO `document` VALUES (1,'Thinking Fast and Slow','System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacationâ€•each of these can be understood only by knowing how the two systems shape our judgments and decisions.\r\n\r\nEngaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal livesâ€•and how we can use different techniques to guard against the mental glitches that often get us into trouble. Topping bestseller lists for almost ten years, Thinking, Fast and Slow is a contemporary classic, an essential book that has changed the lives of millions of readers.','999','/upload/docs/cover/163652063478629.webp','/upload/docs/source/163652063470700.pdf',6,2,'2022-02-28 15:09:46','2021-11-10 08:03:53'),(2,'HTML, CSS, Bootstrap, JavaScript and JQuery','Anyone can learn to code, just like anyone can learn a new language. In fact, programming is kind of like speaking a foreign language -- which is exactly why they\'re called programming languages. Each one has its own rules and syntax that need to be learned step by step. Those rules are ways to tell your computer what to do. More specifically, in web programming, they\'re ways of telling your browsers what to do.\r\n\r\nThe goal of this post is to, in plain English, teach you with the basics of HTML, CSS, and one of the most common programming languages, JavaScript.','999','/upload/docs/cover/163652154156322.png','/upload/docs/source/163652154117789.pdf',6,2,'2022-02-28 15:09:53','2021-11-10 08:19:00'),(3,'Database Fundamentals','Keeping your skills current in today\'s world is becoming increasingly challenging. There are too many new technologies being developed, and little time to learn them all. The DB2Â® on Campus Book Series has been developed to minimize the time and effort required to learn many of these new technologies.\r\nThis book helps new database professionals understand database concepts with the right blend of breadth and depth of information.','990','/upload/docs/cover/163652177019783.png','/upload/docs/source/163652177015803.pdf',6,2,'2022-02-28 15:09:57','2021-11-10 08:22:49'),(4,'Atomic Habits','Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones, This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.','999','/upload/docs/cover/163827519183739.png','/upload/docs/source/16382751918646.pdf',6,2,'2021-11-30 15:26:30','2021-11-30 15:26:30'),(5,'Biology form 1','Biology is the science that deals with the study of living things. The word Biology is derived from two Greek words, Bios which means Life, and logos which means study of. Thus biology is a study of life and living organisms','9','/upload/docs/cover/164509132112651.jpg','/upload/docs/source/164509132178459.pdf',7,2,'2022-02-17 12:48:41','2022-02-17 12:48:41'),(6,'Biology Form 2','Biology is the science that deals with the study of living things. The word Biology is derived from two Greek words, Bios which means Life, and logos which means study of. Thus biology is a study of life and living organisms','10','/upload/docs/cover/164509293132335.jpg','/upload/docs/source/16450929311510.pdf',7,2,'2022-02-17 13:15:30','2022-02-17 13:15:30'),(7,'Biology Form 3','','11','/upload/docs/cover/164542670927225.jpg','	\r\n/upload/docs/source/164542670916585.pdf\r\n',7,2,'2022-02-21 10:04:21','2022-02-21 09:47:04'),(9,'Biology Form 4','Biology is derived from two Greek words, that is, bios which means life and logos or logia which means study or knowledge. Aspects of biological science range from the study of molecular mechanisms in cells, to the classification and behavior of organisms, how species evolve and the interaction of ecosystems. Biology often overlaps with other related applied and natural sciences such as agriculture, medicine, physics, chemistry, and astronomy. Biology, therefore, refers to the study of life.','12','/upload/docs/cover/164542670927225.jpg','/upload/docs/source/164542670916585.pdf',7,2,'2022-02-21 09:58:29','2022-02-21 09:58:29'),(10,'Book keeping Form 1','Bookkeeping is the recording, on a day-to-day basis, of the financial transactions and information pertaining to a business. It ensures that records of the individual financial transactions are correct, up-to-date and comprehensive. Accuracy is therefore vital to the process.','9','/upload/docs/cover/164542686554820.png','/upload/docs/source/16454268654599.pdf',9,2,'2022-02-21 10:01:04','2022-02-21 10:01:04'),(11,'Book keeping Form 2','Bookkeeping is the recording, on a day-to-day basis, of the financial transactions and information pertaining to a business. It ensures that records of the individual financial transactions are correct, up-to-date and comprehensive. Accuracy is therefore vital to the process.','10','/upload/docs/cover/164542713034470.png','/upload/docs/source/164542713050363.pdf',9,2,'2022-02-21 10:05:43','2022-02-21 10:05:29'),(12,'Book Keeping Form 3','Bookkeeping is the recording, on a day-to-day basis, of the financial transactions and information pertaining to a business. It ensures that records of the individual financial transactions are correct, up-to-date and comprehensive. Accuracy is therefore vital to the process.','11','/upload/docs/cover/164542719994317.png','/upload/docs/source/164542719987757.pdf',9,2,'2022-02-21 10:06:39','2022-02-21 10:06:39'),(13,'Book Keeping Form 4','Bookkeeping is the recording, on a day-to-day basis, of the financial transactions and information pertaining to a business. It ensures that records of the individual financial transactions are correct, up-to-date and comprehensive. Accuracy is therefore vital to the process.','12','/upload/docs/cover/164542724449723.png','/upload/docs/source/164542724416945.pdf',9,2,'2022-02-21 10:07:23','2022-02-21 10:07:23'),(14,'Chemistry Form 1','Chemistry is all around us. Did you know that everything is made out of chemicals? Any reaction taking place in body cells of all living and non living organisms correlates with chemistry. In chemistry we study materials that make up the earth and universe. Chemistry is sometimes called the central science because it bridges other natural sciences, including physics, geology and biology. Therefore, when talking about chemistry, we are referring to life on Earth.','9','/upload/docs/cover/164542734377458.png','/upload/docs/source/164542734375700.pdf',4,2,'2022-02-21 10:09:02','2022-02-21 10:09:02'),(15,'Chemistry Form 2','Chemistry is all around us. Did you know that everything is made out of chemicals? Any reaction taking place in body cells of all living and non living organisms correlates with chemistry. In chemistry we study materials that make up the earth and universe. Chemistry is sometimes called the central science because it bridges other natural sciences, including physics, geology and biology. Therefore, when talking about chemistry, we are referring to life on Earth.','10','/upload/docs/cover/164542742624012.png','/upload/docs/source/164542742650997.pdf',4,2,'2022-02-21 10:10:26','2022-02-21 10:10:26'),(16,'Chemistry Form 3','Chemistry is all around us. Did you know that everything is made out of chemicals? Any reaction taking place in body cells of all living and non living organisms correlates with chemistry. In chemistry we study materials that make up the earth and universe. Chemistry is sometimes called the central science because it bridges other natural sciences, including physics, geology and biology. Therefore, when talking about chemistry, we are referring to life on Earth.','11','/upload/docs/cover/164542747310875.png','/upload/docs/source/164542747386848.pdf',4,2,'2022-02-21 10:11:13','2022-02-21 10:11:13'),(17,'Chemistry Form 4','Chemistry is all around us. Did you know that everything is made out of chemicals? Any reaction taking place in body cells of all living and non living organisms correlates with chemistry. In chemistry we study materials that make up the earth and universe. Chemistry is sometimes called the central science because it bridges other natural sciences, including physics, geology and biology. Therefore, when talking about chemistry, we are referring to life on Earth.','12','/upload/docs/cover/164542750584948.png','/upload/docs/source/164542750579323.pdf',4,2,'2022-02-21 10:11:44','2022-02-21 10:11:44'),(18,'Civics Form 1','Civics is the study of theoretical and practical aspects of citizenship, their rights and duties to each other and to the Government. It involves the study of people’s way of life including political and cultural aspects such as education processes, religion, election processes, customs and language. It aims at providing people with important skills like leadership skills among many others. Civics is all about people’s political, social and cultural life.','9','/upload/docs/cover/16454275656506.png','/upload/docs/source/164542756572626.pdf',17,2,'2022-02-21 10:12:45','2022-02-21 10:12:45'),(19,'Civics Form 2','Civics is the study of theoretical and practical aspects of citizenship, their rights and duties to each other and to the Government. It involves the study of people’s way of life including political and cultural aspects such as education processes, religion, election processes, customs and language. It aims at providing people with important skills like leadership skills among many others. Civics is all about people’s political, social and cultural life.','10','/upload/docs/cover/164542760744870.png','/upload/docs/source/164542760766064.pdf',17,2,'2022-02-21 10:13:26','2022-02-21 10:13:26'),(21,'Civics Form 3','Civics is the study of theoretical and practical aspects of citizenship, their rights and duties to each other and to the Government. It involves the study of people’s way of life including political and cultural aspects such as education processes, religion, election processes, customs and language. It aims at providing people with important skills like leadership skills among many others. Civics is all about people’s political, social and cultural life.','11','/upload/docs/cover/164542771264439.png','/upload/docs/source/164542771299571.pdf',17,2,'2022-02-21 10:15:12','2022-02-21 10:15:12'),(23,'Civics Form 4','Civics is the study of theoretical and practical aspects of citizenship, their rights and duties to each other and to the Government. It involves the study of people’s way of life including political and cultural aspects such as education processes, religion, election processes, customs and language. It aims at providing people with important skills like leadership skills among many others. Civics is all about people’s political, social and cultural life.','12','/upload/docs/cover/164542779013507.png','/upload/docs/source/164542779067464.pdf',17,2,'2022-02-21 10:16:29','2022-02-21 10:16:29'),(26,'Commerce Form 3','Commerce is the conduct of trade amongst economic agents. Generally, commerce refers to the exchange of goods, services or something of value, between businesses or entities. From a broad perspective, nations are concerned with managing commerce in a way that enhances the well-being of citizens, by providing jobs and producing beneficial goods and services.','11','/upload/docs/cover/164542796523282.png','/upload/docs/source/164542796554780.pdf',8,2,'2022-02-21 10:19:24','2022-02-21 10:19:24'),(27,'Commerce Form 4','Commerce is the conduct of trade amongst economic agents. Generally, commerce refers to the exchange of goods, services or something of value, between businesses or entities. From a broad perspective, nations are concerned with managing commerce in a way that enhances the well-being of citizens, by providing jobs and producing beneficial goods and services.','12','/upload/docs/cover/164542808220341.png','/upload/docs/source/164542808249344.pdf',8,2,'2022-02-21 10:21:22','2022-02-21 10:21:22'),(28,'Geograpy Form 1','Geography is the study of places and the relationship between people and their environment. Geographers explore both the physical properties of the Earth\'s surface and the human societies spread across it. In the context of dynamic and changing world, it is very crucial to study Geography so as to be able to achieve sustainable human development.','9','/upload/docs/cover/16454282936122.png','/upload/docs/source/16454282939476.pdf',18,2,'2022-02-21 10:24:53','2022-02-21 10:24:53'),(29,'Geography Form 2','Geography is the study of places and the relationship between people and their environment. Geographers explore both the physical properties of the Earth\'s surface and the human societies spread across it. In the context of dynamic and changing world, it is very crucial to study Geography so as to be able to achieve sustainable human development.','10','/upload/docs/cover/164542836035361.png','/upload/docs/source/164542836097603.pdf',18,2,'2022-02-21 10:25:59','2022-02-21 10:25:59'),(30,'Geography Form 3','Geography is the study of places and the relationship between people and their environment. Geographers explore both the physical properties of the Earth\'s surface and the human societies spread across it. In the context of dynamic and changing world, it is very crucial to study Geography so as to be able to achieve sustainable human development.','11','/upload/docs/cover/16454284324339.png','/upload/docs/source/164542843278150.pdf',18,2,'2022-02-21 10:27:12','2022-02-21 10:27:12'),(31,'Geography Form 4','Geography is the study of places and the relationship between people and their environment. Geographers explore both the physical properties of the Earth\'s surface and the human societies spread across it. In the context of dynamic and changing world, it is very crucial to study Geography so as to be able to achieve sustainable human development.','12','/upload/docs/cover/164542851573922.png','/upload/docs/source/164542851549230.pdf',18,2,'2022-02-21 10:28:35','2022-02-21 10:28:35'),(32,'English Form 1','English Language is a course taught in both primary and secondary schools in Tanzania. There are various topics taught in English Language with an intention of sharpening listening skills, speaking skills, reading skills and writing skills of the learners. The four skills are essential for teaching and learning in other subjects as well as communication in general.','','/upload/docs/cover/164542867894616.png','/upload/docs/source/164542867832287.pdf',2,2,'2022-02-21 10:31:18','2022-02-21 10:31:18'),(33,'English Form 2','English Language is a course taught in both primary and secondary schools in Tanzania. There are various topics taught in English Language with an intention of sharpening listening skills, speaking skills, reading skills and writing skills of the learners. The four skills are essential for teaching and learning in other subjects as well as communication in general.','10','/upload/docs/cover/164542871985827.png','/upload/docs/source/164542871998702.pdf',2,2,'2022-02-21 10:31:58','2022-02-21 10:31:58'),(34,'English Form 3','English Language is a course taught in both primary and secondary schools in Tanzania. There are various topics taught in English Language with an intention of sharpening listening skills, speaking skills, reading skills and writing skills of the learners. The four skills are essential for teaching and learning in other subjects as well as communication in general.','11','/upload/docs/cover/164542875785435.png','/upload/docs/source/164542875771872.pdf',2,2,'2022-02-21 10:32:37','2022-02-21 10:32:37'),(35,'English Form 4','English Language is a course taught in both primary and secondary schools in Tanzania. There are various topics taught in English Language with an intention of sharpening listening skills, speaking skills, reading skills and writing skills of the learners. The four skills are essential for teaching and learning in other subjects as well as communication in general.','12','/upload/docs/cover/164542882432976.png','/upload/docs/source/164542882471524.pdf',2,2,'2022-02-21 10:33:44','2022-02-21 10:33:44'),(36,'History Form 1','History is a study of past, present and future events of a particular period, country or subject pertaining to human activities. Generally, history is all about studying the past events to understand the present situation in order to predict the future events.','','/upload/docs/cover/164542889714673.png','/upload/docs/source/164542889737904.pdf',5,2,'2022-02-21 10:34:57','2022-02-21 10:34:57'),(37,'History Form 2','History is a study of past, present and future events of a particular period, country or subject pertaining to human activities. Generally, history is all about studying the past events to understand the present situation in order to predict the future events.','10','/upload/docs/cover/164542894762708.png','/upload/docs/source/164542894720044.pdf',5,2,'2022-02-21 10:35:47','2022-02-21 10:35:47'),(38,'History Form 3','History is a study of past, present and future events of a particular period, country or subject pertaining to human activities. Generally, history is all about studying the past events to understand the present situation in order to predict the future events.','11','/upload/docs/cover/164542898138669.png','/upload/docs/source/164542898139796.pdf',5,2,'2022-02-21 10:36:20','2022-02-21 10:36:20'),(39,'History Form 4','History is a study of past, present and future events of a particular period, country or subject pertaining to human activities. Generally, history is all about studying the past events to understand the present situation in order to predict the future events.','12','/upload/docs/cover/164542901673050.png','/upload/docs/source/164542901625523.pdf',5,2,'2022-02-21 10:36:56','2022-02-21 10:36:56'),(40,'Kiswahili Form 1','Kiswahili ni Lugha ya kibantu; inatumika kama lugha ya taifa au rasmi katika baadhi ya mataifa ya Afrika Mashariki na Kati kama vile Tanzania, DRC, Kenya, Burundi, Rwanda na Uganda. Hadi hivi sasa lugha ya Kiswahili inakadiriwa kuzungumzwa na watu zaidi ya milioni 60 duniani kote. Mataifa mengine ya Afrika yanayozungumza Kiswahili ni pamoja na Comoro, Zambia, Malawi na Msumbiji. Kiswahili pia kinazungumzwa katika baadhi ya nchi za Kiarabu kama vile Yemen, UAE n.k','9','/upload/docs/cover/164542908020894.png','/upload/docs/source/164542908045698.pdf',12,2,'2022-02-21 10:37:59','2022-02-21 10:37:59'),(41,'Kiswahili Form 2','Kiswahili ni Lugha ya kibantu; inatumika kama lugha ya taifa au rasmi katika baadhi ya mataifa ya Afrika Mashariki na Kati kama vile Tanzania, DRC, Kenya, Burundi, Rwanda na Uganda. Hadi hivi sasa lugha ya Kiswahili inakadiriwa kuzungumzwa na watu zaidi ya milioni 60 duniani kote. Mataifa mengine ya Afrika yanayozungumza Kiswahili ni pamoja na Comoro, Zambia, Malawi na Msumbiji. Kiswahili pia kinazungumzwa katika baadhi ya nchi za Kiarabu kama vile Yemen, UAE n.k','10','/upload/docs/cover/164542910825268.png','/upload/docs/source/164542910847031.pdf',12,2,'2022-02-21 10:38:27','2022-02-21 10:38:27'),(42,'Kiswahili Form 3','Kiswahili ni Lugha ya kibantu; inatumika kama lugha ya taifa au rasmi katika baadhi ya mataifa ya Afrika Mashariki na Kati kama vile Tanzania, DRC, Kenya, Burundi, Rwanda na Uganda. Hadi hivi sasa lugha ya Kiswahili inakadiriwa kuzungumzwa na watu zaidi ya milioni 60 duniani kote. Mataifa mengine ya Afrika yanayozungumza Kiswahili ni pamoja na Comoro, Zambia, Malawi na Msumbiji. Kiswahili pia kinazungumzwa katika baadhi ya nchi za Kiarabu kama vile Yemen, UAE n.k','11','/upload/docs/cover/164542914097957.png','/upload/docs/source/164542914096916.pdf',12,2,'2022-02-21 10:39:00','2022-02-21 10:39:00'),(43,'Kiswahili Form 4','Kiswahili ni Lugha ya kibantu; inatumika kama lugha ya taifa au rasmi katika baadhi ya mataifa ya Afrika Mashariki na Kati kama vile Tanzania, DRC, Kenya, Burundi, Rwanda na Uganda. Hadi hivi sasa lugha ya Kiswahili inakadiriwa kuzungumzwa na watu zaidi ya milioni 60 duniani kote. Mataifa mengine ya Afrika yanayozungumza Kiswahili ni pamoja na Comoro, Zambia, Malawi na Msumbiji. Kiswahili pia kinazungumzwa katika baadhi ya nchi za Kiarabu kama vile Yemen, UAE n.k','12','/upload/docs/cover/164542917049960.png','/upload/docs/source/164542917054183.pdf',12,2,'2022-02-21 10:39:30','2022-02-21 10:39:30'),(44,'Mathematics Form 1','A group of related sciences, including algebra, geometry, and calculus, concerned with the study of number, quantity, shape, and space and their interrelationships by using a specialized notation','9','/upload/docs/cover/164542998326294.png','/upload/docs/source/164542998319689.pdf',10,2,'2022-02-21 10:53:02','2022-02-21 10:53:02'),(45,'Mathematics Form 2','A group of related sciences, including algebra, geometry, and calculus, concerned with the study of number, quantity, shape, and space and their interrelationships by using a specialized notation','10','/upload/docs/cover/164543005227676.png','/upload/docs/source/164543005220837.pdf',10,2,'2022-02-21 10:54:11','2022-02-21 10:54:11'),(46,'Mathematics Form 3','A group of related sciences, including algebra, geometry, and calculus, concerned with the study of number, quantity, shape, and space and their interrelationships by using a specialized notation','11','/upload/docs/cover/164543023967107.png','/upload/docs/source/16454302395831.pdf',10,2,'2022-02-21 10:57:18','2022-02-21 10:57:18'),(47,'Mathematics Form 4','A group of related sciences, including algebra, geometry, and calculus, concerned with the study of number, quantity, shape, and space and their interrelationships by using a specialized notation','12','/upload/docs/cover/164543005227676.png','/upload/docs/source/164543028214212.pdf',10,2,'2022-02-21 10:59:07','2022-02-21 10:58:02'),(48,'Physics Form 1','Physics is one of the branches of Science that investigates and explains about the several aspects of nature and how nature behaves differently. It involves the study of interactions between matter and energy. It uses the concepts like forces, energy, mass and motion to explain how things happen around us. Physics uses measurement and experimental procedures to test the observations so as to come up with desired results.','9','/upload/docs/cover/164543041624874.png','/upload/docs/source/164543041617631.pdf',1,2,'2022-02-21 11:01:24','2022-02-21 11:00:15'),(49,'Physics Form 2','Physics is one of the branches of Science that investigates and explains about the several aspects of nature and how nature behaves differently. It involves the study of interactions between matter and energy. It uses the concepts like forces, energy, mass and motion to explain how things happen around us. Physics uses measurement and experimental procedures to test the observations so as to come up with desired results.','10','/upload/docs/cover/164543046729953.png','/upload/docs/source/164543046743394.pdf',1,2,'2022-02-21 11:01:31','2022-02-21 11:01:07'),(50,'Physics Form 3','Physics is one of the branches of Science that investigates and explains about the several aspects of nature and how nature behaves differently. It involves the study of interactions between matter and energy. It uses the concepts like forces, energy, mass and motion to explain how things happen around us. Physics uses measurement and experimental procedures to test the observations so as to come up with desired results.','11','/upload/docs/cover/164543055684831.png','/upload/docs/source/164543055660154.pdf',1,2,'2022-02-21 11:02:36','2022-02-21 11:02:36'),(51,'Physics Form 4','Physics is one of the branches of Science that investigates and explains about the several aspects of nature and how nature behaves differently. It involves the study of interactions between matter and energy. It uses the concepts like forces, energy, mass and motion to explain how things happen around us. Physics uses measurement and experimental procedures to test the observations so as to come up with desired results.','12','/upload/docs/cover/164543058985643.png','/upload/docs/source/164543058930711.pdf',1,2,'2022-02-21 11:03:09','2022-02-21 11:03:09'),(52,'Kenya Sec School Curriculum','Kenya Curriculum Framework for all grades.','','/upload/docs/cover/16475796381497.jpeg','/upload/docs/source/164757963841161.pdf',6,2,'2022-03-18 08:00:38','2022-03-18 08:00:38');
/*!40000 ALTER TABLE `document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dropbox`
--

DROP TABLE IF EXISTS `dropbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dropbox` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `path` text NOT NULL,
  `type` varchar(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dropbox`
--

LOCK TABLES `dropbox` WRITE;
/*!40000 ALTER TABLE `dropbox` DISABLE KEYS */;
INSERT INTO `dropbox` VALUES (1,'MANIC SYNC','Manic synchronization unit','/upload/dropbox/169036207528505.exe','exe.png','2023-07-26 09:01:14');
/*!40000 ALTER TABLE `dropbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_activity`
--

DROP TABLE IF EXISTS `log_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(300) NOT NULL,
  `identifier` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_activity`
--

LOCK TABLES `log_activity` WRITE;
/*!40000 ALTER TABLE `log_activity` DISABLE KEYS */;
INSERT INTO `log_activity` VALUES (1,'1','nktqd7r91om3gbu2lgrn9t4ap31690524041','2023-07-28 06:00:41'),(2,'1','re4307qv7u55air20hidurkgkk1695794976','2023-09-27 06:09:36'),(3,'1','fjcb019v5bojqv58d6ojlm9v581695797580','2023-09-27 06:53:00'),(4,'1','mcbgdc2n27ldvtj626k1d69eik1697094016','2023-10-12 07:00:16');
/*!40000 ALTER TABLE `log_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manic_apps`
--

DROP TABLE IF EXISTS `manic_apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manic_apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DeviceName` varchar(50) NOT NULL,
  `Name` text NOT NULL,
  `StartLocalTime` datetime NOT NULL,
  `EndLocalTime` datetime NOT NULL,
  `Duration` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manic_apps`
--

LOCK TABLES `manic_apps` WRITE;
/*!40000 ALTER TABLE `manic_apps` DISABLE KEYS */;
/*!40000 ALTER TABLE `manic_apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manic_docs`
--

DROP TABLE IF EXISTS `manic_docs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manic_docs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DeviceName` varchar(50) NOT NULL,
  `Name` text NOT NULL,
  `StartLocalTime` datetime NOT NULL,
  `EndLocalTime` datetime NOT NULL,
  `Duration` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manic_docs`
--

LOCK TABLES `manic_docs` WRITE;
/*!40000 ALTER TABLE `manic_docs` DISABLE KEYS */;
/*!40000 ALTER TABLE `manic_docs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manic_records`
--

DROP TABLE IF EXISTS `manic_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manic_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last` json NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manic_records`
--

LOCK TABLES `manic_records` WRITE;
/*!40000 ALTER TABLE `manic_records` DISABLE KEYS */;
INSERT INTO `manic_records` VALUES (1,'{\"apps\": 0, \"docs\": 0, \"usage\": 0}');
/*!40000 ALTER TABLE `manic_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manic_usage`
--

DROP TABLE IF EXISTS `manic_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manic_usage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DeviceName` varchar(50) NOT NULL,
  `Name` text NOT NULL,
  `StartLocalTime` datetime NOT NULL,
  `EndLocalTime` datetime NOT NULL,
  `Duration` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manic_usage`
--

LOCK TABLES `manic_usage` WRITE;
/*!40000 ALTER TABLE `manic_usage` DISABLE KEYS */;
/*!40000 ALTER TABLE `manic_usage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notices`
--

DROP TABLE IF EXISTS `notices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(300) NOT NULL,
  `sender` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notices`
--

LOCK TABLES `notices` WRITE;
/*!40000 ALTER TABLE `notices` DISABLE KEYS */;
INSERT INTO `notices` VALUES (1,'School Reopening','hello kids',1),(2,'Camara ICT clubs','We have introduced a new ict club',1),(3,'hgghfhgfghfhg','hghghgjgjhghjgjh',1);
/*!40000 ALTER TABLE `notices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page_visit`
--

DROP TABLE IF EXISTS `page_visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `page_visit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visitor` int(11) NOT NULL DEFAULT '0',
  `uri` varchar(500) NOT NULL,
  `identifier` varchar(300) NOT NULL,
  `live` bigint(20) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `visitor_uri_identifier` (`visitor`,`uri`,`identifier`)
) ENGINE=InnoDB AUTO_INCREMENT=334 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page_visit`
--

LOCK TABLES `page_visit` WRITE;
/*!40000 ALTER TABLE `page_visit` DISABLE KEYS */;
INSERT INTO `page_visit` VALUES (1,1,'home','nktqd7r91om3gbu2lgrn9t4ap31690524041',0,'2023-07-28 06:00:41'),(2,1,'configure/portal','nktqd7r91om3gbu2lgrn9t4ap31690524041',742400,'2023-07-28 06:00:42'),(3,1,'log/time','nktqd7r91om3gbu2lgrn9t4ap31690524041',0,'2023-07-28 06:00:46'),(4,1,'home','re4307qv7u55air20hidurkgkk1695794976',17400,'2023-09-27 06:09:37'),(5,1,'configure/portal','re4307qv7u55air20hidurkgkk1695794976',217500,'2023-09-27 06:09:37'),(6,1,'log/time','re4307qv7u55air20hidurkgkk1695794976',0,'2023-09-27 06:09:42'),(163,1,'home','fjcb019v5bojqv58d6ojlm9v581695797580',5800,'2023-09-27 06:53:00'),(164,1,'log/time','fjcb019v5bojqv58d6ojlm9v581695797580',0,'2023-09-27 06:53:04'),(166,1,'configure/portal','fjcb019v5bojqv58d6ojlm9v581695797580',11600,'2023-09-27 06:53:07'),(167,1,'home','mcbgdc2n27ldvtj626k1d69eik1697094016',838100,'2023-10-12 07:00:16'),(168,1,'log/time','mcbgdc2n27ldvtj626k1d69eik1697094016',0,'2023-10-12 07:00:21'),(333,1,'configure/portal','mcbgdc2n27ldvtj626k1d69eik1697094016',408900,'2023-10-12 07:10:47');
/*!40000 ALTER TABLE `page_visit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `streams`
--

DROP TABLE IF EXISTS `streams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `streams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `class` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `streams`
--

LOCK TABLES `streams` WRITE;
/*!40000 ALTER TABLE `streams` DISABLE KEYS */;
/*!40000 ALTER TABLE `streams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `thumb` varchar(50) DEFAULT '/upload/subject/thumb/def.jpg',
  `cover` varchar(50) DEFAULT '/upload/subject/cover/def.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'Physics','/upload/subject/thumb/phy.png','/upload/subject/cover/phy.jpg'),(2,'Eglish Language','/upload/subject/thumb/eng.png','/upload/subject/cover/eng.jpg'),(3,'Literature','/upload/subject/thumb/lit.png','/upload/subject/cover/lit.jpg'),(4,'Chemistry','/upload/subject/thumb/chem.png','/upload/subject/cover/chem.jpg'),(5,'History','/upload/subject/thumb/his.png','/upload/subject/cover/his.jpg'),(6,'Other','/upload/subject/thumb/def.jpg','/upload/subject/cover/def.png'),(7,'Biology','/upload/subject/thumb/bios.png','/upload/subject/cover/bios.jpeg'),(8,'Commerce','/upload/subject/thumb/com.png','/upload/subject/cover/com.jpg'),(9,'Book Keeping','/upload/subject/thumb/bk.png','/upload/subject/cover/bk.jpg'),(10,'Mathematics','/upload/subject/thumb/math.png','/upload/subject/cover/math.png'),(11,'Computer Studies','/upload/subject/thumb/cs.png','/upload/subject/cover/def.png'),(12,'Kiswahili Language','/upload/subject/thumb/kis.png','/upload/subject/cover/kis.jpg'),(13,'Amharic Language','/upload/subject/thumb/et.png','/upload/subject/cover/def.png'),(14,'French Language','/upload/subject/thumb/fr.png','/upload/subject/cover/fr.jpg'),(15,'Arabic Language','/upload/subject/thumb/ar.png','/upload/subject/cover/ar.jpg'),(16,'Life Skills','/upload/subject/thumb/lf.png','/upload/subject/cover/lf.jpg'),(17,'Civics','/upload/subject/thumb/civ.png','/upload/subject/cover/civ.jpg'),(18,'Geography','/upload/subject/thumb/geo.png','/upload/subject/cover/geo.jpg');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sync`
--

DROP TABLE IF EXISTS `sync`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sync` (
  `id` int(11) NOT NULL,
  `site` bigint(20) NOT NULL DEFAULT '0',
  `app` bigint(20) NOT NULL DEFAULT '0',
  `vid` bigint(20) NOT NULL DEFAULT '0',
  `doc` bigint(20) NOT NULL DEFAULT '0',
  `last` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sync`
--

LOCK TABLES `sync` WRITE;
/*!40000 ALTER TABLE `sync` DISABLE KEYS */;
INSERT INTO `sync` VALUES (1,0,0,0,0,'2023-07-26 12:52:56');
/*!40000 ALTER TABLE `sync` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(50) NOT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `user_gender` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(50) DEFAULT NULL,
  `user_phone` varchar(50) DEFAULT NULL,
  `user_role` varchar(50) DEFAULT '',
  `user_token` varchar(100) DEFAULT '',
  `user_skills` varchar(100) DEFAULT NULL,
  `user_interest` varchar(100) DEFAULT NULL,
  `user_lang` varchar(100) DEFAULT NULL,
  `user_class` varchar(100) DEFAULT NULL,
  `user_age` varchar(100) DEFAULT NULL,
  `user_pass` varchar(100) NOT NULL,
  `last_status` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `user_email` (`user_email`),
  UNIQUE KEY `user_phone` (`user_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1 COMMENT='Dynamics default Table for Users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'camara','Camara','Education','male',NULL,'','1','',NULL,NULL,NULL,NULL,NULL,'526e497e2045ac41514c9d4c23efd800','2022-12-28 15:22:58','2021-10-18 12:31:54'),(2,'student','Portal','Student','male',NULL,NULL,'6','',NULL,NULL,NULL,NULL,NULL,'e10adc3949ba59abbe56e057f20f883e','2022-12-28 15:21:54','2021-11-10 23:41:20'),(3,'alfred','Alfred','Japhet','male',NULL,NULL,'2','',NULL,NULL,NULL,'null','2000','e10adc3949ba59abbe56e057f20f883e','2023-06-27 11:29:37','2023-06-27 11:29:37'),(4,'fatuma','Fatuma','Abubakar','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 2','2004','e10adc3949ba59abbe56e057f20f883e','2023-06-27 11:31:13','2023-06-27 11:31:13'),(5,'UHA/SS/001','Salma','Abas','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 15:44:00','2023-06-27 15:44:00'),(6,'UHA/SS/002','Warda','Hamis','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 15:45:42','2023-06-27 15:45:42'),(7,'UHA/SS/003','Yahaya','Salehe','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2006','e10adc3949ba59abbe56e057f20f883e','2023-06-27 16:56:18','2023-06-27 16:56:18'),(8,'UHA/SS/004','Aisha','Rashid','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 16:58:02','2023-06-27 16:58:02'),(9,'UHA/SS/005','Mariam','Juma','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 16:59:10','2023-06-27 16:59:10'),(10,'UHA/SS/006','Habiba','Salum','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:00:33','2023-06-27 17:00:33'),(11,'UHA/SS/007','Nilda','Hamis','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:02:00','2023-06-27 17:02:00'),(12,'UHA/SS/008','Samira','Adamu','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:05:59','2023-06-27 17:05:59'),(13,'UHA/SS/009','Vivian','Charles','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:07:01','2023-06-27 17:07:01'),(14,'UHA/SS/010','Salim','Kidombo','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:08:29','2023-06-27 17:08:29'),(15,'UHA/SS/011','Shamsa','Hasani','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:09:50','2023-06-27 17:09:50'),(16,'UHA/SS/012','Shufaa ','Rajabu','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:11:11','2023-06-27 17:11:11'),(17,'UHA/SS/013','James','John','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:12:10','2023-06-27 17:12:10'),(18,'UHA/SS/014','Abdulatifu','Said','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2006','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:13:17','2023-06-27 17:13:17'),(19,'UHA/SS/015','Victor','Elisha','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:15:00','2023-06-27 17:15:00'),(20,'UHA/SS/016','Nadya','Hamis','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:16:17','2023-06-27 17:16:17'),(21,'UHA/SS/017','Rehma','Hassan','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:17:41','2023-06-27 17:17:41'),(22,'UHA/SS/018','Hanifa','Musa','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:19:00','2023-06-27 17:19:00'),(23,'UHA/SS/019','Doreen','Medardy','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:20:16','2023-06-27 17:20:16'),(24,'UHA/SS/020','Uyanjo','Emmanuel','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:21:37','2023-06-27 17:21:37'),(25,'UHA/SS/021','Nasri','Ismail','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:22:44','2023-06-27 17:22:44'),(26,'UHA/SS/022','Brayan','Emanuel','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:24:39','2023-06-27 17:24:39'),(27,'UHA/SS/023','Eustace','Martine','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2006','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:26:11','2023-06-27 17:26:11'),(28,'UHA/SS/024','Hijram','Ismail','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:28:43','2023-06-27 17:28:43'),(29,'UHA/SS/025','Mohamed','Ugasa','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2005','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:29:40','2023-06-27 17:29:40'),(30,'UHA/SS/026','Sumayyah','Daffi','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2006','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:31:39','2023-06-27 17:31:39'),(31,'UHA/SS/027','Adiah','Abdukadir','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:34:18','2023-06-27 17:34:18'),(32,'UHA/2022/001','Elizabeth','Ramadhani','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 4','2006','e10adc3949ba59abbe56e057f20f883e','2023-06-27 15:13:44','2023-06-27 15:13:44'),(33,'NAJMA2023','NAJMA','ALLY','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 2','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:17:55','2023-06-27 17:17:55'),(34,'UHA/2023/002','Hadija','Seifu','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 2','2008','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:26:27','2023-06-27 17:26:27'),(35,'UHA/2023/004','Brian','Bosco','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 2','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 15:05:16','2023-06-27 15:05:16'),(36,'UHA/2023/003','Steven','Daniel','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 2','2007','e10adc3949ba59abbe56e057f20f883e','2023-06-27 15:06:25','2023-06-27 15:06:25'),(37,'mikaya','Mikaya','Focus','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2006','e10adc3949ba59abbe56e057f20f883e','2023-06-27 17:43:59','2023-06-27 17:43:59'),(38,'UHA/SS/2023/01','Joseph','Mbasha','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:11:40','2023-07-24 14:11:40'),(39,'UHA/SS/2023/02','Ally','Abubakar','male',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:26:55','2023-07-24 14:26:55'),(40,'UHA/SS/2023/03','Zawadi','Cosmas','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:28:31','2023-07-24 14:28:31'),(41,'UHA/SS/2023/04','Nasma','Hakika','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:45:46','2023-07-24 14:45:46'),(42,'UHA/SS/2023/05','Nasra','Hakika','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2007','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:46:35','2023-07-24 14:46:35'),(43,'UHA/SS/2023/06','Leah','Mallya','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:47:31','2023-07-24 14:47:31'),(44,'UHA/SS/2023/07','Beatrice','Kitua','female',NULL,NULL,'6','',NULL,NULL,NULL,'Form 3','2008','e10adc3949ba59abbe56e057f20f883e','2023-07-24 14:48:19','2023-07-24 14:48:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `thumbnail` text NOT NULL,
  `source` text NOT NULL,
  `class` text NOT NULL,
  `category` int(11) NOT NULL DEFAULT '0',
  `tags` text,
  `time` int(11) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'big buck bunnny','big lovable rabbit','/upload/video/cover/163647125374612.jpg','/upload/video/source/163647125315751.mkv','999',6,'',0,'2021-11-09 15:20:53'),(3,'Akulita','Akulita - Tanzanian Animated Short Film','/upload/video/cover/16364732385179.png','/upload/video/source/163647323854230.mp4','999',6,'',0,'2021-11-09 15:53:57'),(4,'Amsha Amsha','Amsha amsha, short tanzania animated film','/upload/video/cover/163647342214010.png','/upload/video/source/163647342267268.mp4','999',6,'',0,'2021-11-09 15:57:03'),(5,'Harakati za lucy','harakati za lucy, tie video','/upload/video/cover/16364738745510.png','/upload/video/source/163647387422587.mp4','999',6,'',0,'2021-11-09 16:04:34'),(6,'Harakati za Lucy-Mwanzo','Harakati za Lucy <br>\r\nAfya ya uzazi, a short animation video from Tanzania Institute of Education','/upload/video/cover/163648220786806.png','/upload/video/source/163648220710494.mp4','999',6,'',0,'2021-11-09 18:23:26'),(7,'Harakati za Lucy - Tujifunze','Harakati za lucy - Tujifunze episode <br>\r\nA short animation video provided by tie','/upload/video/cover/163648244856304.png','/upload/video/source/163648244815448.mp4','999',6,'',0,'2021-11-09 18:27:28'),(8,'The rise and fall of the Lakotas','The rise and fall of the Lakota','/upload/video/cover/163946375565209.jpg','/upload/video/source/163946375651939.mkv','999',6,'tes, history',0,'2021-12-14 06:35:55'),(9,'Hisabati Mikakati - Ubongo kids','Hisabati Mikakati','/upload/video/cover/163946394546164.png','/upload/video/source/163946394599379.mkv','999',6,'ubongo kids, song,',0,'2021-12-14 06:39:05'),(10,'Would you raise the bird that murdered your children','hdgfhgdhgdgdfghdfdfsdfsfsdfs','/upload/video/cover/163964078088431.jpg','/upload/video/source/163964078042630.mkv','999',6,'ted, birds',0,'2021-12-16 07:46:19'),(12,'About Camara Education','A brief overview of Camara Education','/upload/video/cover/164758116363552.png','/upload/video/source/164758116384846.mp4','999',6,'Camara',0,'2022-03-18 05:26:02'),(13,'What is Physics?','Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, with its main goal being to understand how the universe behaves. ','/upload/video/cover/164758148263847.jpg','/upload/video/source/164758148293449.mp4','9',1,'Physics, Form 1, Introduction',0,'2022-03-18 05:31:21');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_activity`
--

DROP TABLE IF EXISTS `video_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `bookmark` int(11) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_video_id_bookmark` (`user_id`,`video_id`,`bookmark`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_activity`
--

LOCK TABLES `video_activity` WRITE;
/*!40000 ALTER TABLE `video_activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_views`
--

DROP TABLE IF EXISTS `video_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video_views` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_views`
--

LOCK TABLES `video_views` WRITE;
/*!40000 ALTER TABLE `video_views` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_views` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'portal'
--

--
-- Dumping routines for database 'portal'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-14 14:26:30
