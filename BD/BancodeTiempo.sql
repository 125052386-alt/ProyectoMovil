DROP DATABASE IF EXISTS banco_tiempo;
//Creacion de la base de datos
CREATE DATABASE banco_tiempo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE banco_tiempo;

// Creacion de tablas y relaciones para el sistema de Banco de Tiempo
CREATE TABLE Usuario (
    id_usuario  INT AUTO_INCREMENT PRIMARY KEY,
    nombre      VARCHAR(30)  NOT NULL,
    correo      VARCHAR(100) NOT NULL UNIQUE,
    contrasena  VARCHAR(255) NOT NULL,
    rol         VARCHAR(20)  NOT NULL,
    estado      VARCHAR(20)  NOT NULL DEFAULT 'Activo'
);

CREATE TABLE Categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre       VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE Habilidades (
    id_habilidad INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario   INT NOT NULL,
    id_categoria INT NOT NULL,
    nombre       VARCHAR(30) NOT NULL,
    descripcion  VARCHAR(255),
    FOREIGN KEY (id_usuario)   REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
);

CREATE TABLE Servicios (
    id_servicio     INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario      INT NOT NULL,
    id_categoria    INT NOT NULL,
    titulo          VARCHAR(30) NOT NULL,
    descripcion     VARCHAR(255),
    duracion_horas  INT NOT NULL CHECK (duracion_horas > 0),
    estado          VARCHAR(20) NOT NULL DEFAULT 'Activo',
    FOREIGN KEY (id_usuario)   REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
);

CREATE TABLE Solicitudes (
    id_solicitud INT AUTO_INCREMENT PRIMARY KEY,
    id_servicio  INT NOT NULL,
    id_usuario   INT NOT NULL,
    fecha        DATETIME NOT NULL,
    estado       VARCHAR(20) NOT NULL DEFAULT 'Pendiente',
    FOREIGN KEY (id_servicio) REFERENCES Servicios(id_servicio),
    FOREIGN KEY (id_usuario)  REFERENCES Usuario(id_usuario)
);

CREATE TABLE Intercambio (
    id_intercambio INT AUTO_INCREMENT PRIMARY KEY,
    id_solicitud   INT NOT NULL UNIQUE,
    fecha_inicio   DATETIME NOT NULL,
    fecha_fin      DATETIME NULL,
    duracion       INT NULL,
    FOREIGN KEY (id_solicitud) REFERENCES Solicitudes(id_solicitud)
);

CREATE TABLE Credito (
    id_credito     INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario     INT NOT NULL,
    id_intercambio INT NULL,
    cantidad       INT NOT NULL,
    fecha          DATETIME NOT NULL,
    FOREIGN KEY (id_usuario)     REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_intercambio) REFERENCES Intercambio(id_intercambio)
);

CREATE TABLE Calificaciones (
    id_calificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_intercambio  INT NOT NULL,
    id_usuario      INT NOT NULL,
    puntuacion      INT NOT NULL CHECK (puntuacion BETWEEN 1 AND 5),
    comentario      VARCHAR(255),
    UNIQUE (id_intercambio, id_usuario),
    FOREIGN KEY (id_intercambio) REFERENCES Intercambio(id_intercambio),
    FOREIGN KEY (id_usuario)     REFERENCES Usuario(id_usuario)
);

CREATE TABLE Favoritos (
    id_favorito INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario  INT NOT NULL,
    id_servicio INT NOT NULL,
    UNIQUE (id_usuario, id_servicio),
    FOREIGN KEY (id_usuario)  REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_servicio) REFERENCES Servicios(id_servicio)
);

CREATE TABLE Historial (
    id_historial   INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario     INT NOT NULL,
    id_intercambio INT NOT NULL,
    FOREIGN KEY (id_usuario)     REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_intercambio) REFERENCES Intercambio(id_intercambio)
);

// Insertar datos de prueba
INSERT INTO Usuario (nombre, correo, contrasena, rol, estado) VALUES
('Administrador General',  'admin@bancotiempo.org',  SHA2('Admin123',256), 'Administrador', 'Activo'),
('Karen Hernández',        'karen@bancotiempo.org',  SHA2('Karen123',256), 'Participante',  'Activo'),
('Juan Pérez',             'juan@bancotiempo.org',   SHA2('Juan1234',256), 'Participante',  'Activo'),
('Lucía Méndez',           'lucia@bancotiempo.org',  SHA2('Lucia123',256), 'Participante',  'Activo'),
('Ana García',             'ana@bancotiempo.org',    SHA2('Ana12345',256), 'Participante',  'Activo'),
('Sofía Castro',           'sofia@bancotiempo.org',  SHA2('Sofia123',256), 'Participante',  'Inactivo');

INSERT INTO Categoria (nombre) VALUES
('Tecnología'), ('Educación e Idiomas'), ('Hogar y Reparaciones'),
('Artes y Música'), ('Alimentos');

INSERT INTO Habilidades (id_usuario, id_categoria, nombre, descripcion) VALUES
(2, 1, 'Desarrollo Web',        'Programación web con HTML, CSS y JavaScript'),
(2, 1, 'Reparación de PC',      'Mantenimiento y reparación de computadoras'),
(3, 1, 'Programación React',    'Asesoría en React y resolución de errores'),
(3, 2, 'Inglés Conversacional', 'Práctica de conversación en inglés'),
(4, 4, 'Pintura Acrílica',      'Técnicas de mezcla de color y pinceladas'),
(5, 2, 'Matemáticas',           'Álgebra y cálculo para preparatoria'),
(6, 4, 'Guitarra',              'Clases de guitarra y teoría musical'),
(5, 5, 'Cocina Casera',         'Recetas tradicionales y repostería');

INSERT INTO Servicios (id_usuario, id_categoria, titulo, descripcion, duracion_horas, estado) VALUES
(3, 1, 'Ayuda con Programación',  'Asesoría en desarrollo web, React y resolución de bugs', 2, 'Activo'),
(4, 4, 'Clases de Pintura',       'Técnicas de mezcla de color y pinceladas',               2, 'Activo'),
(2, 1, 'Configuración Wi-Fi',     'Optimización de routers y cableado para hogares',        1, 'Activo'),
(6, 4, 'Clases de Guitarra',      'Clases de guitarra y teoría musical',                    1, 'Activo'),
(5, 2, 'Matemáticas Preparatoria','Regularización de álgebra y cálculo',                    1, 'Activo'),
(2, 1, 'Reparación de PC',        'Diagnóstico y mantenimiento de computadoras',            2, 'Inactivo');

INSERT INTO Solicitudes (id_servicio, id_usuario, fecha, estado) VALUES
(1, 2, '2026-09-10 10:00:00', 'Completada'),
(4, 2, '2026-08-28 16:00:00', 'Completada'),
(5, 3, '2026-10-02 09:30:00', 'Aceptada'),
(2, 2, '2026-10-03 12:00:00', 'Pendiente'),
(3, 5, '2026-10-03 18:00:00', 'Pendiente');

INSERT INTO Intercambio (id_solicitud, fecha_inicio, fecha_fin, duracion) VALUES
(1, '2026-09-15 10:00:00', '2026-09-15 12:00:00', 2),
(2, '2026-08-31 16:00:00', '2026-08-31 17:00:00', 1),
(3, '2026-10-04 09:30:00', NULL, NULL);

INSERT INTO Credito (id_usuario, id_intercambio, cantidad, fecha) VALUES
(2, NULL, 10, '2026-08-01 00:00:00'),
(3, NULL, 10, '2026-08-01 00:00:00'),
(4, NULL, 10, '2026-08-01 00:00:00'),
(5, NULL, 10, '2026-08-01 00:00:00'),
(6, NULL, 10, '2026-08-01 00:00:00'),
(3, 1,  2, '2026-09-15 12:00:00'),
(2, 1, -2, '2026-09-15 12:00:00'),
(6, 2,  1, '2026-08-31 17:00:00'),
(2, 2, -1, '2026-08-31 17:00:00');

INSERT INTO Calificaciones (id_intercambio, id_usuario, puntuacion, comentario) VALUES
(1, 2, 5, 'Excelente sesión, resolvió todas mis dudas de React.'),
(1, 3, 5, 'Karen fue muy puntual y atenta.'),
(2, 2, 4, 'Muy buena clase de guitarra.');

INSERT INTO Favoritos (id_usuario, id_servicio) VALUES
(2, 1), (2, 5), (3, 2), (5, 1);

INSERT INTO Historial (id_usuario, id_intercambio) VALUES
(2, 1), (3, 1), (2, 2), (6, 2);

// Consultas simples
SELECT id_usuario, nombre, correo
FROM Usuario
WHERE rol = 'Participante' AND estado = 'Activo';

SELECT id_servicio, titulo, duracion_horas
FROM Servicios
WHERE estado = 'Activo'
ORDER BY duracion_horas DESC;

SELECT estado, COUNT(*) AS total
FROM Solicitudes
GROUP BY estado;

//Consultas con Inner Join

SELECT s.titulo, u.nombre AS ofrece, c.nombre AS categoria, s.duracion_horas
FROM Servicios s
INNER JOIN Usuario   u ON s.id_usuario   = u.id_usuario
INNER JOIN Categoria c ON s.id_categoria = c.id_categoria;

SELECT sol.id_solicitud, sol.fecha, sol.estado,
       us.nombre AS solicitante, s.titulo AS servicio, uo.nombre AS oferente
FROM Solicitudes sol
INNER JOIN Servicios s  ON sol.id_servicio = s.id_servicio
INNER JOIN Usuario  us  ON sol.id_usuario  = us.id_usuario
INNER JOIN Usuario  uo  ON s.id_usuario    = uo.id_usuario;

SELECT cal.id_calificacion, u.nombre AS califica, s.titulo AS servicio,
       cal.puntuacion, cal.comentario
FROM Calificaciones cal
INNER JOIN Usuario     u   ON cal.id_usuario     = u.id_usuario
INNER JOIN Intercambio i   ON cal.id_intercambio = i.id_intercambio
INNER JOIN Solicitudes sol ON i.id_solicitud     = sol.id_solicitud
INNER JOIN Servicios   s   ON sol.id_servicio    = s.id_servicio;


// Procedimientos almacenados

DELIMITER $$

CREATE PROCEDURE sp_registrar_solicitud(IN p_id_servicio INT, IN p_id_usuario INT)
BEGIN
    DECLARE v_dueno  INT;
    DECLARE v_horas  INT;
    DECLARE v_estado VARCHAR(20);
    DECLARE v_saldo  INT;

    SELECT id_usuario, duracion_horas, estado
      INTO v_dueno, v_horas, v_estado
      FROM Servicios WHERE id_servicio = p_id_servicio;

    IF v_dueno IS NULL OR v_estado <> 'Activo' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El servicio no existe o no está disponible';
    END IF;

    IF v_dueno = p_id_usuario THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No es posible solicitar un servicio propio';
    END IF;

    SELECT COALESCE(SUM(cantidad), 0) INTO v_saldo
      FROM Credito WHERE id_usuario = p_id_usuario;

    IF v_saldo < v_horas THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No cuentas con créditos suficientes';
    END IF;

    INSERT INTO Solicitudes (id_servicio, id_usuario, fecha, estado)
    VALUES (p_id_servicio, p_id_usuario, NOW(), 'Pendiente');

    SELECT LAST_INSERT_ID() AS id_solicitud_creada;
END$$

CREATE PROCEDURE sp_completar_intercambio(IN p_id_intercambio INT, IN p_horas INT)
BEGIN
    DECLARE v_id_solicitud INT;
    DECLARE v_solicitante  INT;
    DECLARE v_proveedor    INT;
    DECLARE v_ya_generado  INT;

    IF p_horas IS NULL OR p_horas <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Las horas realizadas deben ser mayores a cero';
    END IF;

    SELECT COUNT(*) INTO v_ya_generado
      FROM Credito WHERE id_intercambio = p_id_intercambio;

    IF v_ya_generado > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Este intercambio ya generó créditos';
    END IF;

    SELECT i.id_solicitud, sol.id_usuario, s.id_usuario
      INTO v_id_solicitud, v_solicitante, v_proveedor
      FROM Intercambio i
      INNER JOIN Solicitudes sol ON i.id_solicitud = sol.id_solicitud
      INNER JOIN Servicios   s   ON sol.id_servicio = s.id_servicio
     WHERE i.id_intercambio = p_id_intercambio;

    IF v_id_solicitud IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El intercambio no existe';
    END IF;

    START TRANSACTION;
        UPDATE Intercambio
           SET fecha_fin = NOW(), duracion = p_horas
         WHERE id_intercambio = p_id_intercambio;

        UPDATE Solicitudes SET estado = 'Completada' WHERE id_solicitud = v_id_solicitud;

        INSERT INTO Credito (id_usuario, id_intercambio, cantidad, fecha) VALUES
            (v_proveedor,   p_id_intercambio,  p_horas, NOW()),
            (v_solicitante, p_id_intercambio, -p_horas, NOW());

        INSERT INTO Historial (id_usuario, id_intercambio) VALUES
            (v_proveedor,   p_id_intercambio),
            (v_solicitante, p_id_intercambio);
    COMMIT;
END$$

DELIMITER ;

CALL sp_registrar_solicitud(2, 6);

CALL sp_completar_intercambio(3, 1);

SELECT u.nombre, SUM(c.cantidad) AS saldo
FROM Usuario u
INNER JOIN Credito c ON u.id_usuario = c.id_usuario
GROUP BY u.id_usuario, u.nombre;