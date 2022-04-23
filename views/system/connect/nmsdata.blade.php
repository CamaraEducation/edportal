@php $nms = NMSController::check(); @endphp
<h3 class="text-primary">NMS Test</h3>
<li>Number of Computers : <span class="text-bold" style="font-weight: 600">{{$nms['count']}}</span></li> <br>
<table class="table">
    <thead class="thead-light">
        <th>Mac Adrress</th>
    </thead>
    <tbody>
        @foreach ($nms['macs'] as $mac)
        <tr>
            <td>{{$mac['mac_add']}}</td>
        </tr>
        @endforeach
    </tbody>
</table>