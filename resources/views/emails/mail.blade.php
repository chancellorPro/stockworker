@extends('layouts.pages.config', [
    'title' => 'Products',
    'filter' => $filter,
])

@section('content')
    Здравствуйте, <strong> {{$name}} </strong>,
    <p> {{$body}} </p>
@endsection
