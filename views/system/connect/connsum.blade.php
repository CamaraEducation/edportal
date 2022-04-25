<h3 class="text-primary">Portal Syncronisation</h3>
@if(is_sync() == true)
    <p class="text=green">The Portal is Synchronising well to server address {{sync_conn()}}</p>
@else
    <p class="text=red">Connection to the portal Synchronisation server is not available</p>
@endif