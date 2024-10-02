<?php

function bladeInit(){
    return new Class {
        protected $blade;
    
        public function __construct()
        {
            // Initialize Blade instance with configuration
            $this->blade = \Leaf\Config::get('views.blade')->configure(
                $this->getViewPath(),
                $this->getCachePath()
            );
            
            // Add .blade.js extension
            $this->blade->addExtension('blade.js', 'blade');
    
            foreach(get_class_methods($this) as $method){
                if(strpos($method, 'register') !== false){
                    $this->$method();
                }
            }
        }
    
        protected function getViewPath()
        {
            return AppConfig('views.path');
        }
    
        protected function getCachePath()
        {
            return AppConfig('views.cachePath');
        }
    
        protected function registerRouteDirective()
        {
            // Define @route directive
            $this->blade->compiler()->directive('route', function ($expression) {
                return "<?php echo route($expression); ?>";
            });
        }
    
        protected function registerScriptDirective()
        {
            // Define @script directive
            $this->blade->compiler()->directive('script', function ($expression) {
                $params = explode(',', trim($expression, "()'\""));
                $view = trim($params[0], "'\" ");
                $type = isset($params[1]) ? trim($params[1], "'\" ") : 'script';

                if($type == 'src'){
                    return <<<HTML
                    <?php
                        \$__env->startPush('scripts');
                        echo '<script src="' . ViewsPath('$view') . '"></script>' . PHP_EOL;
                        \$__env->stopPush();
                    ?>
                    HTML;
                }
            
                $scriptTag = "<script>";
                if($type == 'module') {
                    $scriptTag = "<script type=\'module\'>";
                }
            
                return <<<HTML
                <?php
                    \$view = str_replace('.', '/', '$view');
                    \$filePath = trim(ViewsPath(\$view . '.blade.js'), '//');
                    if (file_exists(\$filePath)) {
                        \$__env->startPush('scripts');
                        echo '$scriptTag' . PHP_EOL;
                        echo \$__env->make('$view', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render() . PHP_EOL;
                        echo chr(60) . "/script" . chr(62) . PHP_EOL;
                        \$__env->stopPush();
                    }
                ?>
                HTML;
            });
            
        }
    
        public function getBladeInstance()
        {
            return $this->blade;
        }
    };
}

bladeInit();