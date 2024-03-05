<?php

class Changes{

    public static function init(){
        self::v200();
        self::v223();
        self::v224();
    }

    public static function v200(){
        if(ConfigsController::get('last') >= 200 or ConfigsController::get('last') <= 222):
			exec('sudo unzip -o /www/wwwroot/default/upload/dropbox/manic.zip -d /www/wwwroot/');
			echo '<b class="text-success">SUCCESS: </b>Manic syncronization files updated successfully <br>'.PHP_EOL;
			
			db()->query("UPDATE config set `last` = 223 where id = 1");
		endif;
    }

    public static function v223(){
        
        if(ConfigsController::get('last') == 223):
            db()->query("
				CREATE TABLE IF NOT EXISTS `safeguarding` (
				`id` int(11) NOT NULL AUTO_INCREMENT,
				`title` text NOT NULL,
				`content` text NOT NULL,
				`type` char(50) NOT NULL DEFAULT '',
				`country` char(50) NOT NULL DEFAULT '',
				`updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				`created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
				PRIMARY KEY (`id`)
				) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
			");

			db()->query("
				DELETE FROM `safeguarding`;
				INSERT INTO `safeguarding` (`id`, `title`, `content`, `type`, `country`, `updated`, `created`) VALUES
					(1, 'Protecting our most vulnerable', '202312090129.txt', 'text', 'all', '2023-09-13 18:20:12', '2023-09-13 13:36:30'),
					(2, 'SCI Safeguarding & Digital Technology Tipsheet', '202312090129.pdf', 'doc', 'all', '2023-09-13 13:33:18', '2023-09-13 13:33:18'),
					(3, 'SCI_Safeguarding & Social Media (Field-Friendly Guidance)_EN', '202312091658.pdf', 'doc', 'all', '2023-09-13 17:01:12', '2023-09-13 17:01:12'),
					(4, 'Let us Talk pants', '202312090139.txt', 'text', 'all', '2023-09-13 18:20:29', '2023-09-13 18:10:52');
			");

			db()->query("UPDATE config set `last` = 224 where id = 1");
        endif;

    }

    public static function v224(){
        if(ConfigsController::get('last') == 224):
            exec("sudo cp -f /www/wwwroot/config.log /www/wwwroot/default/manic/");
            exec('sudo chmod -R 777 /www/wwwroot/default/manic');
            
            // drop manic jobs table if exists
            db()->query("DROP TABLE IF EXISTS `manic_jobs`");
            db()->query("UPDATE config set `last` = 225 where id = 1");
        endif;
    }

}