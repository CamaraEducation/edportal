<?php
class LegacyChanges{

    public static function init(){

        if(ConfigsController::get('last') < 223):

            $sql[0] = "CREATE TABLE IF NOT EXISTS `dropbox` ( 
				`id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(30) NOT NULL, `description` text NOT NULL, `path` text NOT NULL, `type` varchar(10) NOT NULL, `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8";

            # update subject icons
            $sql[2] = "UPDATE `subjects` SET `thumb` = '/upload/subject/thumb/et.png' WHERE `name` = 'Amharic Language'";
            $sql[3] = "UPDATE `subjects` SET `thumb` = '/upload/subject/thumb/fr.png' WHERE `name` = 'French Language'";
            $sql[4] = "UPDATE `subjects` SET `thumb` = '/upload/subject/thumb/cs.png' WHERE `name` = 'Computer Studies'";

            $sql[5] = "CREATE TABLE IF NOT EXISTS `manic_records` (
                    `id` INT(11) NOT NULL AUTO_INCREMENT, `last` JSON NOT NULL,
                PRIMARY KEY (`id`) USING BTREE ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB";

            /* Version 2.0.2 */
            $sql[6] = "CREATE TABLE IF NOT EXISTS `manic_usage` (
                    `id` INT(11) NOT NULL AUTO_INCREMENT, `DeviceName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci', `Name` TEXT NOT NULL COLLATE 'latin1_swedish_ci', `StartLocalTime` DATETIME NOT NULL, `EndLocalTime` DATETIME NOT NULL, `Duration` DOUBLE NOT NULL DEFAULT '0',
                PRIMARY KEY (`id`) USING BTREE ) COLLATE='latin1_swedish_ci'ENGINE=InnoDB;";
            
            $sql[7] = "CREATE TABLE IF NOT EXISTS `manic_apps` (
                    `id` INT(11) NOT NULL AUTO_INCREMENT, `DeviceName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci', `Name` TEXT NOT NULL COLLATE 'latin1_swedish_ci', `StartLocalTime` DATETIME NOT NULL, `EndLocalTime` DATETIME NOT NULL, `Duration` DOUBLE NOT NULL DEFAULT '0',
                PRIMARY KEY (`id`) USING BTREE
            ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;";
            
            $sql[8] = "CREATE TABLE IF NOT EXISTS `manic_docs` (
                    `id` INT(11) NOT NULL AUTO_INCREMENT, `DeviceName` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci', `Name` TEXT NOT NULL COLLATE 'latin1_swedish_ci', `StartLocalTime` DATETIME NOT NULL, `EndLocalTime` DATETIME NOT NULL, `Duration` DOUBLE NOT NULL DEFAULT '0',
                PRIMARY KEY (`id`) USING BTREE ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;";

            foreach($sql as $query):
                db()->query($query);
            endforeach;

        endif;

    }

}