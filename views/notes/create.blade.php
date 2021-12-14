@extends('layout.app')
@section('title', 'Add Notes')
@section('content')
        @css('/assets/plugins/ckeditor/sample/styles')
	</head>
	<body data-editor="ClassicEditor" data-collaboration="false" data-revision-history="false">
        <div class="content-body"><br>
            <main>
                <div class="centered">
                    <div class="row row-editor">
                        <div class="editor-container">
                            <div class="editor">
                                <h2>Start Writting from Here</h2>
                            </div>
                        </div>
                    </div></div>
                </div>
            </main>
        </div>
		@js('/assets/plugins/ckeditor/build/ckeditor')
		<script>
			const watchdog = new CKSource.EditorWatchdog();
			
			window.watchdog = watchdog;
			
			watchdog.setCreator( ( element, config ) => {
				return CKSource.Editor
					.create( element, config )
					.then( editor => {			
						return editor;
					} )
			} );
			
			watchdog.setDestructor( editor => {
				return editor.destroy();
			} );
			
			watchdog.on( 'error', handleError );
			
			watchdog
				.create( document.querySelector( '.editor' ), {
					licenseKey: '',
				} )
				.catch( handleError );
			
			function handleError( error ) {
				console.error( 'Oops, something went wrong!' );
				console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
				console.warn( 'Build id: 4zvn0xi16yoz-cu051zyih9kj' );
				console.error( error );
			}
			
		</script>    
@endsection