-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2021 at 02:47 PM
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
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `myserver`
--

INSERT INTO `myserver` (`serverID`, `serverName`, `serverDescription`, `imageURL`, `owner`, `Password`) VALUES
(1, 'CSE 18', 'Official Communify group for CSE batch 18', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt-yDxqzDMlEa9UDFXYvesyT6V9YZ5zXqGg&usqp=CAU', 'ridwan', ''),
(2, 'Photography Society', 'Official group for Photography Society', 'https://jooinn.com/images/photography-1.jpg', 'ridwan', ''),
(11, 'Gaming', 'Gaming Server', 'https://i.pcmag.com/imagery/articles/00DDUM2F1UuVX1ciAvfJqM3-9..1623763322.jpg', 'ridwan', '7d04b658be887021751453d32bb239cf'),
(41, 'Abrar', 'Server', 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80', 'abrar', '62f8f80d384b8e9fdc81ef4e307b2b57'),
(45, 'R', 'R', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627648542/coofshf2cgi6nwprr5sf.png', 'ridwan', 'e1e1d3d40573127e9ee0480caf1283d6'),
(47, 'Adib', 'Adib', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627648892/yz9vyn60e2dbjhr4byy1.jpg', 'ridwan', 'a7805c2fb28085aa50a3f7ed1ff56936'),
(48, 'D', 'D', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627731867/qmlz2s6r8jmtr29uusvx.jpg', 'ridwan', 'f623e75af30e62bbd73d6df5b50bb7b5'),
(49, 'W', 'W', 'https://res.cloudinary.com/ddtyd3iwa/image/upload/v1627732002/ffityene7jkjkbom1gvf.jpg', 'ridwan', '61e9c06ea9a85a5088a499df6458d276');

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
  MODIFY `serverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
