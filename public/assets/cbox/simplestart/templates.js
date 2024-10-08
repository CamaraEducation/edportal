var data_templates = {
    name: 'Simple Start',
    categories: [
        { id: 1, name: 'Basic' }, 
        { id: 2, name: 'Slider' }, 
        { id: 3, name: 'Video' }, 
        { id: 4, name: 'Custom' }, 
    ],
    designs: [

		/* RANDOM */
		{
		    'thumbnail': 'preview/simple-01.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text type-poppins box-autofit is-section-100">
				<div class="is-overlay">
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-13 size-17 is-content-1100">

							<div class="row">
								<div class="column full">
									<h1 class="text-center font-normal leading-11 size-72">A forward thinking studio delivering digital solutions that help your business.</h1>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>

							</div>

							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
										<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide" title="">Get in Touch</a>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-02.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-700 leading-14 size-18">

							<div class="row">
								<div class="column full">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
        {
            'thumbnail': 'preview/navbar-01.png',
            'category': '1',
            'googleFonts': [],
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
            'type': 'navbar',
            'html':
                '<div class="is-section is-section-navbar is-section-sticky is-section-auto is-box type-opensans" style="height:90px;background:transparent;">' +
                    '<div class="is-overlay">' +
                        '<div class="is-overlay-content content-selectable" data-module="navbar-builder" data-module-desc="Navigation Bar" data-dialog-width="570px" data-dialog-height="640px" data-html="' +
                        
                        encodeURIComponent('' +
						'<div class="is-topbar">' +
							'<div class="is-topbar-container" style="max-width:980px;">' +
								'<div class="is-topbar-logo">' +
									'<a class="is-logo-link" href="." title="Your Name">' +
										// '<img class="is-photo-profile circle" src="[%IMAGE_PATH%]images/innova-logo.png" alt="Your Name">' +
										'<span class="is-sitename">Your Name</span>' +
									'</a>' +
								'</div>' +
								'<div class="is-topbar-menu">' +
									'<a id="is-menu-toggle" href="javascript:void(0)" title="Menu"><span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></a>' +
									'<div class="is-menu-overlay"></div>' +
									'<div class="is-menu">' +
										'<div class="is-menu-search-input"><input id="is_txtSearch" type="text" placeholder="Search" /><button id="is_btnSearch"><i class="icon-menu-search"></i></button></div>' +
										'<ul class="is-menu-links">' +
											'<li><a href="#section1"><i class="icon ion-android-home"></i></a></li>' +
											'<li><a href="portfolio">Portfolio</a></li>' +
											'<li><a href="about">About</a></li>' +
											'<li><a href=""><i class="icon ion-android-share-alt"></i></a>' +
												'<ul>' +
													'<li><a href="https://twitter.com">Twitter</a></li>' +
													'<li><a href="https://facebook">Facebook</a></li>' +
													'<li><a href="https://youtube.com">Youtube</a></li>' +
												'</ul>' +
											'</li>' +
										'</ul>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<scr' + 'ipt>' +
							'var navbarReady = function (fn) {' +
								'var stateCheck = setInterval(function () {' +
									'if (typeof NavBar === "undefined") return;' +
									'clearInterval(stateCheck);' +
									'try { fn() } catch (e) { }' +
								'}, 1);' +
							'};' +
							'navbarReady(function () {' +
								'var obj = new NavBar({' +
									'onSearch: (keywords)=>{' +
										'alert(keywords)' +
									'}' +
								'});' +
								'obj.init();' +
							'});' +
							'' +
						'</scr' + 'ipt>' +

                        '') +
                        
                        '" data-settings="' +

                        encodeURIComponent('' +
                        '{' +
                            '"logotext": "Your Name",' +
                            '"logolink": "",' +
                            '"logocircle": true,' +
                            '"topbar": "",' +
                            '"maxwidth": 980,' +
                            '"menu":' +
                                '[' + 

                                '{"name": "Home", "link": "#section1", "html": "' + encodeURIComponent('<i class=\"icon ion-android-home\"></i>') + '", "class": "", "sub": []},' +
                                
                                '{"name": "Portfolio", "link": "portfolio", "class": "","sub": []},' +
                                '{"name": "About", "link": "about", "class": "","sub": []},' +
                                
                                '{"name": "Share", "link": "", "html": "' + encodeURIComponent('<i class=\"icon ion-android-share-alt\"></i>') + '", "class": "", "sub": [' +
                                    '{"name": "Twitter","link": "https://twitter.com", "class": "", "sub": []},' +
                                    '{"name": "Facebook","link": "https://facebook", "class": "", "sub": []},' +
                                    '{"name": "Youtube","link": "https://youtube.com", "class": "", "sub": []}' +
                                    ']}' +

                                ']' +
                        '}') + '">' +

                        '</div>' +

                    '</div>' +
                '\n</div>'
        },

		{
		    'thumbnail': 'preview/simple-03.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-540">

									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-6 box-autofit">
						<div class="is-overlay">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-17 leading-13 is-content-540">
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type.</p>

										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-04.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-14 size-18 is-content-1360">
							<div class="row relative sm-items-1">
								<div class="py-6 flex flex-col justify-center items-start column half">
									<h1 class="leading-none font-normal size-76">We create simple and effective designs.</h1>
									<div class="spacer height-40"></div>
									<p style="max-width: 500px;">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

									<div class="spacer height-20"></div>

									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mb-1 py-2 size-18 px-9 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-wide mt-3" title="" style="background-color: rgb(240, 240, 240);">Our Works</a>
										<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mb-1 py-2 size-18 px-9 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-wide mt-3" title="">Get in Touch</a>
									</div>
								</div>
								<div class="flex flex-col justify-center items-center column half"><img src="[%IMAGE_PATH%]images/pexels-marta-milczarek-751.jpeg" alt="" data-filename="image3-5x5.png"></div>

							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-05.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit min-height-40">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-640">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-68 font-extralight">Learn Anytime, Anywhere, and Grow Your Skills</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type.</p>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div>
												<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 size-16 px-12 uppercase text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-75" title="" style="background-color: rgb(240, 240, 240);">Get Started</a>
												<a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 pt-3 pb-3 px-12 uppercase border-current hover:border-current font-normal leading-relaxed rounded-full size-15 tracking-widest" title="">Explore&nbsp;<i class="icon ion-android-arrow-forward"></i></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-6 is-content-top box-autofit min-height-60">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-marta-milczarek-751.jpeg&quot;); background-position: 50% 60%;"></div>
						</div>

					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-06.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 is-content-1300 leading-13">
							<div class="row">
								<div class="column full">
									<h2 class="text-center size-48 font-extralight">Our Works</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt="">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/liana-mikah-HstwCJX0jT4-unsplash.jpeg" alt="">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
			
			
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpeg" alt="">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
			
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-07.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 leading-13 is-content-1100">
							<div class="row">
								<div class="column full">
									<h2 class="tracking-wider capitalize text-center font-extralight size-48">Portfolio</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third"><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt="">
									<div class="spacer height-20"></div>
									<h3 class="font-light size-24">Item One</h3>
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/liana-mikah-HstwCJX0jT4-unsplash.jpeg" alt="">
									<div class="spacer height-20"></div>
									<h3 class="font-light size-24">Item Two</h3>
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpeg" alt="">
									<div class="spacer height-20"></div>
									<h3 class="font-light size-24">Item Three</h3>
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-08.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-13 size-16 is-content-1100">
							<div class="row">
								<div class="column full">
									<h2 class="capitalize size-48 font-extralight text-center">Our Works</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third p-1 flex flex-col justify-end items-center"><img style="margin:0" src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt=""></div>
								<div class="column third p-1 flex flex-col justify-end items-center"><img style="margin:0" src="[%IMAGE_PATH%]images/liana-mikah-HstwCJX0jT4-unsplash.jpeg" alt=""></div>
								<div class="column third p-1 flex flex-col justify-end items-center"><img style="margin:0" src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpeg" alt=""></div>
							</div>
							<div class="row">
								<div class="column half p-1 flex flex-col justify-start items-center"><img style="margin:0" src="[%IMAGE_PATH%]images/in-the-making-studio-gx6NxtpgHqY-unsplash.jpeg" alt=""></div>
								<div class="column half p-1 flex flex-col justify-start items-center" style="min-height: 376.164px;"><img style="margin:0" src="[%IMAGE_PATH%]images/pexels-karolina-grabowska-5942725223.jpeg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},


		{
		    'thumbnail': 'preview/simple-09.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-13 size-16 is-content-1000">
							<div class="row">
								<div class="column full">
									<h1 class="text-center tracking-wide size-48 font-extralight">Meet Our Team</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="flex flex-col justify-center items-center column third px-3">
									<div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/matese-fields-pvHma684eEI-unsplash-editPLXOkUx.jpeg" alt=""></div>
									<div class="spacer height-20"></div>
									<p class="size-19 font-light text-center">Vincent Nelson</p>
									<p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="flex flex-col justify-center items-center column third px-3">
									<div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/beach-sea-coast-sand-ocean-girl-pxhere-3-editWGbuhNq.jpeg" alt=""></div>
									<div class="spacer height-20"></div>
									<p class="size-19 font-light text-center">Freja E. Andersen</p>
									<p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="flex flex-col justify-center items-center column third px-3">
									<div class="img-circular" style="margin:25px 0;width: 10vw;height: 10vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="[%IMAGE_PATH%]images/StockSnap_0XZGV7R94F-editwKNjiBl.jpeg" alt=""></div>
									<div class="spacer height-20"></div>
									<p class="size-19 font-light text-center">Nathan Williams</p>
									<p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-10.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 size-16 leading-13 is-content-1200">
							<div class="row">
								<div style="min-height: 54px;" class="column full">
									<h1 class="text-center size-48 font-light tracking-wide">What Makes Us Different</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<div class="text-left">
										<i class="icon ion-ios-chatbubble-outline size-32"></i>
									</div>
									<h3 class="font-normal tracking-wider size-21">Feature One</h3>
									<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
								<div class="column third">
									<div class="text-left">
										<i class="icon ion-ios-camera-outline size-32"></i>
									</div>
									<h3 class="font-normal tracking-wider size-21">Feature Two</h3>
									<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
								<div class="column third">
									<div class="text-left">
										<i class="icon ion-ios-cloud-outline size-32"></i>
									</div>
									<h3 class="font-normal tracking-wider size-21">Feature Three</h3>
									<p style="color: rgb(123, 123, 123);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-11.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 box-space type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-7 box-autofit min-height-70">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/joyful-rtqzy-xTSaM-unsplash.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-5 is-content-bottom box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90 is-content-bottom edge-y-0-75">
								<div class="is-container v2 is-content-left edge-x-0 is-content-660 size-17 leading-13">
									<div class="row">
										<div class="column full">
											<h3 class="size-32 text-left font-normal">About</h3>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p class="text-justify">Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-12.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-1100 size-18 leading-14">
							<div class="row">
								<div class="column third" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third" style="width: 63.4981%; flex: 0 0 auto;">
									<h1 class="text-center leading-none size-80 font-extralight">Words From Heart</h1>
									<div class="spacer height-20"></div>
									<p class="text-center uppercase tracking-125 size-14" style="color: rgb(145, 145, 145);">By Selma Laursen</p>
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 100%;" class="column third">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third" style="width: 100%;">
									<div class="spacer height-40"></div>
								</div>
								<div class="column third" style="width: 38.8966%; flex: 0 0 auto;">
									<p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;</p>
								</div>
								<div style="width: 100%;" class="column third">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row sm-autofit">
								<div style="width: 100%;" class="column third sm-hidden">
									<div class="spacer height-80"></div>
								</div>
								<div style="width: 54.2069%; flex: 0 0 auto;" class="flex flex-col justify-center items-start column third">
									<p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;</p>
									<p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
								</div>
								<div style="width: 100%;" class="column third sm-hidden">
									<div class="spacer height-80"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		{
		    'thumbnail': 'preview/simple-13.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-1160 size-17 leading-13">
							<div class="row">
								<div class="column half flex flex-col justify-center items-start pr-10" style="width: 33.5298%; flex: 0 0 auto;">
									<h3 class="size-32 font-normal">One for all and all for one, helping everybody.</h3>
									<p class="size-18" style="color: rgb(116, 116, 116);">— The Author</p>
									<div class="spacer height-80 hideonmobile"></div>
									<p class="text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column half" style="width: 100%;"><img src="[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg" alt=""></div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-14.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 box-space type-poppins">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-6 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 is-content-440 size-18 leading-14">
									<div class="row">
										<div class="column full">
											<h3 class="size-38 font-light">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-6 box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/hello-revival-pEm90kpsF-0-unsplash.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
			'thumbnail': 'preview/simple-15.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-6 is-content-top is-dark-text box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-maksim-goncharenok-4352247.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-4">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h3 class="text-center size-76 font-light">A New Different Perspective.</h3>
											<div class="spacer height-20"></div>
			
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">View Gallery</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h2 class="font-light">Why Choose Us</h2>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature One</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Two</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Three</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Four</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		{
			'thumbnail': 'preview/simple-16.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-box is-section-100 type-poppins is-light-text box-autofit min-height-70">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/the-unmistakables-suNS4qGA1i0-unsplash-editVLhIybF.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-12 is-content-960">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-92">We create simple and effective designs.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 57.5556%; flex: 0 0 auto;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},
		{
			'thumbnail': 'preview/simple-17.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-box is-section-100 type-poppins is-dark-text box-autofit min-height-70">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cottonbro-1054793.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-12 is-content-960 is-content-right edge-x-4">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-92 font-extralight">We create simple and effective designs.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 57.5556%; flex: 0 0 auto;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		{
		    'thumbnail': 'preview/simple-18.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 edge-y-0-5">
						<div class="is-container v2 is-content-1800 size-17 leading-13">
							<div class="row sm-autofit">
								<div class="column third sm-hidden" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third" style="width: 43.9411%; flex: 0 0 auto;">
									<h3 class="text-center size-32 font-light">One for all and all for one, helping everybody.</h3>
									<div class="spacer height-20"></div>
									<p class="text-justify" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third sm-hidden" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt="">
								</div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/evie-s-kbWrEiV2veg-unsplash.jpeg" alt="">
								</div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpeg" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-19.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 edge-y-0-5">
						<div class="is-container v2 is-content-1800 size-17 leading-13">
							<div class="row sm-autofit">
								<div class="column third sm-hidden" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third" style="width: 43.9411%; flex: 0 0 auto;">
									<h3 class="text-center size-32 font-light">One for all and all for one, helping everybody.</h3>
									<div class="spacer height-20"></div>
									<p class="text-justify" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third sm-hidden" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt="">
								</div>
								<div class="column half">
									<img src="[%IMAGE_PATH%]images/evie-s-kbWrEiV2veg-unsplash.jpeg" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-20.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 box-space type-poppins">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-3 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-17 leading-13 is-content-420">
									<div class="row">
										<div class="column full">
											<h3 class="size-32 font-normal">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
											<div class="spacer height-20"></div>
											<p class="text-left" style="color: rgb(116, 116, 116);">— The Author</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p class="text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p class="text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-9">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/brina-blum-RNBxppNpAPc-unsplash2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
			'thumbnail': 'preview/simple-21.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-6 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-17 leading-13 is-content-540">
									<div class="row">
										<div class="column full">
											<h3 class="size-76 font-extralight">Simple, Clean, Bright</h3>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-6 box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/daihana-monares-Z1KmyDldY-g-unsplash.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
				</div>
			</div>
		`
		},
		{
			'thumbnail': 'preview/simple-22.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/ana-bejarano-7ourhaJ2sJc-unsplash.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-17 leading-13 is-content-540">
									<div class="row">
										<div class="column full">
											<h3 class="size-76 font-extralight">Smell it, taste it.</h3>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		{
			'thumbnail': 'preview/simple-23.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-4 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255 247 231);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-17 leading-13 is-content-480">
									<div class="row">
										<div class="column full">
											<h3 class="font-light">Start From Here</h3>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-4 box-autofit">
						<div class="is-overlay" style="background-color: rgb(237 237 214);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13" style="max-width: 440px;">
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-4 is-box is-dark-text is-content-bottom box-autofit">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/daihana-monares-Z1KmyDldY-g-unsplash.jpeg&quot;);"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90 is-content-bottom edge-y-2">
								<div class="is-container v2 size-17 leading-13 is-content-480">
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		{
		    'thumbnail': 'preview/simple-24.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 edge-y-0-25">
						<div class="is-container v2 is-content-1220 size-17 leading-13">
							<div class="row">
								<div class="column two-fourth">
									<h2 class="size-160 text-left font-medium">About:</h2>
									<p class="size-24 font-normal">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</p>
									<p class="text-left" style="color: rgb(116, 116, 116);">— The Author</p>
								</div>
								<div class="column fourth">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full sm-hidden">
									<div class="spacer height-160"></div>
								</div>
							</div>
							<div class="row sm-autofit">
								<div class="column third sm-hidden">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third">
									<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
								</div>
								<div class="column third">
									<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-25.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-13 is-content-1200">
							<div class="row">
								<div class="column full">
									<h1 class="text-center size-48 font-light">Their Stories</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="text-center" style="color: rgb(109, 109, 109);">what people say about us</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 20.029%; flex: 0 0 auto;" class="column fifth">
									<div class="text-left leading-18">
										<i class="icon ion-quote size-32" style="color: rgb(0, 0, 0);"></i>
									</div>
									<div class="spacer height-20"></div>
									<p class="size-21 font-extralight">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>
									<div class="spacer height-20"></div>
									<p style="color: rgb(109, 109, 109);">- A User</p>
								</div>
								<div style="width: 31.1234%; flex: 0 0 auto;" class="column fifth"><img src="[%IMAGE_PATH%]images/pexels-pexels-user-1082291.jpeg" alt="" data-filename="oswald-elsaboath-XqBAem99bYM-unsplash-editWD2IShM.jpeg"></div>
								<div class="column fifth" style="width: 5.89319%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>

								<div style="width: 23.1419%; flex: 0 0 auto;" class="column fifth"><img src="[%IMAGE_PATH%]images/pexels-ksenia-chernaya-3965520-editWV08OYD.jpeg" alt="" data-filename="roman-kraft-Q7FTeBhr100-unsplash.jpeg"></div>
								<div class="flex flex-col justify-end items-start column fifth" style="width: 100%;">
									<div class="text-left leading-18">
										<i class="icon ion-quote size-32" style="color: rgb(0, 0, 0);"></i>
									</div>
									<div class="spacer height-20"></div>
									<p class="size-21 font-extralight">Super fast. Awesome products with great support!</p>
									<div class="spacer height-20"></div>
									<p style="color: rgb(109, 109, 109);">- A User</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-26.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-1160 size-17 leading-13">
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="display">
										<p style="letter-spacing: 3px;" class="size-14 uppercase font-medium">your name here</p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="size-116 tracking-tighter text-left normal-case leading-none font-normal">Hi there, I design &amp; build highly-crafted brands &amp; websites</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column half">
									<div class="spacer height-80"></div>
								</div>
			
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-left button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">Portfolio</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-27.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 size-16 leading-13 is-content-1000">
							<div class="row">
								<div class="flex flex-col justify-center items-start column third" style="width: 100%;">
									<p class="text-justify">Story about me.</p>
									<h2 class="font-extralight size-64 leading-none">Elaine Moreno</h2>
									<div class="spacer height-40"></div>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<div class="spacer height-40"></div>
									<div class="is-social text-left">
										<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
										<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
										<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
									</div>
								</div>
								<div class="flex flex-col justify-center items-start column third" style="width: 15.8828%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
								<div style="width: 100%;" class="column third"><img src="[%IMAGE_PATH%]images/bhRKj32039.jpg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-28.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-16 leading-13 is-content-1600">
						<div class="row">
							<div class="column full">
								<h2 class="size-48 leading-none">Portfolio</h2>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
						<div class="row sm-items-3 md-items-3">
							<div class="column fifth">
								<h3 class="tracking-wider size-24 font-semibold">Project One</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg" alt="">
							</div>
							<div class="column fifth">
								<h3 class="tracking-wider size-24 font-semibold">Project Two</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/pexels-angela-roma-7319094-editFwaP6cp.jpeg" alt="">
							</div>
							<div class="column fifth">
								<h3 class="tracking-wider size-24 font-semibold">Project Three</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg" alt="">
							</div>
							<div class="column fifth">
								<h3 class="tracking-wider size-24 font-semibold">Project Four</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/frank-flores-BAf3g-id7P4-unsplash-editHCGGfSS.jpeg" alt="">
							</div>
							<div class="column fifth">
								<h3 class="tracking-wider size-24 font-semibold">Project Five</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p><img src="[%IMAGE_PATH%]images/pexels-ksenia-chernaya-3965520-editWV08OYD.jpeg" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`
		},

		{
		    'thumbnail': 'preview/simple-29.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-70 type-opensans box-autofit min-height-70">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-liza-summer-6347543-editsfM745W.jpeg&quot;);"></div>
				</div>
			</div>
			<div class="is-section is-box is-dark-text is-content-top is-section-30 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 is-content-top edge-y-0-25">
						<div class="is-container v2 is-content-940 size-17 leading-13">
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h3 class="size-32 text-center leading-12 font-normal tracking-wider">Words</h3>
									<p class="size-19 text-center leading-18" style="color: rgb(116, 116, 116);">— The Author —</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="size-16 text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-30.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box box-space is-section-70 type-opensans box-autofit min-height-70">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/the-unmistakables-suNS4qGA1i0-unsplash-editVLhIybF.jpeg&quot;);"></div>
				</div>
			</div>
			<div class="is-section is-box is-dark-text is-content-top is-section-30 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 is-content-top edge-y-0-25">
						<div class="is-container v2 is-content-940 size-17 leading-13">
							<div class="row">
								<div class="column full">
									<h3 class="size-32 text-center leading-12 font-normal tracking-wider">Words</h3>
									<p class="size-19 text-center leading-18" style="color: rgb(116, 116, 116);">— The Author —</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="size-16 text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-31.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box box-space is-section-70 type-opensans box-autofit min-height-70">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-ivan-samkov-4458554.jpg&quot;);"></div>
				</div>
			</div>
			<div class="is-section is-box is-dark-text is-section-30 is-content-top type-opensans box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 is-content-top edge-y-0">
						<div class="is-container v2 is-content-1200 size-17 leading-13">
							<div class="row sm-autofit">
								<div class="column third sm-hidden xs-hidden">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third">
									<p class="size-16 text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
								</div>
								<div class="column third">
									<p class="size-16 text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},


		{
			'thumbnail': 'preview/simple-32.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 type-poppins">
			<div class="is-boxes">
				<div class="is-box is-box-6 is-dark-text is-content-top">
					<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
						<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-maksim-goncharenok-4352247.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
					</div>
					<div class="is-boxes">
						<div class="is-box-centered is-content-top edge-y-5">
							<div class="is-container v2 size-17 leading-13 is-content-480">
								<div class="row">
									<div class="column full">
										<h3 class="font-light size-35 text-left">One for all and all for one, helping everybody.</h3>
										<div class="spacer height-20"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="is-box is-box-6 is-dark-text is-content-top">
					<div class="is-overlay">
						<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
					</div>
					<div class="is-boxes">
						<div class="is-box-centered is-opacity-90 is-content-top edge-y-5">
							<div class="is-container v2 size-17 leading-13 is-content-480">
								<div class="row">
									<div class="column full">
										<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type.</p>
										<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
		},

		{
			'thumbnail': 'preview/simple-33.png',
			'category': '1',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 type-poppins box-space box-space-xxs">
				<div class="is-boxes">
					<div class="is-box is-box-6 is-content-top is-light-text hover-zoom box-autofit min-height-60">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">

							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg&quot;);">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-5">
								<div class="is-container v2 size-17 leading-13 is-content-480">


									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-6 is-content-top is-light-text hover-zoom box-autofit min-height-60">
						<div class="is-overlay">

							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg&quot;);">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90 is-content-top edge-y-5">
								<div class="is-container v2 size-17 leading-13 is-content-480">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		{
		    'thumbnail': 'preview/simple-35.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section type-poppins box-space box-space-xxs stack-top is-section-50">
				<div class="is-boxes">
					<div class="is-box is-box-4 hover-zoom is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-darina-belonogova-8789658.jpg&quot;); background-position: 50% 60%;">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-4 hover-zoom is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-rachel-claire-4857766.jpg&quot;); background-position: 50% 60%;">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			
					<div class="is-box is-box-4 hover-zoom is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-6963787.jpg&quot;); background-position: 50% 60%;">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Three</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="is-section type-poppins box-space box-space-xxs stack-bottom is-section-50">
				<div class="is-boxes">
					<div class="is-box is-box-4 hover-zoom is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-dmitry-zvolskiy-2082092.jpg&quot;); background-position: 50% 60%;">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-4 hover-zoom is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-anna-nekrashevich-7815528.jpg&quot;); background-position: 50% 60%;">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			
					<div class="is-box is-box-4 hover-zoom is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/tetiana-shadrina-_0fGCbEBdtk-unsplash.jpeg&quot;); background-position: 50% 60%;">
								<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Three</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},

		{
		    'thumbnail': 'preview/simple-36.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section type-poppins is-section-100 box-space box-space-xxs">
				<div class="is-boxes">
					<div class="is-box is-box-4 hover-zoom is-content-bottom">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-dmitry-zvolskiy-2082092.jpg&quot;); background-position: 50% 60%;"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 size-17 leading-13 is-content-none" style="
				padding: 0;
				margin-bottom: 0;
			">
									<div class="row row-lock">
										<div class="column column-lock full py-7 px-12" style="min-height: 228.446px; background-color: rgb(255, 255, 255);">
											<h3 class="font-light text-center">Feature One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-13">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-4 hover-zoom is-content-bottom">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-anna-nekrashevich-7815528.jpg&quot;); background-position: 50% 60%; width: 108.388%; left: -4.19421%; top: -10%;" data-y="-10"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 size-17 leading-13 is-content-none" style="
				padding: 0;
				margin-bottom: 0;
			">
									<div class="row row-lock">
										<div class="column column-lock full py-7 px-12" style="background-color: rgb(255, 255, 255); min-height: 228.446px;">
											<h3 class="font-light text-center">Feature Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-13">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			
					<div class="is-box is-box-4 hover-zoom is-content-bottom">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/tetiana-shadrina-_0fGCbEBdtk-unsplash.jpeg&quot;); background-position: 50% 60%;"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 size-17 leading-13 is-content-none" style="
				padding: 0;
				margin-bottom: 0;
			">
									<div class="row row-lock">
										<div class="column column-lock full py-7 px-12" style="background-color: rgb(255, 255, 255); min-height: 228.446px;">
											<h3 class="font-light text-center">Feature Three</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-13">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},

		{
		    'thumbnail': 'preview/simple-37.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section type-poppins is-section-100">
				<div class="is-boxes">
					<div class="is-box is-box-4 hover-zoom is-content-bottom">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-dmitry-zvolskiy-2082092.jpg&quot;); background-position: 50% 60%;"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 size-17 leading-13 is-content-none" style="
				padding: 0;
				margin-bottom: 0;
			">
									<div class="row row-lock">
										<div class="column column-lock full py-7 px-12" style="min-height: 228.446px; background-color: rgb(255, 255, 255);">
											<h3 class="font-light text-center">Feature One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-13">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-4 hover-zoom is-content-bottom">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-anna-nekrashevich-7815528.jpg&quot;); background-position: 50% 60%; width: 108.388%; left: -4.19421%; top: -10%;" data-y="-10"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 size-17 leading-13 is-content-none" style="
				padding: 0;
				margin-bottom: 0;
			">
									<div class="row row-lock">
										<div class="column column-lock full py-7 px-12" style="background-color: rgb(255, 255, 255); min-height: 228.446px;">
											<h3 class="font-light text-center">Feature Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-13">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			
					<div class="is-box is-box-4 hover-zoom is-content-bottom">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/tetiana-shadrina-_0fGCbEBdtk-unsplash.jpeg&quot;); background-position: 50% 60%;"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 size-17 leading-13 is-content-none" style="
				padding: 0;
				margin-bottom: 0;
			">
									<div class="row row-lock">
										<div class="column column-lock full py-7 px-12" style="background-color: rgb(255, 255, 255); min-height: 228.446px;">
											<h3 class="font-light text-center">Feature Three</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125 size-13">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},

		{
		    'thumbnail': 'preview/simple-34.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 edge-y-0-25">
						<div class="is-container v2 is-content-1320 size-16 leading-13">
							<div class="row">
								<div class="column third" style="width: 36.7206%; flex: 0 0 auto;">
									<h3 class="size-42 font-normal">Fascinating Places, Great Journey.</h3>
									<p class="size-18" style="color: rgb(145, 145, 145);">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
								</div>
								<div class="column two-third xs-hidden" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row sm-autofit">
								<div class="column full xs-hidden sm-hidden">
									<div class="spacer height-180"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
								</div>
								<div class="column third">
									<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
								</div>
								<div class="column third">
									<p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		/* SLIDER */

		{
		    'thumbnail': 'preview/slider-01.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins is-light-text box-autofit min-height-60">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
						<div id="{id}" class="glide cover" style="display:none">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/the-unmistakables-suNS4qGA1i0-unsplash-editVLhIybF.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/frank-flores-eyFcZLLYvfA-unsplash.jpeg" alt=""></div>
									</li>
								</ul>
							</div>
							<div class="glide__arrows" data-glide-el="controls">
								<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
									</svg>
								</button>
								<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
									</svg>
								</button>
							</div>
						</div>
						<script>
							var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
								'<defs>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
										'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
									'</symbol>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
										'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
									'</symbol>' +
								'</defs>' +
							'</svg>';
							var pre = document.querySelector('#ion-ios-arrow-left');
							if(!pre) {
								document.body.insertAdjacentHTML('beforeend', svgDef);
							}
							
							var docReady = function(fn) {
								var stateCheck = setInterval(function() {
									//if (typeof Glide === 'undefined') return;
									var waitSlider = false;
									if(typeof Glide !== 'undefined') {
										if((new Glide).mount) {
											// Do Nothing 
										}  else {
											waitSlider = true;
										}
									} else {
										waitSlider = true;
									}
									if(waitSlider) return;
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
		
									clearInterval(stateCheck);
									try {
										fn();
									} catch (e) {}
								}, 1);
							};
							docReady(function() {
								const glideSlide = document.querySelector("#{id}");
								if(!glideSlide) return;
								glideSlide.style.display="";

								var _{id} = new Glide("#{id}", {
									type: "carousel",
									autoplay: 3000,
									animationDuration: 1000,
									gap: 0,
									perView: 1,
									hoverpause: false,
									arrow: true,
									dots: false,
									breakpoints: {
										970: {
											perView: 1,
											gap: 0
										}
									},
								}).mount();
							});
						</script>
					`)}" data-settings="${encodeURIComponent(`
						{
							"type": "carousel",
							"autoplay": 3000,
							"animationDuration":1000,
							"gap":0,
							"perView":1,
							"hoverpause": false,
							"arrow":true,
							"dots":false,
							"fit":"cover",
							"images":
								[
									{
										"src": "[%IMAGE_PATH%]images/the-unmistakables-suNS4qGA1i0-unsplash-editVLhIybF.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/frank-flores-eyFcZLLYvfA-unsplash.jpeg", 
										"caption": "", "style": ""
									}
								]
						}
					`)}">
						
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-13 is-content-960" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full" style="min-height: 54px;">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-92">We create simple and effective designs.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 57.5556%; flex: 0 0 auto;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
		{
		    'thumbnail': 'preview/slider-02.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-align-left is-light-text is-content-top box-autofit min-height-60">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
								<div id="{id}" class="glide cover" style="display:none">
									<div data-glide-el="track" class="glide__track">
										<ul class="glide__slides">
											<li class="glide__slide">
												<div><img src="[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg" alt=""></div>
											</li>
											<li class="glide__slide">
												<div><img src="[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg" alt=""></div>
											</li>
										</ul>
									</div>
									<div class="glide__arrows" data-glide-el="controls">
										<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
											<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
												<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
											</svg>
										</button>
										<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
											<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
												<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
											</svg>
										</button>
									</div>
								</div>
								<script>
									var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
										'<defs>' +
											'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
												'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
											'</symbol>' +
											'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
												'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
											'</symbol>' +
										'</defs>' +
									'</svg>';
									var pre = document.querySelector('#ion-ios-arrow-left');
									if(!pre) {
										document.body.insertAdjacentHTML('beforeend', svgDef);
									}
									
									var docReady = function(fn) {
										var stateCheck = setInterval(function() {
											//if (typeof Glide === 'undefined') return;
											var waitSlider = false;
											if(typeof Glide !== 'undefined') {
												if((new Glide).mount) {
													// Do Nothing 
												}  else {
													waitSlider = true;
												}
											} else {
												waitSlider = true;
											}
											if(waitSlider) return;
											if (typeof skrollrr === 'undefined') return;
											if (typeof skrollrr.lax === 'undefined') return;
				
											clearInterval(stateCheck);
											try {
												fn();
											} catch (e) {}
										}, 1);
									};
									docReady(function() {
										const glideSlide = document.querySelector("#{id}");
										if(!glideSlide) return;
										glideSlide.style.display="";

										var _{id} = new Glide("#{id}", {
											type: "carousel",
											autoplay: 3000,
											animationDuration: 1000,
											gap: 0,
											perView: 1,
											hoverpause: false,
											arrow: true,
											dots: false,
											breakpoints: {
												970: {
													perView: 1,
													gap: 0
												}
											},
										}).mount();
									});
								</script>
							`)}" data-settings="${encodeURIComponent(`
								{
									"type": "carousel",
									"autoplay": 3000,
									"animationDuration":1000,
									"gap":0,
									"perView":1,
									"hoverpause": false,
									"arrow":true,
									"dots":false,
									"fit":"cover",
									"images":
										[
											{
												"src": "[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg", 
												"caption": "", "style": ""
											},
											{
												"src": "[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg", 
												"caption": "", "style": ""
											}
										]
								}
							`)}">
								
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-3">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h3 class="text-center size-76 font-light">A New Different Perspective.</h3>
											<div class="spacer height-20"></div>

											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">View Gallery</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-dark-text box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h2 class="font-light">Why Choose Us</h2>

										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature One</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Two</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Three</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Four</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/slider-03.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-dark-text box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-80 font-extralight">We create simple and effective designs.</h1>
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half" style="width: 77.39%; flex: 0 0 auto;">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type.</p>
										</div>
										<div class="column half" style="width: 100%;">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-align-left is-content-top is-light-text box-autofit min-height-60">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
								<div id="{id}" class="glide cover" style="display:none">
									<div data-glide-el="track" class="glide__track">
										<ul class="glide__slides">
											<li class="glide__slide">
												<div><img src="[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg" alt=""></div>
											</li>
											<li class="glide__slide">
												<div><img src="[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg" alt=""></div>
											</li>
										</ul>
									</div>
									<div class="glide__arrows" data-glide-el="controls">
										<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
											<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
												<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
											</svg>
										</button>
										<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
											<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
												<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
											</svg>
										</button>
									</div>
								</div>
								<script>
									var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
										'<defs>' +
											'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
												'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
											'</symbol>' +
											'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
												'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
											'</symbol>' +
										'</defs>' +
									'</svg>';
									var pre = document.querySelector('#ion-ios-arrow-left');
									if(!pre) {
										document.body.insertAdjacentHTML('beforeend', svgDef);
									}
									
									var docReady = function(fn) {
										var stateCheck = setInterval(function() {
											//if (typeof Glide === 'undefined') return;
											var waitSlider = false;
											if(typeof Glide !== 'undefined') {
												if((new Glide).mount) {
													// Do Nothing 
												}  else {
													waitSlider = true;
												}
											} else {
												waitSlider = true;
											}
											if(waitSlider) return;
											if (typeof skrollrr === 'undefined') return;
											if (typeof skrollrr.lax === 'undefined') return;
				
											clearInterval(stateCheck);
											try {
												fn();
											} catch (e) {}
										}, 1);
									};
									docReady(function() {
										const glideSlide = document.querySelector("#{id}");
										if(!glideSlide) return;
										glideSlide.style.display="";

										var _{id} = new Glide("#{id}", {
											type: "carousel",
											autoplay: 3000,
											animationDuration: 1000,
											gap: 0,
											perView: 1,
											hoverpause: false,
											arrow: true,
											dots: false,
											breakpoints: {
												970: {
													perView: 1,
													gap: 0
												}
											},
										}).mount();
									});
								</script>
							`)}" data-settings="${encodeURIComponent(`
								{
									"type": "carousel",
									"autoplay": 3000,
									"animationDuration":1000,
									"gap":0,
									"perView":1,
									"hoverpause": false,
									"arrow":true,
									"dots":false,
									"fit":"cover",
									"images":
										[
											{
												"src": "[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg", 
												"caption": "", "style": ""
											},
											{
												"src": "[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg", 
												"caption": "", "style": ""
											}
										]
								}
							`)}">
								
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/slider-04.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-box is-align-left is-light-text type-opensans is-section-80">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
						<div id="{id}" class="glide cover" style="display:none">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/tetiana-shadrina-_0fGCbEBdtk-unsplash.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-marta-milczarek-751.jpeg" alt=""></div>
									</li>
								</ul>
							</div>
							<div class="glide__arrows" data-glide-el="controls">
								<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
									</svg>
								</button>
								<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
									</svg>
								</button>
							</div>
						</div>
							<script>
							var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
								'<defs>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
										'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
									'</symbol>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
										'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
									'</symbol>' +
								'</defs>' +
							'</svg>';
							var pre = document.querySelector('#ion-ios-arrow-left');
							if(!pre) {
								document.body.insertAdjacentHTML('beforeend', svgDef);
							}
							
							var docReady = function(fn) {
								var stateCheck = setInterval(function() {
									//if (typeof Glide === 'undefined') return;
									var waitSlider = false;
									if(typeof Glide !== 'undefined') {
										if((new Glide).mount) {
											// Do Nothing 
										}  else {
											waitSlider = true;
										}
									} else {
										waitSlider = true;
									}
									if(waitSlider) return;
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
		
									clearInterval(stateCheck);
									try {
										fn();
									} catch (e) {}
								}, 1);
							};
							docReady(function() {
								const glideSlide = document.querySelector("#{id}");
								if(!glideSlide) return;
								glideSlide.style.display="";

								var _{id} = new Glide("#{id}", {
									type: "carousel",
									autoplay: 3000,
									animationDuration: 1000,
									gap: 0,
									perView: 2,
									hoverpause: false,
									arrow: true,
									dots: false,
									breakpoints: {
										970: {
											perView: 1,
											gap: 0
										}
									},
								}).mount();
							});
						</script>
					`)}" data-settings="${encodeURIComponent(`
						{
							"type": "carousel",
							"autoplay": 3000,
							"animationDuration":1000,
							"gap":0,
							"perView":2,
							"hoverpause": false,
							"arrow":true,
							"dots":false,
							"fit":"cover",
							"images":
								[
									{
										"src": "[%IMAGE_PATH%]images/tetiana-shadrina-_0fGCbEBdtk-unsplash.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/pexels-marta-milczarek-751.jpeg", 
										"caption": "", "style": ""
									}
								]
						}
					`)}">
						
					</div>
				</div>
			</div>
`
		},
		{
		    'thumbnail': 'preview/slider-05.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-box is-align-left is-light-text type-opensans is-section-70">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
						<div id="{id}" class="glide cover" style="display:none">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-kulbir-10386013.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt=""></div>
									</li>
								</ul>
							</div>
							<div class="glide__arrows" data-glide-el="controls">
								<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
									</svg>
								</button>
								<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
									</svg>
								</button>
							</div>
						</div>
						<script>
							var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
								'<defs>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
										'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
									'</symbol>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
										'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
									'</symbol>' +
								'</defs>' +
							'</svg>';
							var pre = document.querySelector('#ion-ios-arrow-left');
							if(!pre) {
								document.body.insertAdjacentHTML('beforeend', svgDef);
							}
							
							var docReady = function(fn) {
								var stateCheck = setInterval(function() {
									//if (typeof Glide === 'undefined') return;
									var waitSlider = false;
									if(typeof Glide !== 'undefined') {
										if((new Glide).mount) {
											// Do Nothing 
										}  else {
											waitSlider = true;
										}
									} else {
										waitSlider = true;
									}
									if(waitSlider) return;
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
		
									clearInterval(stateCheck);
									try {
										fn();
									} catch (e) {}
								}, 1);
							};
							docReady(function() {
								const glideSlide = document.querySelector("#{id}");
								if(!glideSlide) return;
								glideSlide.style.display="";

								var _{id} = new Glide("#{id}", {
									type: "carousel",
									autoplay: 3000,
									animationDuration: 1000,
									gap: 0,
									perView: 3,
									hoverpause: false,
									arrow: true,
									dots: false,
									breakpoints: {
										970: {
											perView: 1,
											gap: 0
										}
									},
								}).mount();
							});
						</script>
					`)}" data-settings="${encodeURIComponent(`
						{
							"type": "carousel",
							"autoplay": 3000,
							"animationDuration":1000,
							"gap":0,
							"perView":3,
							"hoverpause": false,
							"arrow":true,
							"dots":false,
							"fit":"cover",
							"images":
								[
									{
										"src": "[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/pexels-kulbir-10386013.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg", 
										"caption": "", "style": ""
									}
								]
						}
					`)}">
						
					</div>
				</div>
			</div>
`
		},
		{
		    'thumbnail': 'preview/slider-06.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-box is-align-left is-light-text type-opensans is-section-70">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="slider-box" data-module-desc="Slider" data-html="${encodeURIComponent(`
						<div id="{id}" class="glide cover" style="display:none">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-kulbir-10386013.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-sies-studio-116741182.jpeg" alt=""></div>
									</li>
								</ul>
							</div>
							<div class="glide__arrows" data-glide-el="controls">
								<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
									</svg>
								</button>
								<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
									</svg>
								</button>
							</div>
						</div>
						<script>
							var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
								'<defs>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
										'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
									'</symbol>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
										'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
									'</symbol>' +
								'</defs>' +
							'</svg>';
							var pre = document.querySelector('#ion-ios-arrow-left');
							if(!pre) {
								document.body.insertAdjacentHTML('beforeend', svgDef);
							}
							
							var docReady = function(fn) {
								var stateCheck = setInterval(function() {
									//if (typeof Glide === 'undefined') return;
									var waitSlider = false;
									if(typeof Glide !== 'undefined') {
										if((new Glide).mount) {
											// Do Nothing 
										}  else {
											waitSlider = true;
										}
									} else {
										waitSlider = true;
									}
									if(waitSlider) return;
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
		
									clearInterval(stateCheck);
									try {
										fn();
									} catch (e) {}
								}, 1);
							};
							docReady(function() {
								const glideSlide = document.querySelector("#{id}");
								if(!glideSlide) return;
								glideSlide.style.display="";

								var _{id} = new Glide("#{id}", {
									type: "carousel",
									autoplay: 3000,
									animationDuration: 1000,
									gap: 0,
									perView: 4,
									hoverpause: false,
									arrow: true,
									dots: false,
									breakpoints: {
										970: {
											perView: 1,
											gap: 0
										}
									},
								}).mount();
							});
						</script>
					`)}" data-settings="${encodeURIComponent(`
						{
							"type": "carousel",
							"autoplay": 3000,
							"animationDuration":1000,
							"gap":0,
							"perView":4,
							"hoverpause": false,
							"arrow":true,
							"dots":false,
							"fit":"cover",
							"images":
								[
									{
										"src": "[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/pexels-kulbir-10386013.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg", 
										"caption": "", "style": ""
									},
									{
										"src": "[%IMAGE_PATH%]images/pexels-sies-studio-116741182.jpeg", 
										"caption": "", "style": ""
									}
								]
						}
					`)}">
						
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/coverflow-01.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'glide',
		    'html': `
			<div class="is-section is-box type-poppins is-section-50 box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-700 leading-14 size-18">
							<div class="row">
								<div class="column full">
									<h1 class="normal-case font-light size-48 text-center">Designing and building highly-crafted brands and websites.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-125">Read More</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" style="background-color: rgb(240, 240, 240);">Get Started</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="is-section is-section-50 is-box is-align-left type-poppins is-light-text section-flow">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-dialog-width="1200px" data-dialog-height="900px" data-module="coverflow-box" data-module-desc="Coverflow" data-html="${encodeURIComponent(`
						<div id="{id}" class="glide cover coverflow" style="display:none">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/hello-revival-pEm90kpsF-0-unsplash.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-marina-podrez-11674118-editHV5kzrQ.jpg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-kulbir-10386013.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-maksim-goncharenok-4352247.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg" alt=""></div>
									</li>
									<li class="glide__slide">
										<div><img src="[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg" alt=""></div>
									</li>
								</ul>
							</div>
							<div class="glide__arrows" data-glide-el="controls">
								<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
									</svg>
								</button>
								<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<svg style="width:4.3vw;height:4.3vw;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
									</svg>
								</button>
							</div>
						</div>
						<script>
							var svgDef = '<svg width="0" height="0" style="position:absolute;display:none;">' +
								'<defs>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">' +
										'<path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>' +
									'</symbol>' +
									'<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">' +
										'<path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>' +
									'</symbol>' +
								'</defs>' +
							'</svg>';
							var pre = document.querySelector('#ion-ios-arrow-left');
							if(!pre) {
								document.body.insertAdjacentHTML('beforeend', svgDef);
							}
							
							var docReady = function(fn) {
								var stateCheck = setInterval(function() {
									//if (typeof Glide === 'undefined') return;
									var waitSlider = false;
									if(typeof Glide !== 'undefined') {
										if((new Glide).mount) {
											// Do Nothing 
										}  else {
											waitSlider = true;
										}
									} else {
										waitSlider = true;
									}
									if(waitSlider) return;
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;

									clearInterval(stateCheck);
									try {
										fn();
									} catch (e) {}
								}, 1);
							};
							docReady(function() {
								const glideSlide = document.querySelector("#{id}");
								if(!glideSlide) return;
								glideSlide.style.display="";
		
								const glideSlides = document.querySelectorAll('#{id} .glide__slide');
		
								const perView = 3;
		
								glideSlides.forEach(slide=>{
									let video = slide.querySelector('video');
									if(video) changeVideo(video);
								});
		
								window.addEventListener('resize', ()=>{
									glideSlides.forEach(slide=>{
										let video = slide.querySelector('video');
										if(video) changeVideo(video);
									});
								});
		
								function changeVideo(video) {
									if(!video) return;
									let changed=false;
									let source = video.querySelector('source');
									let vidDefault = source.getAttribute('data-default');
									let vid240 = source.getAttribute('data-240');
									let vid360 = source.getAttribute('data-360');
									let vid480 = source.getAttribute('data-480');
									let vid540 = source.getAttribute('data-540');
									let vid720 = source.getAttribute('data-720');
									let vid1080 = source.getAttribute('data-1080');
									let vid1440 = source.getAttribute('data-1440');
									let vid2160 = source.getAttribute('data-2160');
									let vW = window.innerWidth;
									if(vW<=426) {
										if(vid240) {
											if(source.getAttribute('src')!==vid240) {
												source.setAttribute('src', vid240);changed=true;
											} else return;
										}
										else if(vid360) {
											if(source.getAttribute('src')!==vid360) {
												source.setAttribute('src', vid360);changed=true;
											} else return;
										}
										else if(vid480) {
											if(source.getAttribute('src')!==vid480) {
												source.setAttribute('src', vid480);changed=true;
											} else return;
										}
										else if(vid540) {
											if(source.getAttribute('src')!==vid540) {
												source.setAttribute('src', vid540);changed=true;
											} else return;
										}
										else if(vid720) {
											if(source.getAttribute('src')!==vid720) {
												source.setAttribute('src', vid720);changed=true;
											} else return;
										}
									} else if (426<vW && vW<=640) {
										if(vid360) {
											if(source.getAttribute('src')!==vid360) {
												source.setAttribute('src', vid360);changed=true;
											} else return;
										}
										else if(vid480) {
											if(source.getAttribute('src')!==vid480) {
												source.setAttribute('src', vid480);changed=true;
											} else return;
										}
										else if(vid540) {
											if(source.getAttribute('src')!==vid540) {
												source.setAttribute('src', vid540);changed=true;
											} else return;
										}
										else if(vid720) {
											if(source.getAttribute('src')!==vid720) {
												source.setAttribute('src', vid720);changed=true;
											} else return;
										}
									} else if (640<vW && vW<=854) {
										if(vid480) {
											if(source.getAttribute('src')!==vid480) {
												source.setAttribute('src', vid480);changed=true;
											} else return;
										}
										else if(vid540) {
											if(source.getAttribute('src')!==vid540) {
												source.setAttribute('src', vid540);changed=true;
											} else return;
										}
										else if(vid720) {
											if(source.getAttribute('src')!==vid720) {
												source.setAttribute('src', vid720);changed=true;
											} else return;
										}
									} else if (854<vW && vW<=960) {
										if(vid540) {
											if(source.getAttribute('src')!==vid540) {
												source.setAttribute('src', vid540);changed=true;
											} else return;
										}
										else if(vid720) {
											if(source.getAttribute('src')!==vid720) {
												source.setAttribute('src', vid720);changed=true;
											} else return;
										}
									} else if (vW>960 && vW<=1280) {
										if(vid720) {
											if(source.getAttribute('src')!==vid720) {
												source.setAttribute('src', vid720);changed=true;
											} else return;
										}
									} else if (1280<vW && vW<=1920) {
										if(vid1080) {
											if(source.getAttribute('src')!==vid1080) {
												source.setAttribute('src', vid1080);changed=true;
											} else return;
										}
									} else if (1920<vW && vW<=2560) {
										if(vid1440) {
											if(source.getAttribute('src')!==vid1440) {
												source.setAttribute('src', vid1440);changed=true;
											} else return;
										}
									} else if (2560<vW) {
										if(vid2160) {
											if(source.getAttribute('src')!==vid2160) {
												source.setAttribute('src', vid2160);changed=true;
											} else return;
										}
										else if(vid1440) {
											if(source.getAttribute('src')!==vid1440) {
												source.setAttribute('src', vid1440);changed=true;
											} else return;
										}
									}
									
									if(changed) {
										video.pause();
										video.currentTime = 0;
										video.load();
										if(video.closest('.play')) {
											video.play();
										}
									} else {
										if(source.getAttribute('src')!==vidDefault) {
											video.pause();
											video.currentTime = 0;
											source.setAttribute('src', vidDefault);
											video.load();
										} 
									}
								}
		
								function stopVideo(slide) {
									const video = slide.querySelector('video');
									if(video) {
										video.pause();
										video.currentTime = 0;
									}
									slide.classList.remove('active');
									slide.classList.remove('play');
								}
		
								function playVideo(slide) {
									let video = slide.querySelector('video');
									if(video) {
										video.play();
									}
									slide.classList.add('play');
								}
								
		                        function coverflow(index) {
									let activeSlide = glideSlides[index];
									let nextSlide = activeSlide.nextElementSibling;
									let next2Slide;
									if(nextSlide) next2Slide = nextSlide.nextElementSibling;
									let next3Slide;
									if(next2Slide) next3Slide = next2Slide.nextElementSibling;
		
									activeSlide.classList.remove('glide__slide--previous');
									activeSlide.classList.remove('glide__slide--following');
		
									if(activeSlide.nextElementSibling) {
										activeSlide.nextElementSibling.classList.remove('glide__slide--previous');
										activeSlide.nextElementSibling.classList.remove('glide__slide--following');
										activeSlide.nextElementSibling.classList.add('glide__slide--following');
									}
		
									if(activeSlide.previousElementSibling) {
										activeSlide.previousElementSibling.classList.remove('glide__slide--previous');
										activeSlide.previousElementSibling.classList.remove('glide__slide--following');
										activeSlide.previousElementSibling.classList.add('glide__slide--previous');
									}
		
									playVideo(activeSlide);
		
									activeSlide.classList.add('active');
		
									let elms = activeSlide.parentNode.querySelectorAll('.glide__slide');
									elms.forEach(elm=>{
										if(elm===activeSlide) return;
		
										stopVideo(elm);
									});
		
									const slider = activeSlide.closest('.glide');
									slider.classList.add('running');
								}
								
								let myslider = document.querySelector("#{id}");
								let _{id} = new Glide(myslider, {
									type: "slider",
									autoplay: 3000,
									animationDuration: 600,
									gap: 0,
									perView: 3,
									startAt: 1,
									hoverpause: false,
									arrow: true,
									dots: false,
									breakpoints: {
										575: {
											perView: 1,
											peek: 50
										},

										414: {
											perView: 1,
											peek: 40
										},

										360: {
											perView: 1,
											peek: 30
										}
									},
									focusAt: "center",
								});
		
		
								_{id}.on('mount.after', function () {
									coverflow(_{id}.index, true);
								});
		
								_{id}.on('run', function (event) {
									coverflow(_{id}.index);
								});
		
								_{id}.mount();
		
							});
						</script>
					`)}" data-settings="${encodeURIComponent(`
						{
							"type": "slider",
							"autoplay": 3000,
							"animationDuration":600,
							"gap":0,
							"perView":3,
							"hoverpause": false,
							"arrow":true,
							"dots":false,
							"fit":"cover",
							"images":
							[
								{
									"src": "[%IMAGE_PATH%]images/hello-revival-pEm90kpsF-0-unsplash.jpeg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/pexels-marina-podrez-11674118-editHV5kzrQ.jpg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpeg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/pexels-kulbir-10386013.jpeg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/pexels-maksim-goncharenok-4352247.jpeg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg", 
									"caption": "", "style": ""
								},
								{
									"src": "[%IMAGE_PATH%]images/pexels-kulbir-10837921.jpeg", 
									"caption": "", "style": ""
								}
							]
						}
					`)}">
						
					</div>
				</div>
			</div>
`
		},

        /* SLICK SLIDER */

		{
		    'thumbnail': 'preview/slider-01.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
			'type': 'slick',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins is-light-text">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="${encodeURIComponent(`
						<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">
							<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/the-unmistakables-suNS4qGA1i0-unsplash-editVLhIybF.jpeg');">
							</div>
							<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/frank-flores-eyFcZLLYvfA-unsplash.jpeg');">
							</div>
						</div>

						<script>
							var docReady = function (fn) {
								var stateCheck = setInterval(function () {
									if (document.readyState !== "complete") return;
									clearInterval(stateCheck);
									try { fn() } catch (e) { }
								}, 1);
							};
							docReady(function () {
								jQuery("#{id}").slick({
									dots: false,
									arrows: true,
									infinite: true,
									speed: 500,
									cssEase: "linear",
									slidesToShow: 1,
									autoplay: true,
									autoplaySpeed: 3000,
									fade: false,
									adaptiveHeight: true
								});
							});
						</script>
						`)}" data-settings="${encodeURIComponent(`[{
						"auto":true,
						"arrow":true,
						"dots":false,
						"fade":false,
						"images":
							[
								{
									"src": "[%IMAGE_PATH%]images/the-unmistakables-suNS4qGA1i0-unsplash-editVLhIybF.jpeg", 
									"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
								},
								{
									"src": "[%IMAGE_PATH%]images/frank-flores-eyFcZLLYvfA-unsplash.jpeg", 
									"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
								}
							]
					}]`)}">
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-13 is-content-960" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full" style="min-height: 54px;">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-92">We create simple and effective designs.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 57.5556%; flex: 0 0 auto;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
			'thumbnail': 'preview/slider-02.png',
			'category': '2',
			'googleFonts': [],
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
			'type': 'slick',
			'html': `

			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-align-left is-light-text is-content-top">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="${encodeURIComponent(`
								<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">
									<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg');">
									</div>
									<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg');">
									</div>
								</div>

								<script>
									var docReady = function (fn) {
										var stateCheck = setInterval(function () {
											if (document.readyState !== "complete") return;
											clearInterval(stateCheck);
											try { fn() } catch (e) { }
										}, 1);
									};
									docReady(function () {
										jQuery("#{id}").slick({
											dots: false,
											arrows: true,
											infinite: true,
											speed: 500,
											cssEase: "linear",
											slidesToShow: 1,
											autoplay: true,
											autoplaySpeed: 3000,
											fade: false,
											adaptiveHeight: true
										});
									});
								</script>
								`)}" data-settings="${encodeURIComponent(`[{
								"auto":true,
								"arrow":true,
								"dots":false,
								"fade":false,
								"images":
									[
										{
											"src": "[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg", 
											"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
										},
										{
											"src": "[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg", 
											"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
										}
									]
							}]`)}">
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-3">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h3 class="text-center size-76 font-light">A New Different Perspective.</h3>
											<div class="spacer height-20"></div>

											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">View Gallery</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-dark-text">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h2 class="font-light">Why Choose Us</h2>

										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature One</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Two</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Three</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Four</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
	
		{
		    'thumbnail': 'preview/slider-03.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
            'type': 'slick',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-dark-text">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-80 font-extralight">We create simple and effective designs.</h1>
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half" style="width: 77.39%; flex: 0 0 auto;">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type.</p>
										</div>
										<div class="column half" style="width: 100%;">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-align-left is-content-top is-light-text">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="${encodeURIComponent(`
								<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">
									<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg');">
									</div>
									<div class="is-boxes slider-image" style="background-image: url('[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg');">
									</div>
								</div>

								<script>
									var docReady = function (fn) {
										var stateCheck = setInterval(function () {
											if (document.readyState !== "complete") return;
											clearInterval(stateCheck);
											try { fn() } catch (e) { }
										}, 1);
									};
									docReady(function () {
										jQuery("#{id}").slick({
											dots: false,
											arrows: true,
											infinite: true,
											speed: 500,
											cssEase: "linear",
											slidesToShow: 1,
											autoplay: true,
											autoplaySpeed: 3000,
											fade: false,
											adaptiveHeight: true
										});
									});
								</script>
								`)}" data-settings="${encodeURIComponent(`[{
								"auto":true,
								"arrow":true,
								"dots":false,
								"fade":false,
								"images":
									[
										{
											"src": "[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg", 
											"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
										},
										{
											"src": "[%IMAGE_PATH%]images/natural-goods-berlin-KhUIvD_zw-unsplash.jpeg", 
											"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"
										}
									]
							}]`)}">
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
			

		/* VIDEO */

		{
		    'thumbnail': 'preview/video-01.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-light-text type-poppins box-autofit min-height-60">
				<div class="is-overlay">
					<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
			
			<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
                <source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/market.mp4">
            </video>
            <div class="is-overlay-video" style="opacity:0.25"></div>
            <script>
			var docReady = function(fn) {
				var stateCheck = setInterval(function() {
					if (document.readyState === "interactive" || document.readyState === "complete") {
						clearInterval(stateCheck);
						try {
							fn()
						} catch (e) {}
					} 
				}, 1);
			};

			docReady(function() {
				
				let video = document.querySelector('#{id}');

				const changeVideo = (video) => {
					if(!video) return;
					let currentlyPlaying;
					if (video.paused) {
						currentlyPlaying = false;
					} else {
						currentlyPlaying = true;
					}
					let changed=false;
					let source = video.querySelector('source');
					let vidDefault = source.getAttribute('data-default');
					let vid240 = source.getAttribute('data-240');
					let vid360 = source.getAttribute('data-360');
					let vid480 = source.getAttribute('data-480');
					let vid540 = source.getAttribute('data-540');
					let vid720 = source.getAttribute('data-720');
					let vid1080 = source.getAttribute('data-1080');
					let vid1440 = source.getAttribute('data-1440');
					let vid2160 = source.getAttribute('data-2160');
					let vW = window.innerWidth;
					if(vW<=426) {
						if(vid240) {
							if(source.getAttribute('src')!==vid240) {
								source.setAttribute('src', vid240);changed=true;
							} else return;
						}
						else if(vid360) {
							if(source.getAttribute('src')!==vid360) {
								source.setAttribute('src', vid360);changed=true;
							} else return;
						}
						else if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (426<vW && vW<=640) {
						if(vid360) {
							if(source.getAttribute('src')!==vid360) {
								source.setAttribute('src', vid360);changed=true;
							} else return;
						}
						else if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (640<vW && vW<=854) {
						if(vid480) {
							if(source.getAttribute('src')!==vid480) {
								source.setAttribute('src', vid480);changed=true;
							} else return;
						}
						else if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (854<vW && vW<=960) {
						if(vid540) {
							if(source.getAttribute('src')!==vid540) {
								source.setAttribute('src', vid540);changed=true;
							} else return;
						}
						else if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (vW>960 && vW<=1280) {
						if(vid720) {
							if(source.getAttribute('src')!==vid720) {
								source.setAttribute('src', vid720);changed=true;
							} else return;
						}
					} else if (1280<vW && vW<=1920) {
						if(vid1080) {
							if(source.getAttribute('src')!==vid1080) {
								source.setAttribute('src', vid1080);changed=true;
							} else return;
						}
					} else if (1920<vW && vW<=2560) {
						if(vid1440) {
							if(source.getAttribute('src')!==vid1440) {
								source.setAttribute('src', vid1440);changed=true;
							} else return;
						}
					} else if (2560<vW) {
						if(vid2160) {
							if(source.getAttribute('src')!==vid2160) {
								source.setAttribute('src', vid2160);changed=true;
							} else return;
						}
						else if(vid1440) {
							if(source.getAttribute('src')!==vid1440) {
								source.setAttribute('src', vid1440);changed=true;
							} else return;
						}
					}
					
					let videoLoad = false;
					if(changed) {
						video.pause();
						video.currentTime = 0;
						video.load();
						videoLoad = true;
					} else {
						if(source.getAttribute('src')!==vidDefault) {
							video.pause();
							video.currentTime = 0;
							source.setAttribute('src', vidDefault);
							video.load();
							videoLoad = true;
						} 
					}

					if(!video) return;

					if(videoLoad) if(video.autoplay) {
						video.pause();
						video.currentTime = 0;
						// video.play();
						let overlay = video.closest('.is-box');
						let btnPlay = overlay.querySelector('.video-bg-play');
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
						let btnAudio = overlay.querySelector('.video-audio-play');
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
					}

					if(videoLoad) if(currentlyPlaying) {
						video.play();
					}
				};
				
				changeVideo(video);

				let debounce = (func) => {
					var timer;
					return function(event){
						if(timer) clearTimeout(timer);
						timer = setTimeout(func,100,event);
					};
				}
				let viewportWidth = window.innerWidth;
				window.addEventListener('resize',debounce(function(e){
					if (window.innerWidth != viewportWidth) {

						viewportWidth = window.innerWidth;

						if(video) changeVideo(video);
					}
				}));

				let overlay = video.closest('.is-box');
				let btnPlay = overlay.querySelector('.video-bg-play');
				btnPlay.addEventListener('click', (e)=>{
					if (video.paused) {
						video.play();
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
					} else {
						video.pause();
						btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
					}
					e.preventDefault();
					e.stopImmediatePropagation();
				});
				let btnAudio = overlay.querySelector('.video-audio-play');
				btnAudio.addEventListener('click', (e)=>{
					if (video.muted) {
						video.muted = false;
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
					} else {
						video.muted = true;
						btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
					}
					e.preventDefault();
					e.stopImmediatePropagation();
				});
			});
            </script>
			
					`)}" data-settings="${encodeURIComponent(`
						[{ "mp4": "[%IMAGE_PATH%]videos/market.mp4", "poster": "", "overlay": 0.25}]
						`)}">

					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-13 is-content-940" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-92">We create simple and effective designs.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 57.5556%; flex: 0 0 auto;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/video-02.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
								
								<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
									<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/market.mp4">
								</video>
								<div class="is-overlay-video" style="opacity:0.25"></div>
								<script>
								var docReady = function(fn) {
									var stateCheck = setInterval(function() {
										if (document.readyState === "interactive" || document.readyState === "complete") {
											clearInterval(stateCheck);
											try {
												fn()
											} catch (e) {}
										} 
									}, 1);
								};
				
								docReady(function() {
									
									let video = document.querySelector('#{id}');
				
									const changeVideo = (video) => {
										if(!video) return;
										let currentlyPlaying;
										if (video.paused) {
											currentlyPlaying = false;
										} else {
											currentlyPlaying = true;
										}
										let changed=false;
										let source = video.querySelector('source');
										let vidDefault = source.getAttribute('data-default');
										let vid240 = source.getAttribute('data-240');
										let vid360 = source.getAttribute('data-360');
										let vid480 = source.getAttribute('data-480');
										let vid540 = source.getAttribute('data-540');
										let vid720 = source.getAttribute('data-720');
										let vid1080 = source.getAttribute('data-1080');
										let vid1440 = source.getAttribute('data-1440');
										let vid2160 = source.getAttribute('data-2160');
										let vW = window.innerWidth;
										if(vW<=426) {
											if(vid240) {
												if(source.getAttribute('src')!==vid240) {
													source.setAttribute('src', vid240);changed=true;
												} else return;
											}
											else if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (426<vW && vW<=640) {
											if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (640<vW && vW<=854) {
											if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (854<vW && vW<=960) {
											if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (vW>960 && vW<=1280) {
											if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (1280<vW && vW<=1920) {
											if(vid1080) {
												if(source.getAttribute('src')!==vid1080) {
													source.setAttribute('src', vid1080);changed=true;
												} else return;
											}
										} else if (1920<vW && vW<=2560) {
											if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										} else if (2560<vW) {
											if(vid2160) {
												if(source.getAttribute('src')!==vid2160) {
													source.setAttribute('src', vid2160);changed=true;
												} else return;
											}
											else if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										}
										
										let videoLoad = false;
										if(changed) {
											video.pause();
											video.currentTime = 0;
											video.load();
											videoLoad = true;
										} else {
											if(source.getAttribute('src')!==vidDefault) {
												video.pause();
												video.currentTime = 0;
												source.setAttribute('src', vidDefault);
												video.load();
												videoLoad = true;
											} 
										}
				
										if(!video) return;
				
										if(videoLoad) if(video.autoplay) {
											video.pause();
											video.currentTime = 0;
											// video.play();
											let overlay = video.closest('.is-box');
											let btnPlay = overlay.querySelector('.video-bg-play');
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
											let btnAudio = overlay.querySelector('.video-audio-play');
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
				
										if(videoLoad) if(currentlyPlaying) {
											video.play();
										}
									};
									
									changeVideo(video);
				
									let debounce = (func) => {
										var timer;
										return function(event){
											if(timer) clearTimeout(timer);
											timer = setTimeout(func,100,event);
										};
									}
									let viewportWidth = window.innerWidth;
									window.addEventListener('resize',debounce(function(e){
										if (window.innerWidth != viewportWidth) {
				
											viewportWidth = window.innerWidth;
				
											if(video) changeVideo(video);
										}
									}));
				
									let overlay = video.closest('.is-box');
									let btnPlay = overlay.querySelector('.video-bg-play');
									btnPlay.addEventListener('click', (e)=>{
										if (video.paused) {
											video.play();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
										} else {
											video.pause();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
									let btnAudio = overlay.querySelector('.video-audio-play');
									btnAudio.addEventListener('click', (e)=>{
										if (video.muted) {
											video.muted = false;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
										} else {
											video.muted = true;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
								});
								</script>

							`)}" data-settings="${encodeURIComponent(`
								[{ "mp4": "[%IMAGE_PATH%]videos/market.mp4", "poster": "", "overlay": 0.25}]
								`)}">
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-700">
									<div class="row">
										<div class="column full">
											<p class="uppercase size-14 tracking-400 text-left">Hello, This is Company-Name</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<h1 class="leading-09 text-left font-extralight size-88">We create simple and effective designs.</h1>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div style="width: 74.3161%; flex: 0 0 auto;" class="column half">
											<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type.</p>
										</div>
										<div style="width: 100%;" class="column half">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="text-left button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-dark-text box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-600">
									<div class="row">
										<div class="column full">
											<h2 class="font-light">Why Choose Us</h2>
			
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature One</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Two</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Three</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
										<div class="column half">
											<h3 class="leading-14 font-light capitalize size-24">Feature Four</h3>
											<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/video-03.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-dark-text box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-700 size-17 leading-13">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-80 font-extralight">We create simple and effective designs.</h1>
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half" style="width: 77.4366%; flex: 0 0 auto;">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type.</p>
										</div>
										<div class="column half" style="width: 100%;">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
								
								<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
									<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/market.mp4">
								</video>
								<div class="is-overlay-video" style="opacity:0.25"></div>
								<script>
								var docReady = function(fn) {
									var stateCheck = setInterval(function() {
										if (document.readyState === "interactive" || document.readyState === "complete") {
											clearInterval(stateCheck);
											try {
												fn()
											} catch (e) {}
										} 
									}, 1);
								};
				
								docReady(function() {
									
									let video = document.querySelector('#{id}');
				
									const changeVideo = (video) => {
										if(!video) return;
										let currentlyPlaying;
										if (video.paused) {
											currentlyPlaying = false;
										} else {
											currentlyPlaying = true;
										}
										let changed=false;
										let source = video.querySelector('source');
										let vidDefault = source.getAttribute('data-default');
										let vid240 = source.getAttribute('data-240');
										let vid360 = source.getAttribute('data-360');
										let vid480 = source.getAttribute('data-480');
										let vid540 = source.getAttribute('data-540');
										let vid720 = source.getAttribute('data-720');
										let vid1080 = source.getAttribute('data-1080');
										let vid1440 = source.getAttribute('data-1440');
										let vid2160 = source.getAttribute('data-2160');
										let vW = window.innerWidth;
										if(vW<=426) {
											if(vid240) {
												if(source.getAttribute('src')!==vid240) {
													source.setAttribute('src', vid240);changed=true;
												} else return;
											}
											else if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (426<vW && vW<=640) {
											if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (640<vW && vW<=854) {
											if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (854<vW && vW<=960) {
											if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (vW>960 && vW<=1280) {
											if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (1280<vW && vW<=1920) {
											if(vid1080) {
												if(source.getAttribute('src')!==vid1080) {
													source.setAttribute('src', vid1080);changed=true;
												} else return;
											}
										} else if (1920<vW && vW<=2560) {
											if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										} else if (2560<vW) {
											if(vid2160) {
												if(source.getAttribute('src')!==vid2160) {
													source.setAttribute('src', vid2160);changed=true;
												} else return;
											}
											else if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										}
										
										let videoLoad = false;
										if(changed) {
											video.pause();
											video.currentTime = 0;
											video.load();
											videoLoad = true;
										} else {
											if(source.getAttribute('src')!==vidDefault) {
												video.pause();
												video.currentTime = 0;
												source.setAttribute('src', vidDefault);
												video.load();
												videoLoad = true;
											} 
										}
				
										if(!video) return;
				
										if(videoLoad) if(video.autoplay) {
											video.pause();
											video.currentTime = 0;
											// video.play();
											let overlay = video.closest('.is-box');
											let btnPlay = overlay.querySelector('.video-bg-play');
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
											let btnAudio = overlay.querySelector('.video-audio-play');
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
				
										if(videoLoad) if(currentlyPlaying) {
											video.play();
										}
									};
									
									changeVideo(video);
				
									let debounce = (func) => {
										var timer;
										return function(event){
											if(timer) clearTimeout(timer);
											timer = setTimeout(func,100,event);
										};
									}
									let viewportWidth = window.innerWidth;
									window.addEventListener('resize',debounce(function(e){
										if (window.innerWidth != viewportWidth) {
				
											viewportWidth = window.innerWidth;
				
											if(video) changeVideo(video);
										}
									}));
				
									let overlay = video.closest('.is-box');
									let btnPlay = overlay.querySelector('.video-bg-play');
									btnPlay.addEventListener('click', (e)=>{
										if (video.paused) {
											video.play();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
										} else {
											video.pause();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
									let btnAudio = overlay.querySelector('.video-audio-play');
									btnAudio.addEventListener('click', (e)=>{
										if (video.muted) {
											video.muted = false;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
										} else {
											video.muted = true;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
								});
								</script>


							`)}" data-settings="${encodeURIComponent(`
								[{ "mp4": "[%IMAGE_PATH%]videos/market.mp4", "poster": "", "overlay": 0.25}]
								`)}">
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/video-05.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section type-poppins is-section-80">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`

								<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
									<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/market.mp4">
								</video>
								<div class="is-overlay-video" style="opacity:0.25"></div>
								<script>
								var docReady = function(fn) {
									var stateCheck = setInterval(function() {
										if (document.readyState === "interactive" || document.readyState === "complete") {
											clearInterval(stateCheck);
											try {
												fn()
											} catch (e) {}
										} 
									}, 1);
								};
				
								docReady(function() {
									
									let video = document.querySelector('#{id}');
				
									const changeVideo = (video) => {
										if(!video) return;
										let currentlyPlaying;
										if (video.paused) {
											currentlyPlaying = false;
										} else {
											currentlyPlaying = true;
										}
										let changed=false;
										let source = video.querySelector('source');
										let vidDefault = source.getAttribute('data-default');
										let vid240 = source.getAttribute('data-240');
										let vid360 = source.getAttribute('data-360');
										let vid480 = source.getAttribute('data-480');
										let vid540 = source.getAttribute('data-540');
										let vid720 = source.getAttribute('data-720');
										let vid1080 = source.getAttribute('data-1080');
										let vid1440 = source.getAttribute('data-1440');
										let vid2160 = source.getAttribute('data-2160');
										let vW = window.innerWidth;
										if(vW<=426) {
											if(vid240) {
												if(source.getAttribute('src')!==vid240) {
													source.setAttribute('src', vid240);changed=true;
												} else return;
											}
											else if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (426<vW && vW<=640) {
											if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (640<vW && vW<=854) {
											if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (854<vW && vW<=960) {
											if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (vW>960 && vW<=1280) {
											if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (1280<vW && vW<=1920) {
											if(vid1080) {
												if(source.getAttribute('src')!==vid1080) {
													source.setAttribute('src', vid1080);changed=true;
												} else return;
											}
										} else if (1920<vW && vW<=2560) {
											if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										} else if (2560<vW) {
											if(vid2160) {
												if(source.getAttribute('src')!==vid2160) {
													source.setAttribute('src', vid2160);changed=true;
												} else return;
											}
											else if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										}
										
										let videoLoad = false;
										if(changed) {
											video.pause();
											video.currentTime = 0;
											video.load();
											videoLoad = true;
										} else {
											if(source.getAttribute('src')!==vidDefault) {
												video.pause();
												video.currentTime = 0;
												source.setAttribute('src', vidDefault);
												video.load();
												videoLoad = true;
											} 
										}
				
										if(!video) return;
				
										if(videoLoad) if(video.autoplay) {
											video.pause();
											video.currentTime = 0;
											// video.play();
											let overlay = video.closest('.is-box');
											let btnPlay = overlay.querySelector('.video-bg-play');
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
											let btnAudio = overlay.querySelector('.video-audio-play');
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
				
										if(videoLoad) if(currentlyPlaying) {
											video.play();
										}
									};
									
									changeVideo(video);
				
									let debounce = (func) => {
										var timer;
										return function(event){
											if(timer) clearTimeout(timer);
											timer = setTimeout(func,100,event);
										};
									}
									let viewportWidth = window.innerWidth;
									window.addEventListener('resize',debounce(function(e){
										if (window.innerWidth != viewportWidth) {
				
											viewportWidth = window.innerWidth;
				
											if(video) changeVideo(video);
										}
									}));
				
									let overlay = video.closest('.is-box');
									let btnPlay = overlay.querySelector('.video-bg-play');
									btnPlay.addEventListener('click', (e)=>{
										if (video.paused) {
											video.play();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
										} else {
											video.pause();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
									let btnAudio = overlay.querySelector('.video-audio-play');
									btnAudio.addEventListener('click', (e)=>{
										if (video.muted) {
											video.muted = false;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
										} else {
											video.muted = true;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
								});
								</script>

							`)}" data-settings="${encodeURIComponent(`
								[{ "mp4": "[%IMAGE_PATH%]videos/market.mp4", "poster": "", "overlay": 0.25}]
								`)}">
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-dark-text box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125 size-13" style="background-color: rgb(240, 240, 240);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},

		{
		    'thumbnail': 'preview/video-04.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section type-poppins is-section-80">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-dark-text box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item Two</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125 size-13" style="background-color: rgb(240, 240, 240);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="600px" data-html="${encodeURIComponent(`
								
								<video id="{id}" class="is-video-bg" muted loop playsinline autoplay>
									<source src="[%IMAGE_PATH%]videos/blank.mp4" data-default="[%IMAGE_PATH%]videos/market.mp4">
								</video>
								<div class="is-overlay-video" style="opacity:0.25"></div>
								<script>
								var docReady = function(fn) {
									var stateCheck = setInterval(function() {
										if (document.readyState === "interactive" || document.readyState === "complete") {
											clearInterval(stateCheck);
											try {
												fn()
											} catch (e) {}
										} 
									}, 1);
								};
				
								docReady(function() {
									
									let video = document.querySelector('#{id}');
				
									const changeVideo = (video) => {
										if(!video) return;
										let currentlyPlaying;
										if (video.paused) {
											currentlyPlaying = false;
										} else {
											currentlyPlaying = true;
										}
										let changed=false;
										let source = video.querySelector('source');
										let vidDefault = source.getAttribute('data-default');
										let vid240 = source.getAttribute('data-240');
										let vid360 = source.getAttribute('data-360');
										let vid480 = source.getAttribute('data-480');
										let vid540 = source.getAttribute('data-540');
										let vid720 = source.getAttribute('data-720');
										let vid1080 = source.getAttribute('data-1080');
										let vid1440 = source.getAttribute('data-1440');
										let vid2160 = source.getAttribute('data-2160');
										let vW = window.innerWidth;
										if(vW<=426) {
											if(vid240) {
												if(source.getAttribute('src')!==vid240) {
													source.setAttribute('src', vid240);changed=true;
												} else return;
											}
											else if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (426<vW && vW<=640) {
											if(vid360) {
												if(source.getAttribute('src')!==vid360) {
													source.setAttribute('src', vid360);changed=true;
												} else return;
											}
											else if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (640<vW && vW<=854) {
											if(vid480) {
												if(source.getAttribute('src')!==vid480) {
													source.setAttribute('src', vid480);changed=true;
												} else return;
											}
											else if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (854<vW && vW<=960) {
											if(vid540) {
												if(source.getAttribute('src')!==vid540) {
													source.setAttribute('src', vid540);changed=true;
												} else return;
											}
											else if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (vW>960 && vW<=1280) {
											if(vid720) {
												if(source.getAttribute('src')!==vid720) {
													source.setAttribute('src', vid720);changed=true;
												} else return;
											}
										} else if (1280<vW && vW<=1920) {
											if(vid1080) {
												if(source.getAttribute('src')!==vid1080) {
													source.setAttribute('src', vid1080);changed=true;
												} else return;
											}
										} else if (1920<vW && vW<=2560) {
											if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										} else if (2560<vW) {
											if(vid2160) {
												if(source.getAttribute('src')!==vid2160) {
													source.setAttribute('src', vid2160);changed=true;
												} else return;
											}
											else if(vid1440) {
												if(source.getAttribute('src')!==vid1440) {
													source.setAttribute('src', vid1440);changed=true;
												} else return;
											}
										}
										
										let videoLoad = false;
										if(changed) {
											video.pause();
											video.currentTime = 0;
											video.load();
											videoLoad = true;
										} else {
											if(source.getAttribute('src')!==vidDefault) {
												video.pause();
												video.currentTime = 0;
												source.setAttribute('src', vidDefault);
												video.load();
												videoLoad = true;
											} 
										}
				
										if(!video) return;
				
										if(videoLoad) if(video.autoplay) {
											video.pause();
											video.currentTime = 0;
											// video.play();
											let overlay = video.closest('.is-box');
											let btnPlay = overlay.querySelector('.video-bg-play');
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
											let btnAudio = overlay.querySelector('.video-audio-play');
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
				
										if(videoLoad) if(currentlyPlaying) {
											video.play();
										}
									};
									
									changeVideo(video);
				
									let debounce = (func) => {
										var timer;
										return function(event){
											if(timer) clearTimeout(timer);
											timer = setTimeout(func,100,event);
										};
									}
									let viewportWidth = window.innerWidth;
									window.addEventListener('resize',debounce(function(e){
										if (window.innerWidth != viewportWidth) {
				
											viewportWidth = window.innerWidth;
				
											if(video) changeVideo(video);
										}
									}));
				
									let overlay = video.closest('.is-box');
									let btnPlay = overlay.querySelector('.video-bg-play');
									btnPlay.addEventListener('click', (e)=>{
										if (video.paused) {
											video.play();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-pause"></use></svg>';
										} else {
											video.pause();
											btnPlay.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-play"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
									let btnAudio = overlay.querySelector('.video-audio-play');
									btnAudio.addEventListener('click', (e)=>{
										if (video.muted) {
											video.muted = false;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume"></use></svg>';
										} else {
											video.muted = true;
											btnAudio.innerHTML = '<svg class="is-icon-flex"><use xlink:href="#__icon-volume-off"></use></svg>';
										}
										e.preventDefault();
										e.stopImmediatePropagation();
									});
								});
								</script>


							`)}" data-settings="${encodeURIComponent(`
								[{ "mp4": "[%IMAGE_PATH%]videos/market.mp4", "poster": "", "overlay": 0.25}]
								`)}">
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-17 leading-13 is-content-500">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Item One</h3>
											<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
											<div class="text-center button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 py-2 px-8 font-normal leading-relaxed border-transparent rounded-full ml-0 mt-1 tracking-125 hover:border-transparent uppercase size-13" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Read More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`},

		/* CUSTOM */

		{
		    'thumbnail': 'preview/custom-01.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins is-light-text box-autofit min-height-70">
			<div class="is-overlay" style="background-color: rgb(237 237 237);">
				<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
				<style>
						.animate-text-wrapper {
							overflow-x: hidden;
							width: 100%;
							height: 100vh;
							display: flex;
							align-items: center;
							line-height: 1.7;
							color: #fff;
							transform: skewY(-5deg);
						}
		
						.bg-text-container {
							transform: translateX(-50%);
							left: 50%;
							position: absolute;
							z-index: -999;
						}
		
						@keyframes text-scrolling {
							0% {
								transform: translate3d(-100%, 0, 0);
							}
		
							100% {
								transform: translate3d(0%, 0, 0);
							}
						}
		
						.animate-text {
							animation: text-scrolling 20s linear infinite;
							will-change: transform;
							display: block;
							position: relative;
							white-space: nowrap;
						}
		
						.animate-text.left {
							animation-direction: reverse;
						}
		
						.animate-text span {
							font-size: 280px;
							color: transparent;
							-webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
							text-transform: uppercase;
							display: inline-block;
							line-height: 0.75;
							min-width: auto;
							font-weight: 800;
						}
					</style>
		
					<div class="animate-text-wrapper">
						<div class="bg-text-container">
							<div class="animate-text">
								<span>Driven Better&nbsp;</span>
								<span>Driven Better&nbsp;</span>
							</div>
							<div style="height:20vw">
		
							</div>
							<div class="animate-text left">
								<span>Driven Better&nbsp;</span>
								<span>Driven Better&nbsp;</span>
							</div>
						</div>
					</div>
		
					<script>
						(function() {
							/* Set width of all animated text to match */
							let parent = document.querySelectorAll('.animate-text');
							for (let i = 0; i < parent.length; i++) {
								parent[i].style.width = parent[i].children[0].clientWidth + "px";
							};
						}).call(this);
					</script>
				`)}" style="z-index: 1;">
					
				</div>
				<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cottonbro-105481242.jpeg&quot;);">
					<div class="is-overlay-color opacity-0"></div>
				</div>
			</div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-17 leading-13 is-content-900" style="transition: all 0.3s ease-out 0s;">
						<div class="row">
							<div class="column full">
								<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-60"></div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<h1 class="text-center leading-09 size-92">We create simple and effective designs.</h1>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
						<div class="row">
							<div style="width: 100%;" class="column third">
								<div class="spacer height-20"></div>
							</div>
							<div style="width: 57.5435%; flex: 0 0 auto;" class="column third">
								<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type.</p>
							</div>
							<div class="column third" style="width: 100%;">
								<div class="spacer height-20"></div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="text-center button-group">
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" data-hover-bg="">Get in Touch</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
		},
		{
		    'thumbnail': 'preview/custom-02.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
			<div class="is-boxes">
				<div class="is-box-6 is-box is-light-text box-autofit min-height-50">
					<div class="is-overlay">
						<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
							<style>
								.animate-text-wrapper {
									overflow-x: hidden;
									width: 100%;
									height: 100vh;
									display: flex;
									align-items: center;
									line-height: 1.7;
									color: #fff;
									transform: skewY(-5deg);
								}

								.bg-text-container {
									transform: translateX(-50%);
									left: 50%;
									position: absolute;
									z-index: -999;
								}

								@keyframes text-scrolling {
									0% {
										transform: translate3d(-100%, 0, 0);
									}

									100% {
										transform: translate3d(0%, 0, 0);
									}
								}

								.animate-text {
									animation: text-scrolling 20s linear infinite;
									will-change: transform;
									display: block;
									position: relative;
									white-space: nowrap;
								}

								.animate-text.left {
									animation-direction: reverse;
								}

								.animate-text span {
									font-size: 280px;
									color: transparent;
									-webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
									text-transform: uppercase;
									display: inline-block;
									line-height: 0.75;
									min-width: auto;
									font-weight: 800;
								}
							</style>

							<div class="animate-text-wrapper">
								<div class="bg-text-container">
									<div class="animate-text">
										<span>Driven Better&nbsp;</span>
										<span>Driven Better&nbsp;</span>
									</div>
									<div style="height:20vw">

									</div>
									<div class="animate-text left">
										<span>Driven Better&nbsp;</span>
										<span>Driven Better&nbsp;</span>
									</div>
								</div>
							</div>

							<script>
								(function() {
									/* Set width of all animated text to match */
									let parent = document.querySelectorAll('.animate-text');
									for (let i = 0; i < parent.length; i++) {
										parent[i].style.width = parent[i].children[0].clientWidth + "px";
									};
								}).call(this);
							</script>
						`)}" style="z-index: 1;">
							
						</div>
						<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/surface-qY3aeW7estU-unsplash.jpeg&quot;);">
							<div class="is-overlay-color opacity-0" style="background-color: rgb(0, 0, 0);"></div>
						</div>
					</div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 is-content-700 size-17 leading-13">
								<div class="row">
									<div class="column full">
										<h1 class="leading-none size-80 font-semibold">Digital Works with Love</h1>
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row">
									<div class="column half" style="width: 77.4366%; flex: 0 0 auto;">
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type.</p>
									</div>
									<div class="column half" style="width: 100%;">
										<div class="spacer height-20"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-60"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="button-group">
											<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
											<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="is-box-6 is-box is-dark-text box-autofit">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 size-17 leading-13 is-content-700">
								<div class="row">
									<div class="column full">
										<h2 class="font-light">Why Choose Us</h2>

									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-60"></div>
									</div>
								</div>
								<div class="row">
									<div class="column half">
										<h3 class="leading-14 font-light capitalize size-24">Feature One</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
									</div>
									<div class="column half">
										<h3 class="leading-14 font-light capitalize size-24">Feature Two</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-20"></div>
									</div>
								</div>
								<div class="row">
									<div class="column half">
										<h3 class="leading-14 font-light capitalize size-24">Feature Three</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
									</div>
									<div class="column half">
										<h3 class="leading-14 font-light capitalize size-24">Feature Four</h3>
										<p style="color: rgb(109, 109, 109);">Lorem Ipsum is dummy text of the printing industry.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`
		},
		{
		    'thumbnail': 'preview/custom-03.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
			<div class="is-boxes">
				<div class="is-box-6 is-box is-dark-text box-autofit">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 size-17 leading-13 is-content-700">
								<div class="row">
									<div class="column full">
										<h1 class="leading-none size-80 font-extralight">We create simple and effective designs.</h1>
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row">
									<div class="column half" style="width: 77.4366%; flex: 0 0 auto;">
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type.</p>
									</div>
									<div class="column half" style="width: 100%;">
										<div class="spacer height-20"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="button-group">
											<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
											<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(240,240,240)" style="background-color: rgb(240, 240, 240);" data-hover-bg="">Get in Touch</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="is-box-6 is-box is-dark-text box-autofit min-height-50">
					<div class="is-overlay">
						<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
							<style>
								.animate-text-wrapper {
									overflow-x: hidden;
									width: 100%;
									height: 100vh;
									display: flex;
									align-items: center;
									line-height: 1.7;
									color: #fff;
									transform: skewY(-5deg);
								}

								.bg-text-container {
									transform: translateX(-50%);
									left: 50%;
									position: absolute;
									z-index: -999;
								}

								@keyframes text-scrolling {
									0% {
										transform: translate3d(-100%, 0, 0);
									}

									100% {
										transform: translate3d(0%, 0, 0);
									}
								}

								.animate-text {
									animation: text-scrolling 20s linear infinite;
									will-change: transform;
									display: block;
									position: relative;
									white-space: nowrap;
								}

								.animate-text.left {
									animation-direction: reverse;
								}

								.animate-text span {
									font-size: 280px;
									color: transparent;
									-webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
									text-transform: uppercase;
									display: inline-block;
									line-height: 0.75;
									min-width: auto;
									font-weight: 800;
								}
							</style>

							<div class="animate-text-wrapper">
								<div class="bg-text-container">
									<div class="animate-text">
										<span>Driven Better&nbsp;</span>
										<span>Driven Better&nbsp;</span>
									</div>
									<div style="height:20vw">

									</div>
									<div class="animate-text left">
										<span>Driven Better&nbsp;</span>
										<span>Driven Better&nbsp;</span>
									</div>
								</div>
							</div>

							<script>
								(function() {
									/* Set width of all animated text to match */
									let parent = document.querySelectorAll('.animate-text');
									for (let i = 0; i < parent.length; i++) {
										parent[i].style.width = parent[i].children[0].clientWidth + "px";
									};
								}).call(this);
							</script>
						`)}" style="z-index: 1;">

						</div>
						<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2.jpeg&quot;);"></div>
					</div>
				</div>
			</div>
		</div>
`
		},

		{
		    'thumbnail': 'preview/custom-04.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins">
				<div class="is-overlay">
					<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
					<script id="script-{id}">
						var scriptReady = function(fn) {
							var stateCheck = setInterval(function() {
								if (typeof skrollrr === 'undefined') return; // To check if required library (skrollrr) is loaded.
								if (typeof skrollrr.lax === 'undefined') return;
								clearInterval(stateCheck);
								try {
									fn()
								} catch (e) {}
							}, 1);
						};
					
						scriptReady(function() {
					
							// Your custom code here
							let section = document.querySelector('#script-{id}').closest('.is-section'); // Get the current section
							let box = document.querySelector('#script-{id}').closest('.is-box'); // Get the current box
							let container = box.querySelector('.is-container'); // Get the current container
					
							// Prepare rounded clip
							let clip = box.querySelector('.is-boxes');
							clip.style.overflow = 'hidden';
							clip.style.borderRadius = '50%';
							clip.style.background = '#fff';
							clip.style.position = 'relative';
							clip.style.flex = 'none';
							clip.style.width = '0%';
							clip.style.height = '0%';
					
							// Make text container centered
							container.style.width = '100vw';
							container.style.width = container.offsetWidth + 'px';
							container.style.position = 'absolute';
							container.style.left = 'calc(50% - ' + container.offsetWidth / 2 + 'px)';
					
							// Apply scroll animation
							box.setAttribute('data-box', 'box-{id}');
							skrollrr.lax.addElements('[data-box=box-{id}]', {
								scrollY: {
									scale: [
										['elInY+200', 'elCenterY'],
										[0, 100], {
											cssFn: function(val, domElement) {
												clip.style.width = val - 6 + 'vh';
												clip.style.height = val - 6 + 'vh';
											}
										}
									],
								},
							});
					
							skrollrr.refresh();
						});
					</script>
					`)}" style="z-index: 1;">
						
					</div>
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-karolina-grabowska-62149201.jpg&quot;); background-position: 50% 60%;">
						<div class="is-overlay-color opacity-0"></div>
					</div>
				</div>
				<div class="is-boxes" style="position: relative; overflow: hidden; width: 3.103vh; height: 3.103vh; flex: 0 0 auto; background: rgb(255, 255, 255); border-radius: 50%;">
					<div class="is-box-centered" data-clip="clip-JeRaoyg" style="overflow: hidden; width: 100%; height: 95%;">
						<div class="is-container v2 size-17 leading-13 is-content-1000" style="left: calc(50% - 528.5px); position: absolute; width: 1057px;">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-88">We create simple and effective designs.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 57.5435%; flex: 0 0 auto;" class="column third">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" style="background-color: rgb(240, 240, 240);">Get in Touch</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			
		`},

		{
		    'thumbnail': 'preview/custom-05.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 box-autofit min-height-70 type-poppins is-content-top" style="transform: translate3d(1e-05px, 1e-05px, 1e-05px);">
				<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
					<div class="section-{id}"></div>

						<script>
							var skrollrrReady = function(fn) {
								var stateCheck = setInterval(function() {
									if (typeof skrollrr === 'undefined') return; // To check if required library (skrollrr) is loaded.
									if (typeof skrollrr.lax === 'undefined') return;
									clearInterval(stateCheck);
									try {
										fn()
									} catch (e) {}
								}, 1);
							};
							skrollrrReady(function() {
						
								let se = document.querySelector('.section-{id}').closest('.is-section');
								se.setAttribute('data-section', 'section-{id}');
								let overlay = se.querySelector('.is-overlay');
								overlay.style.transform = '';
						
								let wrapper = document.querySelector('.is-wrapper');
								const clientHeight = se.clientHeight;
								skrollrr.lax.addElements('[data-section=section-{id}]', {
						
								}, {
									onUpdate: function(driverValues, domElement) {
						
										//let adj = wrapper.getBoundingClientRect().top + window.pageYOffset;
										let offsetTop = se.offsetTop; // - adj;
						
										const scrollY = driverValues.scrollY[0];
						
										if (scrollY >= offsetTop && scrollY <= offsetTop + clientHeight) {
											let n = (scrollY - offsetTop);
											let percentage = n / clientHeight;
											overlay.style.transform = 'translateY(' + n + 'px) scale(' + (1 + percentage / 2) + ')';
										} else {
											overlay.style.transform = 'translateY(0) scale(1)';
										}
									}
								});
						
								skrollrr.refresh();
							});
						</script>

				`)}" style="z-index: 1;">
				</div>
				<div class="is-overlay" style="transform: translateY(0px) scale(1);">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-karolina-grabowska-439775.jpg&quot;);"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 is-content-top edge-y-3">
						<div class="is-container v2 leading-14 size-18 is-content-1400">
							<div class="row">
								<div class="column full text-center" style="overflow: hidden; min-height: 54px;">
									<h1 class="size-124 leading-none font-medium" data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);" data-top="transform: scale(1);" data-top-bottom="transform: scale(1.2);">
										<div class="size-60 leading-12">Good things that come in small packages.</div>
									</h1>
								</div>
							</div>
							<div class="row">
								<div class="text-center column full" style="overflow: hidden; min-height: 54px;">
									<p data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(1.2);">We design stunning websites that really work.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full text-center">
									<div>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 mt-1 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed rounded-full tracking-175" title="" style="color: rgb(0, 0, 0);">Get Started</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/custom-06.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text type-poppins box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
					<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
						<div class="section-{id}"></div>
						<script>
							var skrollrrReady = function(fn) {
								var stateCheck = setInterval(function() {
									if (typeof skrollrr === 'undefined') return;
									if (typeof skrollrr.lax === 'undefined') return;
									clearInterval(stateCheck);
									try {
										fn()
									} catch (e) {}
								}, 1);
							};
							skrollrrReady(function() {
			
								let se = document.querySelector('.section-{id}').closest('.is-section');
								se.setAttribute('data-section', 'section-{id}');
								let overlay = se.querySelector('.is-overlay');
			
								overlay.style.top = 'unset';
								overlay.style.bottom = 'unset';
								overlay.style.left = 'unset';
								overlay.style.right = 'unset';
			
								let wrapper = document.querySelector('.is-wrapper');
								const clientHeight = se.clientHeight;
								const clientWidth = se.clientWidth;
								skrollrr.lax.addElements('[data-section=section-{id}]', {
									scrollY: {
										scale: [
											['elInY', 'elCenterY'],
											[0, 100], {
												cssFn: function(val, domElement) {
													overlay.style.width = (val / 100) * clientWidth + 'px';
													overlay.style.height = (val / 100) * clientHeight + 'px';
													overlay.style.borderRadius = (400 - val * 4) + 'px';
													se.style.backgroundColor = overlay.style.backgroundColor;
												}
											}
										],
									},
								});
			
								skrollrr.refresh();
							});
						</script>
					`)}" style="z-index: 1;">
						
					</div>
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cup-of-couple-6963769.jpg&quot;); background-position: 50% 60%; left: 0%; width: 100%;" data-y="NaN" data-x="0" data-scale="NaN">
						<div class="is-overlay-color opacity-0"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-12 is-content-800 is-content-right edge-x-0-5">
							<div class="row">
								<div class="column full">
									<p class="font-medium leading-12 size-48" data-bottom-top="transform: translateX(50%);" data-center="transform: translateX(0px);" data-center-bottom="transform: scale(1);" data-top-bottom="transform: scale(0.7);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
			`
		},

	]
};

try {
    template_list.push(data_templates);
} catch(e) {
    //
}