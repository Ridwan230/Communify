-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2021 at 11:24 AM
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
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`Username`, `Password`, `Email`) VALUES
('abrar', '202cb962ac59075b964b07152d234b70', 'abrar@gmail.com'),
('Hello', '7a6d1b13498fb5b3085b2fd887933575', 'Hello@gmail.com'),
('ifrad', '202cb962ac59075b964b07152d234b70', 'ifrad@gmail.com'),
('ridwan', '202cb962ac59075b964b07152d234b70', 'ridwan@gmail.com');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `myserver`
--
ALTER TABLE `myserver`
  MODIFY `serverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
