-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2021 at 03:21 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

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

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_no` int(11) NOT NULL,
  `sender` varchar(20) NOT NULL,
  `server_name` varchar(20) NOT NULL,
  `channel_name` varchar(20) NOT NULL,
  `text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_no`, `sender`, `server_name`, `channel_name`, `text`) VALUES
(12, 'ridwan', 'Gaming', 'General', 'hi'),
(13, 'ifrad', 'Gaming', 'General', 'hello '),
(14, 'ridwan', 'CSE 18', 'General', 'class cancelled'),
(15, 'ifrad', 'CSE 18', 'General', 'thanks'),
(16, 'ridwan', 'Gaming', 'General', 'no'),
(17, 'ridwan', 'Gaming', 'General', 'd'),
(18, 'ridwan', 'Gaming', 'General', 'nope'),
(19, 'ridwan', 'Gaming', 'General', 'hey'),
(20, 'ifrad', 'Gaming', 'General', 'what');

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
  `Password` varchar(100) NOT NULL,
  `serverType` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `myserver`
--

INSERT INTO `myserver` (`serverID`, `serverName`, `serverDescription`, `imageURL`, `owner`, `Password`, `serverType`) VALUES
(11, 'Gaming', 'Gaming Server', 'https://i.pcmag.com/imagery/articles/00DDUM2F1UuVX1ciAvfJqM3-9..1623763322.jpg', 'ridwan', '7d04b658be887021751453d32bb239cf', 'Public'),
(53, 'CSE 18', 'Official group for IUT CSE 19', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895320/ij9aufyzaiwxgazkkwfm.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Public'),
(54, 'IUT Chess Society', 'IUT Chess community group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895387/xdai5m612dyttkcoc5sp.png', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Public'),
(55, 'Nature Study Club', 'A typical nature lovers paradise', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895464/iuyrlwaysk9mjrjmqfhf.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Public'),
(56, 'Photography Society', 'Photography society group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895604/ebx175ndjrjrkpbtrwey.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Public'),
(57, 'Family', 'I got family', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895728/endvf3x9bus9xlhzc4ql.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Private'),
(58, 'Music ', 'Music appreciation group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895821/wipild6cqifwhgw8kj4z.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Public'),
(59, 'Marvel Fans', 'Avengers Assemble', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895925/jiwkyfpvj754flinfcxy.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad', 'Public');

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
('Hello', '7a6d1b13498fb5b3085b2fd887933575', 'Hello@gmail.com', 0),
('ifrad', '202cb962ac59075b964b07152d234b70', 'ifrad@gmail.com', 0),
('ridwan', '202cb962ac59075b964b07152d234b70', 'ridwan@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_rooms`
--

CREATE TABLE `user_rooms` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `room` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_rooms`
--

INSERT INTO `user_rooms` (`id`, `username`, `room`) VALUES
(10, 'ridwan', 'Gaming'),
(12, 'ridwan', 'CSE 18'),
(13, 'ifrad', 'CSE 18'),
(16, 'ifrad', 'Gaming');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `myserver`
--
ALTER TABLE `myserver`
  MODIFY `serverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `user_rooms`
--
ALTER TABLE `user_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
