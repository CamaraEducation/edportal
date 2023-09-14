<?php
class Safeguarding{

    # safeguarding: id, title, content, type(doc, video, text), country, updated, created

    static function  index(){

        $result = db()->query("SELECT * FROM safeguarding");
        
        // check if there are any safeguarding records
        if($result->getRowCount() > 0):
            return self::sort($result);
        else:
            return false;
        endif;

    }

    static function  create(){

    }

    static function sort($result){
        # $result comes from index(), sort by type   
        $doc = []; $video = []; $text = [];

        foreach($result as $object){
            if($object->type == 'doc'){
                $doc[] = $object;
            }

            if($object->type == 'video'){
                $video[] = $object;
            }

            if($object->type == 'text'){
                $text[] = $object;
            }
        }

        return ['doc' => $doc, 'video' => $video, 'text' => $text];

    }
}