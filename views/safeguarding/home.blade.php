@extends('layout.app')
@section('title', 'Camara EdPortal')

@section('header')
    <link rel="stylesheet" href="/assets/plugins/quill/snow.css">
    <script src="/assets/plugins/pdfjs/thumbnails.js" data-pdfjs-src="/assets/plugins/pdfjs/pdf.js"></script>
@endsection

@section('content')		
        <div class="content-body">
			<div class="container-fluid">
                <div class="clearfix">
                    <div class="float-start">
                        <h3 class="text-primary">Safeguarding</h3>
                    </div>
                    @if (viewer() == 1)
                        <div class="float-end">
                            <a href="javascript:void(0)" class="btn btn-primary btn-small" data-bs-toggle="modal" data-bs-target="#safeguardingModal">
                                <i class="bi bi-plus"></i>
                                Add Content
                            </a>
                        </div>
                    @endif
                </div>

                <a href="javascript:void" class="col-12 p-1">
                    <div class="card bd-callout bd-callout-light">
                        <p class="text-bold">
                            "Safeguarding is the guardian angel of humanity, watching over the vulnerable and guiding us towards a world where safety is a birthright, not a privilege."
                        </p>
                    </div>
                </a>

                @php $contents = Safeguarding::index(); @endphp

                <div class="clearfix">
                    <h4 class="text-primary">Video</h4>
                </div>

                @if(count($contents['video']) > 0)

                    @foreach ($contents['video'] as $video)
                        <div class="col-2">
                                <div class="card viewContent cursor-pointer" style="height:100%"
                                    data-id = "{{$video->id}}"
                                    data-title = "{{$video->title}}"
                                    data-content = "/upload/safeguarding/docs/{{$video->content}}"
                                    data-created = "{{$video->created}}"
                                    data-updated = "{{$video->updated}}"
                                    data-type="doc"
                                >   <div class="card-body d-flex"> 
                                        <img src="/assets/icons/generic/video.png" class="align-self-center m-auto" width="64" alt="" srcset="">
                                    </div>
                                    <div class="card-footer ps-2">
                                        <p>{{substring($video->title, 25)}}</p>
                                    </div>
                                </div>
                            </div>
                    @endforeach
                
                @else
                    <a href="javascript:void" class="col-12 p-1">
                        <div class="card bd-callout bd-callout-danger">
                            <p class="text-bold">
                                No Video Content Found
                            </p>
                        </div>
                    </a>
                @endif

                <div class="clearfix">
                    <h4 class="text-primary">Document</h4>
                </div>

                @if(count($contents['doc']) > 0)
                    <div class="row mb-3">
                        @foreach ($contents['doc'] as $document)
                            <div class="col-2">
                                <div class="card viewContent cursor-pointer" style="height:100%"
                                    data-id = {{$document->id}}
                                    data-title = "{{$document->title}}"
                                    data-content = "/upload/safeguarding/docs/{{$document->content}}"
                                    data-created = "{{$document->created}}"
                                    data-updated = "{{$document->updated}}"
                                    data-type="doc"
                                >   <div class="card-body d-flex p-1"> 
                                        <img data-pdf-thumbnail-file="/upload/safeguarding/docs/{{$document->content}}" src="/assets/icons/generic/pdf.png" class="align-self-center m-auto" width="100%" alt="" srcset="">
                                    </div>
                                    <div class="card-footer ps-2">
                                        <p>{{substring($document->title, 25)}}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <a href="javascript:void" class="col-12 p-1">
                        <div class="card bd-callout bd-callout-danger">
                            <p class="text-bold">
                                No Document Content Found
                            </p>
                        </div>
                    </a>
                @endif

                <div class="clearfix">
                    <h4 class="text-primary">Writtings</h4>
                </div>

                @if(count($contents['text']) > 0)

                <div class="card">
                    <div class="card-body">
                        <table class="table table-hover">
                            <tbody>
                                @foreach ($contents['text'] as $text)
                                    <tr class="viewContent cursor-pointer"
                                        data-id = {{$text->id}}
                                        data-title = "{{$text->title}}"
                                        data-content = "/upload/safeguarding/text/{{$text->content}}"
                                        data-created = "{{$text->created}}"
                                        data-updated = "{{$text->updated}}"
                                        data-type = "text"
                                    >
                                        <td style="width: 96%" class="fw-bold">{{$text->title}}</td>
                                        <td>
                                            <a href="javascript:void(0)" class="">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        
                        </table>
                    </div>
                </div>
                @else

                    <a href="javascript:void" class="col-12 p-1">
                        <div class="card bd-callout bd-callout-danger">
                            <p class="text-bold">
                                No Written Content Found
                            </p>
                        </div>
                    </a>

                @endif

            </div>
		</div>

        <div class="modal fade" id="safeguardingModal" tabindex="-1" aria-labelledby="safeguardingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="safeguardingModalLabel">Add Safeguarding Content</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form name="addSafeguarding" action="post" enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-4 col-sm-12 mb-1">
                                    <label for="title">Title</label>
                                    <input type="text" name="title" id="title" class="form-control" placeholder="content title">
                                </div>
                                <div class="col-md-4 col-sm-12 mb-1">
                                    <label for="type">Type</label>
                                    <select name="type" id="type" class="form-control">
                                        <option value="" hidden>Select Content Type</option>
                                        <option value="1">Video</option>
                                        <option value="2">Document</option>
                                        <option value="3">Text</option>
                                    </select>
                                </div>

                                <div class="col-md-4 col-sm-12 mb-1">
                                    <label for="">Country</label>
                                    <select name="country" id="country" class="form-control">
                                        @if(viewer() == 1)
                                            <option value="" hidden>Select Country</option>
                                            <option value="tanzania">Tanzania</option>
                                            <option value="kenya">Kenya</option>
                                            <option value="zambia">Zambia</option>
                                            <option value="ethiopia">Ethiopia</option>
                                        @endif
                                    </select>
                                </div>

                                <div class="col-md-12 col-sm-12 mb-1 mt-3">
                                    <input type="file" name="content" id="fileContent" class="form-control" accept="video/*, application/pdf" hidden>

                                    <div class="textContent" hidden>
                                        <div id="editor" style="height: 15rem !important"></div>
                                    </div>

                                </div>

                                <div class="col-md-12 col-sm-12 mb-1 mt-3 text-center">
                                    <button type="submit" class="w-50 btn btn-primary">Add Content</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="contentViewCanvas" aria-labelledby="contentViewCanvasLabel" style="width: calc(100% - 80px);">
            <div class="offcanvas-header">
                <h5 id="contentViewCanvasLabel">Offcanvas right</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                ...
            </div>
        </div>
@endsection	

@section('footer')
    @js('/assets/vendor/flipper/pdf.combined.min.js')
	@js('/assets/vendor/flipper/wow_book.min.js')

    <script src="/assets/plugins/quill/quill.js"></script>
    <script>
        var quilOptions = {
            placeholder: 'Compose an epic...',
            theme: 'snow'
        }

        var quill = new Quill('#editor', quilOptions);

        // content type change
        $('#type').change(function(){
            var type = $(this).val();
            if(type == 3){
                $('#fileContent').attr('hidden', true);
                $('.textContent').removeAttr('hidden');
            }else{
                $('#fileContent').removeAttr('hidden');
                $('.textContent').attr('hidden', true);
            }
        });

        // form submit
        $('form[name="addSafeguarding"]').submit(function(e){
            e.preventDefault();

            var button = $(this).find('button[type="submit"]');
            buttonStatus(button);

            var title = $('#title').val();
            var type = $('#type').val();
            var country = $('#country').val();
            var textContent = $('#editor').text();
            var fileContent = $('#fileContent').val();
            
            // define content based on type
            var content = undefined;
            if(type == 3 && textContent != ''){
                content = quill.root.innerHTML;
            }else if(type != 3 && fileContent != ''){
                content = $('#fileContent')[0].files[0];
            }


            if(title == ''){
                swal('Error', 'Please enter content title', 'error');
                buttonStatus(button, 'reset');
                return false;
            }

            if(type == ''){
                swal('Error', 'Please select content type', 'error');
                buttonStatus(button, 'reset');
                return false;
            }

            if(country == ''){
                swal('Error', 'Please select country', 'error');
                buttonStatus(button, 'reset');
                return false;
            }

            if(content == undefined){
                swal('Error', 'Please select content file', 'error');
                buttonStatus(button, 'reset');
                return false;
            }

            var formData = new FormData();
            formData.append('title', title);
            formData.append('type', type);
            formData.append('country', country);
            formData.append('content', content);

            $.ajax({
                url: '/safeguarding/add',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(data){
                    if(data == 'success'){
                        swal('Success', 'Content added successfully', 'success');
                        setTimeout(function(){
                            location.reload();
                        }, 2000);
                    }else{
                        swal('Error', data, 'error');
                        buttonStatus(button, 'reset');
                    }
                },
                error: function(data){
                    swal('Error', 'Something went wrong', 'error');
                    buttonStatus(button, 'reset');
                },
            });
        });

        function buttonStatus(button, status='loading'){
            if(status == 'loading'){
                $(button).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
                $(button).attr('disabled', true);
            }else{
                $(button).html('Add Content');
                $(button).attr('disabled', false);
            }
        }

        // view content
        $('.viewContent').click(function(){
            var id = $(this).data('id');
            var title = $(this).data('title');
            var content = $(this).data('content');
            var created = $(this).data('created');
            var updated = $(this).data('updated');
            var type = $(this).data('type');

            // view the canvas
            $('#contentViewCanvas').offcanvas('show');

            // set the content
            $('#contentViewCanvas').find('.offcanvas-header').html(`
                <h5 id="contentViewCanvasLabel">`+title+`</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            `);


            if(type == 'text'){
                // sample path: /upload/safeguarding/text/1.txt
                $.get(content, function(data){
                    $('#contentViewCanvas').find('.offcanvas-body').html(data);
                });
            }else if(type == 'doc'){
                $('#contentViewCanvas').find('.offcanvas-body').html('<iframe src="'+content+'" frameborder="0" width="100%" height="100%"></iframe>');
            }else if(type == 'video'){
                $('#contentViewCanvas').find('.offcanvas-body').html('<video src="'+content+'" controls width="100%" height="100%"></video>');
            }
        });

    </script>
@endsection
