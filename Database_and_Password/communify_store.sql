-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2021 at 09:34 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `communify_store`
--
CREATE DATABASE IF NOT EXISTS `communify_store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `communify_store`;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventNumber` int(11) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `serverName` varchar(20) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `eventDate` varchar(20) NOT NULL,
  `eventMonth` varchar(20) NOT NULL,
  `eventYear` varchar(20) NOT NULL,
  `eventName` varchar(100) NOT NULL,
  `eventDescription` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventNumber`, `userName`, `serverName`, `isAdmin`, `eventDate`, `eventMonth`, `eventYear`, `eventName`, `eventDescription`) VALUES
(4, 'ridwan', 'Gaming', 1, '25', '8', '2021', 'Admin Ridwan Event', 'Testing'),
(5, 'ifrad', 'Gaming', 0, '26', '8', '2021', 'Member ifrad Event', 'Testing'),
(6, 'ridwan', 'Gaming', 1, '24', '8', '2021', 'Admin Ridwan Event 2', 'Party hobbe'),
(7, 'ridwan', 'Gaming', 1, '23', '8', '2021', 'Hello nEW EVENT', 'WWWW'),
(8, 'ridwan', 'Gaming', 1, '9', '9', '2021', 'Rifat er holud shond', 'Rifat biya kortase yaay'),
(9, 'ridwan', 'Gaming', 1, '9', '9', '2021', 'Hello', 'Hello'),
(10, 'ridwan', 'Gaming', 1, '9', '9', '2021', 'New Event', 'New Event'),
(11, 'ridwan', 'Gaming', 1, '9', '9', '2021', 'dkfjg sjn ', 'sdfjn snf sildnjflksdjf lsdjnflsd lsjdnf'),
(12, 'ridwan', 'Gaming', 1, '9', '9', '2021', 'sdmfn skdfnj sdfnj ', 'sdjfn sdfnj sljdknf kjldnsf skdfnj'),
(13, 'ifrad', 'Gaming', 0, '10', '9', '2021', 'HelloEvent', 'New event'),
(14, 'ifrad', 'Gaming', 0, '10', '9', '2021', 'Boro Event', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_no` int(11) NOT NULL,
  `sender` varchar(20) NOT NULL,
  `server_name` varchar(20) NOT NULL,
  `channel_name` varchar(20) NOT NULL,
  `text` varchar(3000) NOT NULL,
  `initial_vector` varchar(3000) NOT NULL,
  `content` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_no`, `sender`, `server_name`, `channel_name`, `text`, `initial_vector`, `content`) VALUES
(240, 'ridwan', 'Gaming', 'Notice', '', '287437cddac55afb53c20352c68c9b13', 'd638f4dab8'),
(241, 'ridwan', 'Gaming', 'General', '', '287437cddac55afb53c20352c68c9b13', 'cc34fcc1b62f7f6dc027ec962bc5'),
(242, 'ifrad', 'Gaming', 'General', '', '287437cddac55afb53c20352c68c9b13', 'f634b8e4be25286bcb'),
(243, 'ridwan', 'Gaming', 'General', '', '287437cddac55afb53c20352c68c9b13', 'f638f4dab8612b62c03bec'),
(244, 'ridwan', 'Gaming', 'Notice', '', '287437cddac55afb53c20352c68c9b13', 'f638f4dab8613165d120ea81'),
(245, 'ridwan', 'Gaming', 'Notice', '', '287437cddac55afb53c20352c68c9b13', 'fa37f0d0b5612c61c12bef8c2089cee70510ad'),
(246, 'ifrad', 'Gaming', 'General', '', '287437cddac55afb53c20352c68c9b13', 'ff30f196b6253263cb69e18b3ecc9bf70919a2');

-- --------------------------------------------------------

--
-- Table structure for table `myserver`
--

CREATE TABLE `myserver` (
  `serverID` int(11) NOT NULL,
  `serverName` varchar(20) NOT NULL,
  `serverDescription` varchar(50) NOT NULL,
  `imageURL` varchar(200) NOT NULL,
  `owner` varchar(20) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `myserver`
--

INSERT INTO `myserver` (`serverID`, `serverName`, `serverDescription`, `imageURL`, `owner`, `Password`) VALUES
(11, 'Gaming', 'Gaming Server', 'https://i.pcmag.com/imagery/articles/00DDUM2F1UuVX1ciAvfJqM3-9..1623763322.jpg', 'ridwan', '7d04b658be887021751453d32bb239cf'),
(53, 'CSE 18', 'Official group for IUT CSE 19', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895320/ij9aufyzaiwxgazkkwfm.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(54, 'IUT Chess Society', 'IUT Chess community group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895387/xdai5m612dyttkcoc5sp.png', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(55, 'Nature SC', 'A typical nature lovers paradise', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895464/iuyrlwaysk9mjrjmqfhf.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(56, 'Photography Society', 'Photography society group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895604/ebx175ndjrjrkpbtrwey.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(57, 'Family', 'I got family', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895728/endvf3x9bus9xlhzc4ql.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(58, 'Music ', 'Music appreciation group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895821/wipild6cqifwhgw8kj4z.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(59, 'Marvel Fans', 'Avengers Assemble', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895925/jiwkyfpvj754flinfcxy.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(60, 'CommunifyT', 'Communify Dev Team', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1632501104/wlj2tkvpw9n8bnqyxx3a.jpg', 'ridwan', '5a05254570cc97ac9582ad7c5877f1ad'),
(61, 'Pokemon', 'Hekko Hekko', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1633719978/vjnjym2sjtij4t5fwmpl.jpg', 'Anuva', 'e19d5cd5af0378da05f63f891c7467af');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `Username` varchar(10) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `IsGoogleAccount` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`Username`, `Password`, `Email`, `IsGoogleAccount`) VALUES
('abrar', '202cb962ac59075b964b07152d234b70', 'abrar@gmail.com', 0),
('Adib', '5a05254570cc97ac9582ad7c5877f1ad', 'adib123@gmail.com', 0),
('Anuva', 'e19d5cd5af0378da05f63f891c7467af', 'Anuva@gmail.com', 0),
('CR7', '5a05254570cc97ac9582ad7c5877f1ad', 'cr7_123@gmail.com', 0),
('Hello', '7a6d1b13498fb5b3085b2fd887933575', 'Hello@gmail.com', 0),
('ifrad', '202cb962ac59075b964b07152d234b70', 'ifrad@gmail.com', 0),
('Ishrak', '5a05254570cc97ac9582ad7c5877f1ad', 'ishrak123@gmail.com', 0),
('ridwan', '202cb962ac59075b964b07152d234b70', 'ridwan@gmail.com', 0),
('Rifat', '5a05254570cc97ac9582ad7c5877f1ad', 'rifat123@gmail.com', 0),
('test1', '5a05254570cc97ac9582ad7c5877f1ad', 'test@123.com', 0),
('test2', '5a05254570cc97ac9582ad7c5877f1ad', 'test2@123.com', 0),
('Trailblaze', '5a05254570cc97ac9582ad7c5877f1ad', 'trailblazer123@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_rooms`
--

CREATE TABLE `user_rooms` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `room` varchar(20) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_rooms`
--

INSERT INTO `user_rooms` (`id`, `username`, `room`, `isAdmin`) VALUES
(10, 'ridwan', 'Gaming', 1),
(12, 'ridwan', 'CSE 18', 1),
(13, 'ifrad', 'CSE 18', 0),
(16, 'ifrad', 'Gaming', 0),
(17, 'ridwan', 'IUT Chess Society', 1),
(18, 'ifrad', 'IUT Chess Society', 0),
(19, 'abrar', 'Gaming', 1),
(20, 'Ishrak', 'Gaming', 0),
(21, 'Rifat', 'Gaming', 0),
(22, 'Adib', 'Gaming', 0),
(23, 'Trailblazer', 'Gaming', 1),
(24, 'CR7', 'Gaming', 0),
(25, 'ridwan', 'Marvel Fans', 1),
(28, 'ridwan', 'Music ', 1),
(29, 'ridwan', 'Family', 1),
(30, 'ridwan', 'Photography Society', 1),
(31, 'ridwan', 'Nature SC', 1),
(32, 'ridwan', 'CommunifyT', 1),
(33, 'Anuva', 'Pokemon', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eventNumber`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_no`);

--
-- Indexes for table `myserver`
--
ALTER TABLE `myserver`
  ADD PRIMARY KEY (`serverID`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`Username`);

--
-- Indexes for table `user_rooms`
--
ALTER TABLE `user_rooms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eventNumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `myserver`
--
ALTER TABLE `myserver`
  MODIFY `serverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `user_rooms`
--
ALTER TABLE `user_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- Database: `dvwa`
--
CREATE DATABASE IF NOT EXISTS `dvwa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dvwa`;

-- --------------------------------------------------------

--
-- Table structure for table `guestbook`
--

CREATE TABLE `guestbook` (
  `comment_id` smallint(5) UNSIGNED NOT NULL,
  `comment` varchar(300) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guestbook`
--

INSERT INTO `guestbook` (`comment_id`, `comment`, `name`) VALUES
(1, 'This is a test comment.', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(6) NOT NULL,
  `first_name` varchar(15) DEFAULT NULL,
  `last_name` varchar(15) DEFAULT NULL,
  `user` varchar(15) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `avatar` varchar(70) DEFAULT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `failed_login` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `user`, `password`, `avatar`, `last_login`, `failed_login`) VALUES
(1, 'admin', 'admin', 'admin', '5f4dcc3b5aa765d61d8327deb882cf99', '/dvwa/hackable/users/admin.jpg', '2021-08-19 07:37:52', 0),
(2, 'Gordon', 'Brown', 'gordonb', 'e99a18c428cb38d5f260853678922e03', '/dvwa/hackable/users/gordonb.jpg', '2021-08-19 07:37:52', 0),
(3, 'Hack', 'Me', '1337', '8d3533d75ae2c3966d7e0d4fcc69216b', '/dvwa/hackable/users/1337.jpg', '2021-08-19 07:37:52', 0),
(4, 'Pablo', 'Picasso', 'pablo', '0d107d09f5bbe40cade3de5c71e9e9b7', '/dvwa/hackable/users/pablo.jpg', '2021-08-19 07:37:52', 0),
(5, 'Bob', 'Smith', 'smithy', '5f4dcc3b5aa765d61d8327deb882cf99', '/dvwa/hackable/users/smithy.jpg', '2021-08-19 07:37:52', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `guestbook`
--
ALTER TABLE `guestbook`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `guestbook`
--
ALTER TABLE `guestbook`
  MODIFY `comment_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"communify_store\",\"table\":\"events\"},{\"db\":\"communify_store\",\"table\":\"messages\"},{\"db\":\"communify_store\",\"table\":\"myserver\"},{\"db\":\"communify_store\",\"table\":\"user_rooms\"},{\"db\":\"communify_store\",\"table\":\"user_login\"},{\"db\":\"information_schema\",\"table\":\"COLUMNS\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2021-10-09 19:34:25', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
