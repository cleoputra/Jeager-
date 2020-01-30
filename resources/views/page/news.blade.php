@include('includes.header')

<!-- =========================
     NAVIGATION LINKS     
============================== -->
<div class="navbar navbar-fixed-top custom-navbar greyz" role="navigation">
    <div class="container">

        <!-- navbar header -->
        <div class="navbar-header">
            <a href="#" class="navbar-brand"><img src="{{asset('images/logo-1.svg')}}"></a>
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">

            <ul class="nav navbar-nav navbar-right">
                <li><a href="{{route('home.Jeager')}}">Beranda</a></li>
                <li><a href="{{route('solution.Jeager')}}">Solusi Jeager</a></li>
                <li><a href="{{route('about.Jeager')}}">Tentang Jeager</a></li>
                <li><a href="{{route('news.Jeager')}}">Berita</a></li>
                <li> <a><img class="subs-w" src="{{asset('images/English.png')}}"> Bahasa Indonesia</li>
            </ul>

        </div>

    </div>
</div <!-- SEC 1 -->
<section class="parallax-section-blank">
    <div class="container">
        <div class="row" style="text-align: center;">
            <h3 class="header2 content-50">Kenali lebih lanjut tentang<br> apa yang kami lakukan.</h3>
        </div>
    </div>
</section>

<!-- SEC 2 -->
<section class="parallax-section">
    <div class="container">
        <div class="row">
            @foreach($news as $n)
            <div class="col-sm-6 col-md-3 col-lg-4">
                <div class="choice_item">
                    <img class="img-fluid" src="{{$n->image}}" alt="{{$n->title}}">
                    <div class="choice_text">
                        <a href="{{$n->link}}" target="_blank">
                            <h4>{{$n->title}}</h4>
                        </a>
                        <div class="date">
                            <a><i class="fa fa-calendar" aria-hidden="true"></i>{{$n->created_at}}</a>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>

@include('includes.footer')
