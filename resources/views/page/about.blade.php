@include('includes.header')

<title>Jeager - Industrial Internet of Things</title>
<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">


<!-- =========================
     NAVIGATION LINKS     
============================== -->
<div class="navbar navbar-fixed-top custom-navbar" role="navigation">
	<div class="container">

		<!-- navbar header -->
		<div class="navbar-header">
			<a href="#" class="navbar-brand"><img src="{{asset('images/logo-1.png')}}"></a>
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
			</button>
		</div>
		<div class="collapse navbar-collapse">

			<ul class="nav navbar-nav navbar-right">
				<li><a href="{{route('home.Jeager')}}" >Beranda</a></li>
				<li><a href="{{route('solution.Jeager')}}" >Solusi Jeager</a></li>
				<li><a href="{{route('about.Jeager')}}" >Tentang Jeager</a></li>
				<li><a href="#" >Berita</a></li>
				<li> <a><img src="{{asset('images/Indonesia.png')}}"> Bahasa Indonesia</li>
			</ul>

		</div>

	</div>
</div>

<!-- SEC 1 -->
<section class="parallax-section-blank">
	<div class="container">
		<div class="row-middle">			
				<h1 class="header2">Jeager</h1>
				<h3 class="txt1">Salah satu startup di Program Digital Amoeba, sebuah program inkubasi startup PT. Telkom Indonesia. </h3><br>
				<a class="txt1">Jeager menciptakan solusi bagi Industri Manufaktur untuk meningkatkan produktivitas lantai produksi, dan siap bertransformasi di era Industry 4.0  </h3>
		</div>
	</div>
</section>


<!-- SEC 2 -->
<section class="parallax-section">
	<div>
		<img class="img-center" src="images/h5.png">
	</div>
</section>


<!-- SEC 3 -->
<section class="parallax-section" style="padding-top: 100px; padding-bottom: 100px;">
	<div style="text-align: center; width:70%; margin: auto;">
		<h3 class="txt6">Platform analisis kami membantu Industri Manufaktur untuk menggunakan data dari lantai produksi dan mengubahnya menjadi “wawasan data” yang berguna bagi manajemen untuk meningkatkan kinerja produksi.</h3>
	</div>
</section>


<div class="par-sec-2"></div>

<!-- SEC 4 -->
<div class="par-sec-about"></div>

<!-- SEC 6 -->
<section class="parallax-section" style="padding-top: 120px;">
	<div class="container">
		<div style="text-align: center;">			
				<h3 class="tx5">Kunjungi Kami.</h3>
				<h7 class="txt-grey-sol">Telkom Landmark Tower lt. 38.</h7><br>
				<h7 class="txt-grey-sol">Jl. Gatot Subroto No. Kav. 52, Kuningan Barat,</h7><br>
				<h7 class="txt-grey-sol">Mampang Prapatan, Kota Jakarta Selatan, DKI Jakarta</h7>	
		</div>
	</div>
</section>

<!-- SEC 7 -->
<section class="parallax-section" style="padding-top: 50px;">
	<div class="container">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.252098537533!2d106.81573851415484!3d-6.230459095489948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f158843078e3%3A0xce64d3c98a332ab0!2sTelkom%20Landmark%20Tower%2C%20The%20Telkom%20Hub!5e0!3m2!1sen!2sid!4v1575874669405!5m2!1sen!2sid" width="100%" height="363" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
	</div>
</section>


@include('includes.footer')