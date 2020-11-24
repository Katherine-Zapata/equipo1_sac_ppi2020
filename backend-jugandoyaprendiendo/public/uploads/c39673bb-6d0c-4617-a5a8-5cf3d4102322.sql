-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2020 a las 20:45:56
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jugando_aprendiendo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `id_docente` int(10) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Asignatura` varchar(100) NOT NULL,
  `id_correo` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`id_docente`, `Nombre`, `Asignatura`, `id_correo`) VALUES
(1, 'Jaime García', 'Tecnología', 0),
(2, 'Manuel Gonzalez', 'Tecnología', 0),
(3, 'Miguel Moreno', 'Tecnología', 0),
(4, 'Maria Jose', 'Tecnología', 0),
(5, 'Francisca Gomez', 'Tecnología', 0),
(6, 'Francisca Gomez', 'Tecnología', 0),
(7, 'Javier perez', 'Tecnología', 0),
(8, 'Jose Antonio', 'Tecnología', 0),
(9, 'Davis Ruíz', 'Tecnología', 0),
(10, 'Rafael Saez', 'Tecnología', 0),
(20, 'Laura Cardenas', 'Tecnología', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`id_docente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
