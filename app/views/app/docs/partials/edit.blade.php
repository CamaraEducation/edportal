<form class="row" action="{{ route('docs.edit', $doc->id) }}" method="POST" onsubmit="submitForm(event)">
    @csrf

    <div class="col-md-12 form-group">
        <label for="name" class="form-label">{{ __('Name') }}</label>
        <input type="text" class="form-control" id="name" name="name" value="{{ $doc->name }}" required>
    </div>

    <div class="col-md-12 form-group">
        <label for="source" class="form-label">{{ __('Tags') }} <small class="text-muted">({{ __('max 5') }})</small></label>
        <select class="form-select" id="tags" name="tags[]" multiple required
            data-placeholder="{{ __('Select tags') }}"
            data-maximum-selection-length="5"
            data-allow-clear="true">
            @foreach($tags as $tag)
                <option value="{{ $tag->slug }}" @if(in_array($tag->slug, $documentTags)) selected @endif>{{ $tag->name }}</option>
            @endforeach
        </select>
    </div>

    <div class="col-md-12 form-group">
        <label for="description" class="form-label">{{ __('Description') }}</label>
        <textarea class="form-control" id="description" name="description" rows="3">{{ $doc->description }}</textarea>
    </div>

    <div class="col-md-12 text-center">
        <button type="submit" class="btn btn-primary w-100">{{ __('Save Document') }}</button>
    </div>

</form>

<script>
    $(document).ready(function() {
        $('#tags').select2();
    });
</script>