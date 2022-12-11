var themeOptionArr = {
	typography: 'HelveticaNeue',
	version: '',
	layout: 'vertical',
	primary: 'color_12',
	headerBg: 'color_1',
	navheaderBg: 'color_13',
	sidebarBg: 'color_13',
	sidebarStyle: 'mini',
	sidebarPosition: 'fixed',
	headerPosition: 'fixed',
	containerLayout: 'full',
	direction: 'ltr',
};
		
		

/* Cookies Function */
function setCookie(cname, cvalue, exhours) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (300*600*10000)); /* 30 Minutes */
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

function getCookie(cname) 
	{
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

function deleteCookie(cname) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (1)); // 1/1000 second
		var expires = "expires="+ d.toString();
		//document.cookie = cname + "=1;" + expires + ";path=/";
		document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"+";path=/";
	}

function deleteAllCookie(reload = true)
	{
		jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				deleteCookie(optionKey);
		});
		if(reload){
			location.reload();
		}
	}
 	
/* Cookies Function END */	
 	

(function($) {
	
	"use strict"
	
	var direction =  getUrlParams('dir');
	var theme =  getUrlParams('theme');
	
	/* Dz Theme Demo Settings  */
	
	var dezThemeSet0 = themeOptionArr;
	var dezThemeSet1 = themeOptionArr
	var dezThemeSet2 = themeOptionArr
	var dezThemeSet3 = themeOptionArr
	var dezThemeSet4 = themeOptionArr
	
	var dezThemeSet5 = themeOptionArr
	
	var dezThemeSet6 = themeOptionArr
	
	var dezThemeSet7 = themeOptionArr
	
	var dezThemeSet8 = themeOptionArr
		
	function themeChange(theme, direction){
		var themeSettings = {};
		themeSettings = eval('dezThemeSet'+theme);
		themeSettings.direction = direction;
		dezSettingsOptions = themeSettings; /* For Screen Resize */
		new dezSettings(themeSettings);
		
		setThemeInCookie(themeSettings);
	}
	
	function setThemeInCookie(themeSettings)
	{
		//console.log(themeSettings);
		jQuery.each(themeSettings, function(optionKey, optionValue) {
			setCookie(optionKey,optionValue);
		});
	}
	
	function setThemeLogo() {
		var logo = getCookie('logo_src');
		
		var logo2 = getCookie('logo_src2');
		
		if(logo != ''){
			jQuery('.nav-header .logo-abbr').attr("src", logo);
		}
		
		if(logo2 != ''){
			jQuery('.nav-header .logo-compact, .nav-header .brand-title').attr("src", logo2);
		}
	}
	
	function setThemeOptionOnPage()
	{
		if(getCookie('version') != '')
		{
			jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				var optionData = getCookie(optionKey);
				themeOptionArr[optionKey] = (optionData != '')?optionData:dezSettingsOptions[optionKey];
			});
			dezSettingsOptions = themeOptionArr;
			new dezSettings(dezSettingsOptions);
			
			setThemeLogo();
		}
	}
	
	jQuery(document).on('click', '.dz_theme_demo', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'ltr');
	});


	jQuery(document).on('click', '.dz_theme_demo_rtl', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'rtl');
	});
	
	
	jQuery(window).on('load', function(){
		direction = (direction != undefined)?direction:'ltr';
		if(theme != undefined){
			themeChange(theme, direction);
		}else if(direction != undefined){
			if(getCookie('version') == ''){	
				themeChange(0, direction);
			}
		}
		
		/* Set Theme On Page From Cookie */
		setThemeOptionOnPage();
		
		
		
		/* Light-Dark Theme Version Button Setting For Zenix */
		jQuery('.dz-theme-mode').on('click',function(){
			jQuery(this).toggleClass('active');
			
			if(jQuery(this).hasClass('active')){
				jQuery('body').attr('data-theme-version','dark');
				setCookie('version','dark');
			}else{
				jQuery('body').attr('data-theme-version','light');	
				setCookie('version','light');
			}
		});

		if(jQuery('body').data('theme-version') == 'light'){
			jQuery('.dz-theme-mode').removeClass('active');
		}else if(jQuery('body').data('theme-version') == 'dark'){
			jQuery('.dz-theme-mode').addClass('active');
		}

		/* Light-Dark Theme Version Button Setting For Zenix END */
		
	});
	

})(jQuery);