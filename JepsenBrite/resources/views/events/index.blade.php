@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Les événements passés') }}</div>

                <div class="card-body">
                  <table class="table table-bordered">
                    <tr class="thead-light">
                      <th scope="col">Nom</th>
                      <th scope="col">Date</th>
                      <th scope="col">Categorie</th>
                      <th scope="col">Createur</th>
                    </tr>
                    @foreach ($events->sortBy('date') as $event)
                    @if ($event->date <= now())
                    <tr>
                      <td><a href="{{ route('events.show', $event->id) }}">{{ $event->name }}</a></td>
                      <td>{{ date('d-m-Y', strtotime($event->date)) }}</td>
                      <td>{{ $event->category->name }}</td>
                      <td><a href="profile/{{ $event->user->id }}">{{ $event->user->name}}</a></td>
                    </tr>
                    @endif
                    @endforeach

                  </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
