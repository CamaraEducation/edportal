<?php
    class Topics{
        static function index($id){
            return db()->query('SELECT * FROM `topics` WHERE `cid` = ? ORDER BY `range` ASC', $id);
        }

        static function lessons($id){
            return [
                'subs' => self::getSubs($id),
                'quiz' => self::getQuiz($id)
            ];
        }

        static function getSubs($id){
            return db()->query('SELECT * FROM `subtopics` WHERE `tid` = ? ORDER BY `range` ASC', $id);
        }

        static function getQuiz($id){
            return db()->query('SELECT * FROM `quiz` WHERE `tid` = ?', $id);
        }
    }