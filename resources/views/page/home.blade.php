@include('includes.header')

<!-- =========================
     NAVIGATION LINKS     
============================== -->
<div class="navbar navbar-fixed-top custom-navbar bluez" role="navigation">
	<div class="container">

		<!-- navbar header -->
		<div class="navbar-header">
			<a href="{{route('home.Jeager')}}" class="navbar-brand"><img src="{{asset('images/logo-2.svg')}}"></a>
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon icon-bar white"></span>
				<span class="icon icon-bar white"></span>
				<span class="icon icon-bar white"></span>
			</button>
		</div>
		<div class="collapse navbar-collapse">

			<ul class="nav navbar-nav navbar-right">
				<li><a style="color: white;" href="{{route('home.Jeager')}}" >Beranda</a></li>
				<li><a style="color: white;" href="{{route('solution.Jeager')}}" >Solusi Jeager</a></li>
				<li><a style="color: white;" href="{{route('about.Jeager')}}" >Tentang Jeager</a></li>
				<li><a style="color: white;" href="{{route('news.Jeager')}}" >Berita</a></li>
				<li><a style="color: white;"><img class="subs-w" src="{{asset('images/Indonesia.png')}}"> Indonesia</a></li>	
			</ul>

		</div>

	</div>
</div>

<!-- START SECTION -->

<!-- SEC 0 -->
<div class="par-sec-1">
	<li class="none" style="text-align: center;"><a href="#section2"><img src="{{asset('images/arrow.png')}}"></a></li>
	<br>
</div>
	

<section class="parallax-section" id="section2">
	<div class="container">
		<div class="row">
		<div class="wow col-md-6" >
			<h3 class="txt2-home">Pelajari bagaimana<br> platform kami bekerja.</h3>
		</div>
		<div class="col-md-5 col-sm-10 l-none" style="left: 20px;" >
			<div class="embed-responsive embed-responsive-16by9">
				<iframe class="embed-responsive-item" src="http://www.youtube.com/embed/DzWHKNMwrIM" allowfullscreen></iframe>
			</div>
		</div>
		</div>
	</div>
</section>


<section class="parallax-section">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<img src="{{asset('images/h2.svg')}}">
			</div>
					
			<div class="col-md-6" style="padding-left: 30px; padding-right: 80px;">
				<h3 class="txt2" style="padding-top: 100px;">Solusi kami memberikan informasi berharga untuk anda.</h3>
				<h5 class="txt-grey">Dengan memberikan data, analisis,<br class="br-none">dan pelaporan real-time untuk meningkatkan produktivitas Industri Manufatur Anda.</h5><br><br>
				<a class="txt5" href="{{route('solution.oee')}}">OEE Monitoring System > </a><br>
				<a class="txt5" href="{{route('solution.ems')}}">Environment Monitoring System > </a>
			</div>
			<br class="br-none-w"> <br class="br-none-w"><br class="br-none-w">
		</div>
	</div>
</section>


<section class="parallax-section-ems left-none" style="background-color: #808080; padding-top: 35px; padding-left: 85px;">
	<div class="container">
			<div class="col-md-12" style="margin-bottom: 50px;">
			<br class="br-none-w"><br class="br-none-w">
			<h3 class="txt-white">Solusi kami memberi Anda lebih banyak informasi</h3>
			</div>
		<div class="row">

			<div class="col-md-6" style="margin-bottom: 20px;">
					<div class="col-md-6" style=" margin-top:0px; margin-bottom: 0px;">
						<img class="img-h-1" width="104px" height="71px" src="{{asset('images/p1.svg')}}" alt="Digitalisasi"><br><br class="br-none">
						<h6 class="txt-white-s">Digitalisasi untuk menciptakan hasil bisnis</h6>
					<br><br><br>
						<img class="img-h-2" src="{{asset('images/p2.svg')}}" alt="Karakteristik Manufaktur"><br><br class="br-none"><br class="br-none">
						<h6 class="txt-white-s">Memahami karakteristik Manufaktur di Indonesia</h6>
					</div>
			</div>
			<br class="br-none-w"><br class="br-none-w">
			<div class="col-md-6" style="margin-bottom: 20px;">
					<div class="col-md-8" style=" margin-top:0px; margin-bottom: 0px;">
						<img class="img-h-2" src="{{asset('images/p3.svg')}}" alt="Merubah Data"><br><br class="br-none"><br class="br-none">
						<h6 class="txt-white-s" style="color: white; font-size: 20px;" >Merubah data menjadi informasi untuk peningkatan performa produk</h6>
					<br><br><br>
						<img class="img-h-4" src="{{asset('images/p4.svg')}}" alt="Diakses via web dan mobile"><br><br class="br-none" >
						<h6 class="txt-white-s" >Sistem dapat diakses dimana saja via web dan mobile</h6>
					</div>
			</div>

		</div>
	</div>
</section>



@include('includes.footer')



