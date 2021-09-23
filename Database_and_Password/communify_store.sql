-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2021 at 02:37 PM
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
  `eventName` varchar(20) NOT NULL,
  `eventDescription` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventNumber`, `userName`, `serverName`, `isAdmin`, `eventDate`, `eventMonth`, `eventYear`, `eventName`, `eventDescription`) VALUES
(4, 'ridwan', 'Gaming', 1, '25', '8', '2021', 'Admin Ridwan Event', 'Testing'),
(5, 'ifrad', 'Gaming', 0, '26', '8', '2021', 'Member ifrad Event', 'Testing'),
(6, 'ridwan', 'Gaming', 1, '24', '8', '2021', 'Admin Ridwan Event 2', 'Party hobbe'),
(7, 'ridwan', 'Gaming', 1, '23', '8', '2021', 'Hello nEW EVENT', 'WWWW');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_no` int(11) NOT NULL,
  `sender` varchar(20) NOT NULL,
  `server_name` varchar(20) NOT NULL,
  `channel_name` varchar(20) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `initial_vector` varchar(3000) NOT NULL,
  `content` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_no`, `sender`, `server_name`, `channel_name`, `text`, `initial_vector`, `content`) VALUES
(42, 'ridwan', 'Gaming', 'General', 'Hi ', '', ''),
(43, 'ridwan', 'Gaming', 'General', 'This is General channel', '', ''),
(44, 'ridwan', 'Gaming', 'Notice', 'This channel is only for Notice', '', ''),
(45, 'ifrad', 'Gaming', 'General', 'Yes! It is.', '', ''),
(46, 'ridwan', 'Gaming', 'General', 'a', '', ''),
(47, 'ridwan', 'Gaming', 'General', 'b', '', ''),
(48, 'ridwan', 'Gaming', 'General', 'c', '', ''),
(49, 'ridwan', 'Gaming', 'General', 'd', '', ''),
(50, 'ridwan', 'Gaming', 'General', 'e', '', ''),
(51, 'ridwan', 'Gaming', 'General', 'f', '', ''),
(52, 'ridwan', 'Gaming', 'General', 'g', '', ''),
(53, 'ridwan', 'Gaming', 'General', 'h', '', ''),
(54, 'ridwan', 'Gaming', 'General', 'i', '', ''),
(55, 'ridwan', 'Gaming', 'General', 'j', '', ''),
(56, 'ridwan', 'CSE 18', 'General', 'hello', '', '');

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
(55, 'Nature Study Club', 'A typical nature lovers paradise', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895464/iuyrlwaysk9mjrjmqfhf.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(56, 'Photography Society', 'Photography society group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895604/ebx175ndjrjrkpbtrwey.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(57, 'Family', 'I got family', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895728/endvf3x9bus9xlhzc4ql.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(58, 'Music ', 'Music appreciation group', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895821/wipild6cqifwhgw8kj4z.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad'),
(59, 'Marvel Fans', 'Avengers Assemble', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627895925/jiwkyfpvj754flinfcxy.jpg', 'ridwan', '25d55ad283aa400af464c76d713c07ad');

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
('CR7', '5a05254570cc97ac9582ad7c5877f1ad', 'cr7_123@gmail.com', 0),
('Hello', '7a6d1b13498fb5b3085b2fd887933575', 'Hello@gmail.com', 0),
('ifrad', '202cb962ac59075b964b07152d234b70', 'ifrad@gmail.com', 0),
('Ishrak', '5a05254570cc97ac9582ad7c5877f1ad', 'ishrak123@gmail.com', 0),
('ridwan', '202cb962ac59075b964b07152d234b70', 'ridwan@gmail.com', 0),
('Rifat', '5a05254570cc97ac9582ad7c5877f1ad', 'rifat123@gmail.com', 0),
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
(23, 'Trailblazer', 'Gaming', 0),
(24, 'CR7', 'Gaming', 0),
(25, 'ridwan', 'Marvel Fans', 1);

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
  MODIFY `eventNumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `myserver`
--
ALTER TABLE `myserver`
  MODIFY `serverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `user_rooms`
--
ALTER TABLE `user_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
