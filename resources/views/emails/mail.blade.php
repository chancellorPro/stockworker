@extends('layouts.pages.config', [
    'title' => 'Mail',
])

@section('content')
    Здравствуйте, <strong> {{$name??''}} </strong>,
    <p> {{$body??''}} </p>
@endsection
