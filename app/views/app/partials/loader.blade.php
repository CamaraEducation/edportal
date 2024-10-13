<div class="d-grid h-100 align-items-center justify-content-center" style="min-height: 150px;">
    <div class="d-grid align-items-center justify-content-center">
        <div class="text-center empty-icon">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <h2>{{ $loadTitle ?? null }}</h2>
            <p class="text-small text-muted">{{ $loadText ?? __('please wait, loading content') }}</p>
        </div>
    </div>
</div>