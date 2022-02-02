-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table camportal.apps
CREATE TABLE IF NOT EXISTS `apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT '',
  `type` char(50) DEFAULT '',
  `path` char(50) DEFAULT '',
  `description` text,
  `banner` text,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.apps: ~3 rows (approximately)
/*!40000 ALTER TABLE `apps` DISABLE KEYS */;
INSERT INTO `apps` (`id`, `name`, `type`, `path`, `description`, `banner`, `created`) VALUES
	(1, 'moodle', 'Hosted', 'moodle', 'Moodle is a free and open-source learning management system (LMS) written in PHP and distributed under the GNU General Public License. Developed on pedagogical principles, Moodle is used for blended learning, distance education, flipped classroom and other e-learning projects in schools, universities, workplaces and other sectors.', '/upload/apps/163617837995202.png', '2021-11-16 09:42:37'),
	(2, 'tutorialspoint', 'Hosted', 'tutorialspoint', 'PhoneGap is a software development framework by Adobe System, which is used to develop mobile applications. To develop apps using PhoneGap, the developer does not require to have knowledge of mobile programming language but only web-development languages like HTML, CSS, and JScript. PhoneGap produces apps for all popular mobile OS platforms such as iOS, Android, BlackBerry, and Windows Mobile OS, etc. In this tutorial, we will focus on developing App for the Android platform. This tutorial will give you adequate information about how to produce apps quickly using PhoneGap services', '/upload/apps/163936901845250.jpg', '2021-11-27 09:42:39'),
	(3, 'GCF Learn Free', 'Hosted', 'gcf', 'Online education isnâ€™t new. Weâ€™ve been here for almost 20 years, and today we offer more tutorials than ever. When you access our self-paced courses, you know theyâ€™re up to dateâ€”and that they will be available later when you need to review.', '/upload/apps/16393836734080.jpg', '2021-12-15 09:42:40');
/*!40000 ALTER TABLE `apps` ENABLE KEYS */;

-- Dumping structure for table camportal.app_visits
CREATE TABLE IF NOT EXISTS `app_visits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` int(11) NOT NULL,
  `visitor` int(11) NOT NULL,
  `uri` varchar(300) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.app_visits: ~19 rows (approximately)
/*!40000 ALTER TABLE `app_visits` DISABLE KEYS */;
INSERT INTO `app_visits` (`id`, `app`, `visitor`, `uri`, `time`) VALUES
	(13, 2, 1, 'http://camport.test/apps/tutorialspoint/', '2021-12-13 17:03:41'),
	(14, 2, 1, 'http://camport.test/apps/tutorialspoint/phonegap/index.html', '2021-12-13 17:03:44'),
	(15, 2, 1, 'http://camport.test/apps/tutorialspoint/phonegap/phonegap_overview.html', '2021-12-13 17:03:51'),
	(16, 2, 1, 'http://camport.test/apps/tutorialspoint/phonegap/phonegap_environment_setup.html', '2021-12-13 17:03:53'),
	(17, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-13 17:04:18'),
	(18, 3, 1, 'http://camport.test/apps/gcf/content/windowsbasics/tutorial.html', '2021-12-13 17:04:24'),
	(19, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-13 17:04:31'),
	(20, 3, 1, 'http://camport.test/apps/gcf/content/windows10/tutorial.html', '2021-12-13 17:04:34'),
	(21, 3, 1, 'http://camport.test/apps/gcf/content/windows10/windows-10-frequently-asked-questions/lesson.html', '2021-12-13 17:04:36'),
	(22, 3, 1, 'http://camport.test/apps/gcf/content/windows10/tutorial.html', '2021-12-13 17:04:57'),
	(23, 3, 1, 'http://camport.test/apps/gcf/content/windows10/windows-10-features/lesson.html', '2021-12-13 17:04:58'),
	(24, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-13 19:52:12'),
	(25, 1, 1, 'http://camport.test/apps/moodle', '2021-12-13 21:50:00'),
	(26, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-15 18:26:02'),
	(27, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-16 09:03:52'),
	(28, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-16 10:37:40'),
	(29, 3, 1, 'http://camport.test/apps/gcf/', '2021-12-16 10:38:08'),
	(30, 3, 1, 'http://camport.test/apps/gcf/content/windows10/tutorial.html', '2021-12-16 10:38:37'),
	(31, 3, 1, 'http://camport.test/apps/gcf/content/windows10/windows-10-frequently-asked-questions/lesson.html', '2021-12-16 10:38:39');
/*!40000 ALTER TABLE `app_visits` ENABLE KEYS */;

-- Dumping structure for table camportal.classes
CREATE TABLE IF NOT EXISTS `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.classes: ~5 rows (approximately)
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` (`id`, `name`) VALUES
	(1, 'Grade I'),
	(2, 'Grade II'),
	(3, 'Grade III'),
	(4, 'Grade IV'),
	(999, 'All');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;

-- Dumping structure for table camportal.document
CREATE TABLE IF NOT EXISTS `document` (
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.document: ~4 rows (approximately)
/*!40000 ALTER TABLE `document` DISABLE KEYS */;
INSERT INTO `document` (`id`, `name`, `description`, `class`, `thumbnail`, `source`, `category`, `type`, `update`, `created`) VALUES
	(1, 'Thinking Fast and Slow', 'System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacationâ€•each of these can be understood only by knowing how the two systems shape our judgments and decisions.\r\n\r\nEngaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal livesâ€•and how we can use different techniques to guard against the mental glitches that often get us into trouble. Topping bestseller lists for almost ten years, Thinking, Fast and Slow is a contemporary classic, an essential book that has changed the lives of millions of readers.', 'Daniel Kahneman', '/upload/docs/cover/163652063478629.webp', '/upload/docs/source/163652063470700.pdf', 2, 2, '2021-11-10 08:03:53', '2021-11-10 08:03:53'),
	(2, 'HTML, CSS, Bootstrap, JavaScript and JQuery', 'Anyone can learn to code, just like anyone can learn a new language. In fact, programming is kind of like speaking a foreign language -- which is exactly why they\'re called programming languages. Each one has its own rules and syntax that need to be learned step by step. Those rules are ways to tell your computer what to do. More specifically, in web programming, they\'re ways of telling your browsers what to do.\r\n\r\nThe goal of this post is to, in plain English, teach you with the basics of HTML, CSS, and one of the most common programming languages, JavaScript.', 'Meher Krishna Patel', '/upload/docs/cover/163652154156322.png', '/upload/docs/source/163652154117789.pdf', 2, 2, '2021-11-30 15:09:56', '2021-11-10 08:19:00'),
	(3, 'Database Fundamentals', 'Keeping your skills current in today\'s world is becoming increasingly challenging. There are too many new technologies being developed, and little time to learn them all. The DB2Â® on Campus Book Series has been developed to minimize the time and effort required to learn many of these new technologies.\r\nThis book helps new database professionals understand database concepts with the right blend of breadth and depth of information.', 'Neeraj Sharma, Liviu Perniu, Raul F. Chong, Abhishek Iyer, Chaitali Nandan, Adi-Cristina Mitea, Mallarswami Nonvinkere, Mirela Danubianu', '/upload/docs/cover/163652177019783.png', '/upload/docs/source/163652177015803.pdf', 2, 2, '2021-11-10 08:22:49', '2021-11-10 08:22:49'),
	(4, 'Atomic Habits', 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones, This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.', '999', '/upload/docs/cover/163827519183739.png', '/upload/docs/source/16382751918646.pdf', 6, 2, '2021-11-30 15:26:30', '2021-11-30 15:26:30');
/*!40000 ALTER TABLE `document` ENABLE KEYS */;

-- Dumping structure for table camportal.doc_views
CREATE TABLE IF NOT EXISTS `doc_views` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `doc_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sess_id` varchar(50) NOT NULL DEFAULT '',
  `pages` varchar(50) NOT NULL DEFAULT '',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.doc_views: ~0 rows (approximately)
/*!40000 ALTER TABLE `doc_views` DISABLE KEYS */;
/*!40000 ALTER TABLE `doc_views` ENABLE KEYS */;

-- Dumping structure for table camportal.log_activity
CREATE TABLE IF NOT EXISTS `log_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(300) NOT NULL,
  `identifier` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.log_activity: ~17 rows (approximately)
/*!40000 ALTER TABLE `log_activity` DISABLE KEYS */;
INSERT INTO `log_activity` (`id`, `user`, `identifier`, `created`) VALUES
	(1, '1', 'egbklj0u75pva4a5eh6qiteap7955696109', '2021-12-15 13:48:02'),
	(2, '1', 'egbklj0u75pva4a5eh6qiteap7913446209', '2021-12-15 12:54:57'),
	(3, '1', 'egbklj0u75pva4a5eh6qiteap7673401596', '2021-12-15 13:44:13'),
	(4, '1', 'egbklj0u75pva4a5eh6qiteap7809244096', '2021-12-15 13:45:36'),
	(5, '1', 'egbklj0u75pva4a5eh6qiteap7814646680', '2021-12-15 13:46:06'),
	(6, '1', 'egbklj0u75pva4a5eh6qiteap7830013154', '2021-12-15 13:47:29'),
	(7, '1', 'egbklj0u75pva4a5eh6qiteap7793063873', '2021-12-15 13:47:40'),
	(8, '1', 'egbklj0u75pva4a5eh6qiteap7830472834', '2021-12-15 13:47:48'),
	(9, '1', 'egbklj0u75pva4a5eh6qiteap7874280321', '2021-12-15 13:47:49'),
	(10, '1', 'is13ddfhaimlj6jek336vss90i1639569951lock', '2021-12-15 15:05:51'),
	(11, '1', '8lgueiuoeqk3a2utjpjnd95uf21639580851', '2021-12-15 18:07:31'),
	(12, '1', 'og0i1j1k9stfg6ce2uogqgdo8m1639580991', '2021-12-15 18:09:51'),
	(13, '1', 'u0k3rc1od3kbkr81ori7mqifg31639634174', '2021-12-16 08:56:14'),
	(14, '1', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', '2021-12-16 10:27:57'),
	(15, '1', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', '2021-12-16 10:32:49'),
	(16, '1', 'fnfh41090chuqrs6la48jd6bhm1639910214', '2021-12-19 13:36:54'),
	(17, '1', 'igi58b2u7clcr2n36i76i02let1640032290', '2021-12-20 23:31:30');
/*!40000 ALTER TABLE `log_activity` ENABLE KEYS */;

-- Dumping structure for table camportal.notices
CREATE TABLE IF NOT EXISTS `notices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(300) NOT NULL,
  `sender` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.notices: ~3 rows (approximately)
/*!40000 ALTER TABLE `notices` DISABLE KEYS */;
INSERT INTO `notices` (`id`, `title`, `content`, `sender`) VALUES
	(1, 'School Reopening', 'hello kids', 1),
	(2, 'Camara ICT clubs', 'We have introduced a new ict club', 1),
	(3, 'hgghfhgfghfhg', 'hghghgjgjhghjgjh', 1);
/*!40000 ALTER TABLE `notices` ENABLE KEYS */;

-- Dumping structure for table camportal.page_visit
CREATE TABLE IF NOT EXISTS `page_visit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visitor` int(11) NOT NULL DEFAULT '0',
  `uri` varchar(500) NOT NULL,
  `identifier` varchar(300) NOT NULL,
  `live` bigint(20) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `visitor_uri_identifier` (`visitor`,`uri`,`identifier`)
) ENGINE=InnoDB AUTO_INCREMENT=2495 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.page_visit: ~51 rows (approximately)
/*!40000 ALTER TABLE `page_visit` DISABLE KEYS */;
INSERT INTO `page_visit` (`id`, `visitor`, `uri`, `identifier`, `live`, `time`) VALUES
	(1, 1, 'home', 'egbklj0u75pva4a5eh6qiteap7913446209', 0, '2021-12-15 12:54:59'),
	(13, 1, 'home', 'egbklj0u75pva4a5eh6qiteap7955696109', 81200, '2021-12-15 13:51:24'),
	(17, 1, 'video', 'egbklj0u75pva4a5eh6qiteap7955696109', 2900, '2021-12-15 13:54:21'),
	(18, 1, 'users/student', 'egbklj0u75pva4a5eh6qiteap7955696109', 0, '2021-12-15 13:58:59'),
	(50, 1, 'stats/video', 'egbklj0u75pva4a5eh6qiteap7955696109', 63800, '2021-12-15 14:18:02'),
	(136, 1, 'view/video/6/Harakati-za-Lucy-Mwanzo', 'egbklj0u75pva4a5eh6qiteap7955696109', 0, '2021-12-15 14:36:40'),
	(232, 1, 'document', 'egbklj0u75pva4a5eh6qiteap7955696109', 95700, '2021-12-15 14:46:00'),
	(294, 1, 'log/time', 'egbklj0u75pva4a5eh6qiteap7955696109', 0, '2021-12-15 14:49:23'),
	(324, 1, 'view/video/7/Harakati-za-Lucy---Tujifunze', 'egbklj0u75pva4a5eh6qiteap7955696109', 87000, '2021-12-15 14:50:54'),
	(356, 1, 'home', 'is13ddfhaimlj6jek336vss90i1639569951lock', 63800, '2021-12-15 15:05:52'),
	(358, 1, 'log/time', 'is13ddfhaimlj6jek336vss90i1639569951lock', 0, '2021-12-15 15:06:00'),
	(380, 1, 'stats/document', 'is13ddfhaimlj6jek336vss90i1639569951lock', 756900, '2021-12-15 15:07:07'),
	(619, 1, 'stats/app', 'is13ddfhaimlj6jek336vss90i1639569951lock', 8700, '2021-12-15 15:22:51'),
	(648, 1, 'home', '8lgueiuoeqk3a2utjpjnd95uf21639580851', 81200, '2021-12-15 18:07:35'),
	(650, 1, 'log/time', '8lgueiuoeqk3a2utjpjnd95uf21639580851', 0, '2021-12-15 18:07:44'),
	(678, 1, 'home', 'og0i1j1k9stfg6ce2uogqgdo8m1639580991', 75400, '2021-12-15 18:10:06'),
	(679, 1, 'log/time', 'og0i1j1k9stfg6ce2uogqgdo8m1639580991', 0, '2021-12-15 18:10:10'),
	(706, 1, 'stats/app', 'og0i1j1k9stfg6ce2uogqgdo8m1639580991', 664100, '2021-12-15 18:11:34'),
	(940, 1, 'view/app/3/GCF-Learn-Free', 'og0i1j1k9stfg6ce2uogqgdo8m1639580991', 20300, '2021-12-15 18:25:43'),
	(953, 1, 'stats/document', 'og0i1j1k9stfg6ce2uogqgdo8m1639580991', 11600, '2021-12-15 18:26:30'),
	(954, 1, 'home', 'u0k3rc1od3kbkr81ori7mqifg31639634174', 408900, '2021-12-16 08:56:16'),
	(956, 1, 'log/time', 'u0k3rc1od3kbkr81ori7mqifg31639634174', 0, '2021-12-16 08:56:23'),
	(1096, 1, 'view/app/3/GCF-Learn-Free', 'u0k3rc1od3kbkr81ori7mqifg31639634174', 2900, '2021-12-16 09:03:47'),
	(1100, 1, 'stats/app', 'u0k3rc1od3kbkr81ori7mqifg31639634174', 287600, '2021-12-16 09:05:51'),
	(1264, 1, 'add/app', 'u0k3rc1od3kbkr81ori7mqifg31639634174', 23200, '2021-12-16 09:18:35'),
	(2122, 1, 'home', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 542300, '2021-12-16 10:27:59'),
	(2124, 1, 'log/time', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 0, '2021-12-16 10:28:05'),
	(2181, 1, 'users/student', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 2900, '2021-12-16 10:31:05'),
	(2194, 1, 'create/notice', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 46400, '2021-12-16 10:31:11'),
	(2211, 1, 'video', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 43500, '2021-12-16 10:32:04'),
	(2217, 1, 'view/video/9/Hisabati-Mikakati---Ubongo-kids', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 31900, '2021-12-16 10:32:21'),
	(2236, 1, 'document', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 11600, '2021-12-16 10:33:18'),
	(2239, 1, 'view/document/4/Atomic-Habits', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 156600, '2021-12-16 10:33:28'),
	(2294, 1, 'view/app/2/tutorialspoint', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 5800, '2021-12-16 10:36:36'),
	(2297, 1, 'view/app/3/GCF-Learn-Free', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 49300, '2021-12-16 10:36:46'),
	(2320, 1, 'stats/app', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 40600, '2021-12-16 10:38:53'),
	(2333, 1, 'stats/video', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 116000, '2021-12-16 10:39:35'),
	(2341, 1, 'view/video/7/Harakati-za-Lucy---Tujifunze', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 2900, '2021-12-16 10:39:54'),
	(2380, 1, 'add/app', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 72500, '2021-12-16 10:41:46'),
	(2406, 1, 'add/video', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 171100, '2021-12-16 10:43:08'),
	(2470, 1, 'view/video/10/Would-you-raise-the-bird-that-murdered-your-children', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 2900, '2021-12-16 10:46:32'),
	(2475, 1, 'add/document', 'ju0ldgggh4mqtq5e63c05abgnr1639639677', 20300, '2021-12-16 10:46:47'),
	(2476, 1, 'home', 'fnfh41090chuqrs6la48jd6bhm1639910214', 5800, '2021-12-19 13:36:56'),
	(2477, 1, 'video', 'fnfh41090chuqrs6la48jd6bhm1639910214', 8700, '2021-12-19 13:37:01'),
	(2478, 1, 'log/time', 'fnfh41090chuqrs6la48jd6bhm1639910214', 0, '2021-12-19 13:37:01'),
	(2480, 1, 'view/video/10/Would-you-raise-the-bird-that-murdered-your-children', 'fnfh41090chuqrs6la48jd6bhm1639910214', 11600, '2021-12-19 13:37:06'),
	(2490, 1, 'view/video/9/Hisabati-Mikakati---Ubongo-kids', 'fnfh41090chuqrs6la48jd6bhm1639910214', 426300, '2021-12-19 13:40:06'),
	(2491, 1, 'home', 'igi58b2u7clcr2n36i76i02let1640032290', 2900, '2021-12-20 23:31:33'),
	(2492, 1, 'log/time', 'igi58b2u7clcr2n36i76i02let1640032290', 0, '2021-12-20 23:31:38'),
	(2493, 1, 'video', 'igi58b2u7clcr2n36i76i02let1640032290', 0, '2021-12-20 23:31:39'),
	(2494, 1, 'view/video/10/Would-you-raise-the-bird-that-murdered-your-children', 'igi58b2u7clcr2n36i76i02let1640032290', 388600, '2021-12-20 23:31:42');
/*!40000 ALTER TABLE `page_visit` ENABLE KEYS */;

-- Dumping structure for table camportal.streams
CREATE TABLE IF NOT EXISTS `streams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `class` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.streams: ~0 rows (approximately)
/*!40000 ALTER TABLE `streams` DISABLE KEYS */;
/*!40000 ALTER TABLE `streams` ENABLE KEYS */;

-- Dumping structure for table camportal.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.subjects: ~6 rows (approximately)
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` (`id`, `name`) VALUES
	(1, 'Physic'),
	(2, 'Eglish Language'),
	(3, 'Literature'),
	(4, 'Civics'),
	(5, 'History'),
	(6, 'Other');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;

-- Dumping structure for table camportal.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(50) NOT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `user_gender` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(50) DEFAULT NULL,
  `user_phone` varchar(50) DEFAULT NULL,
  `user_role` varchar(50) DEFAULT '',
  `user_token` varchar(100) DEFAULT '',
  `user_pass` varchar(100) NOT NULL,
  `last_status` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `user_email` (`user_email`),
  UNIQUE KEY `user_phone` (`user_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='Dynamics default Table for Users';

-- Dumping data for table camportal.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `user_gender`, `user_email`, `user_phone`, `user_role`, `user_token`, `user_pass`, `last_status`, `user_time`) VALUES
	(1, 'abdulbasit', 'Abdulbasit', 'Rubeiyya', 'male', 'abdulbasitrubeiyya@gmail.com', '', '0', '', '1e595917ca2e52830f7bb310ddb36254', '2021-11-11 08:09:03', '2021-10-18 12:31:54'),
	(2, 'ST001', 'Hamisi', 'Ali', 'male', NULL, NULL, '6', '', '5a28154b7e71f01602db68490fb20f62', '2021-11-11 08:08:55', '2021-11-10 23:41:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table camportal.video
CREATE TABLE IF NOT EXISTS `video` (
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.video: ~10 rows (approximately)
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` (`id`, `title`, `description`, `thumbnail`, `source`, `class`, `category`, `tags`, `time`, `created`) VALUES
	(1, 'big buck bunnny', 'big lovable rabbit', '/upload/video/cover/163647125374612.jpg', '/upload/video/source/163647125315751.mkv', 'All', 1, '', 0, '2021-11-09 18:20:53'),
	(2, 'a fox tale', 'the fox\'s tales', '/upload/video/cover/163647263561317.jpg', '/upload/video/source/163647263520232.mkv', 'All', 2, '', 0, '2021-11-09 18:43:55'),
	(3, 'Akulita', 'Akulita - Tanzanian Animated Short Film', '/upload/video/cover/16364732385179.png', '/upload/video/source/163647323854230.mp4', 'All', 3, '', 0, '2021-11-09 18:53:57'),
	(4, 'Amsha Amsha', 'Amsha amsha, short tanzania animated film', '/upload/video/cover/163647342214010.png', '/upload/video/source/163647342267268.mp4', 'All', 1, '', 0, '2021-11-09 18:57:03'),
	(5, 'Harakati za lucy', 'harakati za lucy, tie video', '/upload/video/cover/16364738745510.png', '/upload/video/source/163647387422587.mp4', 'All', 4, '', 0, '2021-11-09 19:04:34'),
	(6, 'Harakati za Lucy-Mwanzo', 'Harakati za Lucy <br>\r\nAfya ya uzazi, a short animation video from Tanzania Institute of Education', '/upload/video/cover/163648220786806.png', '/upload/video/source/163648220710494.mp4', 'All', 4, '', 0, '2021-11-09 21:23:26'),
	(7, 'Harakati za Lucy - Tujifunze', 'Harakati za lucy - Tujifunze episode <br>\r\nA short animation video provided by tie', '/upload/video/cover/163648244856304.png', '/upload/video/source/163648244815448.mp4', 'All', 1, '', 0, '2021-11-09 21:27:28'),
	(8, 'The rise and fall of the Lakotas', 'The rise and fall of the Lakota', '/upload/video/cover/163946375565209.jpg', '/upload/video/source/163946375651939.mkv', '999', 5, 'tes, history', 0, '2021-12-14 09:35:55'),
	(9, 'Hisabati Mikakati - Ubongo kids', 'Hisabati Mikakati', '/upload/video/cover/163946394546164.png', '/upload/video/source/163946394599379.mkv', '999', 6, 'ubongo kids, song,', 0, '2021-12-14 09:39:05'),
	(10, 'Would you raise the bird that murdered your children', 'hdgfhgdhgdgdfghdfdfsdfsfsdfs', '/upload/video/cover/163964078088431.jpg', '/upload/video/source/163964078042630.mkv', '999', 6, 'ted, birds', 0, '2021-12-16 10:46:19');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;

-- Dumping structure for table camportal.video_activity
CREATE TABLE IF NOT EXISTS `video_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `bookmark` int(11) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_video_id_bookmark` (`user_id`,`video_id`,`bookmark`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.video_activity: ~2 rows (approximately)
/*!40000 ALTER TABLE `video_activity` DISABLE KEYS */;
INSERT INTO `video_activity` (`id`, `user_id`, `video_id`, `bookmark`, `created`) VALUES
	(1, 1, 1, 1, '2021-12-15 11:31:22'),
	(2, 1, 8, 1, '2021-12-15 11:32:04');
/*!40000 ALTER TABLE `video_activity` ENABLE KEYS */;

-- Dumping structure for table camportal.video_views
CREATE TABLE IF NOT EXISTS `video_views` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;

-- Dumping data for table camportal.video_views: ~59 rows (approximately)
/*!40000 ALTER TABLE `video_views` DISABLE KEYS */;
INSERT INTO `video_views` (`id`, `video_id`, `user_id`, `time`) VALUES
	(1, 7, 1, '2021-11-09 22:44:35'),
	(2, 5, 1, '2021-11-09 22:45:47'),
	(3, 3, 1, '2021-11-10 08:34:17'),
	(4, 7, 1, '2021-11-12 10:26:57'),
	(5, 7, 1, '2021-12-12 00:57:49'),
	(6, 6, 1, '2021-12-13 22:00:51'),
	(7, 5, 1, '2021-12-13 22:00:52'),
	(8, 2, 1, '2021-12-13 22:00:53'),
	(9, 1, 1, '2021-12-13 22:00:54'),
	(10, 4, 1, '2021-12-13 22:00:56'),
	(11, 2, 1, '2021-12-13 22:00:58'),
	(12, 6, 1, '2021-12-13 22:06:14'),
	(13, 6, 1, '2021-12-13 22:06:17'),
	(14, 6, 1, '2021-12-13 22:06:20'),
	(15, 9, 1, '2021-12-14 09:39:10'),
	(16, 3, 1, '2021-12-14 09:42:48'),
	(17, 3, 1, '2021-12-14 09:44:26'),
	(18, 8, 1, '2021-12-14 20:43:26'),
	(19, 9, 1, '2021-12-14 20:44:00'),
	(20, 8, 1, '2021-12-15 06:34:37'),
	(21, 8, 1, '2021-12-15 06:35:57'),
	(22, 8, 1, '2021-12-15 06:36:16'),
	(23, 8, 1, '2021-12-15 06:48:29'),
	(24, 8, 1, '2021-12-15 06:48:48'),
	(25, 8, 1, '2021-12-15 06:49:22'),
	(26, 8, 1, '2021-12-15 06:51:13'),
	(27, 8, 1, '2021-12-15 06:52:33'),
	(28, 8, 1, '2021-12-15 06:52:58'),
	(29, 8, 1, '2021-12-15 06:53:39'),
	(30, 8, 1, '2021-12-15 06:55:53'),
	(31, 8, 1, '2021-12-15 06:56:43'),
	(32, 8, 1, '2021-12-15 06:58:03'),
	(33, 8, 1, '2021-12-15 06:59:11'),
	(34, 8, 1, '2021-12-15 07:01:21'),
	(35, 8, 1, '2021-12-15 07:10:05'),
	(36, 8, 1, '2021-12-15 07:42:57'),
	(37, 8, 1, '2021-12-15 07:43:55'),
	(38, 8, 1, '2021-12-15 11:25:16'),
	(39, 8, 1, '2021-12-15 11:25:19'),
	(40, 8, 1, '2021-12-15 11:26:23'),
	(41, 8, 1, '2021-12-15 11:27:41'),
	(42, 8, 1, '2021-12-15 11:32:02'),
	(43, 8, 1, '2021-12-15 11:52:52'),
	(44, 8, 1, '2021-12-15 11:53:12'),
	(45, 8, 1, '2021-12-15 11:53:52'),
	(46, 7, 1, '2021-12-15 11:54:54'),
	(47, 7, 1, '2021-12-15 12:01:16'),
	(48, 7, 1, '2021-12-15 12:01:30'),
	(49, 7, 1, '2021-12-15 12:04:46'),
	(50, 7, 1, '2021-12-15 12:05:10'),
	(51, 6, 1, '2021-12-15 14:36:40'),
	(52, 7, 1, '2021-12-15 14:50:54'),
	(53, 9, 1, '2021-12-16 10:32:21'),
	(54, 9, 1, '2021-12-16 10:32:55'),
	(55, 7, 1, '2021-12-16 10:39:54'),
	(56, 10, 1, '2021-12-16 10:46:32'),
	(57, 10, 1, '2021-12-19 13:37:06'),
	(58, 9, 1, '2021-12-19 13:40:06'),
	(59, 10, 1, '2021-12-20 23:31:42');
/*!40000 ALTER TABLE `video_views` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
