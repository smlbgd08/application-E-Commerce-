-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  Dim 12 avr. 2020 à 22:47
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP :  7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetspringsecurty`
--

--
-- Déchargement des données de la table `app_role`
--

INSERT INTO `app_role` (`id`, `role_name`) VALUES
(1, 'ADMIN'),
(2, 'USER');

--
-- Déchargement des données de la table `app_user`
--

INSERT INTO `app_user` (`id`, `actived`, `password`, `username`) VALUES
(1, b'1', '$2a$10$peoctk3KEMQzqP7gUZtp2ebjyeO/bkps40r0ZPr4dzh1kxfX/MUsi', 'user1'),
(2, b'1', '$2a$10$XeQEvhY3YzBweL3VY6VcxOMB1MmPqYynDrHrGzSpMrK5AZ594WFTu', 'user2'),
(3, b'1', '$2a$10$kJ6n/tIqcDCG.AC52jyAj.f1DGmz5Oj5E8msUdThYoBJuQ79apDyq', 'user3'),
(4, b'1', '$2a$10$r5GVvqg/l4SmeKjP8f0wreiUf13s5CESrVPbHFbemn5727OQjvdB2', 'admin'),
(5, b'1', '$2a$10$LlOcKHm5jPaspdloap6NweKvMRfU22cy0UOv8ijUU2NSDpvNwfbSi', 'ismail'),
(6, b'1', '$2a$10$IVG6Yk75IlMaYdE0KhB8ZO1nr4KoqH3t4YEK9U/Csk6Kvh7ETzSlq', 'bgd'),
(7, b'1', '$2a$10$zUvfeHGvFA/dMxX3Nux1luHar8P1CVaPwQQPoTACIwgh6mIcnFyou', 'houssam'),
(8, b'1', '$2a$10$6X63bVNRs3CrRWTu3WnoS.nzg3afEOOeWLbfNX9sEOMYZ/V8Eb1Q2', 'sahar'),
(9, b'1', '$2a$10$5qvFoSVVIU8kgGL76NyqvOgwk.p/k3rGc336Y47.bkcjyVRxSnuKK', 'ismailbgd');

--
-- Déchargement des données de la table `app_user_role`
--

INSERT INTO `app_user_role` (`app_user_id`, `role_id`) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(7, 2),
(8, 2),
(4, 1),
(9, 1);

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `description`, `name`) VALUES
(1, NULL, 'computers'),
(2, NULL, 'printers'),
(3, NULL, 'smart phone '),
(4, NULL, 'Télévisions'),
(5, NULL, 'VOITURE'),
(6, NULL, 'Vêtements');

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `availabe`, `currentprice`, `description`, `name`, `photo_name`, `promotion`, `selected`, `category_id`) VALUES
(1, b'1', 2000, 'description of this is product', 'LG TV', 'téléchargement (8).jpg', b'1', b'1', 4),
(2, b'0', 2326, 'printer gn 2010', 'printer', '01dR82YiD19MJX2eFioyQiP-1..v_1574904101.jpg', b'1', b'1', 2),
(15, b'1', 10000, 'mac book pro', 'mac book', 'téléchargement (7).jpg', b'1', b'1', 1),
(4, b'0', 0, 'asdasd', 'asdas', 'téléchargement (6).jpg', b'0', b'0', 3),
(5, b'1', 333, 'asdasd', 'sdsad', 'téléchargement (1).jpg', b'1', b'1', 5),
(6, b'1', 5000, 'Tv smart lg', 'TV smart ', 'téléchargement (5).jpg', b'1', b'1', 4),
(7, b'0', 400, 'xxx', 'spadrine', 'téléchargement (3).jpg', b'1', b'1', 6),
(8, b'0', 1500, 'coustoum homme 1', 'coustoum homme 1', 'téléchargement (4).jpg', b'1', b'1', 6),
(9, b'0', 500, 'COUSTOM homme', 'COUSTOM', 'trois-astuces-pour-bien-choisir-un-vetement-en-cadeau_5449587.jpg', b'1', b'0', 6),
(13, b'0', 1200, 's 9 samsung ', 'phone', 'nokia_8_1-Recommended-notchless.png', b'1', b'1', 3),
(12, b'0', 2500, 'dell latitude', 'dell', 'téléchargement.jpg', b'1', b'0', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
