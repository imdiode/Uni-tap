-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 19, 2021 at 09:20 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CCAS`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic`
--

CREATE TABLE `academic` (
  `uid` int(11) NOT NULL,
  `sem` int(11) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `overall_grade` varchar(2) NOT NULL,
  `internal` int(11) DEFAULT NULL,
  `practical` int(11) DEFAULT NULL,
  `final` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `e_stock`
--

CREATE TABLE `e_stock` (
  `e_name` varchar(30) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `e_transactions`
--

CREATE TABLE `e_transactions` (
  `uid` int(11) NOT NULL,
  `e_id` int(11) NOT NULL,
  `issue` tinyint(1) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `library_books`
--

CREATE TABLE `library_books` (
  `bid` int(11) NOT NULL,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `publisher` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `library_stock`
--

CREATE TABLE `library_stock` (
  `title` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `publisher` varchar(20) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `price` int(11) NOT NULL,
  `available` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `library_transactions`
--

CREATE TABLE `library_transactions` (
  `uid` int(11) NOT NULL,
  `name` text NOT NULL,
  `bid` int(11) NOT NULL,
  `issue` tinyint(1) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Notice`
--

CREATE TABLE `Notice` (
  `nid` int(11) NOT NULL,
  `title` text NOT NULL,
  `subject` text NOT NULL,
  `content` blob NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `uid` int(11) NOT NULL,
  `role` varchar(1) NOT NULL COMMENT 'Values S and A for student and admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `uid` int(11) NOT NULL,
  `name` text NOT NULL,
  `enrollment` int(11) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `address` text NOT NULL,
  `email` text NOT NULL,
  `password` varchar(20) NOT NULL COMMENT 'length 8 t0 16 char',
  `dob` date NOT NULL,
  `gender` varchar(1) NOT NULL,
  `semester` int(11) NOT NULL,
  `branch` text NOT NULL,
  `photo` blob NOT NULL COMMENT 'max size 60kb'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `violations`
--

CREATE TABLE `violations` (
  `vuid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Weekly`
--

CREATE TABLE `Weekly` (
  `art_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `abs` text NOT NULL,
  `image1` blob NOT NULL,
  `image2` blob NOT NULL,
  `image3` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic`
--
ALTER TABLE `academic`
  ADD PRIMARY KEY (`uid`,`sem`,`subject`);

--
-- Indexes for table `e_stock`
--
ALTER TABLE `e_stock`
  ADD PRIMARY KEY (`e_name`);

--
-- Indexes for table `e_transactions`
--
ALTER TABLE `e_transactions`
  ADD PRIMARY KEY (`uid`,`e_id`,`timestamp`);

--
-- Indexes for table `library_books`
--
ALTER TABLE `library_books`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `library_stock`
--
ALTER TABLE `library_stock`
  ADD PRIMARY KEY (`title`,`author`,`publisher`);

--
-- Indexes for table `library_transactions`
--
ALTER TABLE `library_transactions`
  ADD PRIMARY KEY (`uid`,`bid`,`timestamp`),
  ADD KEY `bid` (`bid`);

--
-- Indexes for table `Notice`
--
ALTER TABLE `Notice`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `violations`
--
ALTER TABLE `violations`
  ADD PRIMARY KEY (`vuid`),
  ADD UNIQUE KEY `uid` (`uid`,`vid`);

--
-- Indexes for table `Weekly`
--
ALTER TABLE `Weekly`
  ADD PRIMARY KEY (`art_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `academic`
--
ALTER TABLE `academic`
  ADD CONSTRAINT `academic_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `User` (`uid`) ON UPDATE NO ACTION;

--
-- Constraints for table `e_transactions`
--
ALTER TABLE `e_transactions`
  ADD CONSTRAINT `e_transactions_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `User` (`uid`) ON UPDATE CASCADE;

--
-- Constraints for table `library_transactions`
--
ALTER TABLE `library_transactions`
  ADD CONSTRAINT `library_transactions_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `User` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `library_transactions_ibfk_2` FOREIGN KEY (`bid`) REFERENCES `library_books` (`bid`) ON UPDATE CASCADE;

--
-- Constraints for table `violations`
--
ALTER TABLE `violations`
  ADD CONSTRAINT `violations_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `User` (`uid`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
