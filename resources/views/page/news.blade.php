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
<<<<<<< HEAD
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
=======
	<div class="container-fluid">
        <div class="row">                              		
        	<div class="col-md-3">
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n1.jpeg')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/industri-indonesia-bidik-5-3-capaian-pertumbuhan-tahun-2020-7ca385011d32" target="_blank"><h4>Industri Indonesia Bidik 5,3% Capaian Pertumbuhan Tahun 2020</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>17 Januari 2020</a>
							</div>
						</div>
				</div>
        	</div>

			<div class="col-md-3">
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n2.jpeg')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/indonesia-sambut-era-society-5-0-4696b328b35a" target="_blank"><h4>Indonesia Sambut Era Society 5.0</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>30 Desember 2019</a>
							</div>
						</div>
				</div>
			</div>
	
			<div class="col-md-3">
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n3.jpeg')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/menteri-perindustrian-pacu-produksi-manufaktur-dengan-transformasi-industri-4-0-c972688e174" target="_blank"><h4>Menteri Perindustrian Pacu Produksi Manufaktur Dengan Transformasi Industri 4.0</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>13 November 2019</a>
							</div>
						</div>
				</div>
        	</div>
        					
        			
        		</div>
        	</div>




<!-- SEC 3 -->
	<div class="container">
        <div class="row flex-center">                              		
        	<div class="col-md-3" >
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n4.jfif')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/kemenperin-pilih-5-startup-terbaik-di-semarak-festival-ikm-d0c6f8a863f2" target="_blank"><h4>KEMENPERIN pilih 5 Startup Terbaik di Semarak Festival IKM</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>21 Januari 2019</a>
							</div>
						</div>
				</div>
        	</div>

			<div class="col-md-3" >
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n5.png')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/perkembangan-dunia-industry-4-0-di-indonesia-1eae2bc22c45" target="_blank"><h4>Perkembangan Dunia Industry 4.0 Di Indonesia</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>28 September 2018</a>
							</div>
						</div>
				</div>
			</div>
			
			<div class="col-md-3" >
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n6.jpeg')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/peluang-industry-4-0-di-indonesia-50e3587cf8be" target="_blank"><h4>Peluang Industry 4.0 di Indonesia</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>13 November 2019</a>
							</div>
						</div>
				</div>
        	</div>			
        			
        		</div>
        	</div>



<!-- SEC 4 -->
	<div class="container">
        <div class="row flex-center">                              		
        	<div class="col-md-3" >
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n7.jpeg')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/kembangkan-bisnis-jeager-terinspirasi-film-pasific-rim-a688cf73a84a" target="_blank"><h4>Kembangkan Bisnis, ‘Jeager’ Terinspirasi Film Pasific Rim</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>28 Agustus 2018</a>
							</div>
						</div>
				</div>
        	</div>

			<div class="col-md-3">
        		<div class="choice_item">
					<img class="img-fluid" src="{{asset('images/n8.jpeg')}}" alt="">
						<div class="choice_text">
							<a href="https://medium.com/jeager-industrial-internet-of-things/apa-itu-industry-4-0-4ffd93d7bdd0" target="_blank"><h4>Apa itu Industri 4.0 ?</h4></a>
							<div class="date">
							<a><i class="fa fa-calendar" aria-hidden="true"></i>23 Juli 2018</a>
							</div>
						</div>
				</div>
			</div>
			
		
>>>>>>> fd466a367f35691e892039c45a8773cdb9a1cbce
</section>

@include('includes.footer')
