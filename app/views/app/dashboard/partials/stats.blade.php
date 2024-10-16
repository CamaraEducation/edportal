<div class="row">
    @foreach ($contentStats as $index => $stat)
        <div class="col-md-3 col-sm-6 col-12">
            <div class="card h-100 border-0 shadow-sm p-1">
                <div class="card-body position-relative py-0">
                    <div class="position-relative" style="font-size: 5rem; opacity: 0.3;">
                        <i class="ph-duotone {{ $stat['icon'] }} opacity-50" ></i>
                    </div>
                    <div class="position-absolute bottom-10">
                        <h1 class="text-primary">{{ $stat['total'] }}</h1>
                        <p class="text-muted">{{ $index }}</p>
                    </div>
                </div>
            </div>
        </div> 
    @endforeach
</div>