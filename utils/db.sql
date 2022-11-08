CREATE DATABASE exalumnos;

CREATE TABLE IF NOT EXISTS `users` (
  `CUI` INT NOT NULL,
  `mail` VARCHAR(50) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `graduation_year` INT NOT NULL,
  `type_user` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CUI`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `profile` (
  `CUI` INT NOT NULL,
  `photo_profile` LONGTEXT NULL,
  `info` VARCHAR(300) NULL,
  `experience` LONGTEXT NULL,
  `skills` MEDIUMTEXT NULL,
  `especialidad` VARCHAR(100) NULL,
  `localidad` VARCHAR(50) NULL,
  PRIMARY KEY (`CUI`),
  CONSTRAINT `fk_Profile_1`
    FOREIGN KEY (`CUI`)
    REFERENCES `users` (`CUI`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `publication` (
  `idpublication` INT NOT NULL,
  `description` LONGTEXT NULL,
  `photo_publication` LONGTEXT NULL,
  `CUI` INT NOT NULL,
  PRIMARY KEY (`idpublication`, `CUI`),
  INDEX `fk_publication_1_idx` (`CUI` ASC),
  CONSTRAINT `fk_publication_1`
    FOREIGN KEY (`CUI`)
    REFERENCES `users` (`CUI`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `job_offer` (
  `idjob_offer` INT NOT NULL,
  `CUI` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description_job` LONGTEXT NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `contract_type` VARCHAR(45) NOT NULL,
  `requirements` LONGTEXT NOT NULL,
  `state` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idjob_offer`, `CUI`),
  INDEX `fk_job_offer_1_idx` (`CUI` ASC),
  CONSTRAINT `fk_job_offer_1`
    FOREIGN KEY (`CUI`)
    REFERENCES `users` (`CUI`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;



INSERT INTO users VALUES (20181744, 'lmita@unsa.edu.pe', 'root', 0, 'admin'); 