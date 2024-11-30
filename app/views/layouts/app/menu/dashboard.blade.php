<li class="pc-item pc-caption">
    <label>{{__('Dashboard')}}</label>
    <i class="ph-duotone ph-gauge"></i>
</li>

<li class="pc-item">
    <a href="/app/home" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-squares-four"></i>
        </span>
        <span class="pc-mtext">{{__('Dashboard')}}</span>
    </a>
</li>

<!-- TODO: Safeguarding -->
<li class="pc-item">
    <a href="javascript:void(0)" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-shield-check"></i>
        </span>
        <span class="pc-mtext">{{__('Safeguarding')}}</span>
    </a>
</li>

<li class="pc-item">
    <a href="javascript:void(0)" class="pc-link" onclick="underDevelopment(event)">
        <span class="pc-micon">
            <i class="ph-duotone ph-cloud"></i>
        </span>
        <span class="pc-mtext">{{__('Remote Content')}}</span>
    </a>
</li>

@if($modules->sync)
    <li class="pc-item">
        <a href="{{ route('general.usage') }}" class="pc-link">
            <span class="pc-micon">
                <i class="ph-duotone ph-chart-donut"></i>
            </span>
            <span class="pc-mtext">{{__('Lab Usage')}}</span>
        </a>
    </li>
@endif