@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row pb-5">
        <div class="col-3 pt-4">
            <img src="{{ $user->profile->profileImage() }}" class="rounded-circle w-100">
        </div>
        <div class="col-9 pt-4 pb-3">
            <div class="d-flex justify-content-between align-items-baseline">
                <h1>{{ $user->profile->name }}</h1>
                @can('update', $user->profile)
                <a href="{{ route('profile.edit', $user->id) }}">Modifier son profil</a>
                @endcan
            </div>
            <p>{{ $user->events->count() }} événements</p>
        </div>
    </div>

    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-baseline pt-4">
            <h4>
                Evéenements créés
            </h4>
            @can('update', $user->profile)
            <a class="btn btn-primary" href="{{ route('events.create') }}">Créer un nouvel événement</a>
            @endcan
        </div>

        <div class="card-body">
            <table class="table table-bordered">
                <tr class="thead-light">
                    <th scope="col">Nom</th>
                    <th scope="col">Date</th>
                    <th scope="col">Categorie</th>
                </tr>
                @foreach($eventsCreated as $event)
                @if ($event->date > now())
                <tr>
                    <td><a href="{{ route('events.show', $event->id) }}">{{ $event->name }}</a></td>
                    <td>{{ date('d-m-Y', strtotime($event->date)) }}</td>
                    <td>{{ $event->category -> name }}</td>
                </tr>
                @else
                <tr class="table-secondary">
                    <td><a href="{{ route('events.show', $event->id) }}">{{ $event->name }}</a></td>
                    <td>{{ date('d-m-Y', strtotime($event->date)) }}</td>
                    <td>{{ $event->category -> name }}</td>
                </tr>
                @endif
                @endforeach
            </table>
            {{ $eventsCreated->links() }}
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-baseline pt-4">
            <h4>participera à </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <tr class="thead-light">
                    <th scope="col">Nom</th>
                    <th scope="col">Date</th>
                    <th scope="col">Catégorie</th>
                </tr>
                @foreach($willParticipate as $participate)
                <tr>
                    <td><a href="{{ route('events.show', $participate->event->id) }}">{{ $participate->event->name }}</a>
                    </td>
                    <td>{{ date('d-m-Y', strtotime($participate->event->date)) }}</td>
                    <td>{{ $participate->event->category->name }}</td>
                </tr>
                
                @endforeach
            </table>
            {{ $willParticipate->links() }}
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-baseline pt-4">
            <h4>a participé à </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <tr class="thead-light">
                    <th scope="col">Nom</th>
                    <th scope="col">Date</th>
                    <th scope="col">Catégorie</th>
                </tr>
                @foreach($hasParticipated as $participate)
                <tr>
                    <td><a href="{{ route('events.show', $participate->event->id) }}">{{ $participate->event->name }}</a>
                    </td>
                    <td>{{ date('d-m-Y', strtotime($participate->event->date)) }}</td>
                    <td>{{ $participate->event->category->name }}</td>
                </tr>
                @endforeach
            </table>
            {{ $hasParticipated->links() }}
        </div>
    </div>
</div>
@endsection
