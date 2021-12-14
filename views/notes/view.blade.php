@extends('layout.app')
@section('title', 'Create Document')

@section('header')
    
@endsection

@section('content')
    <div class="content-body">
        <div id="editor">
            <p>Here goes the initial content of the editor.</p>
        </div>
    </div>    
@endsection

@section('footer')
    @js('/assets/plugins/build/ckeditor.js')
@endsection