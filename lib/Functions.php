<?php

/*
|--------------------------------------------------------------------------
| Pre Load Directory Files
|--------------------------------------------------------------------------
| This function is used to load all files in a given directory
| and its subdirectories into the application recursively.
| 
*/
function load_dir_files($directory) {
	if(is_dir($directory)){

		$scan = scandir($directory); unset($scan[0], $scan[1]);
		foreach($scan as $file) :

			if(is_dir($directory."/".$file)):
                load_dir_files($directory."/".$file);
                else: if(strpos($file, '.php') !== false) { require_once($directory."/".$file); }
			endif;

		endforeach;

    }

}

/*
|--------------------------------------------------------------------------
| Delete Directory and its contents
|--------------------------------------------------------------------------
| This function is used to delete a directory and its contents
| 
*/
function delete_dir($dirPath) {
    if (is_dir($dirPath)) {
        $files = scandir($dirPath);
        foreach ($files as $file) {
           if ($file !== '.' && $file !== '..') {
              $filePath = $dirPath . '/' . $file;
              if (is_dir($filePath)) {
                    delete_dir($filePath);
              } else {
                 unlink($filePath);
              }
           }
        }
        rmdir($dirPath);
     }
}

/*
|--------------------------------------------------------------------------
| Require Multiple Files
|--------------------------------------------------------------------------
| This function is used to require multiple files at once
| 
*/

function require_files(){
    foreach(func_get_args() as $file){
        require_once($file);
    }
}


/*
|--------------------------------------------------------------------------
| Localizations and Translations
|--------------------------------------------------------------------------
|
| This function is used to translate strings in your application.
| It takes a string and returns the translated string.
|
*/

function __($key){

    $language = cookie()->get('lang') ?? 'en';
    $directory = getcwd() . "/storage/languages/$language.json";

    // check if file exists
    if(!is_file($directory))        
        file_put_contents($directory, json_encode([]));

    $translation = json_decode(file_get_contents($directory), true);

    // if key is not found, push the key to the language file
    if(!isset($translation[$key]) and _env('app_env') == 'development'):

        $translation[$key] = $key;
        file_put_contents($directory, json_encode($translation, JSON_PRETTY_PRINT));

    endif;

    return $translation[$key] ?? $key;

}

/*
|--------------------------------------------------------------------------
| Extract Images from HTML
|--------------------------------------------------------------------------
|
| This function is used to extract images from an HTML string.
|
*/
function extract_images_from_html($html_content, $output_dir, $encoded = true)
{
    if($encoded)
        $html_content = html_entity_decode($html_content);

    // Regular expression to match base64 encoded image data
    $pattern = '/<img.*?src="data:image\/(.*?);base64,(.*?)".*?>/si';
    preg_match_all($pattern, $html_content, $matches, PREG_SET_ORDER);

    // Iterate through matched image data
    foreach ($matches as $match) {
        
        $image_format = $match[1];
        $image_data = base64_decode($match[2]);
        $image_filename = uniqid() . '.' . $image_format;

        file_put_contents($output_dir . $image_filename, $image_data);
        $public_dir = str_replace('storage/app/public', '/storage', $output_dir);
        $html_content = str_replace($match[0], '<img src="' . $public_dir  . $image_filename . '">', $html_content);

    }

    return $html_content;
}


/*
|--------------------------------------------------------------------------
| Substring
|--------------------------------------------------------------------------
|
| This function is used to get a substring from a string.
|
*/
function substring($string, $length, $end = '...'){

    if(strlen($string) > $length)
        return substr($string, 0, $length) . $end;

    return $string;

}

/*
|--------------------------------------------------------------------------
|  CSRF Token
|--------------------------------------------------------------------------
|
| This function is used to get the CSRF token.
|
*/
if(!function_exists('csrf_token')){

    function csrf_token(){
        return \Leaf\Anchor\CSRF::token();
    }

}

/*
|--------------------------------------------------------------------------
|  CSRF Field
|--------------------------------------------------------------------------
|
| This function is used to generate a CSRF token field.
|
*/
if(!function_exists('csrf_field')){

    function csrf_field(){
        return '<input type="hidden" name="_token" value="'.csrf_token().'">';
    }

}

/*
|--------------------------------------------------------------------------
|  CSRF Document Meta
|--------------------------------------------------------------------------
|
| This function is used to generate a CSRF token meta tag.
|
*/
if(!function_exists('csrf_meta')){

    function csrf_meta(){
        return '<meta name="csrf-token" content="'.csrf_token().'">';
    }

}

/*
|--------------------------------------------------------------------------
|  Carbon
|--------------------------------------------------------------------------
|
| This function is used to get the Carbon instance.
|
*/
if(!function_exists('carbon')){

    function carbon(){
        return \Carbon\Carbon::class;
    }

}

/*
|--------------------------------------------------------------------------
|  Carbon Now
|--------------------------------------------------------------------------
|
| This function is used to get the current time in Carbon format.
|
*/
if(!function_exists('now')){

    function now(){
        return \Carbon\Carbon::now();
    }

}

/*
|--------------------------------------------------------------------------
|  Active Tab
|--------------------------------------------------------------------------
|
| This function is used to check if a tab is active.
|
*/

function active($key, $value){
    return $key == $value ? 'activate active' : null;
}

/*
|--------------------------------------------------------------------------
|  Slugify
|--------------------------------------------------------------------------
|
| This function is used to slugify a string.
|
*/
if(!function_exists('slugify')){

    function slugify($string){
        
        $string = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);
        return strtolower(trim($string, '-'));

    }
}

/*
|--------------------------------------------------------------------------
|  Public Storage Path
|--------------------------------------------------------------------------
|
| This function is used to get the public storage path.
|
*/
function urlPath($file){

    if(strpos($file, '/assets/') === 0) return $file;
    if(strpos($file, '/storage/') === 0) return $file;

    return '/storage/' . trim($file, '/');
    
}

/*
|--------------------------------------------------------------------------
| Data (array|object) to XML (xml_encode)
|--------------------------------------------------------------------------
|
| This function is used to convert an array or object to XML.
|
*/
if(!function_exists('xml_encode')){

    function xml_encode($data, $rootNodeName = 'data', $xml = null) {
        if ($xml === null) {
            $xml = new SimpleXMLElement("<?xml version='1.0' encoding='utf-8'?><$rootNodeName></$rootNodeName>");
        }
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                xml_encode($value, $key, $xml->addChild($key));
            } else {
                $xml->addChild($key, $value);
            }
        }
        return $xml->asXML();
    }

}

/*
|--------------------------------------------------------------------------
| XML to Data (xml_decode)
|--------------------------------------------------------------------------
|
| This function is used to convert XML to an array or object.
|
*/

/*
|--------------------------------------------------------------------------
|  Sanitize HTML Content (xss filter)
|--------------------------------------------------------------------------
|
| This function is used to sanitize HTML content.
| Remove Inline JavaScript: Strip out <script> tags and their content.
| Remove JavaScript Event Handlers: Remove attributes starting with on (e.g., onclick, onload).
| Remove All Attributes: Remove all HTML attributes except for style.
|
*/

function sanitizeHtml($html, $purgeAttributes = false) {
    // 1. Remove <script> tags and their content
    $html = preg_replace('#<script(.*?)>(.*?)</script>#is', '', $html);

    // 2. Remove attributes starting with "on" (event handlers)
    $html = preg_replace('#\s*on\w+="[^"]*"#i', '', $html);

    // 3. Remove all attributes except "style"
    if($purgeAttributes){
        $html = preg_replace_callback('#<([a-z]+)([^>]*)>#i', function ($matches) {
            // Only keep the style attribute
            if (preg_match('/style="[^"]*"/i', $matches[2], $styleAttr)) {
                return "<{$matches[1]} {$styleAttr[0]}>";
            }
            return "<{$matches[1]}>";
        }, $html);
    }
    
    // 4. Remove svg tags
    $html = preg_replace('#<svg(.*?)>(.*?)</svg>#is', '', $html);

    return $html;
}