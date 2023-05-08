<?php
class TimeController{
    public static function convert_sec_min($sec){
        $min = floor($sec / 60);
        $sec = $sec % 60;
        return $min . " min , " . $sec . " sec";
    }

    public static function convert_sec_hrs($sec){
        $hrs = floor($sec / 3600);
        $min = floor(($sec - ($hrs * 3600)) / 60);
        $sec = $sec % 60;
        return $hrs . " hr , " . $min . " min";
    }

    public static function convert_sec_min_hrs($sec){
        if($sec > 3600){
            return TimeController::convert_sec_hrs($sec);
        }else{
            return TimeController::convert_sec_min($sec);
        }
    }
}
?>