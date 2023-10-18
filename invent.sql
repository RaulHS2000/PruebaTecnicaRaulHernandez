-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 18:08:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `invent`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas_transporte`
--

CREATE TABLE `empresas_transporte` (
  `empresa_transporte` varchar(65) NOT NULL,
  `codigos_postales` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresas_transporte`
--

INSERT INTO `empresas_transporte` (`empresa_transporte`, `codigos_postales`, `id`) VALUES
('Correos', '15xxx, 16xxx, 17xxx, 18xxx, 19xxx', 16),
('Seur', '20xxx, 21xxx, 22xxx, 23,xxx, 24xxx, 25xxx', 17),
('INVENT', 'Si ninguna empresa se puede hacer cargo, se  encargará al sistema interno de reparto', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envios_registrados`
--

CREATE TABLE `envios_registrados` (
  `id` int(11) NOT NULL,
  `direccion` text NOT NULL,
  `codigo_postal` varchar(65) NOT NULL,
  `destinatario` varchar(65) NOT NULL,
  `remitente` varchar(65) NOT NULL,
  `peso` decimal(7,2) NOT NULL,
  `empresa` varchar(65) NOT NULL,
  `precio` decimal(7,2) NOT NULL,
  `tipo_paquete` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `envios_registrados`
--

INSERT INTO `envios_registrados` (`id`, `direccion`, `codigo_postal`, `destinatario`, `remitente`, `peso`, `empresa`, `precio`, `tipo_paquete`) VALUES
(49, 'C/ Joan Baptista 32', '15671', 'Javier García', 'Sandra Collado', 0.30, 'Correos', 2.50, 'Paquete ligero'),
(50, 'C/ Felipe Vals 65', '25641', 'Alejandro Rivera', 'Pilar Sáez', 8.00, 'Seur', 123.00, 'Paquete pesado'),
(51, 'C/ Miguel Hernández 05', '32410', 'Raúl Hernández', 'Laura Gómez', 3.00, 'INVENT', 30.00, 'Paquete estándar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_paquetes`
--

CREATE TABLE `tipos_paquetes` (
  `tipo` varchar(65) NOT NULL,
  `intervalo_kg` varchar(65) NOT NULL,
  `formula_precio` varchar(65) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_paquetes`
--

INSERT INTO `tipos_paquetes` (`tipo`, `intervalo_kg`, `formula_precio`, `id`) VALUES
('Paquete ultra ligero', '0 < kg ≤ 0.1', 'Precio = kg * 5', 1),
('Paquete ligero', '0.1 < kg ≤ 0.3', 'Precio = kg * 5 + 1', 2),
('Paquete estándar', '0.3 < kg ≤ 5', 'Precio = kg * 10', 3),
('Paquete pesado', '5 < kg ≤ 10', 'Precio = kg * 5 + kg + 75', 4),
('Gran volumen', '10 < kg ≤ ∞', 'Precio = (kg−10) × 7.5 + 130 + kg\r\n', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(65) NOT NULL,
  `apellido` varchar(65) NOT NULL,
  `email` varchar(65) NOT NULL,
  `password` varchar(65) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `apellido`, `email`, `password`, `id`) VALUES
('Raúl', 'Hernández', 'rahesa@hotmail.es', 'inventrh', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empresas_transporte`
--
ALTER TABLE `empresas_transporte`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `envios_registrados`
--
ALTER TABLE `envios_registrados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipos_paquetes`
--
ALTER TABLE `tipos_paquetes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empresas_transporte`
--
ALTER TABLE `empresas_transporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `envios_registrados`
--
ALTER TABLE `envios_registrados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `tipos_paquetes`
--
ALTER TABLE `tipos_paquetes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
