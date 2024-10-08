var data_templates = {
    name: 'Quick Start',
    categories: [
        { id: 1, name: 'Header' }, 
        { id: 2, name: 'Article' },
        { id: 3, name: 'Photos' },
        { id: 4, name: 'Profile' },
        { id: 5, name: 'Products, Services' },
        { id: 6, name: 'Features' },
        { id: 7, name: 'Process' },
        { id: 8, name: 'Pricing' },
        { id: 9, name: 'Skills' },
        { id: 10, name: 'Achievements' },
        { id: 11, name: 'Quotes' },
        { id: 12, name: 'Partners' },
        { id: 13, name: 'As Featured On' },
        { id: 14, name: 'Page Not Found' },
        { id: 15, name: 'Coming Soon' },
        { id: 16, name: 'Help, FAQ' },
        { id: 17, name: 'Contact' },
        { id: 18, name: 'Footer' },
    ],
    designs: [

		/* HEADERS */

		{
		    'thumbnail': 'preview/simple-header-01.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins is-dark-text box-autofit">
				<div class="is-overlay">
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
		    'thumbnail': 'preview/simple-header-02.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
			<div class="is-boxes">
				<div class="is-box is-box-6 box-autofit">
					<div class="is-overlay">
					</div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 size-16 leading-13 is-content-700">
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
										<h1 class="leading-none text-left size-64 font-semibold">We create simple and effective designs.</h1>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row">
									<div style="width: 72.8592%; flex: 0 0 auto;" class="column half">
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
										<div class="spacer height-40"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="text-left button-group">
											<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">How We Work</a>
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
							<div class="is-container v2 size-16 leading-13 is-content-700">
								<div class="row">
									<div class="column full"><img src="[%IMAGE_PATH%]images/pexels-marta-milczarek-751.jpg" alt=""></div>
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
		    'thumbnail': 'preview/simple-header-03.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-content-bottom is-box-6 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-3">
								<div class="is-container v2 is-content-left size-16 leading-12 is-content-800 edge-x-2">
									<div class="row">
										<div class="column full">
											<h1 class="font-light leading-08 size-140">New Summer Trends</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row md-autofit">
										<div class="column half" style="width: 52.815%; flex: 0 0 auto;">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type.</p>
										</div>
										<div class="column half md-hidden" style="width: 45.7245%; flex: 0 0 auto;">
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
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid font-normal uppercase leading-relaxed rounded-none tracking-widest border-current hover:border-current ml-0 mr-3 mt-2 mb-2 px-8 py-2 size-13" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="" style="color: rgb(0, 0, 0);">Download App</a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6 box-autofit min-height-60">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-marta-milczarek-751.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-16 leading-12 is-content-500">
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
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
		    'thumbnail': 'preview/header-anim-01.png',
		    'category': '1',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-box is-dark-text type-quicksand-kalam is-section-100 box-autofit">
				<div class="is-overlay">
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-19 leading-14 is-content-1600 content-pt-50">
							<div class="row relative sm-items-1">

								<div class="column half">
									<div class="spacer height-40"></div>
									<h1 class="tracking-wide leading-11 size-68 font-semibold">Build Anything Beautifully</h1>
									<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<div class="spacer height-20"></div>

									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 border-current hover:border-current font-normal ml-1 leading-relaxed rounded-full mt-2 size-12 px-8" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">Try Demo</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase font-normal ml-1 leading-relaxed py-2 rounded-full border-transparent hover:text-white hover:border-transparent mt-2 size-12 px-8" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(83,98,208)" style="background-color: rgb(83, 98, 208); color: rgb(255, 255, 255);" data-hover-bg="rgb(83,98,208)">Get Started</a>
									</div>
								</div>
								<div style="position: relative;" class="flex flex-col justify-center items-start column half">
									<div class="is-dock">
										<div style="width: 90%;left: 15%;top: 19%;min-width:400px">

											<img alt="" data-noresize="" src="assets/quickstart/images/sample-01.png" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-bottom-top="transform:translateX(130px);" data-center-top="transform:translateX(0px);" data-filename="sample-01.png">
										</div>
										<div style="width: 92%;left: 41%;top: 41%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-02.png" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-bottom-top="transform:translateX(100px);" data-center-top="transform:translateX(0px);" data-filename="sample-02.png">
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
		    'thumbnail': 'preview/header-anim-02.png',
		    'category': '1',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-montserrat-roboto box-autofit">
				<div class="is-overlay">

				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-19 leading-14 is-content-1000">
							<div class="row relative sm-items-1">
								<div style="position: relative;" class="flex flex-col justify-center items-center column sixth">
									<div class="is-dock" style="margin:50px 0">
										<div style="width: 59%;left: 5%;top: -10%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/05-iphone.png" style="width: 100%;" data-bottom-top="transform: translateX(-75px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(-50px);">
										</div>
										<div style="width: 59%;left: 29%;top: -0%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/03-iphone.png" style="width: 100%;" data-bottom-top="transform: translateX(75px);" data-center="transform: translateX(0px);" data-center-bottom="transform: translateX(0px);" data-top-bottom="transform: translateX(50px);">

										</div>
									</div>
								</div>

								<div class="flex justify-center flex-col items-start pt-11 column two-sixth">
									<p class="uppercase tracking-widest">HELLO, THIS IS COMPANY-NAME</p>
									<h1 class="font-semibold tracking-wide leading-11 size-68">We create simple and effective designs.</h1>
									<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<div class="spacer height-20"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 border-current text-black hover:border-current font-normal ml-1 leading-relaxed rounded-full mt-2 px-8 size-12" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Our Works</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase font-normal ml-1 leading-relaxed py-2 rounded-full hover:text-white hover:border-transparent border-transparent mt-2 px-8 size-12" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(239,108,0)" style="background-color: rgb(239, 108, 0); color: rgb(255, 255, 255);" data-hover-bg="rgb(239,108,0)">Get in Touch</a>
									</div>
									<div class="spacer height-40"></div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			`
		},

		/*
		{
		    'thumbnail': 'preview/simple-header-04.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-poppins">
			<div class="is-overlay">
				<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/furniture-pillow-pxhere.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
					<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
				</div>
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
								<div class="spacer height-60"></div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="text-center button-group">
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 border-current hover:border-current font-normal leading-relaxed ml-0 rounded-full tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);">How We Work</a>
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 px-8 text-black ml-1 leading-relaxed rounded-full border-transparent hover:border-transparent font-normal tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);">Get in Touch</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
`
		},
		*/

		{
		    'thumbnail': 'preview/header-anim-03.png',
		    'category': '1',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam box-autofit">
				<div class="is-overlay">
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1400 is-content-left edge-x-2 size-19 leading-14">
							<div class="row relative sm-items-1 xs-items-1">
								<div class="flex justify-center flex-col items-start column half">
									<div class="spacer height-40"></div>
									<h1 class="font-semibold tracking-wide leading-11 size-68">Keep Everything Simple</h1>
									<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<div class="spacer height-20"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 border-current hover:border-current font-normal ml-1 leading-relaxed rounded-full mt-2 px-8 size-12" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">Try Demo</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase font-normal ml-1 leading-relaxed py-2 rounded-full border-transparent hover:text-white hover:border-transparent mt-2 size-12 px-8" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(216,67,21)" style="background-color: rgb(216, 67, 21); color: rgb(255, 255, 255);" data-hover-bg="rgb(216,67,21)">Get Started</a>
									</div>
								</div>

								<div style="position: relative; min-height: 30vh;" class="flex flex-col justify-center items-center column half">
									<div class="is-dock" style="margin:50px 0">
										<div style="width: 100%;left: 40%;top: 14%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-03.png" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-bottom-top="transform:translateX(130px);" data-center-top="transform:translateX(0px);" data-filename="sample-03.png">
										</div>
										<div style="width: 71%;left: 3%;top: 49%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-04.png" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-bottom-top="transform:translateX(100px);" data-center-top="transform:translateX(0px);" data-filename="sample-04.png">
										</div>
										<div style="width: 71%;left: 87%;top: 49%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-05.png" style="width: 100%; box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em;" data-bottom-top="transform:translateX(150px);" data-center-top="transform:translateX(0px);" data-filename="sample-05.png">
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
		    'thumbnail': 'preview/header-anim-04.png',
		    'category': '1',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-box is-content-bottom is-dark-text box-autofit type-raleway-lato is-section-100">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/henry-co-unsplash.jpg&quot;);"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-bottom edge-y-1">
						<div class="is-container is-content-none size-19 leading-16 v2" style="margin-bottom: 0px; padding-bottom: 0px;">
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row">
								<div class="column third xs-hidden" style="width: 24.6962%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
								<div style="width: 48.2256%; flex: 0 0 auto;" class="column third">
									<h1 class="text-center font-semibold leading-12 size-60">Ultimate Experiences With Story, Emotion, And Purpose.</h1>
								</div>
								<div class="column third xs-hidden" style="width: 26.2518%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>

							</div>
							<div class="row sm-autofit">
								<div class="column third xs-hidden sm-hidden">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third">
									<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third xs-hidden sm-hidden">
									<div class="spacer height-80"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full text-center" style="min-height: 54px;">
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 px-8 border-current rounded hover:border-current font-normal ml-1 leading-relaxed size-12" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);">Our Works</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 px-8 rounded font-normal ml-1 leading-relaxed border-transparent hover:border-transparent size-12" style="color: rgb(255, 255, 255); background-color: rgb(239, 108, 0);" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(239,108,0)" data-hover-bg="">Contact Us</a>
									</div>
								</div>

							</div>

							<div class="row sm-autofit">
								<div class="column full center sm-hidden">
									<div class="spacer height-80"></div>
								</div>

							</div>
							<div class="row" style="padding-bottom:0;">
								<div class="flex flex-col justify-end items-center column full" style="position: relative; min-height: 30vh;">
									<div class="is-dock" style="padding-bottom: 150px;width: 100% !important;">
										<div style="z-index: 100;width: 35%;left: -12%;bottom: 0px;min-width: 262px;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-01.png" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-bottom-top="transform:translateX(50px);" data--50-bottom="transform:translateX(0px);" data-filename="design-150a.png">
										</div>
										<div style="z-index: 70;width: 27%;left: 17%;bottom: 0px;min-width: 213px;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-02.png" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-bottom-top="transform:translateX(-90px);" data--50-bottom="transform:translateX(0px);" data-filename="design-150b.png">
										</div>
										<div style="z-index: 50;width: 23%;left: 37%;bottom: 0px;min-width: 139px;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-06.png" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-bottom-top="transform:translateX(60px);" data--50-bottom="transform:translateX(0px);" data-filename="design-147b.png">
										</div>
										<div style="z-index: 20;width: 27%;left: 53%;bottom: 0px;">
											<img alt="" data-noresize="" src="assets/quickstart/images/sample-07.png" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-bottom-top="transform:translateX(-75px);" data--50-bottom="transform:translateX(0px);" data-filename="header-17.png">
										</div>
										<div style="z-index: 0;width: 31%;left: 72%;bottom: 0px;min-width: 257px;">
											<img alt="" data-noresize="" src="assets/quickstart/images/header-46-4NkcX3.jpg" style="box-shadow: rgba(22, 22, 22, 0.1) 0.43em 0em 2em; width: 100%; margin: 0px; float: left;" data-bottom-top="transform:translateX(50px);" data--50-bottom="transform:translateX(0px);">
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
		    'thumbnail': 'preview/header-anim-06.png',
		    'category': '1',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-opensans is-dark-text">
				<div class="is-overlay">

				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-left edge-x-2 is-content-1500 size-18 leading-14">
							<div class="row relative sm-items-1">
								<div class="flex justify-center flex-col items-start column third" style="width: 36.3075%; flex: 0 0 auto;">
									<div class="spacer height-20"></div>
									<h3 class="size-18 font-light uppercase" style="letter-spacing: 3px;">Your App Name</h3>
									<h1 class="size-68 leading-11" style="letter-spacing: 5px;"><span class="font-semibold size-68">Simple.&nbsp;<br></span><span class="size-68 font-light">Adjustable.<br></span><span class="font-semibold size-68">Beautiful.</span></h1>
									<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
									<div class="spacer height-20"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 px-8 border-current rounded text-black hover:border-current font-normal leading-relaxed ml-0 mr-2 mt-2 mb-2 size-12" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Get the App</a>
									</div>
								</div>
								<div class="flex justify-center flex-col items-start column third" style="width: 24.5646%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
								<div style="position: relative; width: 39.008%; flex: 0 0 auto;" class="flex flex-col justify-center items-center column third">
									<div class="is-dock">
										<div style="width: 43%;left: -13%;top: 28%;transform: rotateX(10deg) rotateZ(-30deg);">
											<img alt="" data-noresize="" src="assets/quickstart/images/02-iphone.png" style="width: 100%;" data-filename="02-iphone.png" data-bottom-top="transform: translateY(150px);" data-center-top="transform: translateY(0px);" data-center-bottom="transform: translateY(0px);" data-top-bottom="transform: translateY(-200px);">
										</div>
										<div style="width: 43%;left: 25%;top: -5%;transform: rotateX(10deg) rotateZ(-30deg);">
											<img alt="" data-noresize="" src="assets/quickstart/images/03-iphone.png" style="width: 100%;" data-filename="03-iphone.png" data-bottom-top="transform: translateY(125px);" data-center="transform: translateY(0px);" data-center-bottom="transform: translateY(0px);" data-top-bottom="transform: translateY(-150px);">
										</div>
										<div style="width: 43%;left: 75%;top: -18%;transform: rotateX(10deg) rotateZ(-30deg);">
											<img alt="" data-noresize="" src="assets/quickstart/images/05-iphone.png" style="width: 100%;" data-filename="05-iphone.png" data-bottom-top="transform: translateY(100px);" data-center="transform: translateY(0px);" data-center-bottom="transform: translateY(0px);" data-top-bottom="transform: translateY(-150px);">
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
		    'thumbnail': 'preview/header-anim-07.png',
		    'category': '1',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-opensans box-autofit">
				<div class="is-overlay">
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-900 size-18 leading-14">
							<div class="row">
								<div class="column half flex flex-col justify-center items-start" style="min-height: 594.13px;">
									<div class="spacer height-20"></div>
									<h3 class="size-18 font-light" style="letter-spacing: 3px;">THE LOOKBOOK</h3>
									<h1 class="size-68 leading-none" style="letter-spacing: 5px;"><span class="font-semibold size-68">New&nbsp;<br></span><span class="size-68 font-light">Summer<br></span><span class="font-semibold size-68">Trends</span></h1>
									<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 border-current text-black hover:border-current font-normal leading-relaxed ml-0 mr-2 mt-2 mb-2 rounded-full size-12 px-8" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Get the App</a>
									</div>
								</div>
								<div class="column half flex flex-col justify-center items-start">
									<img alt="" data-noresize="" src="assets/quickstart/images/03-iphone.png" data-bottom-top="transform:translateY(100px);" data-center="transform:translateY(0px);">
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		{
		    'thumbnail': 'preview/header-26.png',
		    'category': '1',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay">
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-12 is-content-840">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase size-14 tracking-400">Hello, This is Company-Name</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-09 size-72">We create simple and effective designs.</h1>
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
									<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 100%;" class="column third xs-hidden">
									<div class="spacer height-80"></div>
								</div>
								<div data-noedit="" data-html="${encodeURIComponent(`
									<form class="form{id} mt-6 space-y-6 px-1" method="POST" action="">
										<div>
											<label for="email{id}">Email:</label>
											<div class="flex justify-center items-center mt-2">
												<input class="w-full px-2 py-3 text-base font-normal border-2 rounded mr-2" type="email" id="email{id}" name="email" required="">
												<button class="transition-all inline-block cursor-pointer no-underline border-2 border-solid uppercase py-3 px-8 border-current hover:border-current text-base font-normal rounded tracking-125" type="submit" style="background-color: rgb(255, 255, 255);">Subscribe</button>
											</div>
										</div>
									</form>
								`)}" data-settings="" style="width: 77.7003%; flex: 0 0 auto;" class="column third">
									
								</div>
								<div class="column third xs-hidden" style="width: 100%;">
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
		    'thumbnail': 'preview/header-27.png',
		    'category': '1',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit">
						<div class="is-overlay">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-640 size-17 leading-13">
									<div class="row">
										<div class="column full">
											<p class="uppercase size-14 tracking-400 text-left">Hello, This is Company-Name</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<h1 class="leading-none text-left font-light size-60">We create simple and effective designs.</h1>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div style="width: 84%; flex: 0 0 auto;" class="column half">
											<p class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type.</p>
										</div>
										<div style="width: 100%;" class="column half">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full" data-noedit="" data-html="${encodeURIComponent(`
											<form class="form{id} mt-6 space-y-6 px-1" method="POST" action="">
												<div>
													<label for="email{id}">Email:</label>
													<div class="flex justify-center items-center mt-2">
														<input class="w-full px-2 py-3 text-base font-normal border-2 rounded mr-2" type="email" id="email{id}" name="email" required="">
														<button class="transition-all inline-block cursor-pointer no-underline border-2 border-solid uppercase py-3 px-8 border-current hover:border-current text-base font-normal rounded tracking-125" type="submit" style="background-color: rgb(255, 255, 255);">Subscribe</button>
													</div>
												</div>
											</form>
										`)}">
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
								<div class="is-container v2 leading-13 size-17 is-content-800">
									<div class="row">
										<div class="column full"><img src="[%IMAGE_PATH%]images/pexels-marta-milczarek-751.jpg" alt=""></div>
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
		    'thumbnail': 'preview/header-anim-05.png',
		    'category': '1',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-raleway-lato box-autofit">
				<div class="is-overlay">
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1300 size-19 leading-14">
							<div class="row relative sm-items-1 sm-autofit">
								<div class="flex justify-center flex-col items-start column third" style="width: 38.8377%; flex: 0 0 auto;">
									<div class="spacer height-40"></div>
									<p class="uppercase tracking-widest">We Are Creative Studio</p>
									<h1 class="font-semibold tracking-wide leading-11 size-50">Beautiful Hand-crafted Designs for Everyone</h1>
									<p style="border-bottom: 2px solid #000;width: 70px;display: inline-block;margin-bottom:0"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<div class="spacer height-20"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 border-current text-black hover:border-current font-normal ml-1 leading-relaxed rounded-full mt-2 size-12 px-8" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Our Portfolio</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase font-normal ml-1 leading-relaxed py-2 rounded-full border-transparent hover:text-white hover:border-transparent mt-2 size-12 px-8" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(239,108,0)" style="background-color: rgb(239, 108, 0); color: rgb(255, 255, 255);" data-hover-bg="rgb(239,108,0)">Get in Touch</a>
									</div>
								</div>
								<div class="flex justify-center flex-col items-start column third sm-hidden xs-hidden" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
								<div style="position: relative; width: 54.5004%; flex: 0 0 auto;" class="flex flex-col justify-center items-center column third">
									<div class="is-dock" style="margin:50px 0">
										<div style="width: 42%;left: 12%;top: 7%;transform: rotateX(10deg) rotateZ(-30deg);">
											<img alt="" data-noresize="" src="assets/quickstart/images/05-iphone.png" style="width: 100%;" data-400-bottom="transform:translateY(100px);" data-bottom="transform:translateY(0px);">
										</div>
										<div style="width: 42%;left: 43%;top: 3%;">
											<img alt="" data-noresize="" src="assets/quickstart/images/03-iphone.png" style="width: 100%;" data-bottom-top="transform:translateY(150px);" data-center-top="transform:translateY(0px);">
										</div>
									</div>
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
		    'thumbnail': 'preview/header-02.png',
		    'category': '1',
		    'contentCss': 'type-spacemono.css',
		    'contentClass': 'type-spacemono',
		    'html': `
			<div class="is-section is-section-100 type-spacemono">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit min-height-40">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-820 size-16 leading-none">
									<div class="row">
										<div class="column full">
											<h1 class="leading-11 size-88">With Less Stuff and More Compassion</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>

									</div>
									<div class="row">
										<div class="column half" style="width: 47.1279%; flex: 0 0 auto;">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type.</p>
										</div>
										<div class="column half" style="width: 100%;">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="text-right button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 size-14 font-normal ml-1 leading-relaxed border-transparent hover:border-transparent px-11 rounded-full tracking-125" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(233,2,0)" style="background-color: rgb(233, 2, 0); color: rgb(255, 255, 255);" title="">Get a Quote</a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

					</div>
					<div class="is-box is-box-6 is-content-top is-light-text box-autofit min-height-60">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_6NYVPE6NEB-6.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-2"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-2">
								<div class="is-container v2 is-content-left edge-x-1 is-content-320">
									<div class="row">
										<div class="column full">
											<p class="leading-12">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
		    'thumbnail': 'preview/header-11.png',
		    'category': '1',
		    'contentCss': 'type-lato.css',
		    'contentClass': 'type-lato',
		    'html': `
			<div class="is-section is-box is-section-100 type-lato box-autofit">
				<div class="is-overlay" style="background-color: rgb(245 240 238);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1700 size-18 leading-15">
							<div class="row">
								<div class="column half flex flex-col justify-center items-start">
									<h1 class="uppercase size-100 leading-11">We not only design things. We <span class="font-semibold size-100">design dreams.</span></h1>
									<div class="spacer height-60"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase size-14 px-8 border-current text-black hover:border-current font-normal leading-relaxed rounded-none ml-0 mt-2 mb-2 py-3 tracking-125" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Read More</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid uppercase size-14 px-8 font-normal leading-relaxed rounded-none mr-0 ml-0 mt-2 mb-2 py-3 border-transparent hover:border-transparent tracking-125" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(0,0,0)" style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">Get Started</a>
									</div>
								</div>
								<div class="column half flex flex-col justify-center items-center"><img src="assets/quickstart/images/01-iphone.png" alt="" data-filename="01-iphone.png"></div>

							</div>

						</div>
					</div>
				</div>
			</div>
			`
		},
		
		{
		    'thumbnail': 'preview/header-04.png',
		    'category': '1',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-poppins box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">
					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-8"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1340 size-18 leading-14" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-none size-84">Everything you need to create beautiful pages and share your stories.</h1>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid text-black tracking-75 font-normal uppercase px-11 py-3 leading-relaxed mr-2 border-transparent rounded-none hover:border-transparent ml-0 size-14 mt-2 mb-2" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" title="">Get Started</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 font-normal uppercase px-11 border-current hover:border-current py-3 leading-relaxed mr-0 rounded-none ml-0 size-14 mt-2 mb-2" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);" title="">Learn More</a>
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
		    'thumbnail': 'preview/header-03.png',
		    'category': '1',
		    'contentCss': 'type-heebo-ibmplexmono-2.css',
		    'contentClass': 'type-heebo-ibmplexmono-2',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-heebo-ibmplexmono-2">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-cottonbro-105481242.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-y="-92" data-x="0" data-scale="297.4371762243882">
						<div class="is-overlay-color opacity-0"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-970 leading-12 size-17" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<p class="text-center uppercase tracking-500">T h e&nbsp; L o o k b o o k</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-none tracking-wide size-136" style="font-weight: 300;">New Summer Trends</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full text-center">
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid size-16 text-black font-normal uppercase px-11 py-3 leading-relaxed ml-0 mr-1 mt-2 mb-2 border-transparent hover:border-transparent tracking-125 rounded-none" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" title="">Download Now</a>
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
		    'thumbnail': 'preview/header-06.png',
		    'category': '1',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-poppins-lekton is-content-bottom">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">
					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/lesya-vasileva-lCYfAJPp61o-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-y="-2" data-x="0" data-scale="322.60493728952883">
						<div class="is-overlay-color opacity-6"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-bottom edge-y-4">
						<div class="is-container v2 is-content-1740 size-17 leading-none" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column half">
									<div class="spacer height-40"></div>
								</div>
								<div class="column half">
									<div class="display">
										<h1 class="leading-09 size-128 text-left">A style that never gets old.</h1>
									</div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-120"></div>
								</div>

							</div>
							<div class="row sm-autofit">
								<div class="column fourth">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it.</p>
								</div>
								<div class="column half">
									<div class="spacer height-40"></div>
								</div>
								<div class="column fourth sm-hidden">
									<div class="spacer height-80"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="text-right button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 size-14 px-8 border-current hover:border-current leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 font-semibold" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(255, 255, 255);" title="">Contact</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 size-14 px-8 leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 border-transparent hover:border-transparent font-semibold" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);" title="" data-bg="rgb(255,255,255)">Shop Collection</a>
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
		    'thumbnail': 'preview/header-07.png',
		    'category': '1',
		    'contentCss': 'type-oswald-opensans.css',
		    'contentClass': 'type-oswald-opensans',
		    'html': `
			<div class="is-section is-section-100 type-oswald-opensans">
				<div class="is-boxes">
					<div class="is-box is-box-7 is-dark-text min-height-50 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255); filter: grayscale(1);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/abbs-johnson-8GZfC8_eRK0-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-0"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-900 is-content-left edge-x-0-5 leading-14 size-18">
									<div class="row">
										<div class="column full">
											<p class="uppercase size-14 tracking-225">We are creative agency based in Seattle</p>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<h1 class="leading-09 size-228">Bold. Better.</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase size-14 border-current text-black hover:border-current font-normal leading-relaxed rounded-none ml-0 px-8 py-3 tracking-150" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="">Book a Demo</a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-5 is-light-text is-align-center box-autofit min-height-50">
						<div class="is-overlay" style="filter: grayscale(1);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/ali-choubin-Jo63jdL8-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-left edge-x-0-5 is-content-340">
									<div class="row">
										<div class="column full">
											<div class="leading-16">
												<a href="#" title=""><i class="icon ion-android-arrow-dropright-circle size-108"></i></a>
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
		    'thumbnail': 'preview/header-08.png',
		    'category': '1',
		    'contentCss': 'type-inconsolata.css',
		    'contentClass': 'type-inconsolata',
		    'html': `
			<div class="is-section is-section-100 type-inconsolata">
				<div class="is-boxes">
					<div class="is-box is-box-8 is-content-bottom box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-2">
								<div class="is-container v2 is-content-1140 leading-none size-16">
									<div class="row">
										<div class="column full">
											<h1 class="size-172 tracking-tight leading-none text-center">Take a Break</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p class="text-center uppercase size-18 tracking-200">Go explore the beautiful places</p>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full text-center">
											<div class="button-group">
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase size-14 px-8 border-current text-black hover:border-current font-normal leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 py-3" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="">Choose Destinations</a>
											</div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>

									</div>
									<div class="row md-autofit sm-autofit">
										<div class="column third" style="width: 56.6157%; flex: 0 0 auto;"><img src="assets/quickstart/images/trail-duqHJKl0dBA-unsplash-editVpA34wK.jpg" alt="" data-filename="trail-duqHJKl0dBA-unsplash-editVpA34wK.jpg"></div>
										<div class="column third md-hidden sm-hidden" style="width: 100%;">
											<div class="spacer height-40"></div>
										</div>
										<div style="width: 100%;" class="column third flex flex-col justify-end items-start">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<div class="spacer height-20"></div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-4 box-autofit min-height-50">
						<div class="is-overlay">

							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/camilo-contreras-MxD60O3ZzLY-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 is-content-440">
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
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
		    'thumbnail': 'preview/header-09.png',
		    'category': '1',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-raleway-lato box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">

					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-karolina-grabowska-4207790-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1200 h-full flex flex-col justify-between leading-15 size-18" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full pt-16">
									<h1 class="text-center leading-09 tracking-wide size-136" style="font-weight: 500;">Modern Home Decor</h1>
								</div>

							</div>
							<div class="row">
								<div class="column full pb-16">
									<p class="text-center font-semibold uppercase size-19 tracking-widest">Create a Stylish Space With Our Products</p>
									<div class="spacer height-20"></div>
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid uppercase px-8 text-black font-normal leading-relaxed rounded-none ml-0 mr-1 border-transparent hover:border-transparent mt-2 mb-2 size-13 tracking-widest py-3" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);">Shop Collection</a>
									</div>
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
		    'thumbnail': 'preview/header-anim-08.png',
		    'category': '1',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 is-box type-oranienbaum-sourcesanspro is-dark-text">
				<div class="is-overlay" style="background-color: rgb(224 224 226);">
					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/henry-co-unsplash.jpg&quot;);">

					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-left edge-x-2 is-content-1500 size-18 leading-12">
							<div class="row relative sm-items-1 sm-autofit">
								<div style="position: relative; width: 42.987%; flex: 0 0 auto;" class="column fourth flex flex-col justify-center items-start">
									<div class="is-dock">
										<div style="width: 53%;left: 30%;top: 0%;transform: rotateX(-10deg) rotateZ(30deg);">
											<img alt="" data-noresize="" src="assets/quickstart/images/screen-shot-1-vK0M52.jpg" style="box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em; width: 100%;" data-bottom-top="transform: translateX(-100px) rotate(-20deg);" data-center="transform: translateX(0px) rotate(0deg);" data-50-top="transform: rotate(0deg);" data-top-bottom="transform: rotate(-10deg);">
										</div>
										<div style="width: 53%;left: -5%;top: 0%;transform: rotateX(-10deg) rotateZ(30deg);">
											<img alt="" data-noresize="" src="assets/quickstart/images/06-eu3rD1.jpg" style="box-shadow: rgba(22, 22, 22, 0.2) 3em 3em 5em; width: 100%;" data-400-bottom="transform: translateX(-100px) rotate(-20deg);" data-center="transform: translateX(0px) rotate(0deg);" data-center-bottom="transform: rotate(0deg);" data-top-bottom="transform: rotate(-10deg);">
										</div>
									</div>
								</div>
								<div class="flex justify-center flex-col items-start column half sm-hidden" style="width: 21.5584%; flex: 0 0 auto;">
									<div class="spacer height-80"></div>
								</div>
								<div class="flex justify-center flex-col items-start column fourth" style="width: 35.4354%; min-height: 433.078px;">
									<div class="spacer height-20"></div>
									<p class="leading-16" style="letter-spacing: 4px;">SIMPLE &amp; POWERFUL</p>
									<h1 class="size-68 leading-12">Not Just An Average Website Builder</h1>
									<div class="spacer height-20"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 px-8 border-current rounded text-black hover:border-current font-normal leading-relaxed ml-0 mr-1 mt-2 mb-2 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Get Started</a><a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 px-8 rounded font-normal ml-1 leading-relaxed border-transparent hover:border-transparent size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(235,98,56)" style="background-color: rgb(235, 98, 56); color: rgb(255, 255, 255);" data-hover-bg="">Get Started</a>
									</div>
									<div class="spacer height-20"></div>
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
		    'thumbnail': 'preview/header-12.png',
		    'category': '1',
		    'contentCss': 'type-cormorantsc-ibmplexsanscon.css',
		    'contentClass': 'type-cormorantsc-ibmplexsanscon',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text is-content-top type-cormorantsc-ibmplexsanscon box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">

					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-karolina-grabowska-7185847-2.jpg&quot;);" data-bg-sm="background-position-x: 31%; background-size: cover;" data-bg-xs="background-position-x: 40%; background-size: cover;" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95 is-content-top edge-y-3">
						<div class="is-container v2 is-content-right edge-x-0-5 size-17 leading-12 is-content-1400" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div style="width: 65.4489%; flex: 0 0 auto;" class="column half">
									<div class="spacer height-40"></div>
								</div>
								<div style="width: 100%;" class="column half">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-100"></div>
								</div>

							</div>
							<div class="row">
								<div class="text-right column third">
									<div class="spacer height-60"></div>
								</div>
								<div class="text-right column two-third">
									<h1 class="size-92 leading-09">We love designing minimalist spaces</h1>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full text-right">
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid text-black font-normal uppercase px-11 py-3 leading-relaxed ml-0 mr-1 mt-2 mb-2 rounded-none size-14 tracking-125 border-transparent hover:border-transparent" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="" data-bg="rgb(250,192,98)" style="background-color: rgb(250, 192, 98);">Book Appointment</a>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		/*{
		    'thumbnail': 'preview/header-10.png',
		    'category': '1',
		    'contentCss': 'type-spacemono.css',
		    'contentClass': 'type-spacemono',
		    'html': `
			<div class="is-section is-section-100 type-spacemono">
				<div class="is-boxes">
					<div class="is-box is-box-6 is-light-text box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">

							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/anna-yenina-OrfKO92rf08-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-10"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-900 size-16 leading-none">
									<div class="row">
										<div class="column full">
											<h1 class="text-center tracking-tight leading-09 size-116">Mark's Photography</h1>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-6 is-light-text is-content-bottom box-autofit min-height-50">
						<div class="is-overlay">

							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-pavel-danilyuk-6075143.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-4"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90 is-content-bottom edge-y-3">
								<div class="is-container v2 is-content-440 is-content-right edge-x-0-5 size-16 leading-none">
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 size-14 px-8 text-black leading-relaxed ml-0 mr-1 mt-2 mb-2 rounded-none border-transparent hover:border-transparent font-semibold" title="" style="background-color: rgb(255, 255, 255);" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)"><i class="icon ion-android-arrow-dropright-circle" style="color: rgb(0, 0, 0);"></i>&nbsp;Our Showreel</a>
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
		*/
		
		{
		    'thumbnail': 'preview/header-13.png',
		    'category': '1',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-montserrat-roboto box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);filter: grayscale(1);">

					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-5.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-15" style="background-color: rgb(0, 0, 0);"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-left edge-x-0-5 is-content-1800 leading-12 size-17" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<h1 class="leading-none size-156">D.</h1>
									<p class="tracking-275 uppercase size-15">Dave Anderson</p>
								</div>

							</div>
							<div class="row">
								<div class="column full xs-hidden">
									<div class="spacer height-200"></div>
								</div>

							</div>
							<div class="row sm-autofit">
								<div class="column third" style="width: 62.235%; flex: 0 0 auto;">
									<h1 class="size-72 leading-none">Hi, this is Dave.<br class="size-72">I develop websites and design beautiful things you will love.</h1>
								</div>
								<div class="column third sm-hidden" style="width: 100%;">
									<div class="spacer height-20"></div>
								</div>
								<div style="width: 100%;" class="column third">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="text-right button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid uppercase size-14 font-normal leading-relaxed mt-2 mb-2 mr-1 ml-0 hover:border-transparent rounded-full border-transparent py-3 px-11 tracking-widest" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);" title="">Get in Touch</a>
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
		    'thumbnail': 'preview/header-14.png',
		    'category': '1',
		    'contentCss': 'type-frankruhllibre-lato.css',
		    'contentClass': 'type-frankruhllibre-lato',
		    'html': `
			<div class="is-section is-section-100 type-frankruhllibre-lato">
				<div class="is-boxes">
					<div class="is-box is-box-6 is-light-text box-autofit min-height-60">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">

							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-anna-shvets-3771691.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-6" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-480 is-content-left edge-x-2">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-46">Making Ideas Come Alive.</h1>
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
												<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid text-black font-normal uppercase leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 border-transparent hover:border-transparent tracking-125 py-2 px-8 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" title="">How it Works</a>
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
							<div class="is-box-centered">
								<div class="is-container v2 is-content-900 size-16 leading-11">
									<div class="row">
										<div class="column full">
											<h1 class="leading-09 size-176">Creative and Inspiring.</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>

									</div>
									<div class="row md-autofit">
										<div class="column half" style="width: 100%;">
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div class="column half md-hidden" style="width: 61.5202%; flex: 0 0 auto;">
											<div class="spacer height-40"></div>
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
		    'thumbnail': 'preview/header-15.png',
		    'category': '1',
		    'contentCss': 'type-fugazone-librefranklin.css',
		    'contentClass': 'type-fugazone-librefranklin',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text is-content-bottom type-fugazone-librefranklin box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">

					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/wood-floor-interior-pxhere.jpg&quot;);" data-y="10" data-x="0" data-scale="113.88211872861704" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-5"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-bottom edge-y-3">
						<div class="is-container v2 is-content-1600 size-16 leading-12" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<h1 class="text-center size-248 leading-09">The Studio</h1>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row sm-autofit">
								<div class="column third">
									<h3 class="size-28">Every Detail Matters</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type .</p>
								</div>
								<div class="column third sm-hidden">
									<div class="spacer height-40"></div>
								</div>
								<div class="column third">
									<div class="spacer height-40"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 py-2 size-14 px-8 text-black leading-relaxed ml-0 mr-1 mt-2 mb-2 border-transparent rounded-none hover:border-transparent font-semibold" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" title="">Request Quote</a>
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
		    'thumbnail': 'preview/header-17.png',
		    'category': '1',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text is-content-top type-oranienbaum-sourcesanspro box-autofit min-height-70">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">

					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/oktavisual-project-zj58Y4J9YDo-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-0"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-top edge-y-3">
						<div class="is-container v2 is-content-1800 leading-none size-17" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full text-center">
									<h1 class="text-right leading-09 size-320">Calm.</h1>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<h3 class="text-center uppercase size-24 tracking-325">Simple &amp; Lovely</h3>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row sm-autofit">
								<div class="column third sm-hidden">
									<div class="spacer height-20"></div>
								</div>
								<div class="column third">
									<div class="spacer height-20"></div>
								</div>
								<div class="column third">
									<p class="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since.</p>
								</div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>

							</div>
							<div class="row">
								<div class="column full text-right">
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid uppercase py-2 px-8 text-black font-normal leading-relaxed ml-0 mr-1 mb-2 mt-2 rounded-none border-transparent hover:border-transparent size-12 tracking-150" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(249,168,37)" style="background-color: rgb(249, 168, 37);" title="">Shop Products</a>
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
		    'thumbnail': 'preview/header-21.png',
		    'category': '1',
		    'contentCss': 'type-heebo-ibmplexmono.css',
		    'contentClass': 'type-heebo-ibmplexmono',
		    'html': `
			<div class="is-section is-section-100 is-box is-light-text type-heebo-ibmplexmono box-autofit min-height-70">
				<div class="is-overlay">
			
					<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-vlada-karpovich-4050418-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-4" style="background-color: rgb(0, 0, 0);"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-left edge-x-2 v2 is-content-900 size-17 leading-14">
							<div class="row">
								<div class="column full">
									<div class="display">
										<h1 class="normal-case leading-09 tracking-wide size-128">Monday to Friday</h1>
										<div class="spacer height-20"></div>
										<p class="tracking-175 size-28 leading-12">We make shopping way easier and convenient for you</p>
									</div>
								</div>
			
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
			
							</div>
							<div class="row">
								<div class="column full">
									<a href="#" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 size-14 px-8 text-black font-normal leading-relaxed rounded-none border-transparent hover:border-transparent ml-0 mr-1" style="padding: 10px 45px; line-height: 1.8rem; font-size: 0.9rem; background-color: rgb(255, 255, 255);" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)">View Collection</a>
								</div>
			
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		},

		/* ARTICLES */

		{
		    'thumbnail': 'preview/simple-article-03.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered is-opacity-95">
					<div class="is-container v2 size-16 leading-13 is-content-1100">
						<div class="row">
							<div class="column third xs-hidden" style="width: 100%;">
								<div class="spacer height-80"></div>
							</div>
							<div class="column third" style="min-height: 143.892px; width: 63.4981%; flex: 0 0 auto;">
								<h1 class="text-center font-medium leading-none size-80">Words From Heart</h1>
								<div class="spacer height-20"></div>
								<p class="text-center uppercase size-12 tracking-125" style="color: rgb(145, 145, 145);">By Selma Laursen</p>
								<div class="spacer height-20"></div>
							</div>
							<div style="width: 100%;" class="column third xs-hidden">
								<div class="spacer height-80"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column third" style="width: 100%;">
								<div class="spacer height-40"></div>
							</div>
							<div class="column third" style="width: 38.8966%; flex: 0 0 auto; min-height: 54px;">
								<p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;</p>
							</div>
							<div style="width: 100%;" class="column third">
								<div class="spacer height-40"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column full xs-hidden">
								<div class="spacer height-60"></div>
							</div>
		
						</div>
						<div class="row sm-autofit">
							<div style="width: 100%;" class="column third xs-hidden sm-hidden">
								<div class="spacer height-80"></div>
							</div>
							<div style="min-height: 277.384px; width: 54.2069%; flex: 0 0 auto;" class="flex flex-col justify-center items-start column third">
								<p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								<p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
							</div>
							<div style="width: 100%;" class="column third xs-hidden sm-hidden">
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
		    'thumbnail': 'preview/simple-article-11.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
		<div class="is-section is-section-100 type-poppins">
		<div class="is-boxes">
			<div class="is-box-img is-box is-box-5 box-autofit min-height-60">
				<div class="is-boxes ">
					<div class="is-overlay">
						<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-karolina-grabowska-7291745.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
					</div>
				</div>
			</div>
			<div class="is-box is-dark-text is-box-7 box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-500 size-16 leading-13">
							<div class="row">
								<div class="column full">
									<p style="color: rgb(136, 136, 136);" class="uppercase tracking-wider">Words from Sarah Williams</p>
									<h1 class="size-60 leading-11 font-light">Home is wherever I'm with you.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full" style="width: 100%; flex: 0 0 auto; min-height: 54px;">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
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
		    'thumbnail': 'preview/simple-article-08.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-6 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-600 leading-13 size-16">
									<div class="row">
										<div class="column full">
											<h1 style="color: rgb(174, 174, 174);" class="size-68 text-center font-light not-italic">Sunday Lovely Sunday.</h1>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p class="text-center"><i style="color: rgb(145, 145, 145);" class="size-17">By Jennifer Anderson</i></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box-img is-box is-box-6 box-autofit min-height-50">
						<div class="is-boxes">
							<div class="is-overlay">

								<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-haley-black-2087320.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
	

		{
		    'thumbnail': 'preview/article-28.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-7 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-1000 size-16 leading-14">
									<div class="row">
										<div class="column half" style="width: 74.0084%; flex: 0 0 auto;">
											<h1 class="leading-none size-100">Simple, Clean, Bright</h1>
										</div>
										<div class="column half" style="width: 100%;">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full xs-hidden">
											<div class="spacer height-220"></div>
										</div>

									</div>
									<div class="row relative md-items-2">
										<div class="flex flex-col justify-end items-start column third">
											<p class="leading-none size-14">Written by<br class="size-14"><span class="font-semibold size-14">Samantha Holmes</span></p>
										</div>
										<div class="column third">
											<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div class="column third">
											<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-5 box-autofit min-height-60">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">

							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-marina-podrez-11674118.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		{
		    'thumbnail': 'preview/article-35.png',
		    'category': '2',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 type-montserrat-roboto">
				<div class="is-boxes">
					<div class="is-box is-box-6 is-content-bottom box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 is-content-900 leading-12 size-17">
									<div class="row">
										<div class="column full">
											<h1 class="size-76 leading-11">The World Filled with Wonders.</h1>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div class="column half">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half" style="width: 59.8575%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/haley-lawrence-bYWTd9N4k-unsplash-editDr1639p.jpg" alt=""></div>
										<div class="column half" style="width: 100%;">
											<div class="spacer height-20"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6 is-content-bottom box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 is-content-900 size-17 leading-12">
									<div class="row">
										<div class="column two-third">
											<div class="spacer height-40"></div>
										</div>
										<div class="column third">
											<p class="leading-12">Written by<br>Caroline Gabrielle</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full"><img src="[%IMAGE_PATH%]images/brooke-cagle-QJ1j4HOdNtI-unsplash-editzckUvcE.jpg" alt="" data-filename="haley-lawrence-bYWTd9N4k-unsplash.jpg"></div>
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
		    'thumbnail': 'preview/simple-article-04.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
			<div class="is-boxes">
				<div class="is-box is-dark-text is-box-6 box-autofit">
					<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 is-content-580 size-16 leading-13">
								<div class="row">
									<div class="column full">
										<h1 class="font-light size-64">Wonderful Summer Getaway</h1>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-80"></div>
									</div>
								</div>
								<div class="row">
									<div class="column full">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="is-box-img is-box is-box-6 box-autofit min-height-50">
					<div class="is-boxes">
						<div class="is-overlay">

							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-marisa-tajada-9537162.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-x="-33" data-y="7"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
		},

		{
			'thumbnail': 'preview/article-29.png',
			'category': '2',
			'contentCss': 'type-prata-hindsiliguri.css',
			'contentClass': 'type-prata-hindsiliguri',
			'html': `
			<div class="is-section is-section-100 box-space type-prata-hindsiliguri">
				<div class="is-boxes">
					<div class="is-box is-content-top is-box-5 box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">

							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-anna-shvets-5614280.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-7 is-content-bottom box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-2">
								<div class="is-container v2 is-content-800 size-16 leading-12">
									<div class="row">
										<div class="column full pb-4">
											<h1 class="text-center leading-none size-84">We fall in love with minimalist style.</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full xs-hidden">
											<div class="spacer height-160"></div>
										</div>

									</div>
									<div class="row md-autofit sm-autofit">
										<div class="column third">
											<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										</div>
										<div class="column third md-hidden sm-hidden xs-hidden">
											<div class="spacer height-80"></div>
										</div>
										<div class="flex flex-col justify-end items-end column third">
											<p class="leading-12 text-justify italic font-light size-15">By Sam Peters</p>
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
		    'thumbnail': 'preview/article-44.png',
		    'category': '2',
		    'contentCss': 'type-novamono-robotomono.css',
		    'contentClass': 'type-novamono-robotomono',
		    'html': `
			<div class="is-section is-section-100 type-novamono-robotomono">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-7 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-1000 leading-12 size-16">
									<div class="row md-autofit sm-autofit">
										<div class="column third">
											<h1 class="leading-none uppercase size-64">Home is where your story begins</h1>
										</div>
										<div class="column third md-hidden sm-hidden">
											<div class="spacer height-40"></div>
										</div>
										<div class="column third">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>

									</div>
									<div class="row md-autofit sm-autofit">
										<div class="column full md-hidden sm-hidden xs-hidden">
											<div class="spacer height-180"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p class="font-semibold size-14">Jonathan Courtright</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-5 box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-ksenia-chernaya-11592925.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/article-41.png',
		    'category': '2',
		    'contentCss': 'type-ibmplexmono.css',
		    'contentClass': 'type-ibmplexmono',
		    'html': `
			<div class="is-section is-section-100 type-ibmplexmono">
				<div class="is-boxes">
					<div class="is-box is-dark-text is-box-7 is-align-justify box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-1000 leading-12 size-17">
									<div class="row">
										<div class="column full">
											<h1 class="size-200 leading-none">A Place</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<h3 class="size-24">Where Ideas Grow</h3>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>

									</div>
									<div class="row md-autofit sm-autofit">
										<div class="column half md-hidden sm-hidden" style="width: 100%;">
											<div class="spacer height-40"></div>
										</div>
										<div class="column half" style="width: 42.2756%; flex: 0 0 auto;">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p class="leading-12 font-semibold size-14">Ralph Whisler</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-box-5 box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-felipe-cespedes-3029699.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-0"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},


		{
		    'thumbnail': 'preview/article-39.png',
		    'category': '2',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-section-100 box-space type-quicksand-kalam stack-top">
				<div class="is-boxes">
					<div class="is-box is-box-6 is-light-text is-content-bottom box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-george-milton-7034389.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
								<div class="is-overlay-color opacity-8" style="background-color: rgb(0, 0, 0);"></div>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-3">
								<div class="is-container v2 is-content-440 is-content-left edge-x-0-5">
									<div class="row">
										<div class="column full">
											<h2 class="size-48 leading-none">Words from heart.</h2>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p class="size-17 tracking-125">Melissa Sparks</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6 is-content-bottom is-align-justify box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 is-content-620 is-content-right edge-x-0-5 size-16 leading-12">
									<div class="row">
										<div class="column full">
											<h1 class="size-132 leading-none">Plant your dreams.</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-100"></div>
										</div>

									</div>
									<div class="row">
										<div class="column half">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div class="column half">
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
		    'thumbnail': 'preview/article-38.png',
		    'category': '2',
		    'contentCss': 'type-cutivemono-lato.css',
		    'contentClass': 'type-cutivemono-lato',
		    'html': `
			<div class="is-section is-section-100 type-cutivemono-lato">
				<div class="is-boxes">
					<div class="is-box is-content-top is-box-5 box-autofit min-height-50">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-helena-ije-2867899.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-7 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-1020 size-16 leading-12">
									<div class="row">
										<div class="column full">
											<h1 class="tracking-tight size-200 leading-none">06:00</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>

									</div>
									<div class="row">
										<div class="column half" style="width: 65.1996%; flex: 0 0 auto;">
											<div class="spacer height-20"></div>
										</div>
										<div style="width: 100%;" class="column half">
											<h1 class="tracking-tight text-right leading-none size-35">Early Morning Riser</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-120"></div>
										</div>

									</div>

									<div class="row sm-autofit md-autofit">
										<div style="width: 41.8628%; flex: 0 0 auto;" class="column half">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div class="column half sm-hidden md-hidden" style="width: 100%;">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<p class="font-semibold size-15 text-center">— Jeff Watkins</p>
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
		    'thumbnail': 'preview/article-45.png',
		    'category': '2',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-6 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-920 size-16 leading-12 content-pb-0">
									<div class="row">
										<div class="column full"><img src="assets/quickstart/images/pexels-karolina-grabowska-4397898-editCzF75BK.jpg" alt=""></div>

									</div>
									<div class="row">
										<div class="column half">
											<h1 class="size-76">More than</h1>
										</div>
										<div class="column half text-right">
											<h1 class="size-76">words</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-80"></div>
										</div>

									</div>
									<div class="row md-autofit sm-autofit">
										<div class="column fourth">
											<p class="tracking-wide size-15">Words From Heart<br class="size-15">By William Rollins</p>
										</div>
										<div class="column fourth md-hidden sm-hidden">
											<div class="spacer height-80"></div>
										</div>
										<div class="column half">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type.</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-6 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-right is-content-400 edge-x-1 h-full flex flex-col justify-between size-16 leading-12">
									<div class="row">
										<div class="column full pt-16">
											<h1 class="text-right leading-08 size-132">08</h1>
											<p class="text-right tracking-75">August</p>
										</div>

									</div>
									<div class="row">
										<div class="column full pb-12">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/article-40.png',
		    'category': '2',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 is-box type-raleway-lato box-autofit">
				<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1600 leading-12 size-18">
							<div class="row">
								<div class="column third flex flex-col justify-end items-start" style="width: 43.915%; flex: 0 0 auto;">
									<p class="font-semibold size-16 leading-12 tracking-wide">Written by<br class="size-16">David Anderson</p>
								</div>
								<div style="width: 100%;" class="column third"><img src="assets/quickstart/images/pexels-anna-nekrashevich-7214824-editVSSlbDI.jpg" alt=""></div>
								<div class="column third" style="width: 100%;"><img src="assets/quickstart/images/pexels-karolina-grabowska-4041420-edityotf1bZ.jpg" alt=""></div>

							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>

							</div>
							<div class="row relative">
								<div style="width: 41.0174%; flex: 0 0 auto;" class="column half flex flex-col justify-end items-start">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half" style="width: 58.9826%;">
									<h3 class="uppercase text-right leading-12 size-17 tracking-325" style="font-weight: 500;">Beauty Of</h3>
									<h1 class="text-right leading-08 font-semibold size-196">Nature</h1>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/article-46.png',
		    'category': '2',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 type-alegreya-lato">
				<div class="is-boxes">
					<div class="is-box is-box-7 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-970 leading-12 size-17 content-pb-0">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-132">just chillin'</h1>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>

									</div>
									<div class="row">
										<div class="column half">
											<p class="italic">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p class="font-semibold size-12">By Anne Marry</p>
										</div>
										<div class="column half xs-hidden">
											<div class="spacer height-40"></div>
										</div>

									</div>
									<div class="row sm-autofit">
										<div class="column full sm-hidden xs-hidden">
											<div class="spacer height-100"></div>
										</div>

									</div>
									<div class="row md-autofit">
										<div class="column third md-hidden">
											<div class="spacer height-40"></div>
										</div>
										<div class="column third">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div class="column third">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-5 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 is-content-600 content-pt-0">
									<div class="row">
										<div class="column full"><img src="assets/quickstart/images/pexels-lisa-fotios-2362875.jpg" alt=""></div>

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
		    'thumbnail': 'preview/article-43.png',
		    'category': '2',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 type-montserrat-roboto">
    <div class="is-boxes">
        <div class="is-box is-box-5 is-light-text box-autofit min-height-70">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/table-boat-chair-floor-seat-glass-pxhere-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-y="-22"></div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-740 size-16 leading-12">
                        <div class="row">
                            <div class="column full">
                                <h1 class="text-center leading-none size-72">October &amp; November</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <p class="text-center uppercase tracking-400">Sarah Anderson</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 is-content-bottom box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-3">
                    <div class="is-container v2 is-content-880 is-content-right edge-x-0-5 leading-12 size-17">
                        <div class="row relative md-items-2 sm-items-2">
                            <div class="column third">
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column third flex flex-col justify-center items-start">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column third">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/article-47.png',
		    'category': '2',
		    'contentCss': 'type-sixcaps-robotomono.css',
		    'contentClass': 'type-sixcaps-robotomono',
		    'html': `
			<div class="is-section is-section-100 type-sixcaps-robotomono">
    <div class="is-boxes">
        <div class="is-box is-content-top is-box-5 box-autofit min-height-50">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-karolina-grabowska-4711892-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 is-align-center box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 h-full flex flex-col justify-between is-content-760 size-16 leading-12">
                        <div class="row">
                            <div class="column full">
                                <p class="tracking-wider">Michelle Duncan</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h1 class="leading-none size-84 not-italic">In Love With Your Life</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full pt-4">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
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
		    'thumbnail': 'preview/article-49.png',
		    'category': '2',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 is-box type-montserrat-roboto">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1760 leading-12 size-17">
                <div class="row">
                    <div class="column full">
                        <h1 class="text-center uppercase tracking-widest size-68">C l e a n</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <p class="text-center tracking-widest">Words from Michael Williams</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2 md-items-2">
                    <div class="column fourth"><img src="assets/quickstart/images/pexels-ds-stories-8099373-editsdplLyX.jpg" alt=""></div>
                    <div class="column fourth flex flex-col justify-start items-start">
                        <div class="spacer height-20"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column fourth flex flex-col justify-end items-start pb-3"><img src="assets/quickstart/images/pexels-anna-nekrashevich-7214824-editNHVQWR3.jpg" alt=""></div>
                    <div class="column fourth"><img src="assets/quickstart/images/pexels-liza-summer-6347892.jpg" alt="">
                        <div class="spacer height-20"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/article-48.png',
		    'category': '2',
		    'contentCss': 'type-nothingyouc-ibmplexmono.css',
		    'contentClass': 'type-nothingyouc-ibmplexmono',
		    'html': `
			<div class="is-section is-section-100 type-nothingyouc-ibmplexmono">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-8 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-left edge-x-2 h-full flex flex-col justify-between is-content-1060 size-16 leading-12 content-pt-60">
                        <div class="row">
                            <div class="column full">
                                <h1 class="size-104">Behind you.</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <p class="text-right">By Brenda Waller</p>
                            </div>

                        </div>
                        <div class="row sm-autofit md-autofit">
                            <div class="column half" style="width: 41.9729%; flex: 0 0 auto;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="pb-16 column half sm-hidden xs-hidden md-hidden" style="width: 100%;">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-4 box-autofit min-height-70">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-karolina-grabowska-4041420.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/article-50.png',
		    'category': '2',
		    'contentCss': 'type-yantramanav-ibmplexserif.css',
		    'contentClass': 'type-yantramanav-ibmplexserif',
		    'html': `
			<div class="is-section is-section-100 type-yantramanav-ibmplexserif">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-8 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1100 leading-none size-18">
                        <div class="row sm-autofit md-autofit">
                            <div class="column third sm-hidden md-hidden">
                                <div class="spacer height-20"></div>
                            </div>
                            <div class="column third">
                                <p class="size-16 font-semibold">Words From Heart<br>Allice Mobley</p>
                            </div>
                            <div class="column third">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full xs-hidden">
                                <div class="spacer height-140"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h1 class="leading-09 size-328">Calm.</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-4 box-autofit min-height-50">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-samson-katt-5256712.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/article-51.png',
		    'category': '2',
		    'contentCss': 'type-spacemono.css',
		    'contentClass': 'type-spacemono',
		    'html': `
			<div class="is-section is-section-100 type-spacemono">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-left edge-x-2 is-content-780 leading-12 size-17">
                        <div class="row">
                            <div class="column full">
                                <p class="uppercase tracking-475">A story</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half" style="width: 72.0627%; flex: 0 0 auto;">
                                <h1 class="uppercase size-60 leading-none">The wheels are spinning</h1>
                            </div>
                            <div class="column half" style="width: 100%;">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-80"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <p>By Casey Lansford</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column half">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-5 box-autofit min-height-50">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-adam-dubec-1595483-3.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/article-54.png',
		    'category': '2',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 type-raleway-lato">
    <div class="is-boxes">
        <div class="is-box is-content-top is-box-5 box-autofit min-height-60">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-anna-nekrashevich-7214824.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)" data-y="4"></div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-880 leading-12 size-18">
                        <div class="row">
                            <div class="column full">
                                <h1 class="font-semibold size-88 leading-09">Keep Everything</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h1 class="font-semibold text-right size-88 leading-09">Simple</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full xs-hidden">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div style="width: 100%;" class="column half">
                                <p style="color: rgb(145, 145, 145);">Words from<br>Brandon Lamberth</p>
                            </div>
                            <div class="column half" style="width: 54.0705%; flex: 0 0 auto;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
		    'thumbnail': 'preview/article-58.png',
		    'category': '2',
		    'contentCss': 'type-novamono-robotomono.css',
		    'contentClass': 'type-novamono-robotomono',
		    'html': `
			<div class="is-section is-section-100 type-novamono-robotomono">
    <div class="is-boxes">
        <div class="is-box is-content-top is-box-5 box-autofit min-height-60">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-george-milton-7034061.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1040 size-16 leading-12">
                        <div class="row">
                            <div class="column full">
                                <h1 class="uppercase leading-none size-128">Words From Heart</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <p class="size-15">By Stephen Garcia</p>
                            </div>

                        </div>
                        <div class="row sm-autofit">
                            <div class="column full xs-hidden sm-hidden">
                                <div class="spacer height-160"></div>
                            </div>

                        </div>
                        <div class="row md-autofit sm-autofit">
                            <div class="column fourth md-hidden sm-hidden" style="width: 12.5371%; flex: 0 0 auto;">
                                <div class="spacer height-20"></div>
                            </div>
                            <div class="column fourth" style="width: 100%;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                            </div>
                            <div class="column fourth" style="width: 100%;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column fourth" style="width: 100%;">
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
		    'thumbnail': 'preview/article-57.png',
		    'category': '2',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 type-oranienbaum-sourcesanspro">
    <div class="is-boxes">
        <div class="is-box is-box-6 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-800 is-content-left edge-x-1 size-17 leading-12">
                        <div class="row">
                            <div class="column full">
                                <h1 class="leading-08 size-220">Best Friends</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full xs-hidden">
                                <div class="spacer height-160"></div>
                            </div>

                        </div>
                        <div class="row md-autofit">
                            <div class="column half" style="width: 55.0938%; flex: 0 0 auto;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column half xs-hidden md-hidden" style="width: 100%;">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-6 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1000 size-17 leading-12">
                        <div class="row">
                            <div class="column full">
                                <p class="uppercase size-16 leading-16 tracking-200">Heart-warming story from<br>Wilhelmina Bradley</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full xs-hidden">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row md-autofit sm-autofit">
                            <div class="column half" style="width: 33.1429%; flex: 0 0 auto;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column half md-hidden sm-hidden" style="width: 100%;">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full"><img src="assets/quickstart/images/pexels-yuri-manei-2597365-edityb4cTb8.jpg" alt=""></div>

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
		    'thumbnail': 'preview/article-59.png',
		    'category': '2',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 type-raleway-lato">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-7 is-align-justify box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-940 leading-12 size-18">
                        <div class="row">
                            <div class="column full">
                                <p class="uppercase tracking-200 text-left">A Story</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h1 class="font-semibold leading-08 size-160 text-left">Dancing in Harmony</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-60"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <p class="uppercase tracking-450 text-left">Annie Baldwin</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-80"></div>
                            </div>

                        </div>
                        <div class="row md-autofit">
                            <div style="width: 100%;" class="column fourth md-hidden">
                                <div class="spacer height-20"></div>
                            </div>
                            <div style="width: 51.1918%; flex: 0 0 auto;" class="column half">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div style="width: 100%;" class="column fourth md-hidden">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-5 box-autofit min-height-60">
            <div class="is-overlay" style="filter: grayscale(1);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-yaroslav-shuraev-4937768.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/article-56.png',
		    'category': '2',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 box-space type-montserrat-roboto">
			<div class="is-boxes">
				<div class="is-box is-box-5 is-light-text box-autofit min-height-50">
					<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
						<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-pok-rie-4636769-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
							<div class="is-overlay-color opacity-4" style="background-color: rgb(0, 0, 0);"></div>
						</div>
					</div>
					<div class="is-boxes">
						<div class="is-box-centered is-opacity-95">
							<div class="is-container v2 h-full flex flex-col justify-between is-content-740">
								<div class="row">
									<div class="column full pt-9">
										<h1 class="leading-none size-144">Go</h1>
									</div>
		
								</div>
								<div class="row">
									<div class="column full pb-9">
										<h1 class="leading-none size-144">Explore.</h1>
									</div>
		
								</div>
							</div>
						</div>
					</div>
		
				</div>
				<div class="is-box is-dark-text is-box-7 is-content-bottom box-autofit">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered is-opacity-90 is-content-bottom edge-y-2">
							<div class="is-container v2 is-content-840 leading-14 size-17">
								<div class="row sm-autofit md-autofit">
									<div class="column third sm-hidden xs-hidden md-hidden" style="width: 18.262%; flex: 0 0 auto;">
										<div class="spacer height-20"></div>
									</div>
									<div style="width: 100%;" class="column third">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
									<div style="width: 100%;" class="column third">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
		
								</div>
								<div class="row sm-autofit">
									<div class="column full sm-hidden">
										<div class="spacer height-160"></div>
									</div>
		
								</div>
								<div class="row">
									<div class="column full">
										<p class="italic font-semibold size-12">Russel Y. Trevino</p>
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
		    'thumbnail': 'preview/article-60.png',
		    'category': '2',
		    'contentCss': 'type-engagement-spectral.css',
		    'contentClass': 'type-engagement-spectral',
		    'html': `
			<div class="is-section is-section-100 type-engagement-spectral">
			<div class="is-boxes">
				<div class="is-box is-box-7 box-autofit">
					<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
					</div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 is-content-920 leading-12 size-18">
								<div class="row">
									<div class="column full">
										<h1 class="leading-09 size-124">Treat Yourself With Love</h1>
									</div>

								</div>
								<div class="row">
									<div class="column full">
										<div class="spacer height-40"></div>
									</div>

								</div>
								<div class="row">
									<div class="column full">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
									</div>

								</div>
								<div class="row">
									<div class="column full xs-hidden">
										<div class="spacer height-80"></div>
									</div>

								</div>
								<div class="row">
									<div style="width: 61.0697%; flex: 0 0 auto;" class="column half"><img src="assets/quickstart/images/pexels-karolina-grabowska-7185847-3.jpg" alt=""></div>
									<div style="width: 38.8631%;" class="column half flex flex-col justify-end items-start">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it.</p>
										<div class="spacer height-20"></div>
									</div>

								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="is-box is-dark-text is-box-5 box-autofit">
					<div class="is-overlay"></div>
					<div class="is-boxes">
						<div class="is-box-centered">
							<div class="is-container v2 is-content-620 content-pt-0">
								<div class="row">
									<div class="column full"><img src="assets/quickstart/images/pexels-ivan-samkov-7121803.jpg" alt=""></div>

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
		    'thumbnail': 'preview/article-55.png',
		    'category': '2',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-section-100 type-poppins-lekton">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-900 size-17 leading-none">
                        <div class="row">
                            <div style="width: 60.7741%; flex: 0 0 auto;" class="column half">
                                <p class="size-15">Words by<br class="size-15">Samantha Jones</p>
                            </div>

                            <div style="width: 100%;" class="column half">
                                <h1 class="leading-12 size-88">hello.</h1>
                                <h1 class="leading-12 size-88">hello..</h1>
                                <h1 class="leading-12 size-88">hello...</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-140"></div>
                            </div>

                        </div>
                        <div class="row relative md-items-2">
                            <div class="column third">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column third">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column third">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-5 box-autofit min-height-70">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-cottonbro-3585034.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
                    <div class="is-overlay-color opacity-0"></div>
                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		/* PHOTOS */
		
		{
		    'thumbnail': 'preview/photos-01.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container is-content-1400 v2 size-19 leading-12">
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column full">
								<p class="size-24 leading-none">Our</p>
								<h2 class="size-48 font-semibold size-48 is-title-lite leading-none">GALLERY</h2>
							</div>
		
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
		
						</div>
						<div class="row">
							<div class="column third">
								<img alt="" src="assets/quickstart/images/pexels-monica-turlui-821837-editRWt31PH.jpeg">
								<h3 class="leading-none"><span class="italic size-32">01</span></h3>
								<p>Lorem Ipsum is simply dummy text.</p>
							</div>
							<div class="column third">
								<img alt="" src="assets/quickstart/images/elena-putina-7b9BA_BFgcM-unsplash-editeH0HP0u.jpeg">
								<h3 class="leading-none"><span class="italic size-32">02</span></h3>
								<p>Lorem Ipsum is simply dummy text.</p>
							</div>
							<div class="column third">
								<img alt="" src="assets/quickstart/images/pexels-martin-pechy-1866149800-editvDWSVfX.jpeg">
								<h3 class="leading-none"><span class="italic size-32">03</span></h3>
								<p>Lorem Ipsum is simply dummy text.</p>
							</div>
		
						</div>
		
					</div>
				</div>
			</div>
		</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-02.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text is-align-center type-opensans box-autofit">
				<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1100 v2 size-19 leading-14">
							<div class="row">
								<div class="column full center" style="min-height: 101.369px;">
									<h2 class="size-46" style="font-family: Georgia, serif;"><span class="size-54 font-light italic">Gallery</span></h2>
									<p style="border-bottom: 2px solid #333; width: 40px; display: inline-block;"></p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<img alt="" src="[%IMAGE_PATH%]images/pexels-maksim-goncharenok-4352247.jpg">
								</div>
								<div class="column third">
									<img alt="" src="[%IMAGE_PATH%]images/thom-bradley-mwa_nzFpnJw-unsplash.jpg">
								</div>
								<div class="column third">
									<img alt="" src="[%IMAGE_PATH%]images/pexels-sies-studio-116741182.jpg">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		{
		    'thumbnail': 'preview/simple-photos-01.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-12 size-16 is-content-1300">
							<div class="row">
								<div class="column half" style="width: 100%;">
									<h2 class="size-42 tracking-wider font-light capitalize">Our Works</h2>
									<div class="spacer height-80"></div>
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column half" style="width: 60.7543%; flex: 0 0 auto;">
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
									<img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpg" alt="">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/liana-mikah-HstwCJX0jT4-unsplash (1).jpg" alt="">
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>


								<div class="column third">
									<img src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpg" alt="">
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
		    'thumbnail': 'preview/photos-03.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-16 leading-13 is-content-1000">
						<div class="row">
							<div class="column full">
								<h2 class="size-42 font-light" style="letter-spacing: 2px;">GALLERY</h2>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-20"></div>
							</div>
						</div>
						<div class="row">
							<div class="column half">
								<img src="[%IMAGE_PATH%]images/pexels-rachel-claire-485776.jpg" alt="">
							</div>
							<div class="column half flex flex-col justify-center items-start p-8">
								<h3 class="font-semibold size-48" style="color: rgb(182, 182, 182);">01.</h3>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
						</div>
						<div class="row">
							<div class="column half flex flex-col justify-center items-start p-8">
								<h3 class="font-semibold size-48" style="color: rgb(182, 182, 182);">02.</h3>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
							<div class="column half">
								<img src="[%IMAGE_PATH%]images/taylor-simpson-LKn6qISW70-unsplash.jpg" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			`
		},

		{
		    'thumbnail': 'preview/simple-photos-02.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 leading-13 is-content-1100">
							<div class="row">
								<div class="column third" style="width: 100%;">
									<div class="spacer height-80"></div>
								</div>
								<div class="column third" style="width: 49.1034%; flex: 0 0 auto;">
									<h2 class="size-42 tracking-wider font-light capitalize text-center">Portfolio</h2>
									<div class="spacer height-60"></div>
									<p style="color: rgb(145, 145, 145);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div style="width: 100%;" class="column third">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third"><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpg" alt="">
									<div class="spacer height-20"></div>
									<h3 class="font-light size-24">Item One</h3>
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/liana-mikah-HstwCJX0jT4-unsplash (1).jpg" alt="">
									<div class="spacer height-20"></div>
									<h3 class="font-light size-24">Item Two</h3>
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<p class="leading-22"><a href="#" title="" class="no-underline">Learn More&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</a></p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpg" alt="">
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
		    'thumbnail': 'preview/simple-photos-03.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-13 size-16 is-content-1100">
							<div class="row">
			
								<div class="column full" style="min-height: 54px;">
									<h2 class="capitalize text-left font-light size-32">Our Works</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third"><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpg" alt="">
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/liana-mikah-HstwCJX0jT4-unsplash (1).jpg" alt="">
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpg" alt="">
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
								</div>
							</div>
							<div class="row">
								<div class="column half"><img src="[%IMAGE_PATH%]images/in-the-making-studio-gx6NxtpgHqY-unsplash.jpg" alt="">
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
								</div>
								<div class="column half"><img src="[%IMAGE_PATH%]images/pexels-karolina-grabowska-5942725223.jpg" alt="">
									<p style="color: rgb(145, 145, 145);">Lorem Ipsum is simply dummy text of the printing industry</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
		
		{
		'thumbnail': 'preview/simple-photos-06.png',
		'category': '3',
		'contentCss': 'type-opensans.css',
		'contentClass': 'type-opensans',
		'html': `
		<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 is-content-1600 size-16 leading-14">
						<div class="row">
							<div class="column full">
								<h2 class="size-48 is-title1-48 is-title-lite text-center font-light tracking-wider">PORTFOLIO</h2>
								<p class="text-center">We create something differently. Not just beautiful, but detailed.</p>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
		
						<div class="row">
							<div class="column third">
								<img src="[%IMAGE_PATH%]images/pexels-cottonbro-750556023.jpg" alt="">
		
							</div>
							<div class="column third">
								<img src="[%IMAGE_PATH%]images/yolk-coworking-krakow-sN3cCx7SDic-unsplash.jpg" alt="">
		
							</div>
							<div class="column third">
								<img src="[%IMAGE_PATH%]images/elena-putina-7b9BA_BFgcM-unsplash.jpg" alt="">
		
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		`
		},

		{
		    'thumbnail': 'preview/photos-08.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-opensans box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1300 v2 size-18 leading-14">
							<div class="row">
								<div class="column half">
									<h2 class="size-38">Gallery</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
								</div>
								<div class="column half">
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
									<img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpg" alt="">
								</div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/pexels-cottonbro-77624613.jpg" alt="">
								</div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg" alt="">
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/evie-s-kbWrEiV2veg-unsplash.jpg" alt="">
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/in-the-making-studio-gx6NxtpgHqY-unsplash.jpg" alt=""></div>
								<div class="column third">
									<img src="[%IMAGE_PATH%]images/pawel-czerwinski-mIPWgSv88So-unsplash.jpg" alt="">
								</div>
			
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-09.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-opensans box-autofit">
				<div class="is-overlay">
			
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/ayKFm212624.jpg&quot;); transition: all 0.3s ease-out 0s;"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container is-content-left is-content-1050 v2 size-18 leading-14">
							<div class="row">
								<div class="column full">
									<h2 class="is-title1-42 is-title-lite size-42 uppercase">Our Works</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third"><img src="[%IMAGE_PATH%]images/hello-revival-pEm90kpsF-0-unsplash.jpg" alt="">
									<p>Caption One</p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/debby-hudson-unsplash.jpg" alt="">
									<p>Caption Two</p>
								</div>
								<div class="column third"><img src="[%IMAGE_PATH%]images/the-creative-exchange-gA81ZTsql68-unsplash.jpg" alt="">
									<p>Caption Three</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-10.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-opensans is-align-center box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1500 size-18 leading-12">
							<div class="row">
								<div class="column full">
									<h2 class="size-42 tracking-wider">GALLERY</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column fourth">
									<img src="[%IMAGE_PATH%]images/stil-HknTP8tzI8w-unsplash.jpg" alt="">
									<p>Lorem Ipsum</p>
								</div>
								<div class="column fourth">
									<img src="[%IMAGE_PATH%]images/beazy-_9gxlIXdqDQ-unsplash.jpg" alt="">
									<p>Lorem Ipsum</p>
								</div>
								<div class="column fourth">
									<img src="[%IMAGE_PATH%]images/pexels-karolina-grabowska-4737095.jpg" alt="">
									<p>Lorem Ipsum</p>
								</div>
								<div class="column fourth">
									<img src="[%IMAGE_PATH%]images/brina-blum-ArCgAeF5_Wk-unsplash.jpg" alt="">
									<p>Lorem Ipsum</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-11.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-opensans box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1100 v2 size-18 leading-14">
							<div class="row">
								<div class="column full">
									<h2 class="size-42 tracking-wider">GALLERY</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<img src="[%IMAGE_PATH%]images/pexels-cottonbro-5900785.jpg" alt="">
								</div>
								<div class="column half">
									<img src="[%IMAGE_PATH%]images/elena-putina-7b9BA_BFgcM-unsplash.jpg" alt="">
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<img src="[%IMAGE_PATH%]images/sandie-clarke-BEqMP8L9Gxk-unsplash2.jpg" alt="">
								</div>
								<div class="column half">
									<img src="[%IMAGE_PATH%]images/pexels-rachel-claire-4857771-editQiUNGow.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-12.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-opensans box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1400 v2 size-18 leading-16">
							<div class="row">
								<div class="column third p-7">
									<div class="display">
										<h2 class="leading-12 size-60">WHAT WE HAVE DONE SO FAR</h2>
									</div>
									<div class="spacer height-20"></div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
								</div>
								<div class="column third p-4"><img src="[%IMAGE_PATH%]images/frank-flores-BV30C9yWq--unsplash.jpg" alt="" style="margin-bottom: 5px;">
									<img src="[%IMAGE_PATH%]images/curtain-inin-pDTlgr1GjUQ-unsplash.jpg" alt="" style="margin-top: 17px;">
								</div>
								<div class="column third p-4">
									<img src="[%IMAGE_PATH%]images/ihssan-rami-azouagh-DwJfb_uImGw-unsplash.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		

		{
		    'thumbnail': 'preview/photos-14.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `<div class="is-section is-section-100 is-box type-opensans box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 is-content-1000 size-18 leading-14">
						<div class="row">
							<div class="column full">
								<img src="[%IMAGE_PATH%]images/pexels-rachel-claire-48461012-editxSt4AUv.jpeg" alt="">
								<div class="spacer height-20"></div>
								<h4 class="size-28 leading-none text-center">Start From Here</h4>
								<p class="text-center">Lorem Ipsum is simply dummy text of the printing industry</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-15.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-opensans is-align-left box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1000 leading-16 size-18">
							<div class="row">
								<div class="column third">
									<div class="spacer height-20"></div>
									<h4 class="size-35 leading-12">Lovely Sunday</h4>
									<p style="color: rgb(136, 136, 136);" class="italic">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."</p>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column two-third">
									<div style="padding-left:20px">
										<img src="[%IMAGE_PATH%]images/the-creative-exchange-gA81ZTsql68-unsplash.jpg" alt="">
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
		    'thumbnail': 'preview/photos-16.png',
		    'category': '3',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-opensans is-align-justify box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1000 leading-12 size-18">
							<div class="row">
								<div class="column two-third">
									<div style="padding-right:20px">
										<img src="[%IMAGE_PATH%]images/pexels-daria-shevtsova-1824353.jpg" alt="">
									</div>
								</div>
								<div class="column third flex flex-col justify-center items-start">
									<h4 class="size-48 leading-12 text-right">LOVE FOR FOOD</h4>
									<div class="spacer height-60"></div>
									<p class="leading-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-17.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-16 leading-13 is-content-1600">
                <div class="row relative md-items-2 sm-items-2">
                    <div class="column fourth flex flex-col justify-end items-start">
                        <h2 class="leading-14 size-48 font-light tracking-wide">Gallery</h2>
                        <div class="spacer height-20"></div>
                        <p class="leading-16" style="color: rgb(72, 72, 72);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div class="column fourth flex flex-col justify-end items-start">
                        <h3 class="font-light size-48 leading-none">01</h3><img src="assets/quickstart/images/pexels-kulbir-10837921.jpg" alt="">
                        <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="flex flex-col justify-end items-start column fourth">
                        <h3 class="font-light size-48 leading-none">02</h3><img src="assets/quickstart/images/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg" alt="">
                        <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="flex flex-col justify-start items-start column fourth">
                        <h3 class="font-light size-48 leading-none">03</h3><img src="assets/quickstart/images/larisa-birta-YP42NILq7qFo-unsplash.jpg" alt="">
                        <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/photos-18.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 leading-13 is-content-1700">
							<div class="row">
								<div class="column half px-8">
									<h4 class="size-28 leading-none font-light tracking-wide">Image Caption</h4>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<img src="[%IMAGE_PATH%]images/bree-anne-N2VlGJbelt4-unsplash.jpg" alt="">
								</div>
								<div class="column half px-8">
									<h4 class="size-28 leading-none font-light tracking-wide">Image Caption</h4>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<img src="[%IMAGE_PATH%]images/in-the-making-studio-gx6NxtpgHqY-unsplash.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/photos-19.png',
		    'category': '3',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-align-left type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1400 size-16 leading-13">
							<div class="row">
								<div class="column third">
									<h4 class="size-28 leading-12 font-light tracking-wide">Image Caption</h4>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<img src="[%IMAGE_PATH%]images/kara-eads-xRyL63Aw-unsplash.jpg" alt="">
								</div>
								<div class="column third">
									<h4 class="size-28 font-light tracking-wide">Image Caption</h4>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<img src="[%IMAGE_PATH%]images/hello-revival-pEm90kpsF-0-unsplash.jpg" alt="">
								</div>
								<div class="column third">
									<h4 class="size-28 leading-12 font-light tracking-wide">Image Caption</h4>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry</p>
									<img src="[%IMAGE_PATH%]images/david-libeert-b2nNepkkWYs-unsplash.jpg" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		/* PROFILE */
		
		{
		    'thumbnail': 'preview/profile-01.png',
		    'category': '4',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-opensans box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1200 v2 leading-14 size-17">
                <div class="row">
                    <div class="column full center">
                        <h2 class="is-title1-48 is-title-lite leading-none size-48 font-light">MEET OUR TEAM</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="column third center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/matese-fields-pvHma684eEI-unsplash-editPLXOkUx.jpeg" alt=""></div>

                        <h3 class="size-21 capitalize font-semibold">Vincent Nelson</h3>
                        <p style="color: rgb(145, 145, 145);" class="uppercase size-16 tracking-wide">Web Developer</p>
                    </div>
                    <div class="column third center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/beach-sea-coast-sand-ocean-girl-pxhere-3-editWGbuhNq.jpeg" alt=""></div>
                        <h3 class="size-21">Freja E. Andersen</h3>
                        <p style="color: rgb(145, 145, 145);" class="uppercase size-16 tracking-wide">Web Developer</p>
                    </div>
                    <div class="column third center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/StockSnap_0XZGV7R94F-editwKNjiBl.jpeg" alt=""></div>
                        <h3 class="size-21">Nathan Williams</h3>
                        <p style="color: rgb(145, 145, 145);" class="uppercase size-16 tracking-wide">Web Developer</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/profile-02.png',
		    'category': '4',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins-lekton box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1200 size-17 leading-14">
							<div class="row">
								<div class="column full center">
									<h2 class="size-46" style="letter-spacing: 3px;">MEET THE EXPERTS</h2>
									<p style="color: rgb(136, 136, 136);" class="size-19">Here are our awesome team.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full center">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third center flex flex-col justify-start items-center">
									<img src="[%IMAGE_PATH%]images/pexels-elīna-arāja-3317936.jpg" alt="">
									<h3 style="letter-spacing: 3px;" class="size-18">Sarah Doe</h3>
									<p style="color: rgb(136, 136, 136);">Founder</p>
								</div>
								<div class="column third center flex flex-col justify-start items-center"><img src="[%IMAGE_PATH%]images/christina-wocintechchat-editGXrtUrW.jpg" alt="" data-filename="christina-wocintechchat-editGXrtUrW.jpg">
									<h3 style="letter-spacing: 3px;" class="size-18">David Anderson</h3>
									<p style="color: rgb(136, 136, 136);">Programmer</p>
								</div>
								<div class="column third center flex flex-col justify-start items-center">
									<img src="[%IMAGE_PATH%]images/pexels-lisa-868555522-editPscVWCW.jpg" alt="" data-filename="pexels-lisa-868555522-editPscVWCW.jpg">
									<h3 style="letter-spacing: 3px;" class="size-18">Jennifer Clarke</h3>
									<p style="color: rgb(136, 136, 136);">Web Designer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/profile-03.png',
		    'category': '4',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oranienbaum-sourcesanspro box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1300 v2 leading-14 size-18">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-64">Meet The Team</h2>
                        <p class="size-21 tracking-350">Here are our awesome team.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2 md-items-2">
                    <div class="column fourth center flex flex-col justify-start items-center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/matese-fields-pvHma684eEI-unsplash-editPLXOkUx.jpeg" alt=""></div>

                        <h3 class="size-24">David Smith</h3>
                        <p style="color: rgb(136, 136, 136);" class="size-19">CEO &amp; Founder</p>
                    </div>
                    <div class="column fourth center flex flex-col justify-start items-center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/yoann-boyer-276971-S8TZu2.jpg" alt=""></div>

                        <h3 class="size-24">Milla Clarke</h3>
                        <p style="color: rgb(136, 136, 136);" class="size-19">Project Manager</p>
                    </div>
                    <div class="column fourth center flex flex-col justify-start items-center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/StockSnap_0XZGV7R94F-editwKNjiBl.jpeg" alt=""></div>

                        <h3 class="size-24">Jonathan Rugg</h3>
                        <p style="color: rgb(136, 136, 136);" class="size-19">Developer</p>
                    </div>
                    <div class="column fourth center flex flex-col justify-start items-center">
                        <div class="img-circular" style="margin:25px 0;width:240px;height:240px"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/pablo-hermoso-429590-(1)-fP4pI3.jpg" alt=""></div>

                        <h3 class="size-24">Sarah Anderson</h3>
                        <p style="color: rgb(136, 136, 136);" class="size-19">Web Designer</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
			'thumbnail': 'preview/simple-profile-04.png',
			'category': '4',
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
							<h1 class="text-center tracking-wide size-48 font-light">Our Team</h1>
						</div>
					</div>
					<div class="row">
						<div class="column full">
							<div class="spacer height-60"></div>
						</div>
					</div>
					<div class="row">
						<div class="column third">
							<p>We work as equals, celebrate as a team, and have fun with each other.</p>
						</div>
						<div class="column two-third">
							<div class="spacer height-40"></div>
						</div>
					</div>
					<div class="row">
						<div class="column full">
							<div class="spacer height-20"></div>
						</div>
					</div>
					<div class="row">
						<div style="filter: grayscale(1);" class="column third"><img src="[%IMAGE_PATH%]images/pexels-elina-araja-682202324-editclNeUBw.jpg" alt="" data-filename="pexels-elina-araja-682202324-editclNeUBw.jpg">
							<div class="spacer height-20"></div>
							<p class="size-19 font-light">Evelyn Jones</p>
							<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
						</div>
						<div style="filter: grayscale(1);" class="column third"><img src="[%IMAGE_PATH%]images/pexels-anna-nekrashevich-6202036-editcsUVpcK.jpg" alt="" data-filename="pexels-anna-nekrashevich-6202036-editcsUVpcK.jpg">
							<div class="spacer height-20"></div>
							<p class="size-19 font-light">Stephany McMullen</p>
							<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
						</div>
						<div style="filter: grayscale(1);" class="column third"><img src="[%IMAGE_PATH%]images/pexels-meruyert-gonullu-65890101-editTmFO8dV.jpg" alt="" data-filename="pexels-meruyert-gonullu-65890101-editTmFO8dV.jpg">
							<div class="spacer height-20"></div>
							<p class="size-19 font-light">Susan Rogers</p>
							<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		`
		},
		{
		    'thumbnail': 'preview/simple-profile-02.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1000">
                <div class="row">
                    <div class="column full text-center">
                        <h1 class="font-light size-60">A Passionate Team</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <p class="text-center">We work as equals &amp; celebrate as a team.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column two-third flex flex-col justify-center items-start" style="width: 47.1816%; flex: 0 0 auto;">
                        <h2 class="font-light size-24">Elaine Moreno</h2>
                        <h3 class="font-light size-18" style="color: rgb(174, 174, 174);">Web Designer</h3>
                        <div class="spacer height-40"></div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="text-right column third" style="width: 100%;">
                        <div class="img-circular" style="margin:25px 0;width: 13vw;height: 13vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/pexels-anna-baranova-5853496.jpg" alt="" data-filename="pexels-anna-baranova-5853496.jpg"></div>
                    </div>

                </div>
                <div class="row relative desktop-column-reverse md-column-reverse sm-column-reverse">
                    <div class="column two-third flex flex-col justify-center items-start" style="width: 47.1816%; flex: 0 0 auto;">
                        <h2 class="font-light size-24">Janice Smith</h2>
                        <h3 class="font-light size-18" style="color: rgb(174, 174, 174);">Developer</h3>
                        <div class="spacer height-40"></div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third text-left" style="width: 100%;">
                        <div class="img-circular" style="margin:25px 0;width: 13vw;height: 13vw;min-width:150px;min-height:150px;"><img style="height: 100%; width: 100%; object-fit: cover" src="assets/quickstart/images/luke-southern-9yCYGgPe5Kg-unsplash.jpg" alt="" data-filename="pexels-anna-baranova-5853496.jpg"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-profile-03.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
    <div class="is-boxes">
        <div class="is-box is-box-6 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 size-16 leading-13 is-content-600">
                        <div class="row">
                            <div class="column full">
                                <p>Story about me.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h1 class="font-normal size-64">Amanda Steele</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half" style="width: 100%;">
                                <div class="spacer height-40"></div>
                            </div>
                            <div class="column half" style="width: 69.3846%; flex: 0 0 auto;">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="is-social text-left">
                                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                                    <a href="https://www.instagram.com/" title=""><i class="icon ion-social-instagram-outline"></i></a>
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
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-700">
                        <div class="row">
                            <div class="column full"><img src="assets/quickstart/images/drew-colins-Zq7c-TTjhYk-unsplash-editAgbgjIk.jpg" alt="" data-filename="pexels-anete-lusina-4792329-editUY0y6BT.jpg"></div>

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
		    'thumbnail': 'preview/profile-08.png',
		    'category': '4',
		    'contentCss': 'type-heebo-ibmplexmono.css',
		    'contentClass': 'type-heebo-ibmplexmono',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-heebo-ibmplexmono box-autofit">
				<div class="is-overlay">
					<div class="is-overlay-bg"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 leading-16" style="max-width: 1200px;">
							<div class="row">
								<div class="column half center">
									<img src="[%IMAGE_PATH%]images/farkas-mario-YFspFP8zk14-unsplash2.jpg" alt="">
								</div>
								<div class="column half">
									<div class="spacer height-60"></div>
									<h2 style="letter-spacing: 3px;" class="text-center size-42">Sandra Robinson</h2>
									<p style="letter-spacing: 3px;" class="text-center size-14">WEB DEVELOPER</p>
									<div class="spacer height-40"></div>
									<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
									<div class="spacer height-20"></div>
									<div class="is-social center">
										<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
										<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
										<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
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
		    'thumbnail': 'preview/profile-09.png',
		    'category': '4',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-align-left is-box-7 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-600 size-17 leading-15">
                        <div class="row">
                            <div class="column full">
                                <h2 class="tracking-wide leading-14 size-38">Hello. I'm Marie Johnson. A web designer with experience in studios and startups. <span style="color: rgb(239, 108, 0);" class="size-38">Drop me a line.</span></h2>
                                <div class="spacer height-80"></div>
                                <div class="is-social edit size-18">
                                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                                    <a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box-img is-box is-box-5 box-autofit min-height-60">
            <div class="is-overlay">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/frank-flores-BAf3g-id7P4-unsplash-editHCGGfSS.jpg&quot;);"></div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/profile-07.png',
		    'category': '4',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 type-opensans is-box is-dark-text box-autofit min-height-70">
    <div class="is-overlay">

        <div class="is-overlay-color" style="/* background-color: rgb(0, 0, 0); */"></div>
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/XlMxJ222525.jpg&quot;); background-position: 50% 100%; transition: all 0.3s ease-out 0s;"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container is-content-1400 v2 size-16 leading-14 is-content-left edge-x-0-5">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-48" style="letter-spacing: 1px;">Meet Our Chefs</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2 xs-items-1">
                    <div class="column fourth"><img src="assets/quickstart/images/pexels-koolshooters-97941563.jpg" alt=""></div>
                    <div class="flex flex-col justify-center items-start column fourth">
                        <h3 class="size-24">Clarissa Smith</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                    </div>
                    <div class="column fourth"><img src="assets/quickstart/images/eli-defaria-qKXnwCIaULI-unsplash.jpg" alt=""></div>
                    <div class="flex flex-col justify-center items-start column fourth">
                        <h3 class="size-24">Jane Anderson</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
			`
		},

		/* PRODUCTS & SERVICES */
		
		{
		    'thumbnail': 'preview/simple-products-01.png',
		    'category': '5',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-16 leading-13 is-content-1100">
						<div class="row">
							<div class="column full">
								<h1 class="size-38 font-semibold tracking-wide">Products</h1>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
						<div class="row">
							<div class="column half"><img src="[%IMAGE_PATH%]images/hudai-gayiran-1w8d1LX8X443Rc-unsplash.jpg" alt="" data-filename="sincerely-media-WgYN51L6QF4-unsplash-editgrRFUGR.jpg">
								<div class="spacer height-20"></div>
								<h2 class="font-light size-24 tracking-wide">Product Name&nbsp;— <span class="font-semibold">$29</span></h2>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								<div class="spacer height-20"></div>
								<p><a href="#" title="" class="no-underline">View Details&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</p>
							</div>
							<div class="column half"><img src="[%IMAGE_PATH%]images/elena-putina-7b9BA_BFgcM-unsplash.jpg" alt="" data-filename="sincerely-media-WgYN51L6QF4-unsplash-editgrRFUGR.jpg">
								<div class="spacer height-20"></div>
								<h2 class="font-light size-24 tracking-wide">Product Name&nbsp;— <span class="font-semibold">$49</span></h2>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								<div class="spacer height-20"></div>
								<p><a href="#" title="" class="no-underline">View Details&nbsp;</a>&nbsp;<i class="icon ion-android-arrow-forward"></i>&nbsp;</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-products-04.png',
		    'category': '5',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 leading-13 size-16 is-content-1100">
							<div class="row">
								<div style="width: 34.7909%; flex: 0 0 auto;" class="column third pt-4">
									<h1 class="font-light leading-none size-88">Simple Chair</h1>
									<div class="spacer height-80"></div>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type.</p>
									<div class="spacer height-20"></div>
									<p class="font-light"><span class="font-semibold">Colors:</span><br>Black, Brown, White</p>
									<div class="spacer height-20"></div>
									<div class="button-group">
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 uppercase py-2 px-8 border-current text-black hover:border-current font-normal leading-relaxed ml-0 rounded-none size-13 tracking-125" title="" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Buy Now</a>
									</div>
									<div class="spacer height-100"></div>
								</div>
								<div class="column third pt-1" style="width: 18.3918%; flex: 0 0 auto;">
									<h2 class="font-light leading-16 size-48" style="color: rgb(196, 196, 196);">$99</h2>
								</div>
								<div class="column third" style="width: 46.8314%; flex: 0 0 auto;"><img src="[%IMAGE_PATH%]images/StockSnap_UB2UXMASSW.jpg" alt="" data-filename="StockSnap_UB2UXMASSW.jpg"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/products-01.png',
		    'category': '5',
		    'contentCss': 'type-oswald-opensans.css',
		    'contentClass': 'type-oswald-opensans',
		    'html': `
			<div class="is-section is-section-100 type-oswald-opensans">
    <div class="is-boxes">
        <div class="is-box is-box-6 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-800 size-16 leading-12">
                        <div class="row">
                            <div class="column half" style="width: 48.5255%; flex: 0 0 auto;">
                                <h3 class="size-24 tracking-wide leading-loose">Product Details</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column half" style="width: 100%;">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-60"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h2 class="font-light leading-none size-300">Shoes</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-80"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h3 class="size-50">$199</h3>
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
                                    <a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid text-black font-normal uppercase px-11 py-3 leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 border-transparent hover:border-transparent tracking-150 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="" data-bg="rgb(255,176,21)" style="background-color: rgb(255, 176, 21);">Buy Now</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="is-box is-box-6 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-900 size-16 leading-12">
                        <div class="row">
                            <div class="column full"><img src="assets/quickstart/images/mahabis-footwear-eYE5Sj-eDsE-unsplash-editbSkDWOp.jpg" alt="" data-filename="mahabis-footwear-eYE5Sj-eDsE-unsplash-editbSkDWOp.jpg"></div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half">
                                <h3 class="size-24 tracking-wide leading-loose">Colors</h3>
                                <p>White, Black, Grey, Yellow, Red</p>
                            </div>
                            <div class="column half">
                                <div class="spacer height-20"></div>
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
		    'thumbnail': 'preview/products-02.png',
		    'category': '5',
		    'contentCss': 'type-rufina-oxygen.css',
		    'contentClass': 'type-rufina-oxygen',
		    'html': `
			<div class="is-section is-section-100 is-box type-rufina-oxygen box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1580 leading-12 size-18">
                <div class="row">
                    <div class="column full">
                        <h2 class="leading-12 size-104">Top Picks</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third"><img src="assets/quickstart/images/pexels-marta-milczarek-751.jpg" alt="" data-filename="pexels-marta-milczarek-751.jpg"></div>
                    <div class="column third flex flex-col justify-start items-start pr-6 pb-5">
                        <div class="spacer height-20"></div>
                        <h3 class="size-19">Product Name</h3>
                        <h1 class="leading-12 size-76">$79</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.</p>
                        <div class="spacer height-20"></div>
                        <div class="button-group">
                            <a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 px-8 border-current text-black hover:border-current font-normal leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="">View Details</a>
                        </div>
                    </div>
                    <div class="column third"><img src="assets/quickstart/images/cat-han-URiyR9qtgs-unsplash2.jpg" alt="" data-filename="cat-han-URiyR9qtgs-unsplash2.jpg">
                        <div class="spacer height-40"></div>
                        <h3 class="size-19">Product Name</h3>
                        <h1 class="leading-12 size-76">$129&nbsp;</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.<br></p>
                        <div class="button-group">
                            <a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid tracking-75 uppercase py-2 px-8 border-current text-black hover:border-current font-normal leading-relaxed rounded-none ml-0 mr-1 mt-2 mb-2 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" title="">View Details</a>
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
		    'thumbnail': 'preview/products-09.png',
		    'category': '5',
		    'contentCss': 'type-spacemono.css',
		    'contentClass': 'type-spacemono',
		    'html': `
			<div class="is-section is-section-100 type-spacemono">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-8 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1050 size-16 leading-12">
                        <div class="row">
                            <div class="column full">
                                <h2 class="size-38 tracking-tight">Services We Provide</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column third flex flex-col justify-center items-start">
                                <h3 class="size-76">01.</h3>
                                <div class="spacer height-40"></div>
                                <h4 class="size-24">Modern Ideas</h4>
                                <p style="border-bottom: 2px solid #333; width: 40px;"></p>
                                <div class="spacer height-20"></div>

                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it.</p>
                            </div>
                            <div class="column third">
                                <h3 class="size-76">02.</h3>
                                <div class="spacer height-40"></div>
                                <h4 class="size-24">Web Development</h4>
                                <p style="border-bottom: 2px solid #333; width: 40px;"></p>
                                <div class="spacer height-20"></div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div class="column third">
                                <div class="spacer height-100"></div>
                                <h3 class="size-76">03.</h3>
                                <div class="spacer height-40"></div>
                                <h4 class="size-24">Superior Support</h4>
                                <p style="border-bottom: 2px solid #333; width: 40px;"></p>
                                <div class="spacer height-20"></div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-4 box-autofit min-height-50">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">

                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/annie-spratt-JOSiIdfOJJM-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/products-06.png',
		    'category': '5',
		    'contentCss': 'type-ibmplexmono.css',
		    'contentClass': 'type-ibmplexmono',
		    'html': `
			<div class="is-section is-section-100 is-box type-ibmplexmono box-autofit min-height-70">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/milad-fakurian-UqP7U400AZs-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 text-left is-content-1480 leading-12 size-17">
                <div class="row">
                    <div class="column half" style="width: 65.9369%; flex: 0 0 auto;">
                        <h2 class="size-124 leading-11">Services We Offer.</h2>
                    </div>
                    <div class="column half" style="width: 100%;">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third">
                        <div>
                            <i class="icon ion-ios-videocam-outline size-76" style="color: rgb(216, 67, 21);"></i>
                        </div>
                        <h1 class="tracking-tight size-28 leading-14">Service One</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                    </div>
                    <div class="column third">
                        <div>
                            <i class="icon ion-ios-mic-outline size-76" style="color: rgb(216, 67, 21);"></i>
                        </div>
                        <h1 class="tracking-tight size-28 leading-14">Service Two</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                    </div>
                    <div class="column third">
                        <div>
                            <i class="icon ion-ios-settings size-76" style="color: rgb(216, 67, 21);"></i>
                        </div>
                        <h1 class="tracking-tight size-28 leading-14">Service Three</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/products-03.png',
		    'category': '5',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1560 size-16 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="size-104 leading-none">Products</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2 xs-items-2">
                    <div class="column fourth"><img src="assets/quickstart/images/maeva-vigier-xhz2E1kFzoA-unsplash2-editigQ0QZu.jpg" alt="">
                        <h3 class="size-24">Product Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="spacer height-20"></div>
                        <p class="font-semibold size-15"><a href="#" title="">View Details</a></p>
                    </div>
                    <div class="column fourth"><img src="assets/quickstart/images/elena-putina-7b9BA_BFgcM-unsplash-editrR6SUYa.jpg" alt="">
                        <h3 class="size-24">Product Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="spacer height-20"></div>
                        <p class="font-semibold size-15"><a href="#" title="">View Details</a></p>
                    </div>
                    <div class="column fourth"><img src="assets/quickstart/images/veronika-jorjobert-lbgBjjDy-unsplash2-editqvErgdC.jpg" alt="">
                        <h3 class="size-24">Product Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="spacer height-20"></div>
                        <p class="font-semibold size-15"><a href="#" title="">View Details</a></p>
                    </div>
                    <div class="column fourth"><img src="assets/quickstart/images/priyanka-aggarwal-aJo-DwVB-Xw-unsplash2-edityQWdQej.jpg" alt="">
                        <h3 class="size-24">Product Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div class="spacer height-20"></div>
                        <p class="font-semibold size-15"><a href="#" title="">View Details</a></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/products-04.png',
		    'category': '5',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-box type-alegreya-lato is-section-25 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 is-content-900 size-17 leading-14">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center size-84">Our Products</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full text-center">
                        <p>We make shopping way easier and convenient for you.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section box-space type-alegreya-lato is-section-75 md-boxes-2 md-boxes-wrap sm-boxes-2 sm-boxes-wrap">
    <div class="is-boxes">
        <div class="is-box-4 is-box is-light-text is-content-top box-autofit min-height-40">
            <div class="is-overlay" style="background-color: rgb(243, 243, 243);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/jade-seok-nUJnYJUdexU-unsplash.jpg&quot;);"></div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-top edge-y-2">
                    <div class="is-container v2 is-content-600 leading-12 size-17">
                        <div class="row">
                            <div class="column full">
                                <h3 class="size-24">Product One</h3>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h1 class="leading-09 size-132">$79</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-60"></div>
                            </div>

                        </div>
                        <div class="row sm-autofit">
                            <div class="column half sm-hidden" style="width: 100%;">
                                <div class="spacer height-80"></div>
                            </div>
                            <div class="column half" style="width: 57.722%; flex: 0 0 auto;">
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <p class="font-semibold"><a href="#" title="">Buy Now</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box-4 is-box is-dark-text is-content-bottom box-autofit min-height-40">
            <div class="is-overlay" style="background-color: rgb(250, 250, 250);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/alen-kajtezovic-d5aIpA4k-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom">
                    <div class="is-container v2 is-content-380 size-17 leading-12">
                        <div class="row">
                            <div class="column full text-center">
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid text-black font-normal uppercase px-11 py-3 leading-relaxed ml-0 mr-1 mt-2 mb-2 border-transparent hover:border-transparent rounded-full tracking-125 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" title="">Browse All</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box-4 is-box is-light-text is-content-bottom box-autofit min-height-40">
            <div class="is-overlay">

                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/jefferson-sees-fzllIWN_Ldo-unsplash.jpg&quot;);"></div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-1">
                    <div class="is-container v2 is-content-600 size-17 leading-12">
                        <div class="row">
                            <div class="column full">
                                <h3 class="size-24 text-right">Product Two</h3>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="column full" style="cursor: ns-resize;">
                                    <h1 class="leading-09 size-132 text-right">$39</h1>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half">
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley.</p>
                                <div class="spacer height-20"></div>
                                <p class="font-semibold"><a href="#" title="">Buy Now</a></p>
                            </div>
                            <div class="column half">
                                <div class="spacer height-40"></div>
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
		    'thumbnail': 'preview/products-05.png',
		    'category': '5',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-section-100 type-poppins-lekton">
    <div class="is-boxes">
        <div class="is-box is-box-6 is-light-text box-autofit min-height-40">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/marissa-grootes-N9uOrBICcjY-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
                    <div class="is-overlay-color opacity-4" style="background-color: rgb(0, 0, 0);"></div>
                </div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-860">
                        <div class="row">
                            <div class="column full">
                                <h2 class="leading-09 size-168">Our Services</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="is-box is-dark-text is-box-6 is-content-bottom box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-3">
                    <div class="is-container v2 is-content-900 size-17 leading-14">
                        <div class="row">
                            <div class="column third">
                                <div class="text-center">
                                    <i class="icon ion-android-favorite-outline size-60"></i>
                                </div>
                                <h3 class="size-18 text-center tracking-wide">Clean &amp; Minimalist Design</h3>
                            </div>
                            <div class="column third">
                                <div class="text-center">
                                    <i class="icon ion-android-bulb size-60"></i>
                                </div>
                                <h3 class="size-18 text-center tracking-wide">Modern Ideas</h3>
                            </div>
                            <div class="column third">
                                <div class="text-center">
                                    <i class="icon ion-earth size-60"></i>
                                </div>
                                <h3 class="size-18 text-center tracking-wide">Brand Building</h3>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-60"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column third">
                                <div class="text-center">
                                    <i class="icon ion-android-options size-60"></i>
                                </div>
                                <h3 class="size-18 text-center tracking-wide">Unlimited Possibilities</h3>
                            </div>
                            <div class="column third">
                                <div class="text-center">
                                    <i class="icon ion-person-stalker size-60"></i>
                                </div>
                                <h3 class="size-18 text-center tracking-wide">Superior Supports</h3>
                            </div>
                            <div class="column third" style="min-height: 172.182px;">
                                <div class="text-center">
                                    <i class="icon ion-gear-a size-60"></i>
                                </div>
                                <h3 class="size-18 text-center tracking-wide">Web Development</h3>
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
		    'thumbnail': 'preview/products-07.png',
		    'category': '5',
		    'contentCss': 'type-oswald-opensans.css',
		    'contentClass': 'type-oswald-opensans',
		    'html': `
			<div class="is-section is-section-100 is-box type-oswald-opensans box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1380 size-16 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="size-50">Our Services</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-160"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third">
                        <h3 class="leading-14 size-128">01.</h3>
                        <div class="spacer height-60"></div>
                        <h4 class="size-32">Web Development</h4>
                        <div class="spacer height-20"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third">
                        <h3 class="leading-14 size-128">02.</h3>
                        <div class="spacer height-60"></div>
                        <h4 class="size-32">Brand &amp; Identity</h4>
                        <div class="spacer height-20"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third">
                        <h3 class="leading-14 size-128">03.</h3>
                        <div class="spacer height-60"></div>
                        <h4 class="size-32">Content Marketing</h4>
                        <div class="spacer height-20"></div>
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
		    'thumbnail': 'preview/products-10.png',
		    'category': '5',
		    'contentCss': 'type-dosis-oldstandardtt.css',
		    'contentClass': 'type-dosis-oldstandardtt',
		    'html': `
			<div class="is-section is-section-100 is-box type-dosis-oldstandardtt is-content-bottom box-autofit min-height-70">
    <div class="is-overlay" style="filter: grayscale(1);">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/evie-s-uuCjYxJVf4o-unsplash2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-content-bottom edge-y-3">
            <div class="is-container v2 is-content-1600 size-18 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-right size-104 leading-14">Services</h2>
                        <p class="size-19 font-light text-right uppercase tracking-300">We Offer</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-160"></div>
                    </div>

                </div>
                <div class="row sm-autofit relative md-autofit">
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:100px;height:100px;padding:15px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-bulb size-32"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="text-center size-32 leading-18">Creative Design</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:100px;height:100px;padding:15px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-code-working size-32"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="text-center size-32 leading-18">Web Development</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:100px;height:100px;padding:15px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-people size-32"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="text-center size-32 leading-18">24/7 Support</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                    <div class="column fourth sm-hidden md-hidden">
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
		    'thumbnail': 'preview/products-08.png',
		    'category': '5',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 is-box type-oranienbaum-sourcesanspro is-content-top box-autofit min-height-70">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/flipboard-HejPSp2evf4-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-content-top edge-y-4">
            <div class="is-container v2 is-content-1200 is-content-left edge-x-1 leading-12 size-16">
                <div class="row">
                    <div class="column full">
                        <h2 class="size-50">Our Services</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third">
                        <h3 class="leading-14 size-128">01.</h3>
                        <div class="spacer height-60"></div>
                        <h4 class="size-32">Web Development</h4>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third">
                        <h3 class="leading-14 size-128">02.</h3>
                        <div class="spacer height-60"></div>
                        <h4 class="size-32">Brand &amp; Identity</h4>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third">
                        <h3 class="leading-14 size-128">03.</h3>
                        <div class="spacer height-60"></div>
                        <h4 class="size-32">Content Marketing</h4>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		/* FEATURES */

		{
		    'thumbnail': 'preview/features-12.png',
		    'category': '6',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-section-100 type-poppins box-autofit">
			<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1300 size-19 leading-14">
							<div class="row">
								<div class="column full" style="min-height: 60.9711px;">
									<h2 class="text-center size-48 normal-case font-light">Features</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
			
							<div class="row">
								<div style="width: 18.921%; flex: 0 0 auto;" class="column third">
									<div class="spacer height-40"></div>
								</div>
								<div style="width: 100%; min-height: 54px;" class="column third">
									<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third" style="width: 19.8593%; flex: 0 0 auto;">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="center p-2 column third">
									<i class="icon ion-android-done-all size-32" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize font-light size-24" style="color: rgb(138, 138, 138);">Feature One</h3>
								</div>
								<div class="center p-2 column third">
									<i class="icon ion-android-done-all size-32" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize font-light size-24" style="color: rgb(138, 138, 138);">Feature Two</h3>
								</div>
								<div class="center p-2 column third">
									<i class="icon ion-android-done-all size-32" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize font-light size-24" style="color: rgb(138, 138, 138);">Feature Three</h3>
								</div>
			
			
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="center p-2 column third">
									<i class="icon ion-android-done-all size-32" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize font-light size-24" style="color: rgb(138, 138, 138);">Feature Four</h3>
								</div>
								<div class="center p-2 column third">
									<i class="icon ion-android-done-all size-32" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize font-light size-24" style="color: rgb(138, 138, 138);">Feature Five</h3>
								</div>
								<div class="center p-2 column third">
									<i class="icon ion-android-done-all size-32" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize font-light size-24" style="color: rgb(138, 138, 138);">Feature Six</h3>
								</div>
			
			
							</div>
			
			
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/features-08.png',
		    'category': '6',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1300 size-19 leading-14">
							<div class="row">
								<div class="column full" style="min-height: 60.9711px;">
									<h2 class="text-center size-48">Features</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div style="width: 17.9305%; flex: 0 0 auto;" class="column third">
									<div class="spacer height-40"></div>
								</div>
								<div style="width: 64.8476%; flex: 0 0 auto; min-height: 54px;" class="column third">
									<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="center column third">
									<div class="padding-20">
										<i class="icon ion-ios-lightbulb-outline size-60" style="color: #e74c3c"></i>
										<h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
										<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>
									</div>
								</div>
								<div class="center column third">
									<div class="padding-20">
										<i class="icon ion-ios-gear-outline size-60" style="color: #e74c3c"></i>
										<h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
										<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>
									</div>
								</div>
								<div class="center column third">
									<div class="padding-20">
										<i class="icon ion-ios-camera-outline size-60" style="color: #e74c3c"></i>
										<h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
										<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>
									</div>
								</div>
			
			
							</div>
							<div class="row">
								<div class="center column third">
									<div class="padding-20">
										<i class="icon ion-iphone size-60" style="color: #e74c3c"></i>
										<h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
										<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>
									</div>
								</div>
								<div class="center column third">
									<div class="padding-20">
										<i class="icon ion-ios-paper-outline size-60" style="color: #e74c3c"></i>
										<h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
										<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>
									</div>
								</div>
								<div class="center column third">
									<div class="padding-20">
										<i class="icon ion-ios-clock-outline size-60" style="color: #e74c3c"></i>
										<h3 class="leading-none tracking-wider capitalize font-light size-24">Feature Item</h3>
										<p style="border-bottom: 2px solid #e74c3c; width: 50px; display: inline-block;"></p>
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
		    'thumbnail': 'preview/features-10.png',
		    'category': '6',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1300 size-19 leading-14">
							<div class="row">
								<div class="column full" style="min-height: 60.9711px;">
									<h2 class="text-center font-semibold capitalize size-48">Why Choose Us</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
			
							<div class="row">
								<div style="width: 17.9305%; flex: 0 0 auto;" class="column third">
									<div class="spacer height-40"></div>
								</div>
								<div style="width: 64.8476%; flex: 0 0 auto; min-height: 54px;" class="column third">
									<p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third" style="width: 100%;">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="center p-2 column third">
									<i class="icon ion-checkmark size-48" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize size-28 font-semibold">Feature One</h3>
								</div>
								<div class="center p-2 column third">
									<i class="icon ion-checkmark size-48" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize size-28 font-semibold">Feature Two</h3>
								</div>
								<div class="center p-2 column third">
									<i class="icon ion-checkmark size-48" style="color: #e74c3c"></i>
									<h3 class="leading-none tracking-wider capitalize size-28 font-semibold">Feature Three</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			`
		},

		{
		    'thumbnail': 'preview/features-09.png',
		    'category': '6',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-section-100 type-opensans">
				<div class="is-boxes">
					<div class="is-box-img is-box is-box-5 box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/daria-shevtsova-unsplash.jpg&quot;); transition: all 0.3s ease-out 0s;" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-7 box-autofit">
						<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container is-content-860 v2 size-17 leading-14">
									<div class="row">
										<div class="column full">
											<h2 class="size-48 font-semibold">Features</h2>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-40"></div>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<p class="font-semibold size-76">1</p>
											<h3 class="leading-12 font-light size-38 tracking-wide">UI/UX</h3>
											<p style="border-bottom: 2px solid #333; width: 40px;"></p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										</div>
										<div class="column half">
											<p class="font-semibold size-76">2</p>
											<h3 class="leading-12 font-light size-38 tracking-wide">SEO Friendly</h3>
											<p style="border-bottom: 2px solid #333; width: 40px;"></p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										</div>
									</div>
									<div class="row">
										<div class="column half">
											<p class="font-semibold size-76">3</p>
											<h3 class="leading-12 font-light size-38 tracking-wide">Full-stack</h3>
											<p style="border-bottom: 2px solid #333; width: 40px;"></p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										</div>
										<div class="column half">
											<p class="font-semibold size-76">4</p>
											<h3 class="leading-12 font-light size-38 tracking-wide">Support</h3>
											<p style="border-bottom: 2px solid #333; width: 40px;"></p>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
		    'thumbnail': 'preview/features-02.png',
		    'category': '6',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `

			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container is-content-1400 v2 size-18 leading-14">
						<div class="row">
							<div class="column full">
								<h2 class="size-54 tracking-wide">Why Choose Us</h2>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
						<div class="row">
							<div class="column third">
								<p class="font-semibold size-76">1</p>
								<h3 class="leading-12 font-light size-38">UI/UX</h3>
								<p style="border-bottom: 2px solid #333; width: 40px;"></p>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div class="column third">
								<div class="spacer height-60"></div>
							</div>
							<div class="column third">
								<p class="font-semibold size-76">2</p>
								<h3 class="leading-12 font-light size-38">SEO Friendly</h3>
								<p style="border-bottom: 2px solid #333; width: 40px;"></p>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-20"></div>
							</div>
						</div>
						<div class="row">
							<div class="column third">
								<p class="font-semibold size-76">3</p>
								<h3 class="leading-12 font-light size-38">Full-stack</h3>
								<p style="border-bottom: 2px solid #333; width: 40px;"></p>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div class="column third">
								<div class="spacer height-60"></div>
							</div>
							<div class="column third">
								<p class="font-semibold size-76">4</p>
								<h3 class="leading-12 font-light size-38">Support</h3>
								<p style="border-bottom: 2px solid #333; width: 40px;"></p>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			`
		},

		{
		    'thumbnail': 'preview/features-03.png',
		    'category': '6',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins" style="background-color: rgb(247, 247, 247);">
    <div class="is-boxes">

        <div class="is-box is-box-11 box-autofit">
            <div class="is-overlay">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-800 size-18 leading-14">
                        <div class="row">
                            <div class="column full">
                                <h2 class="size-54">Unique Features</h2>
                                <p style="border-bottom: 2px solid #333; width: 70px; display: inline-block; margin: 0"></p>
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half"><i class="icon ion-checkmark size-50" style="color: #bdc3c7"></i>
                                <h3 class="size-32 leading-14 font-light capitalize tracking-wide">Feature One</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                            </div>
                            <div class="column half"><i class="icon ion-checkmark size-50" style="color: #bdc3c7"></i>
                                <h3 class="size-32 leading-14 font-light capitalize tracking-wide">Feature Two</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half"><i class="icon ion-checkmark size-50" style="color: #bdc3c7"></i>
                                <h3 class="size-32 leading-14 font-light capitalize tracking-wide">Feature Three</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>

                            </div>
                            <div class="column half"><i class="icon ion-checkmark size-50" style="color: #bdc3c7"></i>
                                <h3 class="size-32 leading-14 font-light capitalize tracking-wide">Feature Four</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full" style="min-height: 54px;">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-600 size-18 leading-14 content-pt-0">
                        <div class="row">
                            <div class="column full">
                                <img src="assets/quickstart/images/panos-teloniatis-unsplash.jpg" alt="" data-filename="panos-teloniatis-unsplash.jpg">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;</p>
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
		    'thumbnail': 'preview/features-04.png',
		    'category': '6',
		    'contentCss': 'type-raleway-playfairdisplay.css',
		    'contentClass': 'type-raleway-playfairdisplay',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-raleway-playfairdisplay box-autofit">
    <div class="is-overlay">

        <div class="is-overlay-color opacity-0"></div>
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/sincerely-media-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 is-content-left edge-x-2 is-content-800 size-19 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="size-68">Features</h2>
                        <p style="border-bottom: 2px solid #333; width: 70px; display: inline-block; margin: 0"></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <h3 class="italic size-76 leading-12">01</h3>
                        <h4 class="size-32">Feature Item</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>
                    </div>
                    <div class="column half">
                        <h3 class="italic size-76 leading-12">02</h3>
                        <h4 class="size-32">Feature Item</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <h3 class="italic size-76 leading-12">03</h3>
                        <h4 class="size-32">Feature Item</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>
                    </div>
                    <div class="column half">
                        <h3 class="italic size-76 leading-12">04</h3>
                        <h4 class="size-32">Feature Item</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing industry. Vivamus leo ante, consectetur sit amet.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/features-05.png',
		    'category': '6',
		    'contentCss': 'type-yantramanav-ibmplexserif.css',
		    'contentClass': 'type-yantramanav-ibmplexserif',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-yantramanav-ibmplexserif box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1200 leading-14 size-19">
							<div class="row">
								<div class="column full">
									<h2 class="size-54">Why Choose Us</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<div class="rounded-full flex justify-center items-center mb-8" style="width: 50px; height: 50px; border: 2px solid rgb(136, 136, 136);">
										<i class="icon ion-android-done size-24" style="color: #888888"></i>
									</div>
									<h3 class="tracking-wide size-32">Feature One</h3>
									<p>Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="column third">
									<div class="rounded-full flex justify-center items-center mb-8" style="width: 50px; height: 50px; border: 2px solid rgb(136, 136, 136);">
										<i class="icon ion-android-done size-24" style="color: #888888"></i>
									</div>
									<h3 class="tracking-wide size-32">Feature Two</h3>
									<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="column third">
									<div class="rounded-full flex justify-center items-center mb-8" style="width: 50px; height: 50px; border: 2px solid rgb(136, 136, 136);">
										<i class="icon ion-android-done size-24" style="color: #888888"></i>
									</div>
									<h3 class="tracking-wide size-32">Feature Three</h3>
									<p class="size-21">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/features-06.png',
		    'category': '6',
		    'contentCss': 'type-raleway-playfairdisplay.css',
		    'contentClass': 'type-raleway-playfairdisplay',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-raleway-playfairdisplay box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1400 leading-14 size-18">
                <div class="row">
                    <div class="column full">
                        <h2 class="display-font2 size-96 leading-12 uppercase tracking-75 font-light">What Makes Us Different</h2>
                        <p style="border-bottom: 2px solid #333; width: 70px; display: inline-block; margin: 0"></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="column fourth"><i class="icon ion-android-bulb size-60" style="color: #bdc3c7"></i>
                        <h3 class="size-32 leading-14 font-light capitalize">Feature One</h3>
                        <p>Lorem Ipsum is dummy text of the printing industry.</p>
                    </div>
                    <div class="column fourth"><i class="icon ion-android-desktop size-60" style="color: #bdc3c7"></i>
                        <h3 class="size-32 leading-14 font-light capitalize">Feature Two</h3>
                        <p>Lorem Ipsum is dummy text of the printing industry.</p>
                    </div>
                    <div class="column fourth"><i class="icon ion-android-walk size-60" style="color: #bdc3c7"></i>
                        <h3 class="size-32 leading-14 font-light capitalize">Feature Three</h3>
                        <p>Lorem Ipsum is dummy text of the printing industry.</p>
                    </div>
                    <div class="column fourth"><i class="icon ion-android-contacts size-60" style="color: #bdc3c7"></i>
                        <h3 class="size-32 leading-14 font-light capitalize">Feature Four</h3>
                        <p>Lorem Ipsum is dummy text of the printing industry.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/features-07.png',
		    'category': '6',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1400 size-19 leading-14">
							<div class="row">
								<div class="column full">
									<h2 class="font-light size-60">Unique Features</h2>
									<p style="border-bottom: 2px solid #333; width: 70px; display: inline-block; margin: 0"></p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third"><i class="icon ion-checkmark size-60" style="color: rgb(255, 135, 36);"></i>
									<h3 class="size-32 leading-14 font-light capitalize">Feature One</h3>
									<p>Lorem Ipsum is dummy text of the printing industry.</p>
								</div>
								<div class="column third"><i class="icon ion-checkmark size-60" style="color: rgb(255, 135, 36);"></i>
									<h3 class="size-32 leading-14 font-light capitalize">Feature Two</h3>
									<p>Lorem Ipsum is dummy text of the printing industry.</p>
								</div>
								<div class="column third"><i class="icon ion-checkmark size-60" style="color: rgb(255, 135, 36);"></i>
									<h3 class="size-32 leading-14 font-light capitalize">Feature Three</h3>
									<p>Lorem Ipsum is dummy text of the printing industry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		/* PROCESS */

		{
		    'thumbnail': 'preview/steps-01.png',
		    'category': '7',
		    'contentCss': 'type-heebo-ibmplexmono-2.css',
		    'contentClass': 'type-heebo-ibmplexmono-2',
		    'html': `
			<div class="is-section is-section-100 type-heebo-ibmplexmono-2">
    <div class="is-boxes">
        <div class="is-box is-box-5 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-700">
                        <div class="row">
                            <div class="column full">
                                <p>Discover</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h2 class="uppercase font-semibold size-104 leading-11">How We&nbsp;</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h2 class="text-right uppercase font-semibold size-104 leading-11">Work</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-60"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full"><img src="assets/quickstart/images/jodie-cook-CNz0BPaOgy0-unsplash.jpg" alt="" data-filename="jodie-cook-CNz0BPaOgy0-unsplash.jpg"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 is-content-bottom box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-3">
                    <div class="is-container v2 is-content-880 size-17 leading-12">
                        <div class="row">
                            <div class="column half">
                                <h1 class="size-76 font-semibold">01.</h1>
                                <div class="spacer height-20"></div>
                                <h3 style="font-weight: 400;">Step One</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="column half">
                                <h1 class="size-76 font-semibold">02.</h1>
                                <div class="spacer height-20"></div>
                                <h3 style="font-weight: 400;">Step Two</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half" style="width: 100%;">
                                <div class="spacer height-40"></div>
                            </div>
                            <div style="width: 66.4642%; flex: 0 0 auto;" class="column half">
                                <h1 class="size-76 font-semibold">03.</h1>
                                <div class="spacer height-20"></div>
                                <h3 style="font-weight: 400;">Step Three</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/steps-02.png',
		    'category': '7',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 is-box type-alegreya-lato box-autofit">
			<div class="is-overlay" style="background-color: rgb(255, 255, 255);">
			</div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 is-content-1400 leading-12 size-17">
						<div class="row">
							<div class="column full">
								<h2 class="size-96 leading-12">How We Work</h2>
								<p style="border-bottom: 3px solid #000; width: 100px; display: inline-block;"></p>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-140"></div>
							</div>
						</div>
						<div class="row">
							<div class="column third">
								<h1 class="size-76">01.</h1>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
							<div class="column third">
								<h1 class="size-76">02.</h1>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
							<div class="column third">
								<h1 class="size-76">03.</h1>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/steps-03.png',
		    'category': '7',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 is-box type-raleway-lato box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 is-content-1080 leading-12 size-18">
						<div class="row">
							<div class="column full">
								<h2 class="font-semibold size-76 leading-09 text-left">The Process.</h2>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-20"></div>
							</div>
						</div>
						<div class="row">
							<div class="column half flex flex-col justify-center items-end">
								<h1 class="text-right font-semibold size-76">01.</h1>
								<div class="spacer height-20"></div>
								<p class="text-right">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
							<div class="column half"><img src="[%IMAGE_PATH%]images/daria-shevtsova-unsplash.jpg" alt="" data-filename="daria-shevtsova-unsplash.jpg"></div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-20"></div>
							</div>
						</div>
						<div class="row">
							<div class="column half"><img src="[%IMAGE_PATH%]images/lilartsy-333oj7zFsdg-unsplash-editKeJ4thj.jpg" alt="" data-filename="lilartsy-333oj7zFsdg-unsplash-editKeJ4thj.jpg"></div>
							<div class="column half flex flex-col justify-end items-start">
								<h1 class="font-semibold text-left size-76">02.</h1>
								<div class="spacer height-20"></div>
								<p class="text-left">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
		    'thumbnail': 'preview/steps-04.png',
		    'category': '7',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oranienbaum-sourcesanspro box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container is-content-1380 v2 size-17 leading-12">
						<div class="row">
							<div class="column full center">
								<h2 class="uppercase leading-12 tracking-75 size-92">HOW WE WORK</h2>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-160"></div>
							</div>
						</div>
						<div class="row">
							<div class="padding-20 column third">
								<div class="list larger">
									<i class="icon ion-ios-arrow-right size-76"></i>
									<h3 class="size-38">STEP 1</h3>
									<div class="spacer height-20"></div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="padding-20 column third">
								<div class="list larger">
									<i class="icon ion-ios-arrow-right size-76"></i>
									<h3 class="size-38">STEP 2</h3>
									<div class="spacer height-20"></div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="padding-20 column third">
								<div class="list larger">
									<i class="icon ion-ios-arrow-right size-76"></i>
									<h3 class="size-38">STEP 3</h3>
									<div class="spacer height-20"></div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
		    'thumbnail': 'preview/steps-05.png',
		    'category': '7',
		    'contentCss': 'type-juliussansone-robotocondensed.css',
		    'contentClass': 'type-juliussansone-robotocondensed',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-juliussansone-robotocondensed box-autofit">
				<div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1440 v2 size-16 leading-12">
							<div class="row">
								<div class="column full center">
									<h2 class="size-76">How it works</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-140"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third center">
									<div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
										<div class="is-card-content-centered">
											<p class="font-semibold size-48" style="margin: 0px;">1</p>
										</div>
									</div>
									<div class="spacer height-40"></div>
									<h3 class="size-28">Step One</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third center">
									<div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
										<div class="is-card-content-centered">
											<p class="font-semibold size-48" style="margin: 0px;">2</p>
										</div>
									</div>
									<div class="spacer height-40"></div>
									<h3 class="size-28">Step Two</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third center">
									<div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
										<div class="is-card-content-centered">
											<p class="font-semibold size-48" style="margin: 0px;">3</p>
										</div>
									</div>
									<div class="spacer height-40"></div>
									<h3 class="size-28">Step Three</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		{
		    'thumbnail': 'preview/steps-06.png',
		    'category': '7',
		    'contentCss': 'type-juliussansone-robotocondensed.css',
		    'contentClass': 'type-juliussansone-robotocondensed',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-juliussansone-robotocondensed box-autofit">
				<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1440 v2 size-16 leading-12">
							<div class="row">
								<div class="column full center">
									<h2 class="size-76">How it works</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-140"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third center">
									<div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
										<div class="is-card-content-centered">
											<p class="font-semibold size-48" style="margin: 0px;">1</p>
										</div>
									</div>
									<div class="spacer height-40"></div>
									<h3 class="size-28 leading-14">Step One</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third center">
									<div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
										<div class="is-card-content-centered">
											<p class="font-semibold size-48" style="margin: 0px;">2</p>
										</div>
									</div>
									<div class="spacer height-40"></div>
									<h3 class="size-28 leading-14">Step Two</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third center">
									<div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
										<div class="is-card-content-centered">
											<p class="font-semibold size-48" style="margin: 0px;">3</p>
										</div>
									</div>
									<div class="spacer height-40"></div>
									<h3 class="size-28 leading-14">Step Three</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		
		{
		    'thumbnail': 'preview/steps-07.png',
		    'category': '7',
		    'contentCss': 'type-dosis-oldstandardtt.css',
		    'contentClass': 'type-dosis-oldstandardtt',
		    'html': `
			<div class="is-section is-box is-section-100 type-dosis-oldstandardtt box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1420 leading-12 size-19">
							<div class="row">
								<div class="column full">
									<p class="uppercase tracking-125">The Process</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h2 class="size-60 leading-12">Our Work Steps</h2>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-140"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<div class="text-left leading-18">
										<i class="icon ion-android-bulb size-80"></i>
									</div>
									<h2 class="size-35 leading-12">Step One</h2>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third">
									<div class="text-left leading-18">
										<i class="icon ion-code size-80"></i>
									</div>
									<h2 class="size-35 leading-12">Step Two</h2>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third">
									<div class="text-left leading-18">
										<i class="icon ion-gear-a size-80"></i>
									</div>
									<h2 class="size-35 leading-12">Step Three</h2>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/steps-08.png',
		    'category': '7',
		    'contentCss': 'type-lato.css',
		    'contentClass': 'type-lato',
		    'html': `
			<div class="is-section is-section-100 is-box type-lato box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1580 leading-12 size-18">
							<div class="row">
								<div style="width: 100%;" class="column third">
									<h2 class="uppercase size-108 tracking-wide">How</h2>
									<div class="spacer height-40"></div>
									<h3 class="size-28 leading-12">Step One</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type.</p>
								</div>
								<div style="width: 100%;" class="column third">
									<h2 class="uppercase size-108 tracking-wide">It</h2>
									<div class="spacer height-40"></div>
									<h3 class="size-28 leading-12">Step Two</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type.</p>
								</div>
								<div class="column third" style="width: 41.9833%; flex: 0 0 auto;">
									<h2 class="uppercase size-108 tracking-wide">Works</h2>
									<div class="spacer height-40"></div>
									<h3 class="size-28 leading-12">Step Three</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/steps-09.png',
		    'category': '7',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oranienbaum-sourcesanspro box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1620 leading-12 size-18">
							<div class="row">
								<div class="column full text-center">
									<h2 class="size-96 text-center">Timeline Process</h2>
									<p class="uppercase tracking-300">Discover How We Work</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-160"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third text-center">
									<h3 class="size-24 text-left" style="border: 2px solid rgb(0, 0, 0); padding: 10px 25px; display: inline-block;">STEP ONE</h3>
									<div class="spacer height-40"></div>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third text-center">
									<h3 class="size-24" style="border: 2px solid rgb(0, 0, 0); padding: 10px 25px; display: inline-block;">STEP TWO</h3>
									<div class="spacer height-40"></div>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third text-center">
									<h3 class="size-24" style="border: 2px solid rgb(0, 0, 0); padding: 10px 25px; display: inline-block;">STEP THREE</h3>
									<div class="spacer height-40"></div>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/steps-10.png',
		    'category': '7',
		    'contentCss': 'type-rufina-oxygen.css',
		    'contentClass': 'type-rufina-oxygen',
		    'html': `
			<div class="is-section is-section-100 is-box type-rufina-oxygen box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1660 size-16 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center size-76">The Process</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-bulb size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 01</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-code size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 02</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-options size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 03</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-archive size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 04</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

			`
		},
		
		{
		    'thumbnail': 'preview/steps-11.png',
		    'category': '7',
		    'contentCss': 'type-rufina-oxygen.css',
		    'contentClass': 'type-rufina-oxygen',
		    'html': `
			<div class="is-section is-section-100 is-box type-rufina-oxygen box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1660 size-16 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center size-76">The Process</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-bulb size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 01</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-code size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 02</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-options size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 03</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-light-text" style="width:120px;height:120px;padding:10px;background:#000;">
                            <div class="is-card-content-centered">
                                <i class="icon ion-archive size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center leading-12">Step 04</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/steps-12.png',
		    'category': '7',
		    'contentCss': 'type-ubuntumono-sourcecodepro.css',
		    'contentClass': 'type-ubuntumono-sourcecodepro',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-ubuntumono-sourcecodepro box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-1540 size-16 leading-12">
							<div class="row">
								<div class="column full text-center">
									<h2 class="size-96 text-center">Timeline Process</h2>
									<p class="size-18 uppercase tracking-300">Discover How We Work</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-140"></div>
								</div>
							</div>
							<div class="row">
								<div class="text-center column third">
			
									<h2 class="size-76">01</h2>
									<div class="spacer height-20"></div>
									<h3 class="size-24 uppercase leading-12">Step One</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="text-center column third">
			
									<h2 class="size-76">02</h2>
									<div class="spacer height-20"></div>
									<h3 class="size-24 uppercase leading-12">Step Two</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="text-center column third">
			
									<h2 class="size-76">03</h2>
									<div class="spacer height-20"></div>
									<h3 class="size-24 uppercase leading-12">Step Three</h3>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		/*
		{
		    'thumbnail': 'preview/steps-13.png',
		    'category': '7',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 is-box type-alegreya-lato">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/jake-campbell-lQvb9eKj22oh8-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-0"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-right edge-x-0-5 is-content-900 leading-12 size-17">
							<div class="row">
								<div class="column full">
									<h2 class="size-96 leading-12">How We Work</h2>
									<p style="border-bottom: 3px solid #000; width: 100px; display: inline-block;"></p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-120"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<h1 class="size-64">01.</h1>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third">
									<h1 class="size-64">02.</h1>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column third">
									<h1 class="size-64">03.</h1>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},
		*/
		
		{
		    'thumbnail': 'preview/steps-14.png',
		    'category': '7',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 type-montserrat-roboto">
    <div class="is-boxes">
        <div class="is-box is-box-6 is-light-text box-autofit min-height-60">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-3.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
                    <div class="is-overlay-color opacity-8" style="background-color: rgb(0, 0, 0);"></div>
                </div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-left is-content-600 edge-x-1">
                        <div class="row">
                            <div class="column full">
                                <p class="uppercase size-18 tracking-275">The Process</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h2 class="leading-none size-144">Our Work Steps</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-6 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-820 leading-12 size-17">
                        <div class="row relative md-items-2">
                            <div class="column third">
                                <div class="text-left leading-16">
                                    <i class="icon ion-android-bulb size-54"></i>
                                </div>
                                <div class="spacer height-20"></div>
                                <h2 class="size-24 leading-18" style="font-weight: 400;">Step One</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type.</p>
                            </div>
                            <div class="column third">
                                <div class="text-left leading-16">
                                    <i class="icon ion-code size-54"></i>
                                </div>
                                <div class="spacer height-20"></div>
                                <h2 class="size-24 leading-18" style="font-weight: 400;">Step Two</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type.</p>
                            </div>
                            <div class="column third">
                                <div class="text-left leading-16">
                                    <i class="icon ion-gear-a size-54"></i>
                                </div>
                                <div class="spacer height-20"></div>
                                <h2 class="size-24 leading-18" style="font-weight: 400;">Step Three</h2>
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
		    'thumbnail': 'preview/steps-15.png',
		    'category': '7',
		    'contentCss': 'type-rufina-oxygen.css',
		    'contentClass': 'type-rufina-oxygen',
		    'html': `
			<div class="is-section is-section-100 is-box type-rufina-oxygen is-light-text box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/marissa-grootes-2dwLej6Zlfs-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
            <div class="is-overlay-color opacity-6"></div>
        </div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1660 leading-12 size-16">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center size-76">The Process</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-bulb size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center">Step 01</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-code size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center">Step 02</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-android-options size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center">Step 03</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <i class="icon ion-archive size-42"></i>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28 text-center">Step 04</h3>
                        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		/* PRICING */

		{
			'thumbnail': 'preview/simple-pricing-02.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-16 leading-13 is-content-1200">
                <div class="row">
                    <div class="column third xs-hidden" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="width: 52.7981%; flex: 0 0 auto;" class="column third text-center">
                        <h2 class="text-center font-light">Simple Pricing</h2>
                        <p style="border-bottom: 3px solid #000; width: 80px; display: inline-block;"></p>
                        <div class="spacer height-20"></div>
                        <p style="color: rgb(109, 109, 109);" class="text-center size-14">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third xs-hidden" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full xs-hidden">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row relative">
                    <div class="column third p-7 flex flex-col justify-center items-center">
                        <div style="padding: 50px 20px;width: 100%;box-sizing: border-box;border: #555 1px solid;" class="text-left flex justify-center flex-col items-center">
                            <h3 class="text-center size-19 tracking-widest">Standard</h3>
                            <p class="size-24 text-center leading-14">$<span class="size-76">59</span>/mo</p>

                            <ul style="list-style: initial;padding-left: 20px;">
                                <li>10 GB Storage</li>
                                <li>2 Users</li>
                                <li>2 Domains</li>
                            </ul>
                            <div class="spacer height-20"></div>
                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide px-8 size-13 uppercase" title="">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="column third p-7 flex flex-col justify-center items-center">
                        <div style="padding: 90px 20px;width: 100%;box-sizing: border-box;border: #555 1px solid;" class="text-left flex justify-center flex-col items-center">
                            <h3 class="text-center size-19 tracking-widest">Deluxe</h3>
                            <p class="size-24 text-center leading-14">$<span class="size-76">59</span>/mo</p>

                            <ul style="list-style: initial;padding-left: 20px;">
                                <li>20 GB Storage</li>
                                <li>5 Users</li>
                                <li>3 Domains</li>
                            </ul>
                            <div class="spacer height-20"></div>
                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide px-9 size-13 uppercase" title="">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="column third p-7 flex flex-col justify-center items-center">
                        <div style="padding: 50px 20px;width: 100%;box-sizing: border-box;border: #555 1px solid;" class="text-left flex justify-center flex-col items-center">
                            <h3 class="text-center size-19 tracking-widest capitalize">Ultimate</h3>
                            <p class="size-24 text-center leading-14">$<span class="size-76">79</span>/mo</p>
                            <ul style="list-style: initial;padding-left: 20px;">
                                <li>20 GB Storage</li>
                                <li>10 Users</li>
                                <li>Unlimited Domains</li>
                            </ul>
                            <div class="spacer height-20"></div>
                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide size-13 uppercase px-9" title="">Buy Now</a>
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
			'thumbnail': 'preview/simple-pricing-05.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay" style="background-color: rgba(247, 247, 247, 0.89);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-16 leading-13 is-content-1200">
                <div class="row">
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="width: 52.7981%; flex: 0 0 auto;" class="column third text-center">
                        <h2 class="text-center font-light">Simple Pricing</h2>
                        <p style="border-bottom: 3px solid #000; width: 80px; display: inline-block;"></p>
                        <div class="spacer height-20"></div>
                        <p style="color: rgb(109, 109, 109);" class="text-center size-14">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row relative">
                    <div class="p-5 column third flex flex-col justify-center items-center">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 50px 20px; width: 100%; box-sizing: border-box;" class="text-left flex justify-center flex-col items-center">
                                <h3 class="text-center size-19 tracking-widest">Standard</h3>
                                <p class="size-24 text-center leading-14">$<span class="size-76">59</span>/mo</p>
                                <ul style="list-style: initial;padding-left: 20px;">
                                    <li>10 GB Storage</li>
                                    <li>2 Users</li>
                                    <li>2 Domains</li>
                                </ul>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide size-13 uppercase" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 column third flex flex-col justify-center items-center">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 90px 20px; width: 100%; box-sizing: border-box;" class="text-left flex justify-center flex-col items-center">
                                <h3 class="text-center size-19 tracking-widest">Deluxe</h3>
                                <p class="size-24 text-center leading-14">$<span class="size-76">59</span>/mo</p>

                                <ul style="list-style: initial;padding-left: 20px;">
                                    <li>20 GB Storage</li>
                                    <li>5 Users</li>
                                    <li>3 Domains</li>
                                </ul>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide size-13 uppercase" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 column third flex flex-col justify-center items-center">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 50px 20px; width: 100%; box-sizing: border-box;" class="text-left flex justify-center flex-col items-center">
                                <h3 class="text-center size-19 tracking-widest capitalize">Ultimate</h3>
                                <p class="size-24 text-center leading-14">$<span class="size-76">79</span>/mo</p>
                                <ul style="list-style: initial;padding-left: 20px;">
                                    <li>20 GB Storage</li>
                                    <li>10 Users</li>
                                    <li>Unlimited Domains</li>
                                </ul>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-12 rounded-full tracking-wide size-13 uppercase" title="">Buy Now</a>
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
			'thumbnail': 'preview/pricing-02.png',
			'category': '8',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
			<div class="is-section is-section-100 is-box type-raleway-lato box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1500 v2 leading-14 size-18">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-54 tracking-75 leading-16 font-semibold uppercase">Simple Pricing</h2>
                        <p style="border-bottom: 3px solid #000; width: 80px; display: inline-block;"></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row relative">
                    <div class="column third pb-4">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24" style="letter-spacing: 2px;">STANDARD</h3>
                                <p style="color: rgb(231, 76, 60);" class="size-24">$<span style="color: rgb(231, 76, 60);" class="size-96">29</span>/mo</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75 px-7" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third pb-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24" style="letter-spacing: 2px;">DELUXE</h3>
                                <p style="color: rgb(231, 76, 60);" class="size-24">$<span style="color: rgb(231, 76, 60);" class="size-96">59</span>/mo</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75 px-7" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third pb-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24" style="letter-spacing: 2px;">ULTIMATE</h3>
                                <p style="color: rgb(231, 76, 60);" class="size-24">$<span style="color: rgb(231, 76, 60);" class="size-96">79</span>/mo</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75 px-7" title="">Buy Now</a>
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
			'thumbnail': 'preview/pricing-03.png',
			'category': '8',
			'contentCss': 'type-oswald-opensans.css',
			'contentClass': 'type-oswald-opensans',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oswald-opensans box-autofit min-height-70">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_UB2UXMASS-3.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container is-content-left edge-x-2 v2 is-content-1000 size-16 leading-14">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-76 leading-14">Pricing Plans</h2>
                        <p class="tracking-widest size-18">Choose the right plan that works for you. No hidden fees.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="font-semibold size-76 leading-16">$27</h3>
                                <h4 class="size-24 leading-16 tracking-widest uppercase">Basic</h4>
                                <div class="spacer height-40"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column half">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="font-semibold size-76 leading-16">$59</h3>
                                <h4 class="size-24 leading-16 tracking-widest uppercase">Premium</h4>
                                <div class="spacer height-40"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="">Buy Now</a>
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
			'thumbnail': 'preview/simple-pricing-06.png',
			'category': '8',
			'contentCss': 'type-poppins-lekton.css',
			'contentClass': 'type-poppins-lekton',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins-lekton box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1400 size-16 leading-12 content-pb-50">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-64 tracking-wider leading-14 capitalize">Subscription Plan</h2>
                        <p class="size-18">Choose the right plan that works for you.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third flex flex-col justify-center items-center pb-3 pt-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 40px 25px; width: 100%; box-sizing: border-box;" class="text-left flex justify-center flex-col items-center">
                                <h3 class="is-title-lite size-96 leading-14" style="color: rgb(211, 211, 211);">01</h3>
                                <h4 class="size-24 uppercase">Basic / Free</h4>
                                <div class="spacer height-20"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>

                                <ul style="list-style: initial;padding-left: 20px;">
                                    <li>10 GB Storage</li>
                                    <li>2 Users</li>
                                    <li>2 Domains</li>
                                </ul>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third flex flex-col justify-center items-center pb-3 pt-3">
                        <div class="is-card shadow-1 is-light-text" style="width:calc(100%);background-color: #ffa81f;">
                            <div style="padding: 70px 25px; width: 100%; box-sizing: border-box;" class="text-left flex justify-center flex-col items-center">
                                <h3 class="is-title-lite size-96 leading-14">02</h3>
                                <h4 class="size-24 uppercase">Deluxe / $89</h4>
                                <div class="spacer height-20"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <ul style="list-style: initial;padding-left: 20px;">
                                    <li>20 GB Storage</li>
                                    <li>5 Users</li>
                                    <li>3 Domains</li>
                                </ul>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 tracking-wide rounded" title="" style="color: rgb(255, 255, 255);">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third flex flex-col justify-center items-center pb-3 pt-3">
                        <div class="is-card is-light-text shadow-1" style="width:calc(100%);background-color: #f35b12;">
                            <div style="padding: 40px 25px; width: 100%; box-sizing: border-box;" class="text-left flex justify-center flex-col items-center">
                                <h3 class="is-title-lite size-96 leading-14">03</h3>
                                <h4 class="size-24 uppercase">Premium / $129</h4>
                                <div class="spacer height-20"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <ul style="list-style: initial;padding-left: 20px;">
                                    <li>20 GB Storage</li>
                                    <li>10 Users</li>
                                    <li>Unlimited Domains</li>
                                </ul>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 tracking-wide rounded" title="" style="color: rgb(255, 255, 255);">Select Plan</a>
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
			'thumbnail': 'preview/simple-pricing-01.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-16 leading-13 is-content-1200">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-38 font-light tracking-wide capitalize">Plans that meet your needs</h2>
                        <div class="spacer height-20"></div>
                        <p class="size-17 tracking-widest" style="color: rgb(109, 109, 109);">Fair Prices. Excellent Services.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third p-8 flex flex-col justify-center items-center px-4" style="width: 100%;">
                        <div style="padding: 30px 20px;width: 100%;box-sizing: border-box;border: #555 1px solid;" class="text-left flex justify-center flex-col items-center">
                            <h3 class="size-24 tracking-wider capitalize">Basic</h3>
                            <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;margin:20px 0"></p>
                            <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <ul style="list-style: initial;padding-left: 20px;">
                                <li>10 GB Storage</li>
                                <li>2 Users</li>
                                <li>2 Domain</li>
                            </ul>
                            <h4 class="leading-18">$ <span class="font-light size-48">79</span></h4>
                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-14 uppercase tracking-75" title="">Select Plan</a>
                            </div>
                        </div>
                    </div>
                    <div class="column third p-8 flex flex-col justify-center items-center px-4" style="width: 35.175%; flex: 0 0 auto;">
                        <div style="padding: 60px 22px;width: 100%;box-sizing: border-box;border: #555 1px solid;" class="text-left flex justify-center flex-col items-center">
                            <h3 class="size-24 tracking-wider capitalize">Advanced</h3>
                            <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;margin:20px 0"></p>
                            <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <ul style="list-style: initial;padding-left: 20px;">
                                <li>10 GB Storage</li>
                                <li>2 Users</li>
                                <li>2 Domain</li>
                            </ul>
                            <h4 class="leading-18">$ <span class="font-light size-48">99</span></h4>
                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="">Select Plan</a>
                            </div>
                        </div>
                    </div>
                    <div class="column third p-8 flex flex-col justify-center items-center px-4" style="width: 100%;">
                        <div style="padding: 30px 20px;width: 100%;box-sizing: border-box;border: #555 1px solid;" class="text-left flex justify-center flex-col items-center">
                            <h3 class="size-24 tracking-wider capitalize">Ultimate</h3>
                            <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;margin:20px 0"></p>
                            <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <ul style="list-style: initial;padding-left: 20px;">
                                <li>10 GB Storage</li>
                                <li>2 Users</li>
                                <li>2 Domain</li>
                            </ul>
                            <h4 class="leading-18">$ <span class="size-48 font-light">139</span></h4>
                            <div class="button-group">
                                <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75 px-6" title="">Select Plan</a>
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
			'thumbnail': 'preview/pricing-08.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1500 size-16 leading-14 content-pb-40">
                <div class="row">
                    <div class="column full center">
                        <h2 class="uppercase size-48">Plans that meet your needs</h2>
                        <p class="size-17 tracking-widest">Fair Prices. Excellent Services.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 25px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 tracking-wider uppercase">Basic</h3>
                                <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;"></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <h4 class="leading-16">$ <span class="font-semibold size-76">79</span></h4>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 25px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 tracking-wider uppercase">Advanced</h3>
                                <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;"></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <h4 class="leading-16">$ <span class="font-semibold size-76">99</span></h4>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 25px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 tracking-wider uppercase">Ultimate</h3>
                                <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;"></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <h4 class="leading-16">$ <span class="font-semibold size-76">139</span></h4>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="">Select Plan</a>
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
			'thumbnail': 'preview/pricing-11.png',
			'category': '8',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-montserrat-roboto box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 leading-12 size-17 is-content-1380">
                <div class="row">
                    <div class="column full">
                        <h2 class="size-48">Choose Your Plan</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full xs-hidden">
                        <div class="spacer height-160"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third pr-9 py-5">
                        <h3 class="leading-none"><span style="font-size:30px">$</span><span class="size-104">59</span></h3>
                        <p class="size-18 font-semibold">Per Month</p>
                        <div class="spacer height-40"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                        <div class="spacer height-20"></div>
                        <div class="button-group">
                            <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-12 rounded-full uppercase size-13 tracking-75" title="">Buy Now</a>
                        </div>
                    </div>
                    <div class="column third pr-9 py-5">
                        <h3 class="leading-none"><span style="font-size:30px">$</span><span class="size-104">99</span></h3>
                        <p class="size-18 font-semibold">Per Month</p>
                        <div class="spacer height-40"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                        <div class="spacer height-20"></div>
                        <div class="button-group">
                            <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-12 rounded-full size-13 tracking-75 uppercase" title="">Buy Now</a>
                        </div>
                    </div>
                    <div class="column third pr-9 py-5">
                        <h3 class="leading-none"><span style="font-size:30px">$</span><span class="size-104">129</span></h3>
                        <p class="size-18 font-semibold">Per Month</p>
                        <div class="spacer height-40"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                        <div class="spacer height-20"></div>
                        <div class="button-group">
                            <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-7 border-current hover:border-current font-normal leading-12 rounded-full size-13 tracking-75 uppercase" title="">Buy Now</a>
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
			'thumbnail': 'preview/pricing-10.png',
			'category': '8',
			'contentCss': 'type-oswald-opensans.css',
			'contentClass': 'type-oswald-opensans',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oswald-opensans box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);">

    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1200 size-16 leading-14 content-pb-40">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-76 leading-14">Pricing Plans</h2>
                        <p class="tracking-widest size-18">Choose the right plan that works for you. No hidden fees.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="font-semibold size-76 leading-16">$27</h3>
                                <h4 class="size-24 leading-16 tracking-widest uppercase">Basic</h4>
                                <div class="spacer height-40"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-17 tracking-wider" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column half py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="font-semibold size-76 leading-16">$59</h3>
                                <h4 class="size-24 leading-16 tracking-widest uppercase">Premium</h4>
                                <div class="spacer height-40"></div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-17 tracking-wider" title="">Buy Now</a>
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
			'thumbnail': 'preview/pricing-12.png',
			'category': '8',
			'contentCss': 'type-poppins.css',
			'contentClass': 'type-poppins',
			'html': `
			<div class="is-section is-section-100 is-box type-poppins is-dark-text box-autofit">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/ashley-byrd-wDmu7qqY22-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1500 size-16 leading-14 content-pb-40">
                <div class="row">
                    <div class="column full center">
                        <h2 class="uppercase size-48">Plans that meet your needs</h2>
                        <p class="size-17 tracking-widest">Fair Prices. Excellent Services.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 25px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 tracking-wider uppercase">Basic</h3>
                                <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;"></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <h4 class="leading-16">$ <span class="font-semibold size-76">79</span></h4>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 25px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 tracking-wider uppercase">Advanced</h3>
                                <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;"></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <h4 class="leading-16">$ <span class="font-semibold size-76">99</span></h4>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 25px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 tracking-wider uppercase">Ultimate</h3>
                                <p style="border-bottom: 2px solid #333; width: 35px; display: inline-block;"></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type.</p>
                                <h4 class="leading-16">$ <span class="font-semibold size-76">139</span></h4>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
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
			'thumbnail': 'preview/pricing-13.png',
			'category': '8',
			'contentCss': 'type-oranienbaum-sourcesanspro.css',
			'contentClass': 'type-oranienbaum-sourcesanspro',
			'html': `
			<div class="is-section is-section-100 is-box type-oranienbaum-sourcesanspro is-light-text box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_RKQU798YK0.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
            <div class="is-overlay-color opacity-10" style="background-color: rgb(0, 0, 0);"></div>
        </div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1200 size-17 leading-14">
                <div class="row">
                    <div class="column half" style="width: 41.5871%; flex: 0 0 auto;">
                        <h2 class="leading-none size-84" style="letter-spacing: 1px;">Choose Your Plan.</h2>
                    </div>
                    <div class="column half" style="width: 58.4129%;">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third pr-9 py-5">
                        <h3 class="size-76 leading-14">01</h3>
                        <h4 class="size-24 leading-16">Lite / $39</h4>
                        <div class="spacer height-20"></div>
                        <ul style="list-style: initial;padding-left: 20px;">
                            <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                        <div class="spacer height-40"></div>
                        <div>
                            <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="" style="color: rgb(255, 255, 255);" role="button">Get Started</a>
                        </div>
                    </div>
                    <div class="column third pr-9 py-5">
                        <h3 class="size-76 leading-14">02</h3>
                        <h4 class="size-24 leading-16">Advanced / $59</h4>
                        <div class="spacer height-20"></div>
                        <ul style="list-style: initial;padding-left: 20px;">
                            <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>

                        </ul>
                        <div class="spacer height-40"></div>
                        <div>
                            <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="" style="color: rgb(255, 255, 255);" role="button">Get Started</a>
                        </div>
                    </div>
                    <div class="column third pr-9 py-5">
                        <h3 class="size-76 leading-14">03</h3>
                        <h4 class="size-24 leading-16">Ultimate / $89</h4>
                        <div class="spacer height-20"></div>
                        <ul style="list-style: initial;padding-left: 20px;">
                            <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li class="leading-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                        <div class="spacer height-40"></div>
                        <div>
                            <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded size-13 uppercase tracking-75" title="" style="color: rgb(255, 255, 255);" role="button">Get Started</a>
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
			'thumbnail': 'preview/pricing-14.png',
			'category': '8',
			'contentCss': 'type-lato.css',
			'contentClass': 'type-lato',
			'html': `
			<div class="is-section is-section-100 type-lato">
    <div class="is-boxes">
        <div class="is-box-8 is-box is-dark-text box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container is-content-900 v2 size-16 leading-14">
                        <div class="row">
                            <div class="column full">
                                <h2 class="uppercase leading-14 size-64">Pricing Plans</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-140"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half pr-9 py-5">
                                <h3 class="uppercase size-28">Basic</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <p>$<span class="size-76">59</span>/ month</p>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded uppercase size-14 tracking-75" title="">Choose Plan</a>
                                </div>
                            </div>
                            <div class="column half pr-9 py-5">
                                <h3 class="uppercase size-28">Premium</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-20"></div>
                                <p>$<span class="size-76">99</span>/ month</p>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-8 border-current hover:border-current font-normal leading-relaxed rounded size-14 tracking-75 uppercase" title="">Choose Plan</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box-4 is-box-img is-box box-autofit min-height-40">
            <div class="is-overlay">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_6NYVPE6NEB-4.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
			'thumbnail': 'preview/pricing-15.png',
			'category': '8',
			'contentCss': 'type-ubuntumono-sourcecodepro.css',
			'contentClass': 'type-ubuntumono-sourcecodepro',
			'html': `
			<div class="is-section is-section-100 type-ubuntumono-sourcecodepro">
    <div class="is-boxes">
        <div class="is-box-4 is-box-img is-box box-autofit min-height-40">
            <div class="is-overlay">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_PJLZHLI1XL.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
        <div class="is-box-8 is-box is-dark-text box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
                <div class="is-overlay-bg">
                    <div class="is-overlay-color opacity-5" style="background-color: rgb(255, 255, 255);"></div>
                </div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1100 size-16 leading-12">
                        <div class="row">
                            <div class="column full">
                                <h2 class="size-48">Choose Your Plan</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-100"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column third pr-8 py-5">
                                <h3 class="leading-14 size-96" style="color: rgb(222, 222, 222);">01</h3>
                                <h4 class="size-24 leading-16 uppercase">Lite / $59</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type.</p>
                                <div class="spacer height-40"></div>
                                <div>
                                    <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide uppercase size-14" role="button">Buy Now</a>
                                </div>
                            </div>
                            <div class="column third pr-8 py-5">
                                <h3 class="leading-14 size-96" style="color: rgb(222, 222, 222);">02</h3>
                                <h4 class="size-24 leading-16 uppercase">Advanced / $99</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type.</p>
                                <div class="spacer height-40"></div>
                                <div>
                                    <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide size-14 uppercase" role="button">Buy Now</a>
                                </div>
                            </div>
                            <div class="column third pr-8 py-5">
                                <h3 class="leading-14 size-96" style="color: rgb(222, 222, 222);">03</h3>
                                <h4 class="size-24 leading-16 uppercase">Ultimate / $129</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type.</p>
                                <div class="spacer height-40"></div>
                                <div>
                                    <a href="#" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide size-14 uppercase" role="button">Buy Now</a>
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
			'thumbnail': 'preview/pricing-16.png',
			'category': '8',
			'contentCss': 'type-cormorantsc-ibmplexsanscon.css',
			'contentClass': 'type-cormorantsc-ibmplexsanscon',
			'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-cormorantsc-ibmplexsanscon box-autofit">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_TQ30QBDKB-3.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container is-content-1500 v2 size-19 leading-14 content-pb-40">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center uppercase size-54">Pricing Plans</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 uppercase" style="letter-spacing: 2px;">Basic</h3>
                                <p class="size-24 font-semibold">$<span class="size-96">29</span></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 uppercase" style="letter-spacing: 2px;">Premium</h3>
                                <p class="size-24 font-semibold">$<span class="size-96">59</span></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24 uppercase" style="letter-spacing: 2px;">Ultimate</h3>
                                <p class="size-24 font-semibold">$<span class="size-96">79</span></p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 size-17 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-wide" title="">Select Plan</a>
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
			'thumbnail': 'preview/pricing-17.png',
			'category': '8',
			'contentCss': 'type-raleway-lato.css',
			'contentClass': 'type-raleway-lato',
			'html': `
			<div class="is-section is-section-100 is-box type-raleway-lato is-dark-text box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/table-wood-wall-ceiling-shelf-lamp-pxhere-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1500 v2 leading-14 size-18 content-pb-40">
                <div class="row">
                    <div class="column full center text-left">
                        <h2 class="size-54 tracking-75 leading-16 font-semibold uppercase text-left">Simple Pricing</h2>
                        <p style="border-bottom: 3px solid #000; width: 80px; display: inline-block;"></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24" style="letter-spacing: 2px;">STANDARD</h3>
                                <p style="color: rgb(231, 76, 60);" class="size-24">$<span style="color: rgb(231, 76, 60);" class="size-96">29</span>/mo</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded uppercase tracking-75 size-13" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24" style="letter-spacing: 2px;">DELUXE</h3>
                                <p style="color: rgb(231, 76, 60);" class="size-24">$<span style="color: rgb(231, 76, 60);" class="size-96">59</span>/mo</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded tracking-75 uppercase size-13" title="">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column third py-3">
                        <div class="is-card is-dark-text shadow-1" style="width:calc(100%);">
                            <div style="padding: 30px; width: 100%; box-sizing: border-box;" class="text-center">
                                <h3 class="size-24" style="letter-spacing: 2px;">ULTIMATE</h3>
                                <p style="color: rgb(231, 76, 60);" class="size-24">$<span style="color: rgb(231, 76, 60);" class="size-96">79</span>/mo</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div class="spacer height-40"></div>
                                <div class="button-group">
                                    <a href="#" role="button" class="transition-all inline-block whitespace-nowrap cursor-pointer no-underline border-2 border-solid mr-2 mt-2 mb-1 py-2 px-6 border-current hover:border-current font-normal leading-12 rounded uppercase tracking-75 size-13" title="">Buy Now</a>
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

		/* SKILLS */
		
		{
		    'thumbnail': 'preview/simple-skills-01.png',
		    'category': '9',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1420">
                <div class="row">
                    <div style="min-height: 143.892px; width: 40%; flex: 0 0 auto;" class="column half">
                        <p class="uppercase tracking-wider size-14" style="color: rgb(109, 109, 109);">I create things beautifully.</p>
                        <h1 class="font-medium">My Work Skills</h1>
                    </div>
                    <div style="width: 100%;" class="column half">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third pr-10">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-light" style="padding:0;margin:0;line-height:120px;">80%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="leading-16 font-light">Frontend Development</h3>

                        <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third pr-10">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-light" style="padding:0;margin:0;line-height:120px;">90%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="leading-16 font-light">UI/UX</h3>
                        <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column third pr-10">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-light" style="padding:0;margin:0;line-height:120px;">95%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="leading-16 font-light">Illustration&nbsp;</h3>
                        <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/simple-skills-02.png',
		    'category': '9',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1200">
                <div class="row">
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="min-height: 143.892px; width: 28.8973%; flex: 0 0 auto;" class="column third">
                        <p class="uppercase tracking-wider size-14 text-center" style="color: rgb(109, 109, 109);">I create things beautifully.</p>
                        <h1 class="text-center font-semibold leading-11 size-80">My Work Skills</h1>
                    </div>
                    <div style="width: 100%;" class="column third">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row relative">
                    <div class="column third px-10">
                        <h2 class="leading-14 font-light text-center size-68">85%</h2>
                        <div class="spacer height-20"></div>
                        <h3 class="uppercase size-19 font-light tracking-wider text-center">Frontend Development</h3>
                        <p style="color: rgb(136, 136, 136);" class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column third px-10">
                        <h2 class="leading-14 font-light text-center size-68">90%</h2>
                        <div class="spacer height-20"></div>
                        <h3 class="uppercase size-19 tracking-wider font-light text-center">UI/UX</h3>
                        <p style="color: rgb(136, 136, 136);" class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column third px-10">
                        <h2 class="leading-14 font-light text-center size-68">70%</h2>
                        <div class="spacer height-20"></div>
                        <h3 class="uppercase size-19 font-light tracking-wider text-center">Illustration&nbsp;</h3>
                        <p style="color: rgb(136, 136, 136);" class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
`
		},

		{
		    'thumbnail': 'preview/skills-01.png',
		    'category': '9',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 type-oranienbaum-sourcesanspro">
    <div class="is-boxes">
        <div class="is-box is-box-7 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-970 leading-12 size-18">
                        <div class="row">
                            <div class="column full">
                                <p class="uppercase size-16 tracking-275">Discover<br>How Good We Are</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <h2 class="leading-12 size-68">Team Skills</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-100"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half">
                                <h2 class="size-96">92%</h2>
                                <h3 class="size-24">Web Development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div class="column half">
                                <h2 class="size-96">85%</h2>
                                <h3 class="size-24">UI / UX Design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column half">
                                <h2 class="size-96">79%</h2>
                                <h3 class="size-24">Branding</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div class="column half">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-box-5 is-light-text is-content-bottom box-autofit min-height-50">
            <div class="is-overlay">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-3.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
                    <div class="is-overlay-color opacity-4"></div>
                </div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-2">
                    <div class="is-container v2 is-content-360 is-content-right edge-x-0-5">
                        <div class="row">
                            <div class="column full">
                                <p class="size-18 leading-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
		    'thumbnail': 'preview/skills-02.png',
		    'category': '9',
		    'contentCss': 'type-spacemono.css',
		    'contentClass': 'type-spacemono',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-spacemono box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1500 v2 size-16 leading-12">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center uppercase leading-none size-108 tracking-125">Professional Skills</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="center column third">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #6ab04c;">
                            <div class="is-card-content-centered">
                                <h3 class="size-35" style="margin: 0px;">87%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-24">Web Design</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type.</p>
                    </div>
                    <div class="center column third">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #e84393;">
                            <div class="is-card-content-centered">
                                <h3 class="size-35" style="margin: 0px;">92%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-24">Web Development</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type.</p>
                    </div>
                    <div class="center column third">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #0984e3;">
                            <div class="is-card-content-centered">
                                <h3 class="size-35" style="margin: 0px;">99%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-24">Support</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

			`
		},
		
		{
		    'thumbnail': 'preview/simple-skills-03.png',
		    'category': '9',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1400 size-16 leading-13">
                <div class="row">
                    <div class="column full">
                        <p class="text-center tracking-widest">Team Skills</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row">
                    <div style="width: 100%;" class="column third">
                        <div class="spacer height-40"></div>
                    </div>
                    <div style="width: 54.5922%; flex: 0 0 auto;" class="column third">
                        <h1 class="font-light text-center uppercase leading-none tracking-widest size-46">We create things beautifully</h1>
                    </div>
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column fourth">
                        <div class="text-center">
                            <i class="icon ion-ios-gear-outline size-48"></i>
                        </div>
                        <p class="tracking-75 text-center" style="color: rgb(174, 174, 174);">Frontend Development</p>
                        <h3 class="font-light text-center size-54">89%</h3>
                    </div>
                    <div class="column fourth">
                        <div class="text-center">
                            <i class="icon ion-ios-heart-outline size-48"></i>
                        </div>
                        <p class="tracking-75 text-center" style="color: rgb(174, 174, 174);">UI/UX</p>
                        <h3 class="font-light text-center size-54">95%</h3>
                    </div>
                    <div class="column fourth">
                        <div class="text-center">
                            <i class="icon ion-ios-rose-outline size-48"></i>
                        </div>
                        <p class="tracking-75 text-center" style="color: rgb(174, 174, 174);">Illustration</p>
                        <h3 class="font-light text-center size-54">75%</h3>
                    </div>
                    <div class="column fourth">
                        <div class="text-center">
                            <i class="icon ion-ios-mic-outline size-48"></i>
                        </div>
                        <p class="tracking-75 text-center" style="color: rgb(174, 174, 174);">Branding</p>
                        <h3 class="font-light text-center size-54">80%</h3>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
`
		},

		{
		    'thumbnail': 'preview/skills-03.png',
		    'category': '9',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-montserrat-roboto box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1100 size-16 leading-14">
                <div class="row">
                    <div class="column full">
                        <h2 class="size-76">Work Skills</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-semibold" style="padding:0;margin:0;line-height:120px;">80%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="font-semibold leading-16">Design</h3>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column half">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-semibold" style="padding:0;margin:0;line-height:120px;">95%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="font-semibold leading-16">HTML &amp; CSS</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-semibold" style="padding:0;margin:0;line-height:120px;">78%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="font-semibold leading-16">WordPress</h3>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column half">
                        <div style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="size-32 font-semibold" style="padding:0;margin:0;line-height:120px;">99%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="font-semibold leading-16">Support</h3>

                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/skills-04.png',
		    'category': '9',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 248);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1620 size-17 leading-12 content-pt-40">
                <div class="row">
                    <div class="column full center">
                        <h2 class="letter-spacing-25 leading-none size-100 tracking-275">PROFESSIONAL SKILLS</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <div class="size-32 font-semibold">90%</div>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28">HTML &amp; CSS</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <div class="size-32 font-semibold">85%</div>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28">PHP</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <div class="size-32 font-semibold">72%</div>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28">JavaScript</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-dark-text shadow-1" style="width:120px;height:120px;padding:10px">
                            <div class="is-card-content-centered">
                                <div class="size-32 font-semibold">85%</div>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3 class="size-28">Graphic Design</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/skills-05.png',
		    'category': '9',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-raleway-lato box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1480 leading-12 size-18">
                <div class="row">
                    <div class="column full">
                        <h2 class="font-semibold size-104">Our Skills.</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row sm-autofit">
                    <div class="column fourth sm-hidden">
                        <div class="spacer height-20"></div>
                    </div>
                    <div class="column fourth">
                        <div class="text-left">
                            <i class="icon ion-android-favorite-outline size-60" style="color: rgb(243, 156, 18);"></i>
                        </div>
                        <h3 class="leading-16 size-24 uppercase tracking-wider" style="font-weight: 500;">Web Design</h3>
                        <p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block;"></p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column fourth">
                        <div class="text-left">
                            <i class="icon ion-code size-60" style="color: rgb(243, 156, 18);"></i>
                        </div>
                        <h3 class="leading-16 size-24 uppercase tracking-wider" style="font-weight: 500;">Development</h3>
                        <p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block;"></p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column fourth">
                        <div class="text-left">
                            <i class="icon ion-android-globe size-60" style="color: rgb(243, 156, 18);"></i>
                        </div>
                        <h3 class="leading-16 size-24 uppercase tracking-wider" style="font-weight: 500;">Branding</h3>
                        <p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block;"></p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/skills-06.png',
		    'category': '9',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-raleway-lato is-content-top box-autofit">
    <div class="is-overlay" style="background-color: rgb(255, 255, 255);">

        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/branch-white-flower-wall-pxhere-2.jpg&quot;); opacity: 1;"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1400 is-content-right edge-x-0-5 leading-12 size-18">
                <div class="row">
                    <div class="column half">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column half">
                        <h2 class="font-semibold size-104">Our Skills.</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row sm-autofit">
                    <div class="column fourth sm-hidden">
                        <div class="spacer height-20"></div>
                    </div>
                    <div class="column fourth">
                        <div class="text-left">
                            <i class="icon ion-android-favorite-outline size-60" style="color: rgb(243, 156, 18);"></i>
                        </div>
                        <h3 class="leading-16 size-24 uppercase tracking-wider" style="font-weight: 500;">Web Design</h3>
                        <p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block;"></p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column fourth">
                        <div class="text-left">
                            <i class="icon ion-code size-60" style="color: rgb(243, 156, 18);"></i>
                        </div>
                        <h3 class="leading-16 size-24 uppercase tracking-wider" style="font-weight: 500;">Development</h3>
                        <p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block;"></p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="column fourth">
                        <div class="text-left">
                            <i class="icon ion-android-globe size-60" style="color: rgb(243, 156, 18);"></i>
                        </div>
                        <h3 class="leading-16 size-24 uppercase tracking-wider" style="font-weight: 500;">Branding</h3>
                        <p style="border-bottom: 2px solid #f39c12; width: 40px; display: inline-block;"></p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/skills-07.png',
		    'category': '9',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-alegreya-lato box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1500 v2 leading-14 size-17 content-pt-40 content-pb-50">
                <div class="row">
                    <div class="column full center">
                        <h2 class="size-76">Professional Skills</h2>
                        <p style="border-bottom: 3px solid #333; width: 60px; display: inline-block;"></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full center">
                        <div class="spacer height-160"></div>
                    </div>

                </div>
                <div class="row relative sm-items-2">
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #000;">
                            <div class="is-card-content-centered">
                                <h3 class="size-48" style="margin: 0px;">92%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3>Creative Design</h3>
                    </div>
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #000;">
                            <div class="is-card-content-centered">
                                <h3 class="size-48" style="margin: 0px;">85%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3>Development</h3>
                    </div>
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #000;">
                            <div class="is-card-content-centered">
                                <h3 class="size-48" style="margin: 0px;">77%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3>Photography</h3>
                    </div>
                    <div class="center column fourth">
                        <div class="is-card is-card-circle is-light-text shadow-1" style="width:130px;height:130px;padding:10px;background: #000;">
                            <div class="is-card-content-centered">
                                <h3 class="size-48" style="margin: 0px;">80%</h3>
                            </div>
                        </div>
                        <div class="spacer height-40"></div>
                        <h3>Branding</h3>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/skills-08.png',
		    'category': '9',
		    'contentCss': 'type-elsie-montserrat.css',
		    'contentClass': 'type-elsie-montserrat',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-elsie-montserrat box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1100 size-16 leading-14">
                <div class="row">
                    <div class="column full">
                        <p class="size-14 tracking-widest">DISCOVER HOW GOOD WE ARE</p>
                        <h2 class="size-76 leading-14" style="letter-spacing: 5px;">TEAM SKILLS</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <h3 class="size-76 leading-14">85%</h3>
                        <div class="spacer height-20"></div>
                        <h4 class="uppercase size-19">Creative Design</h4>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column half">
                        <h3 class="size-76 leading-14">97%</h3>
                        <div class="spacer height-20"></div>
                        <h4 class="uppercase size-19">Web Development</h4>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half">
                        <h3 class="size-76 leading-14">79%</h3>
                        <div class="spacer height-20"></div>
                        <h4 class="uppercase size-19">Photoshop</h4>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column half">
                        <h3 class="size-76 leading-14">83%</h3>
                        <div class="spacer height-20"></div>
                        <h4 class="uppercase size-19">animation</h4>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/skills-09.png',
		    'category': '9',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins-lekton box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1300 size-18 leading-14">
                <div class="row">
                    <div class="column full">
                        <h2 class="text-center size-68">Our Finest Skills</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <p class="text-center tracking-wide">We create things beautifully.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-140"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="center column third">
                        <div style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="font-semibold size-42" style="padding: 0px; margin: 0px; line-height: 130px;">80%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="leading-16 uppercase size-24">Design</h3>
                    </div>
                    <div class="center column third">
                        <div style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="font-semibold size-42" style="padding: 0px; margin: 0px; line-height: 130px;">95%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="leading-16 uppercase size-24">Development</h3>
                    </div>
                    <div class="center column third">
                        <div style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                            <p class="font-semibold size-42" style="padding: 0px; margin: 0px; line-height: 130px;">79%</p>
                        </div>
                        <div class="spacer height-20"></div>
                        <h3 class="leading-16 uppercase size-24">Marketing</h3>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/skills-10.png',
		    'category': '9',
		    'contentCss': 'type-oswald-biryani.css',
		    'contentClass': 'type-oswald-biryani',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oswald-biryani box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1500 size-17 leading-14">
                <div class="row">
                    <div class="column full center">
                        <h2 class="font-semibold size-80 tracking-widest">TEAM SKILLS</h2>
                        <p class="size-14 tracking-150">DISCOVER HOW GOOD WE ARE</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-160"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column fourth center"><i class="icon ion-ios-heart-outline size-48 leading-none"></i>
                        <p class="tracking-75">WEB DESIGN</p>
                        <h3 style="font-weight: 400;" class="size-76">87%</h3>
                    </div>
                    <div class="column fourth center"><i class="icon ion-ios-gear-outline size-48 leading-none"></i>
                        <p class="tracking-75">DEVELOPMENT</p>
                        <h3 style="font-weight: 400;" class="size-76">95%</h3>
                    </div>
                    <div class="column fourth center"><i class="icon ion-ios-camera-outline size-48 leading-none"></i>
                        <p class="tracking-75">PHOTOGRAPHY</p>
                        <h3 style="font-weight: 400;" class="size-76">77%</h3>
                    </div>
                    <div class="column fourth center"><i class="icon ion-ios-world-outline size-48 leading-none"></i>
                        <p class="tracking-75">BRANDING</p>
                        <h3 style="font-weight: 400;" class="size-76">80%</h3>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/skills-11.png',
		    'category': '9',
		    'contentCss': 'type-elsie-montserrat.css',
		    'contentClass': 'type-elsie-montserrat',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-elsie-montserrat box-autofit min-height-75">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/ankhurr-chawaak-phXlwhb98jw-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95 is-content-top">
            <div class="is-container v2 is-content-1200 size-16 leading-14">
                <div class="row">
                    <div class="column full">
                        <p class="size-14 tracking-widest">DISCOVER HOW GOOD WE ARE</p>
                        <h2 class="size-76 leading-14" style="letter-spacing: 5px;">TEAM SKILLS</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third">
                        <h2 class="size-76 leading-14">85%</h2>
                        <div class="spacer height-20"></div>
                        <h3 class="uppercase size-19">Creative Design</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column third">
                        <h2 class="size-76 leading-14">97%</h2>
                        <div class="spacer height-20"></div>
                        <h3 class="uppercase size-19">Web Development</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="column third">
                        <h2 class="size-76 leading-14">80%</h2>
                        <div class="spacer height-20"></div>
                        <h3 class="uppercase size-19">bRANDING</h3>
                        <p style="color: rgb(136, 136, 136);">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/skills-12.png',
		    'category': '9',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-section-100 type-poppins-lekton">
    <div class="is-boxes">
        <div class="is-box is-content-top is-box-4 box-autofit min-height-50">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-7.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
        <div class="is-box is-dark-text is-content-bottom is-box-8 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-5">
                    <div class="is-container v2 is-content-1200 size-18 leading-16">
                        <div class="row">
                            <div class="column full">
                                <h2 class="text-center size-68">Our Finest Skills</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <p class="text-center size-17 tracking-wide">We create things beautifully.</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="center column third">
                                <div style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                                    <p class="font-semibold size-35" style="padding: 0px; margin: 0px; line-height: 130px;">80%</p>
                                </div>
                                <div class="spacer height-20"></div>
                                <h3 class="leading-16 uppercase size-24">UI/UX</h3>
                            </div>
                            <div class="center column third">
                                <div style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                                    <p class="font-semibold size-35" style="padding: 0px; margin: 0px; line-height: 130px;">95%</p>
                                </div>
                                <div class="spacer height-20"></div>
                                <h3 class="leading-16 uppercase size-24">Development</h3>
                            </div>
                            <div class="center column third">
                                <div style="width: 130px; height: 130px; border-radius: 50%; border: 3px solid rgb(51, 51, 51); display: inline-block;" class="text-center">
                                    <p class="font-semibold size-35" style="padding: 0px; margin: 0px; line-height: 130px;">79%</p>
                                </div>
                                <div class="spacer height-20"></div>
                                <h3 class="leading-16 uppercase size-24">Branding</h3>
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

		/* ACHIEVEMENTS  */
		
		{
		    'thumbnail': 'preview/simple-achievements-01.png',
		    'category': '10',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered is-opacity-95">
					<div class="is-container v2 size-16 leading-13 is-content-1420">
						<div class="row">
							<div class="column third">
								<div class="spacer height-80"></div>
							</div>
							<div style="min-height: 143.892px;" class="column third">
								<p class="uppercase tracking-wider size-14 text-center" style="color: rgb(109, 109, 109);">Fun Facts</p>
								<h1 class="text-center size-42 font-light">What makes us different.</h1>
							</div>
							<div class="column third">
								<div class="spacer height-80"></div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-100"></div>
							</div>
						</div>
						<div class="row">
							<div class="column third">
								<h1 class="text-center leading-14 font-light size-76">100+</h1>
								<h4 class="text-center font-light">Happy Clients</h4>
								<p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div class="column third">
								<h1 class="text-center leading-14 font-light size-76">157</h1>
								<h4 class="text-center font-light">Completed Projects</h4>
								<p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div class="column third">
								<h1 class="text-center leading-14 font-light size-76">35</h1>
								<h4 class="text-center font-light">Countries Served</h4>
								<p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
		    'thumbnail': 'preview/simple-achievements-02.png',
		    'category': '10',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 size-16 leading-13 is-content-1200">
							<div class="row">
								<div style="min-height: 143.892px; width: 40%; flex: 0 0 auto;" class="column half">
									<p class="uppercase tracking-wider size-14" style="color: rgb(109, 109, 109);">Fun Facts</p>
									<h1 class="font-medium">What makes us different.</h1>
								</div>
								<div style="width: 100%;" class="column half">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<h3 class="size-54 leading-14">100%</h3>
									<p class="font-semibold">Satisfaction</p>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<h3 class="size-54 leading-14">45</h3>
									<p class="font-semibold">Awards</p>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<h3 class="leading-14 size-54">1.234</h3>
									<p class="font-semibold">Happy Clients</p>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
		    'thumbnail': 'preview/simple-achievements-03.png',
		    'category': '10',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container size-16 v2 leading-13 is-content-1260">
							<div class="row">
								<div class="column full">
									<p class="uppercase size-14 tracking-300 leading-18" style="color: rgb(109, 109, 109);">Achievements</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="size-42 font-light">Why we are so awesome.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-100"></div>
								</div>
							</div>
							<div class="row">
								<div class="column fourth">
									<div class="text-left leading-14">
										<i class="icon ion-ios-heart-outline size-68"></i>
									</div>
									<h2 class="leading-12 size-42">100%</h2>
									<h3 class="font-light leading-12 size-19 tracking-wide">Satisfaction</h3>
									<div class="spacer height-20"></div>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="column fourth">
									<div class="text-left leading-14">
										<i class="icon ion-ios-people-outline size-68"></i>
									</div>
									<h2 class="leading-12 size-42">1.234</h2>
									<h3 class="font-light leading-12 size-19 tracking-wide">Happy Clients</h3>
									<div class="spacer height-20"></div>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="column fourth">
									<div class="text-left leading-14">
										<i class="icon ion-ios-compose-outline size-68"></i>
									</div>
									<h2 class="leading-12 size-42">567</h2>
									<h3 class="font-light leading-12 size-19 tracking-wide">Projects Done</h3>
									<div class="spacer height-20"></div>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
								<div class="column fourth">
									<div class="text-left leading-14">
										<i class="icon ion-ios-star-outline size-68"></i>
									</div>
									<h2 class="leading-12 size-42">23</h2>
									<h3 class="font-light leading-12 size-19 tracking-wide">Awards Gained</h3>
									<div class="spacer height-20"></div>
									<p style="color: rgb(109, 109, 109);">Lorem Ipsum is simply dummy text of the printing industry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/achievements-02.png',
		    'category': '10',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section type-alegreya-lato is-section-50">
    <div class="is-boxes">
        <div class="is-box is-dark-text is-box-6 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-left edge-x-2 size-16 leading-12 is-content-380">
                        <div class="row">
                            <div class="column full">
                                <h2 class="size-32">Fun Facts</h2>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
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
        <div class="is-box is-box-6 box-autofit min-height-40">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_6NYVPE6NEB-6.jpg&quot;);"></div>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-box is-section-50 type-alegreya-lato box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-16 leading-12 is-content-1500">
                <div class="row">
                    <div class="column full">
                        <h1 class="leading-none size-112">What makes us different.</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row sm-autofit md-autofit">
                    <div style="width: 34.9348%; flex: 0 0 auto;" class="column fourth sm-hidden md-hidden">
                        <div class="spacer height-20"></div>
                    </div>
                    <div style="width: 100%;" class="column fourth">
                        <h3 class="size-54 leading-14">100%</h3>
                        <p class="font-semibold">Satisfaction</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div style="width: 100%;" class="column fourth">
                        <h3 class="size-54 leading-14">45</h3>
                        <p class="font-semibold">Awards</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div style="width: 100%;" class="column fourth">
                        <h3 class="leading-14 size-54">1.234</h3>
                        <p class="font-semibold">Happy Clients</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/achievements-01.png',
		    'category': '10',
		    'contentCss': 'type-fjallaone-ibmplexserif.css',
		    'contentClass': 'type-fjallaone-ibmplexserif',
		    'html': `
			<div class="is-section is-box is-section-100 is-light-text type-fjallaone-ibmplexserif box-autofit min-height-70">
    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-5.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
            <div class="is-overlay-color opacity-5" style="background-color: rgb(0, 0, 0);"></div>
        </div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 is-content-1500" style="transition: all 0.3s ease-out 0s;">
                <div class="row">
                    <div class="column third">
                        <h1 class="text-center leading-14 size-156">400+</h1>
                        <h4 class="text-center">Happy Clients</h4>
                    </div>
                    <div class="column third">
                        <h1 class="text-center leading-14 size-156">236</h1>
                        <h4 class="text-center">Completed Projects</h4>
                    </div>
                    <div class="column third">
                        <h1 class="text-center leading-14 size-156">45</h1>
                        <h4 class="text-center">Countries Served</h4>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		/* QUOTES */
		
		{
		    'thumbnail': 'preview/simple-quotes-01.png',
		    'category': '11',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1300">
                <div class="row">
                    <div class="column full pt-4">
                        <h1 class="size-60 text-center font-light">Their Stories.</h1>
                        <p style="color: rgb(109, 109, 109);" class="text-center">Hear the interesting stories from our lovely customers.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row sm-autofit md-autofit">
                    <div class="column fifth">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24">Some seriously well-engineered products!</p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- The Magazine</p>
                    </div>
                    <div class="column fifth sm-hidden md-hidden">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column fifth">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24">Super awesome products with great support!</p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- The News</p>
                    </div>
                    <div class="column fifth sm-hidden md-hidden">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column fifth">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24"><span>Simply Awesome!&nbsp;</span>Super fast &amp; easy to use!</p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- A User</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
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
		    'thumbnail': 'preview/simple-quotes-02.png',
		    'category': '11',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box type-poppins is-section-100 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1000">
                <div class="row">
                    <div class="column full pt-4">
                        <h1 class="size-60 text-center font-light">Testimonials</h1>
                        <p style="color: rgb(109, 109, 109);" class="text-center">Hear the interesting stories from our lovely customers.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half p-8">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24">Some seriously well-engineered products!</p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- The Magazine</p>
                    </div>

                    <div class="column half p-8">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24">Awesome products with great support!</p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- The News</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column half p-8">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24"><span>Simply Awesome!&nbsp;</span>Super fast &amp; easy to use!</p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- A User</p>
                    </div>
                    <div class="column half p-8">
                        <div class="text-left">
                            <i class="icon ion-quote size-38"></i>
                        </div>
                        <p class="leading-none not-italic size-24"><span>Thanks so much for doing a great job!</span></p>
                        <p class="text-left" style="color: rgb(145, 145, 145);">- A User</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
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
		    'thumbnail': 'preview/simple-quotes-03.png',
		    'category': '11',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box type-poppins is-section-100 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1300">
                <div class="row">
                    <div class="column full pt-4">
                        <h1 class="font-light size-60">Testimonials</h1>
                        <p style="color: rgb(109, 109, 109);">Hear the interesting stories from our lovely customers.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row">
                    <div style="width: 29.66%; flex: 0 0 auto;" class="column fifth"><img src="assets/quickstart/images/pexels-cottonbro-10120691.jpg" alt="">
                        <p class="leading-none not-italic size-24"><span>"</span>Some seriously well-engineered products!"</p>
                        <p class="text-right" style="color: rgb(145, 145, 145);">- The Magazine</p>
                    </div>
                    <div style="width: 100%;" class="column fifth">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="width: 100%;" class="column fifth"><img src="assets/quickstart/images/pexels-elīna-arāja-3317936.jpg" alt="">
                        <p class="leading-none not-italic size-24"><span>"</span>Awesome products with great support!"</p>
                        <p class="text-right" style="color: rgb(145, 145, 145);">- The News</p>
                    </div>
                    <div class="column fifth" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="width: 100%;" class="column fifth flex flex-col justify-end items-end"><img src="assets/quickstart/images/pexels-elīna-arāja-3317936.jpg" alt="">
                        <p class="leading-none not-italic size-24"><span>"</span>Super fast &amp; easy to use!"</p>
                        <p class="text-right" style="color: rgb(145, 145, 145);">- A User</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
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
		    'thumbnail': 'preview/simple-quotes-04.png',
		    'category': '11',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1400 size-17 leading-13">
                <div class="row">
                    <div class="column full">
                        <h1 class="text-center size-54">Their Stories</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <p class="text-center">what people say about us</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row sm-autofit">
                    <div style="width: 100%;" class="column fifth">
                        <div class="text-left leading-18">
                            <i class="icon ion-quote size-32"></i>
                        </div>
                        <div class="spacer height-20"></div>
                        <p class="size-21">It's easy to use, customizable, and user-friendly. A truly amazing features.</p>
                        <div class="spacer height-40"></div>
                        <p style="color: rgb(174, 174, 174);">- A User</p>
                    </div>
                    <div style="width: 24.0999%; flex: 0 0 auto;" class="column fifth"><img src="assets/quickstart/images/oswald-elsaboath-XqBAem99bYM-unsplash-editWD2IShM.jpg" alt="" data-filename="oswald-elsaboath-XqBAem99bYM-unsplash-editWD2IShM.jpg"></div>
                    <div style="width: 14.989%; flex: 0 0 auto;" class="column fifth sm-hidden">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column fifth" style="width: 28.8758%; flex: 0 0 auto;"><img src="assets/quickstart/images/roman-kraft-Q7FTeBhr100-unsplash.jpg" alt="" data-filename="roman-kraft-Q7FTeBhr100-unsplash.jpg"></div>
                    <div class="column fifth flex flex-col justify-end items-start" style="width: 100%;">
                        <div class="text-left leading-18">
                            <i class="icon ion-quote size-32"></i>
                        </div>
                        <div class="spacer height-20"></div>
                        <p class="size-21">Super fast. Awesome products with great support!</p>
                        <div class="spacer height-20"></div>
                        <p style="color: rgb(174, 174, 174);">- A User</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
`
		},

		{
		    'thumbnail': 'preview/quotes-01.png',
		    'category': '11',
		    'contentCss': 'type-montserrat-roboto.css',
		    'contentClass': 'type-montserrat-roboto',
		    'html': `
			<div class="is-section is-section-100 type-montserrat-roboto">
    <div class="is-boxes">
        <div class="is-box is-box-6 is-light-text box-autofit min-height-60">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
                    <div class="is-overlay-color opacity-0"></div>
                </div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 h-full flex flex-col justify-between is-content-900">
                        <div class="row">
                            <div class="column full pt-16">
                                <p class="text-right uppercase font-semibold size-17 tracking-500">Testimonials</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full pb-16">
                                <h1 class="leading-09 size-188">Their Stories.</h1>
                                <p class="size-24">Hear the interesting stories from our lovely customers.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-6 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-740 leading-14 size-17">
                        <div class="row md-autofit">
                            <div class="column half md-hidden">
                                <div class="spacer height-40"></div>
                            </div>
                            <div class="column half">
                                <div class="text-left">
                                    <i class="icon ion-quote size-38"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p class="size-12 italic">— Ross Coleman&nbsp;</p>
                            </div>

                        </div>

                        <div class="row sm-autofit">
                            <div class="column full sm-hidden">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row md-autofit">
                            <div class="column third">
                                <div class="text-left">
                                    <i class="icon ion-quote size-38"></i>
                                </div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p class="size-12 italic">— Julio Anderson</p>
                            </div>
                            <div class="column third md-hidden">
                                <div class="spacer height-40"></div>
                            </div>
                            <div class="column third">
                                <div class="text-left">
                                    <i class="icon ion-quote size-38"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p class="size-12 italic">— Laura Maynard</p>
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
		    'thumbnail': 'preview/quotes-02.png',
		    'category': '11',
		    'contentCss': 'type-heebo-ibmplexmono-2.css',
		    'contentClass': 'type-heebo-ibmplexmono-2',
		    'html': `
			<div class="is-section is-section-100 type-heebo-ibmplexmono-2">
    <div class="is-boxes">
        <div class="is-box is-box-7 box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1000 size-17 leading-12">
                        <div class="row">
                            <div class="column half" style="width: 65.5532%; flex: 0 0 auto;">
                                <h2 class="leading-09 size-116" style="font-weight: 300;">What people say about us.</h2>
                            </div>
                            <div class="column half" style="width: 100%;">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-80"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column two-third"><img src="assets/quickstart/images/burst-kUqqaRjJuw0-unsplash.jpg" alt="" data-filename="burst-kUqqaRjJuw0-unsplash.jpg"></div>
                            <div class="column third">
                                <div class="spacer height-20"></div>
                                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                                <div class="spacer height-60"></div>
                                <p class="font-semibold size-12">Alan Jones.<br>A Web Developer based in Perth</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-5 is-content-bottom box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-2">
                    <div class="is-container v2 is-content-720 leading-12 size-17">
                        <div class="row">
                            <div class="column full">
                                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column third flex flex-col justify-end items-start">
                                <p class="font-semibold size-12">Jennie Carter.<br>A Web Designer based in Seattle</p>
                            </div>
                            <div class="column two-third"><img src="assets/quickstart/images/pexels-george-milton-7034809-editiqZV3iF.jpg" alt="" data-filename="pexels-george-milton-7034809-editiqZV3iF.jpg"></div>

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
		    'thumbnail': 'preview/quotes-03.png',
		    'category': '11',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-light-text type-poppins box-autofit min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-george-milton-7034800.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
            <div class="is-overlay-color opacity-10"></div>
        </div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 is-content-1600 size-18 leading-14">
                <div class="row">
                    <div class="column half" style="width: 66.1301%; flex: 0 0 auto;">
                        <h2 class="leading-none size-96">"It's easy to use, customizable, and user-friendly. A truly amazing features with reasonable prices."</h2>
                    </div>
                    <div class="column half" style="width: 100%;">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-120"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <p class="text-right size-24 tracking-wider font-semibold">By Anna Harris</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/quotes-04.png',
		    'category': '11',
		    'contentCss': 'type-raleway-lato.css',
		    'contentClass': 'type-raleway-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-raleway-lato box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container is-content-1600 v2 size-18 leading-13">
                <div class="row">
                    <div class="column half flex flex-col justify-end items-start" style="width: 100%;">
                        <h1 class="font-semibold leading-09 size-164">Happy Clients.</h1>
                    </div>
                    <div class="column half" style="width: 43.3999%; flex: 0 0 auto;"><img src="assets/quickstart/images/josh-applegate-bAf3r92aewQ-unsplash-editbN3qLwR.jpg" alt="" data-filename="josh-applegate-bAf3r92aewQ-unsplash-editbN3qLwR.jpg"></div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="text-left">
                            <i class="icon ion-quote size-76"></i>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row sm-autofit md-autofit">
                    <div style="width: 100%;" class="column fourth sm-hidden md-hidden">
                        <div class="spacer height-40"></div>
                    </div>
                    <div style="width: 32.7109%; flex: 0 0 auto;" class="column fourth">
                        <p>"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                        <p class="italic size-15">— John Smith</p>
                    </div>
                    <div class="column fourth" style="width: 100%;">
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type."</p>
                        <p class="italic size-15">— Amanda Clark</p>
                    </div>
                    <div class="column fourth" style="width: 100%;">
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
		    'thumbnail': 'preview/quotes-05.png',
		    'category': '11',
		    'contentCss': 'type-rufina-oxygen.css',
		    'contentClass': 'type-rufina-oxygen',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-rufina-oxygen box-autofit">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-17 leading-13 is-content-1300 content-pt-40 content-pb-40">
                <div class="row">
                    <div class="column full text-center">
                        <h1 class="leading-none size-92">Testimonials</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <p class="text-center tracking-wider size-16">Hear the interesting stories from our lovely customers.</p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-40"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="center column half p-6">
                        <div class="is-card is-dark-text" style="width:calc(100%);">
                            <img src="assets/quickstart/images/sawyer-bengtson-OYpjEN_Tdcs-unsplash.jpg" alt="" style="margin: 0;" data-filename="sawyer-bengtson-OYpjEN_Tdcs-unsplash.jpg">
                            <div style="padding: 20px; width: 100%; box-sizing: border-box;" class="text-center">
                                <i class="icon ion-chatbubble-working size-32"></i>
                                <div class="spacer height-20"></div>
                                <p>"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                                <p class="size-14" style="color: rgb(174, 174, 174);">By Customer Name</p>

                            </div>
                        </div>
                    </div>
                    <div class="center column half p-6">
                        <div class="is-card is-dark-text" style="width:calc(100%);">
                            <img src="assets/quickstart/images/daniel-mingook-kim-ou1l6VbJTF8-unsplash.jpg" alt="" style="margin: 0;" data-filename="daniel-mingook-kim-ou1l6VbJTF8-unsplash.jpg">
                            <div style="padding: 20px; width: 100%; box-sizing: border-box;" class="text-center">
                                <i class="icon ion-chatbubble-working size-32"></i>
                                <div class="spacer height-20"></div>
                                <p>"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
                                <p class="size-14" style="color: rgb(174, 174, 174);">By Customer Name</p>
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


		/* PARTNERS */

		{
		    'thumbnail': 'preview/simple-partners-01.png',
		    'category': '12',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1420">
                <div class="row sm-autofit">

                    <div class="column third sm-hidden xs-hidden">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="min-height: 143.892px;" class="column third">

                        <h1 class="text-center font-semibold">Our Lovely Clients</h1>
                        <div class="spacer height-20"></div>
                        <p class="text-center" style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                    <div class="column third sm-hidden xs-hidden">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column fifth"><img src="assets/quickstart/images/creative.png" alt=""></div>
                    <div class="column fifth"><img src="assets/quickstart/images/steady.png" alt=""></div>
                    <div class="column fifth"><img src="assets/quickstart/images/light-studio.png" alt=""></div>
                    <div class="column fifth"><img src="assets/quickstart/images/design-firm.png" alt=""></div>
                    <div class="column fifth"><img src="assets/quickstart/images/sitepro.png" alt=""></div>

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
		    'thumbnail': 'preview/simple-partners-02.png',
		    'category': '12',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1420">
                <div class="row">
                    <div style="min-height: 143.892px; width: 40.2151%; flex: 0 0 auto;" class="flex flex-col justify-end items-start column half">
                        <h1 class="text-left size-76 font-normal leading-none">Our Lovely Clients</h1>
                        <div class="spacer height-20"></div>
                        <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div style="width: 100%;" class="column half xs-hidden">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row sm-autofit">
                    <div class="column fourth sm-hidden xs-hidden">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column fourth"><img src="assets/quickstart/images/creative.png" alt=""></div>
                    <div class="column fourth"><img src="assets/quickstart/images/steady.png" alt=""></div>
                    <div class="column fourth"><img src="assets/quickstart/images/light-studio.png" alt=""></div>

                </div>
                <div class="row sm-autofit">
                    <div class="column fourth sm-hidden xs-hidden">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column fourth"><img src="assets/quickstart/images/infinitech.png" alt=""></div>
                    <div class="column fourth"><img src="assets/quickstart/images/design-firm.png" alt=""></div>
                    <div class="column fourth"><img src="assets/quickstart/images/sitepro.png" alt=""></div>

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
		    'thumbnail': 'preview/simple-partners-03.png',
		    'category': '12',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1300 size-17 leading-12">
                <div class="row">
                    <div style="width: 29.3083%; flex: 0 0 auto;" class="column fourth flex flex-col justify-center items-start">
                        <h1 class="leading-none size-64">Our Partners</h1>
                        <div class="spacer height-20"></div>
                        <p>We are globally recognized and trusted by the world's best names.</p>
                    </div>
                    <div style="width: 100%;" class="column fourth">
                        <div class="spacer height-40"></div>
                    </div>
                    <div class="column fourth" style="width: 100%;">
                        <img src="assets/quickstart/images/infinitech.png" alt="">
                        <div class="spacer height-20"></div><img src="assets/quickstart/images/light-studio.png" alt="">
                    </div>
                    <div class="column fourth" style="width: 100%;">
                        <img src="assets/quickstart/images/steady.png" alt="">
                        <div class="spacer height-20"></div><img src="assets/quickstart/images/sitepro.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/partners-01.png',
		    'category': '12',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box type-poppins is-section-40 box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-17 leading-12 is-content-1640">
                <div class="row">
                    <div class="column third" style="width: 100%;">
                        <h1 class="leading-09 size-116">Our Clients</h1>
                    </div>
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-40"></div>
                    </div>
                    <div style="width: 38.6901%; flex: 0 0 auto;" class="column third flex flex-col justify-end items-start">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section type-poppins is-section-60">
    <div class="is-boxes">
        <div class="is-box-4 is-box is-dark-text is-content-bottom box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-bottom edge-y-2">
                    <div class="is-container v2 is-content-580">
                        <div class="row">
                            <div class="column full"><img src="assets/quickstart/images/pexels-marina-podrez-11674118-editHV5kzrQ.jpeg" alt=""></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box-4 is-box is-dark-text is-content-top box-autofit">
            <div class="is-overlay" style="background-color: rgb(255, 255, 255);">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-content-top edge-y-2">
                    <div class="is-container v2 is-content-620">
                        <div class="row">
                            <div class="column third"><img src="assets/quickstart/images/creative.png" alt=""></div>
                            <div class="column third"><img src="assets/quickstart/images/steady.png" alt=""></div>
                            <div class="column third"><img src="assets/quickstart/images/light-studio.png" alt=""></div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column third">
                                <div class="spacer height-20"></div>
                            </div>
                            <div class="column third"><img src="assets/quickstart/images/sitepro.png" alt=""></div>
                            <div class="column third"><img src="assets/quickstart/images/design-firm.png" alt=""></div>

                        </div>
                        <div class="row">
                            <div style="width: 35.524%; flex: 0 0 auto;" class="column half"><img src="assets/quickstart/images/infinitech.png" alt=""></div>
                            <div style="width: 100%;" class="column half">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box-4 is-box is-dark-text box-autofit min-height-40">
            <div class="is-overlay">

                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-maksim-goncharenok-4352247.jpg&quot;);"></div>
            </div>
            <div class="is-boxes">
                <div class="is-box-centered is-opacity-90">
                    <div class="is-container v2 is-content-380">
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-80"></div>
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
		    'thumbnail': 'preview/partners-02.png',
		    'category': '12',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 is-box type-alegreya-lato box-autofit min-height-60">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/pexels-anna-nekrashevich-8534168.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 is-content-1200 is-content-left edge-x-1">
                <div class="row">
                    <div class="column full text-center">
                        <h1 class="size-48 leading-18 text-center tracking-wide">Our Lovely Clients</h1>
                        <p style="border-bottom: 3px solid; width: 80px; display: inline-block;"></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-100"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third flex flex-col justify-center items-center">
                        <img src="assets/quickstart/images/creative.png" alt="">
                    </div>
                    <div class="column third flex flex-col justify-center items-center">
                        <img src="assets/quickstart/images/light-studio.png" alt="">
                    </div>
                    <div class="column third flex flex-col justify-center items-center">
                        <img src="assets/quickstart/images/infinitech.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

			`
		},

		/* AS FEATURED ON */

		{
		    'thumbnail': 'preview/simple-asfeaturedon-01.png',
		    'category': '13',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1420">
                <div class="row">
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>
                    <div style="min-height: 143.892px; width: 40%; flex: 0 0 auto;" class="column third">
                        <h1 class="text-center font-light size-96 leading-none">As Featured On</h1>
                    </div>
                    <div class="column third" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/upclick.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/digitalmag.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/mmedia.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/bbuzz.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/prosource.png" alt=""></div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third xs-hidden" style="width: 100%;">
                        <div class="spacer height-80"></div>
                    </div>
                    <div class="column third" style="width: 48.172%; flex: 0 0 auto;">
                        <p style="color: rgb(109, 109, 109);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div style="width: 100%;" class="column third xs-hidden">
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
		    'thumbnail': 'preview/simple-asfeaturedon-02.png',
		    'category': '13',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1420">
                <div class="row sm-autofit">
                    <div style="min-height: 143.892px;" class="p-10 column third">
                        <h1 class="leading-none text-left size-48 font-semibold">As Seen On</h1>
                    </div>
                    <div style="min-height: 143.892px;" class="p-10 column third">
                        <p class="text-left" style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                    <div class="column third sm-hidden xs-hidden">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full xs-hidden">
                        <div class="spacer height-60"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column third"><img src="assets/quickstart/images/upclick.png" alt=""></div>
                    <div class="column third"><img src="assets/quickstart/images/digitalmag.png" alt=""></div>
                    <div class="column third"><img src="assets/quickstart/images/mmedia.png" alt=""></div>

                </div>
                <div class="row">
                    <div class="column third"><img src="assets/quickstart/images/prosource.png" alt=""></div>
                    <div class="column third"><img src="assets/quickstart/images/worldwide.png" alt=""></div>
                    <div class="column third"><img src="assets/quickstart/images/bbuzz.png" alt=""></div>

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
		    'thumbnail': 'preview/asfeaturedon-01.png',
		    'category': '13',
		    'contentCss': 'type-opensans.css',
		    'contentClass': 'type-opensans',
		    'html': `
			<div class="is-section is-box box-space type-opensans is-section-70 box-autofit min-height-50">
    <div class="is-overlay">
        <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-4.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
    </div>
</div>

<div class="is-section is-box type-oranienbaum-sourcesanspro is-section-30 is-content-top box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-content-top edge-y-1">
            <div class="is-container v2 is-content-1600 is-content-right edge-x-0-5">
                <div class="row">
                    <div class="column fifth" style="width: 25.2866%; flex: 0 0 auto;">
                        <h1 class="size-76 leading-08">as featured on</h1>
                    </div>
                    <div class="column fifth">
                        <div class="spacer height-40"></div>
                    </div>
                    <div class="column fifth"><img src="assets/quickstart/images/onesight.png" alt=""></div>
                    <div class="column fifth"><img src="assets/quickstart/images/mmedia.png" alt=""></div>
                    <div class="column fifth"><img src="assets/quickstart/images/digitalmag.png" alt=""></div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},

		{
		    'thumbnail': 'preview/asfeaturedon-02.png',
		    'category': '13',
		    'contentCss': 'type-alegreyasanssc-hind.css',
		    'contentClass': 'type-alegreyasanssc-hind',
		    'html': `
			<div class="is-section is-section-100 box-space type-alegreyasanssc-hind">
    <div class="is-boxes">
        <div class="is-box is-content-top is-box-5 box-autofit min-height-50">
            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                <div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_GHIBZPY4FS-7.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-1000">
                        <div class="row">
                            <div class="column full">
                                <h1 class="text-center">As featured on</h1>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-120"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column fourth"><img src="assets/quickstart/images/upclick.png" alt=""></div>
                            <div class="column fourth"><img src="assets/quickstart/images/digitalmag.png" alt=""></div>
                            <div class="column fourth"><img src="assets/quickstart/images/mmedia.png" alt=""></div>
                            <div class="column fourth"><img src="assets/quickstart/images/bbuzz.png" alt=""></div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column fourth"><img src="assets/quickstart/images/prosource.png" alt=""></div>
                            <div class="column fourth"><img src="assets/quickstart/images/light-studio.png" alt=""></div>
                            <div class="column fourth"><img src="assets/quickstart/images/nett.png" alt=""></div>
                            <div class="column fourth"><img src="assets/quickstart/images/worldwide.png" alt=""></div>

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
		    'thumbnail': 'preview/simple-asfeaturedon-03.png',
		    'category': '13',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 size-16 leading-13 is-content-1420">
                <div class="row">
                    <div class="column full">
                        <h1 class="text-center leading-none font-light size-76">As Featured On</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/upclick.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/digitalmag.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/mmedia.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/bbuzz.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/prosource.png" alt=""></div>

                </div>
                <div class="row">
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/mmedia.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/prosource.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/bbuzz.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/digitalmag.png" alt=""></div>
                    <div class="flex flex-col justify-center items-center column fifth"><img src="assets/quickstart/images/upclick.png" alt=""></div>

                </div>
            </div>
        </div>
    </div>
</div>
`
		},

		/* 404 */

		{
		    'thumbnail': 'preview/simple-404-01.png',
		    'category': '14',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container size-16 leading-13 v2 is-content-600">
						<div class="row">
							<div class="column full center">
								<h1 class="size-196 leading-none" style="letter-spacing: 12px; margin-bottom: 10px">404</h1>
								<h3 class="size-32" style="letter-spacing: 8px;">PAGE NOT FOUND</h3>
								<div class="spacer height-20"></div>
								<p style="color: rgb(109, 109, 109);">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
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
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 size-14 px-8 border-current rounded text-black hover:border-current font-normal ml-1 leading-relaxed" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Back to Home</a>
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
		    'thumbnail': 'preview/404-02.png',
		    'category': '14',
		    'contentCss': 'type-pathwaygothicone-merriweather.css',
		    'contentClass': 'type-pathwaygothicone-merriweather',
		    'html': `
			<div class="is-section is-box is-section-100 type-pathwaygothicone-merriweather">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-17 leading-13 is-content-1700">
                <div class="row">
                    <div style="width: 100%;" class="column half">
                        <h1 class="uppercase leading-11 size-220">Page Not</h1>
                    </div>
                    <div style="width: 46.4524%; flex: 0 0 auto;" class="column half">
                        <h1 class="text-right uppercase leading-11 size-220">Found</h1>
                    </div>

                </div>
                <div class="row">
                    <div class="column fourth">
                        <p>Something's wrong here..</p>
                    </div>
                    <div class="column fourth">
                        <p>The page you requested couldn't be found. This could be a spelling error in the URL or a removed page.</p>
                    </div>
                    <div class="column fourth">
                        <div class="spacer height-20"></div>
                    </div>
                    <div class="column fourth">
                        <p class="font-semibold text-center"><a href="#" title="" class="no-underline">Back to Home</a></p>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-20"></div>
                    </div>

                </div>
                <div class="row sm-autofit">
                    <div class="column third flex flex-col justify-end items-start" style="width: 24.7239%; flex: 0 0 auto;"><img src="assets/quickstart/images/StockSnap_568E3E34AE-sm.jpg" alt="" data-filename="StockSnap_568E3E34AE-sm.jpg"></div>
                    <div class="column third sm-hidden" style="width: 52.456%; flex: 0 0 auto;">
                        <div class="spacer height-40"></div>
                    </div>
                    <div style="width: 100%;" class="column third"><img src="assets/quickstart/images/gaelle-marcel-QW9TnaUqGM0-unsplash-editOPbJHFj.jpg" alt="" data-filename="gaelle-marcel-QW9TnaUqGM0-unsplash-editOPbJHFj.jpg"></div>

                </div>
            </div>
        </div>
    </div>
</div>
			`
		},
		
		{
		    'thumbnail': 'preview/404-01.png',
		    'category': '14',
		    'contentCss': 'type-nothingyouc-ibmplexmono.css',
		    'contentClass': 'type-nothingyouc-ibmplexmono',
		    'html': `
			<div class="is-section is-section-100 is-box type-nothingyouc-ibmplexmono is-dark-text">
				<div class="is-overlay">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/hand-plant-flower-pxhere.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-4"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-18 leading-14 is-content-1100">
							<div class="row">
								<div class="column full center">
									<h1 class="size-400 leading-none">404</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full center">
									<p>We are sorry, the page you are looking for could not be found. This could be a spelling error in the URL or a removed page.</p>
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
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 size-16 text-black tracking-75 font-normal uppercase px-11 py-3 leading-relaxed rounded-none ml-0 border-transparent hover:border-transparent mb-0 mt-2" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" data-bg="rgb(255,255,255)" style="background-color: rgb(255, 255, 255);" title="">Contact Us</a>
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid size-16 tracking-75 font-normal uppercase px-11 border-current hover:border-current py-3 leading-relaxed rounded-none mr-1 ml-0 mt-2 mb-2" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''" style="color: rgb(0, 0, 0);" title="">Back to Home</a>
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
		    'thumbnail': 'preview/simple-404-02.png',
		    'category': '14',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container is-content-800 size-16 leading-13 v2">
						<div class="row">
							<div class="column full center">
								<i class="icon ion-alert-circled size-64"></i>
								<h1 class="size-48 is-title2-48 is-title-lite">Oops, page not found.</h1>
								<div class="spacer height-20"></div>
								<p style="color: rgb(109, 109, 109);">The page you are looking for might have been removed, had its name changed, or temporarily unavailable.</p>
								<div class="spacer height-20"></div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="text-center button-group">
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 size-14 px-8 border-current rounded text-black hover:border-current font-normal ml-1 leading-relaxed" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">HomePage</a>
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
		    'thumbnail': 'preview/simple-404-03.png',
		    'category': '14',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 leading-13 text-left is-content-600">
							<div class="row">
								<div class="column full">
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="text-center">
										<i class="icon ion-android-sad size-64"></i>
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
									<h1 class="is-title1-48 is-title-lite leading-none font-light text-center size-48">Page Not Found</h1>
									<div class="spacer height-20"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="size-19 text-center" style="color: rgb(109, 109, 109);">The page you requested couldn't be found. This could be a spelling error in the URL or a removed page.</p>
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
										<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 py-2 border-current text-black hover:border-current font-normal ml-1 leading-relaxed rounded-full px-11 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Back to Home</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		/* COMING SOON */

		{
		    'thumbnail': 'preview/simple-comingsoon-01.png',
		    'category': '15',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text type-poppins is-align-center">
			<div class="is-overlay">
			</div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-16 leading-13 is-content-1000" style="transition: all 0.3s ease-out 0s;">
						<div class="row">
							<div class="column full">
								<div class="text-center leading-18">
									<i class="icon ion-alert-circled size-64"></i>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<h1 class="leading-12 size-54 font-light">Sorry, our website is currently getting a face lift. Check back soon for the new awesome and improved site.</h1>
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
									<a href="#" role="button" class="transition-all inline-block cursor-pointer no-underline border-2 border-solid mr-1 mt-2 mb-2 tracking-75 uppercase py-2 border-current text-black hover:border-current font-normal ml-1 leading-relaxed rounded-full px-11 size-13" onmouseover="if(this.getAttribute('data-hover-bg'))this.style.backgroundColor=this.getAttribute('data-hover-bg');" onmouseout="if(this.getAttribute('data-bg'))this.style.backgroundColor=this.getAttribute('data-bg');else this.style.backgroundColor=''">Contact</a>
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
			'thumbnail': 'preview/comingsoon-02.png',
			'category': '15',
			'contentCss': 'type-montserrat-roboto.css',
			'contentClass': 'type-montserrat-roboto',
			'html': `
			<div class="is-section is-box is-section-100 is-light-text type-montserrat-roboto">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/pexels-karolina-grabowska-5908757.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 is-content-left is-content-600 edge-x-1" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<h1 class="leading-12 size-54">Sorry, our website is currently getting a face lift. Check back soon for the new awesome and improved site.</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
			`
		},

		{
		    'thumbnail': 'preview/comingsoon-01.png',
		    'category': '15',
		    'contentCss': 'type-fjallaone-ibmplexserif.css',
		    'contentClass': 'type-fjallaone-ibmplexserif',
		    'html': `
			<div class="is-section is-box is-section-100 is-dark-text type-fjallaone-ibmplexserif is-content-bottom">
				<div class="is-overlay" style="background-color: rgb(225, 225, 225);">
					<div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/white-computer-keyboard-pxhere.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)">
						<div class="is-overlay-color opacity-4"></div>
					</div>
				</div>
				<div class="is-boxes">
					<div class="is-box-centered is-content-bottom edge-y-2">
						<div class="is-container v2 is-content-1400 size-17 leading-14 edge-x-0" style="transition: all 0.3s ease-out 0s;">
							<div class="row">
								<div class="column full">
									<h1 class="uppercase text-left size-284 leading-09">Coming</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h1 class="uppercase text-right size-284 leading-09">Soon.</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-120"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<p>Check back soon for the new and improved site.</p>
								</div>
								<div class="column half">
									<div class="is-social text-center">
										<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
										<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
										<a href="https://www.instagram.com/" title=""><i class="icon ion-social-instagram-outline"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		/* FAQ */

		{
		    'thumbnail': 'preview/faq-02.png',
		    'category': '16',
		    'contentCss': 'type-quicksand-kalam.css',
		    'contentClass': 'type-quicksand-kalam',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-quicksand-kalam box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-18 leading-14 is-content-1220">
							<div class="row">
								<div class="column full">
									<h1 class="size-76 leading-16">FAQs</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-100"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="size-24">How do I create an account?</h3>
									<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block;"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column half">
									<h3 class="size-24">How do I cancel or change my order?</h3>
									<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block;"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-60"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="size-24">How do I close my account?</h3>
									<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block;"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
								<div class="column half">
									<h3 class="size-24">How do I contact customer support?</h3>
									<p style="border-bottom: 2px solid #000; width: 40px; display: inline-block;"></p>
									<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
		    'thumbnail': 'preview/faq-03.png',
		    'category': '16',
		    'contentCss': 'type-oranienbaum-sourcesanspro.css',
		    'contentClass': 'type-oranienbaum-sourcesanspro',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-oranienbaum-sourcesanspro box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-18 leading-13 is-content-900">
							<div class="row">
								<div class="column full">
									<h1 class="size-76 text-center">FAQs</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full center">
									<div class="spacer height-100"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h3 class="tracking-wide size-32">How do I sign up?</h3>
									<div class="spacer height-20"></div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<h3 class="tracking-wide size-32">How do I cancel or change my order?</h3>
									<div class="spacer height-20"></div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
			
							<div class="row">
								<div class="column full">
									<h3 class="size-32 tracking-wide">How do I contact customer support?</h3>
									<div class="spacer height-20"></div>
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
		    'thumbnail': 'preview/faq-04.png',
		    'category': '16',
		    'contentCss': 'type-poppins-lekton.css',
		    'contentClass': 'type-poppins-lekton',
		    'html': `
			<div class="is-section is-section-100 type-poppins-lekton">
				<div class="is-boxes">
					<div class="is-box is-light-text is-box-5 is-content-top box-autofit min-height-40">
						<div class="is-overlay" style="background-color: rgb(247, 247, 247);">
							<div class="is-overlay-bg" style="background-image: url(&quot;assets/quickstart/images/StockSnap_RB5L88OP5Y-2.jpg&quot;);" data-bottom-top="transform:translateY(-70px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.1)"></div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-top edge-y-3">
								<div class="is-container v2 is-content-600 is-content-left edge-x-0-5">
									<div class="row">
										<div class="column full">
											<h1 class="leading-none size-88">Frequently Asked Questions.</h1>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-7 is-content-bottom box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-3">
								<div class="is-container v2 is-content-980 size-18 leading-12">
									<div class="row">
										<div class="column third">
											<h3 class="size-24 tracking-wide">How do I sign up?</h3>
											<div class="spacer height-20"></div>
											<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
											<p style="border-bottom: 3px solid #e67e22; width: 45px; display: inline-block;"></p>
										</div>
										<div class="column third">
											<h3 class="size-24 tracking-wide">What's account limits?</h3>
											<div class="spacer height-20"></div>
											<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
											<p style="border-bottom: 3px solid #e67e22; width: 45px; display: inline-block;"></p>
										</div>
										<div class="column third">
											<h3 class="size-24 tracking-wide">How do I cancel my order?</h3>
											<div class="spacer height-20"></div>
											<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
											<p style="border-bottom: 3px solid #e67e22; width: 45px; display: inline-block;"></p>
										</div>

									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-60"></div>
										</div>

									</div>
									<div class="row">
										<div class="column third">
											<h3 class="size-24 tracking-wide">How do I reset my password?</h3>
											<div class="spacer height-20"></div>
											<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
											<p style="border-bottom: 3px solid #e67e22; width: 45px; display: inline-block;"></p>
										</div>
										<div class="column third">
											<h3 class="size-24 tracking-wide">How do I report a bug?</h3>
											<div class="spacer height-20"></div>
											<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
											<p style="border-bottom: 3px solid #e67e22; width: 45px; display: inline-block;"></p>
										</div>
										<div class="column third">
											<h3 class="size-24 tracking-wide">How do I close my account?</h3>
											<div class="spacer height-20"></div>
											<p>Lorem Ipsum is dummy text of the printing and typesetting industry.</p>
											<p style="border-bottom: 3px solid #e67e22; width: 45px; display: inline-block;"></p>
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
		    'thumbnail': 'preview/faq-05.png',
		    'category': '16',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-alegreya-lato box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-12 is-content-1100">
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-none size-108">FAQ</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-100"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="uppercase size-24">How do I sign up?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half">
									<h3 class="uppercase size-24">What's account limit?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="uppercase size-24">How do I change my password?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half">
									<h3 class="uppercase size-24">How do I update my settings?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="uppercase size-24">How do I report an issue?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half">
									<h3 class="uppercase size-24">How do I change/cancel my order?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		},

		{
		    'thumbnail': 'preview/faq-06.png',
		    'category': '16',
		    'contentCss': 'type-alegreya-lato.css',
		    'contentClass': 'type-alegreya-lato',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-alegreya-lato box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-12 is-content-1140">
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-none size-96">FAQ</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-100"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<h3 class="uppercase size-24">How do I create an account?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<h3 class="uppercase size-24">How do I update my settings?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<h3 class="uppercase size-24">How do I change my password?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third">
									<h3 class="uppercase size-24">How do I change/cancel my order?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<h3 class="uppercase size-24">How do I close my account?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column third">
									<h3 class="uppercase size-24">How do I contact customer service?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
		    'thumbnail': 'preview/simple-faq-03.png',
		    'category': '16',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-17 leading-14 is-content-1200">
							<div class="row">
								<div class="column full">
									<h1 class="text-center">FAQs</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-120"></div>
								</div>
							</div>
							<div class="row">
								<div class="column third"><i class="icon ion-ios-people-outline size-54"></i>
									<h3 class="leading-16 font-light size-24 tracking-wide">How do I sign up?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
									<div class="spacer height-20"></div>
									<p class="size-15 tracking-wider"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
								</div>
								<div class="column third"><i class="icon ion-ios-bell-outline size-54"></i>
									<h3 class="leading-16 font-light size-24 tracking-wide">What is account limits?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
									<div class="spacer height-20"></div>
									<p class="size-15 tracking-wider"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
								</div>
								<div class="column third"><i class="icon ion-ios-refresh-empty size-54"></i>
									<h3 class="font-light size-24 tracking-wide">How do I cancel my order?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
									<div class="spacer height-20"></div>
									<p class="size-15 tracking-wider"><a href="#" title="" class="no-underline">Read More</a>&nbsp;<i class="icon ion-android-arrow-forward size-15"></i></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},

		{
		    'thumbnail': 'preview/simple-faq-01.png',
		    'category': '16',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-16 leading-13 is-content-1160">
						<div class="row">
							<div class="column full">
								<h1 class="font-light size-54">FAQs</h1>
							</div>
						</div>
						<div class="row">
							<div class="column full center">
								<div class="spacer height-60"></div>
							</div>
						</div>
						<div class="row">
							<div class="column half pr-9">
								<i class="icon ion-ios-compose-outline size-48"></i>
								<h3 class="size-24 leading-16 font-light">How do I sign up?</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type.</p>
							</div>
							<div class="column half pr-9">
								<i class="icon ion-ios-close-outline size-48"></i>
								<h3 class="size-24 leading-16 font-light">How do I cancel my order?</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
							</div>
						</div>
						<div class="row">
							<div class="column full">
								<div class="spacer height-40"></div>
							</div>
						</div>
						<div class="row">
							<div class="column half pr-9">
								<i class="icon ion-ios-color-filter-outline size-48"></i>
								<h3 class="size-24 leading-16 font-light">What is account limits?</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
							</div>
							<div class="column half pr-9">
								<i class="icon ion-ios-chatboxes-outline size-48"></i>
								<h3 class="size-24 leading-16 font-light">How do I contact customer support?</h3>
								<p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-faq-02.png',
		    'category': '16',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container v2 size-16 leading-13 is-content-1200">
							<div class="row">
								<div class="column full">
									<h1 class="text-center leading-none size-48">FAQ</h1>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-80"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="size-24 font-semibold normal-case">How do I sign up?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half">
									<h3 class="size-24">What's account limit?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="size-24">How do I change my password?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half">
									<h3 class="size-24">How do I update my settings?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column half">
									<h3 class="size-24">How do I report an issue?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
								<div class="column half">
									<h3 class="size-24">How do I change/cancel my order?</h3>
									<p style="color: rgb(167, 167, 167);">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
								</div>
							</div>
			
			
						</div>
					</div>
				</div>
			</div>
`
		},

		/* CONTACT */

		{
		    'thumbnail': 'preview/simple-contact-04.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
    <div class="is-boxes">
        <div class="is-box is-box-5 box-autofit">
            <div class="is-overlay">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-440 size-16 leading-13">
                        <div class="row">
                            <div style="min-height: 143.892px;" class="column full">
                                <p class="uppercase size-12 tracking-125 text-center" style="color: rgb(145, 145, 145);">Your Company Name</p>
                                <h1 class="leading-none size-46 text-center font-light">Get In Touch</h1>
                                <div class="spacer height-20"></div>

                                <p style="color: rgb(109, 109, 109);" class="text-center">12345 Street Name, City. State 12345
                                    <br>P: (123) 456 7890 / 456 7891.
                                </p>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div style="min-height: 54px; width: 100%; flex: 0 0 auto;" class="column full">
                                <p style="color: rgb(72, 72, 72);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full" style="min-height: 54px;">
                                <div class="is-social text-center">
                                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-opacity-90">
                    <div class="is-container v2 size-16 leading-13 is-content-800 content-pt-0">
                        <div class="row">
                            <div class="column full"><img src="assets/quickstart/images/pexels-jeffrey-czum-2501968-edittskgiTF.jpeg" alt=""></div>

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
		    'thumbnail': 'preview/simple-contact-02.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
    <div class="is-boxes">
        <div class="is-box is-box-5 box-autofit">
            <div class="is-overlay">
            </div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container v2 is-content-440 size-16 leading-13">
                        <div class="row">
                            <div style="min-height: 143.892px; width: 88.2671%; flex: 0 0 auto;" class="column half">
                                <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(145, 145, 145);">Your Company Name</p>
                                <h1 class="leading-none text-left font-semibold size-46">Get In Touch</h1>
                                <div class="spacer height-20"></div>
                                <p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
                                    <br>P: (123) 456 7890 / 456 7891.
                                </p>
                            </div>
                            <div style="width: 100%;" class="column half">
                                <div class="spacer height-80"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div style="min-height: 54px; width: 100%; flex: 0 0 auto;" class="column full">
                                <p style="color: rgb(72, 72, 72);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
                                <div class="spacer height-20"></div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="column full" style="min-height: 54px;">
                                <div class="is-social text-left">
                                    <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                                    <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                                    <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 box-autofit">
            <div class="is-overlay"></div>
            <div class="is-boxes">
                <div class="is-box-centered is-opacity-90">
                    <div class="is-container v2 size-16 leading-13 is-content-900">
                        <div class="row">
                            <div class="column full" style="filter: grayscale(1);">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
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
		    'thumbnail': 'preview/contact-01.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 box-space box-space-sm type-poppins">
				<div class="is-boxes">
					<div class="is-box-6 is-box is-light-text is-content-bottom box-autofit min-height-50">
						<div class="is-overlay">
							<div class="is-overlay-content content-selectable" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="${encodeURIComponent(`
							<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
							`)}">
								<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
							</div>
						</div>
						<div class="is-boxes">
							<div class="is-box-centered is-content-bottom edge-y-1">
								<div class="is-container v2 is-content-380 is-content-left edge-x-0-5">
									<div class="row">
										<div class="column full">
											<p class="size-16">
												<strong>Your Company Name</strong><br>
												12345 Street Name, City.
												State 12345<br>
												P: (123) 456 7890 / 456 7891.
											</p>
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
								<div class="is-container v2 is-content-440 leading-18 size-16">
									<div class="row">
										<div class="column full">
											<h2 class="size-28">FIND US HERE</h2>
											<div class="spacer height-40"></div>
											<p>
												<strong>Your Company Name</strong><br>
												12345 Street Name, City.
												State 12345<br>
												P: (123) 456 7890 / 456 7891.
											</p>
											<div class="is-social size-21">
												<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
												<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
												<a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline" style="margin-right: 1em"></i></a>
												<a href="https://pinterest.com/"><i class="icon ion-android-drafts"></i></a>
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
		    'thumbnail': 'preview/simple-contact-03.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins">
			<div class="is-overlay">
				<div class="is-overlay-content content-selectable" data-module="code" data-module-desc="Custom HTML or Javascript" data-html="${encodeURIComponent(`
				<iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
				`)}"><iframe style="filter: grayscale(1);" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe></div>
			</div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 size-16 leading-13 is-content-left edge-x-1 is-content-500" style="transition: all 0.3s ease-out 0s;" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">
						<div class="row">
							<div class="column full px-10 py-7" style="background-color: rgba(255, 255, 255, 0.92);">
								<p class="uppercase size-12 tracking-125 text-left" style="color: rgb(145, 145, 145);">Contact Us</p>
								<h1 class="leading-none text-left font-semibold size-46">Your Company</h1>
								<div class="spacer height-20"></div>

								<p style="color: rgb(109, 109, 109);" class="text-left">12345 Street Name, City. State 12345
									<br>P: (123) 456 7890 / 456 7891.
								</p>
								<div class="spacer height-20"></div>
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								<div class="spacer height-20"></div>
								<div class="is-social text-left">
									<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
									<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
									<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
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
		    'thumbnail': 'preview/simple-contact-01.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 is-box is-dark-text type-poppins box-autofit">
    <div class="is-overlay"></div>
    <div class="is-boxes">
        <div class="is-box-centered">
            <div class="is-container v2 size-16 leading-13 is-content-1000">
                <div class="row">
                    <div style="min-height: 143.892px; width: 46.8539%; flex: 0 0 auto;" class="column half">
                        <p class="uppercase size-12 tracking-125 text-left" style="color: rgb(145, 145, 145);">Get In ToucH</p>
                        <h1 class="leading-none text-left size-42 font-semibold">Your Company Name</h1>
                        <div class="spacer height-20"></div>

                        <p style="color: rgb(109, 109, 109);">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div class="is-social text-left">
                            <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                            <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                            <a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
                        </div>
                    </div>
                    <div style="width: 100%;" class="column half">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div class="column full">
                        <div class="spacer height-80"></div>
                    </div>

                </div>
                <div class="row">
                    <div style="min-height: 54px;" class="column half">
                        <div class="text-left">
                            <i class="icon ion-ios-alarm-outline size-48"></i>
                        </div>
                        <h3 class="font-light">Opening Time</h3>
                        <p style="color: rgb(72, 72, 72);">Monday – Friday: 9 AM – 4.30 PM. Saturday: 8 AM – 2 PM<br></p>
                        <div class="spacer height-20"></div>
                    </div>
                    <div style="min-height: 54px;" class="column half">
                        <div class="text-left">
                            <i class="icon ion-ios-home-outline size-48"></i>
                        </div>
                        <h3 class="font-light">Find Us Here</h3>
                        <p style="color: rgb(72, 72, 72);">123 Street Name, City. State 12345. Phone: (123) 456 7890<br></p>
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
		    'thumbnail': 'preview/contact-04.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-section-100 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered is-opacity-95">
						<div class="is-container v2 is-content-700 leading-14 size-18">
			
							<div class="row">
								<div class="column full" style="min-height: 54px;">
									<h3 class="font-light text-center size-42">Send Us a Message</h3>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full" data-noedit="" data-html="${encodeURIComponent(`
									<form class="form{id} mt-6 space-y-6 px-1" method="POST" action="">
										<div>
											<label for="name{id}">Name:</label>
											<div class="mt-1">
												<input class="w-full px-2 py-3 text-base border rounded" type="text" id="name{id}" name="name" required="">
											</div>
										</div>
										<div>
											<label for="email{id}">Email:</label>
											<div class="mt-1">
												<input class="w-full px-2 py-3 text-base border rounded" type="email" id="email{id}" name="email" required="">
											</div>
										</div>
										<div>
											<label for="message{id}">Message:</label>
											<div class="mt-1">
												<textarea class="w-full px-2 py-3 text-base border rounded" rows="6" id="message{id}" name="message" required=""></textarea>
											</div>
										</div>
										<div class="flex justify-center">
											<button class="w-full flex justify-center items-center transition-all cursor-pointer border-2 border-solid border-transparent hover:border-transparent rounded bg-gray-200 hover:bg-gray-300 py-3 size-17 px-8 font-semibold text-gray-600 leading-relaxed" type="submit">Send</button>
										</div>
									</form>
									`)}">
									
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
		    'thumbnail': 'preview/contact-05.png',
		    'category': '17',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-section-100 type-poppins">
				<div class="is-boxes">
					<div class="is-box is-box-5 box-autofit">
						<div class="is-overlay">
						</div>
						<div class="is-boxes">
							<div class="is-box-centered">
								<div class="is-container v2 size-16 leading-13 is-content-440">
									<div class="row">
										<div style="min-height: 143.892px;" class="column full">
											<p class="uppercase size-12 tracking-125 text-center" style="color: rgb(145, 145, 145);">Your Company Name</p>
											<h1 class="leading-none size-46 text-center font-light">Get In Touch</h1>
											<div class="spacer height-20"></div>
			
											<p style="color: rgb(109, 109, 109);" class="text-center">12345 Street Name, City. State 12345
												<br>P: (123) 456 7890 / 456 7891.
											</p>
										</div>
									</div>
									<div class="row">
										<div class="column full">
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div style="min-height: 54px; width: 100%; flex: 0 0 auto;" class="column full">
											<p style="color: rgb(72, 72, 72);" class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.&nbsp;<br></p>
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<div class="is-social text-center">
												<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
												<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
												<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="is-box is-dark-text is-box-7 box-autofit">
						<div class="is-overlay"></div>
						<div class="is-boxes">
							<div class="is-box-centered is-opacity-90">
								<div class="is-container v2 size-16 leading-13 is-content-700">
									<div class="row">
										<div class="column full" style="min-height: 54px;">
											<h3 class="font-light text-center">Send us a message</h3>
											<div class="spacer height-20"></div>
										</div>
									</div>
									<div class="row">
										<div data-noedit="" data-html="${encodeURIComponent(`
										<form class="form{id} mt-6 space-y-6 px-1" method="POST" action="">
											<div>
												<label for="name{id}">Name:</label>
												<div class="mt-1">
													<input class="w-full px-2 py-3 text-base border rounded" type="text" id="name{id}" name="name" required="">
												</div>
											</div>
											<div>
												<label for="email{id}">Email:</label>
												<div class="mt-1">
													<input class="w-full px-2 py-3 text-base border rounded" type="email" id="email{id}" name="email" required="">
												</div>
											</div>
											<div>
												<label for="message{id}">Message:</label>
												<div class="mt-1">
													<textarea class="w-full px-2 py-3 text-base border rounded" rows="6" id="message{id}" name="message" required=""></textarea>
												</div>
											</div>
											<div class="flex justify-center">
												<button class="w-full flex justify-center items-center transition-all cursor-pointer border-2 border-solid border-transparent hover:border-transparent rounded bg-gray-200 hover:bg-gray-300 py-3 size-17 px-8 font-semibold text-gray-600 leading-relaxed" type="submit">Send</button>
											</div>
										</form>
										`)}" class="column full">
											
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

		/* FOOTER */
		
		{
		    'thumbnail': 'preview/simple-footer-01.png',
		    'category': '18',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-static is-section-50 type-poppin box-autofit">
			<div class="is-overlay"></div>
			<div class="is-boxes">
				<div class="is-box-centered">
					<div class="is-container v2 is-content-1100 size-16 leading-13">
						<div class="row">
							<div class="column full center">
								<h1 class="size-32 is-title1-32 is-title-lite">COMPANY NAME</h1>
								<p>
									12345 Street Name, City. State 12345<br>
									P: (123) 456 7890 / 456 7891
								</p>
							</div>
						</div>
						<div class="row">
							<div class="column full center">
								<div class="is-social size-21" style="margin: 20px 0">
									<a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 2em"></i></a>
									<a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 2em"></i></a>
									<a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline" style="margin-right: 2em"></i></a>
									<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="column full center">
								<p class="size-14">© Copyright 2021 Company Name</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-footer-02.png',
		    'category': '18',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-static is-section-50 type-poppins box-autofit">
				<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1100 v2 size-16 leading-13">
							<div class="row">
								<div class="column full">
									<h1 class="size-24 is-title1-24 is-title-lite" style="line-height: 50px;">COMPANY NAME</h1>
								</div>

							</div>
							<div class="row">
								<div class="column third py-3">
									<p><a href="#">Home</a></p>
									<p><a href="#">Services</a></p>
									<p><a href="#">About</a></p>
									<p><a href="#">Contact</a></p>
								</div>
								<div class="column third py-3">
									<p>
										ADDRESS:<br>
										12345 Street Name, City<br>
										State 12345<br>
										P: (123) 456 7890 / 456 7891
									</p>
								</div>
								<div class="column third py-3">
									<p>GET IN TOUCH:</p>
									<div class="is-social">
										<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
										<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
										<a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
										<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
									</div>
								</div>

							</div>
							<div class="row">
								<div class="column full py-4">
									<p class="size-14 text-center">© Copyright 2021 Company Name</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-footer-03.png',
		    'category': '18',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-static is-section-50 type-poppins box-autofit">
				<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1200 v2 size-16 leading-13">
							<div class="row">
								<div class="column third">
									<h3 class="size-18 is-title-lite">COMPANY NAME</h3>
									<p style="border-bottom: 2px solid #e67e22; width: 40px; display: inline-block; margin-top: 0"></p>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
								<div class="column third">
									<h3 class="size-18 is-title-lite">ADDRESS</h3>
									<p style="border-bottom: 2px solid #e67e22; width: 40px; display: inline-block; margin-top: 0"></p>
									<p>
										12345 Street Name, City. State 12345<br>
										P: (123) 456 7890 / 456 7891
									</p>
								</div>
								<div class="column third">
									<h3 class="size-18 is-title-lite">FOLLOW US</h3>
									<p style="border-bottom: 2px solid #e67e22; width: 40px; display: inline-block; margin-top: 0"></p>
									<div class="is-social" style="margin: 25px 0">
										<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
										<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
										<a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
										<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full text-left">
									<p class="size-14 text-center">© Copyright 2023 Company Name</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-footer-04.png',
		    'category': '18',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-static is-section-50 type-poppins box-autofit">
				<div class="is-overlay"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1200 v2 size-16 leading-13">
							<div class="row">
								<div class="column third center">
									<i class="icon ion-ios-book-outline size-32" style="color: rgb(136, 136, 136);"></i>
									<p>Company Name. 123 Street, City. State 123</p>
								</div>
								<div class="column third center">
									<i class="icon ion-ios-telephone-outline size-32" style="color: rgb(136, 136, 136);"></i>
									<p>(123) 456 7890 / 456 7891</p>
								</div>
								<div class="column third center">
									<i class="icon ion-ios-email-outline size-32" style="color: rgb(136, 136, 136);"></i>
									<p><a href="mailto:#" style="color: #333" title="">companyname@example.com</a></p>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<div class="spacer height-40"></div>
								</div>
							</div>
							<div class="row">
								<div class="column full">
									<p class="size-14 text-center">© Copyright 2023 Company Name</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
`
		},
		
		{
		    'thumbnail': 'preview/simple-footer-05.png',
		    'category': '18',
		    'contentCss': 'type-poppins.css',
		    'contentClass': 'type-poppins',
		    'html': `
			<div class="is-section is-box is-dark-text is-static is-section-20 type-poppins box-autofit">
				<div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
				<div class="is-boxes">
					<div class="is-box-centered">
						<div class="is-container is-content-1200 v2 size-16 leading-13">
							<div class="row">
								<div class="column third center flex justify-center flex-col items-center">
									<h1 class="size-21 tracking-wider">COMPANY NAME</h1>
								</div>
								<div class="column third center flex justify-center flex-col items-center">
									<p style="line-height: 42px;">© Copyright 2023 Company Name</p>
								</div>
								<div class="column third center flex justify-center flex-col items-center">
									<div class="is-social" style="margin: 25px 0">
										<a href="https://twitter.com/"><i class="icon ion-social-twitter"></i></a>
										<a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
										<a href="https://www.instagram.com/"><i class="icon ion-social-instagram-outline"></i></a>
										<a href="mailto:you@example.com"><i class="icon ion-android-drafts"></i></a>
									</div>
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