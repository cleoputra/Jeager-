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
				<li> <a><im class="subs-w" src="{{asset('images/Indonesia.png')}}"> Bahasa Indonesia</li>
			</ul>

		</div>

	</div>
</div>

<!-- SEC 1 -->
<section class="parallax-section-blank" >
	<div class="container">
		<div class="row" style="text-align: center;">			
				<h3 class="header2 content-50">Tingkatkan produktifitas<br>Manufaktur Anda bersama kami</h3>
		</div>
	</div>
</section>


<!-- SEC 2 -->
<section class="parallax-section-ems">
	
				
			<div class="col-md-4 zig-zag-oee">
				<h3 class="txt1" style="color: black; text-align: left;">OEE Monitoring System.</h3>
				<h7 class="txt-grey" >Sistem yang menampilkan nilai OEE</h4><br><i>real-time</i> dalam Industri Manufaktur</h7>
				<br><br>
				<a class="txt5" href="{{route('solution.oee')}}" >Lihat lebih lanjut > </a>
			</div>	
			<div class="col-md-8">
					<img src="images/h3.png"><br><br>
			</div>
	
</section>


<!-- SEC 3 -->
<section class="">
	<div class="container">
				
			<div class="col-md-4 zig-zag">
				<img class="img-sol" src="images/h4.png"><br><br>
			</div>
					
			<div class="col-md-8 zig-zag-2" >
				<h3 class="txt1" style="color: black; text-align: left;">Enviroment Monitoring System.</h3>
				<h7 class="txt-grey" >Sistem monitoring lingkungan untuk menginformasikan</h4><br><i>real-condition </i>dari area yang di tentukan</h7>
				<br><br>
				<a class="txt5" >Lihat lebih lanjut > </a>
			</div>

		</div>
	</div>
</section>


@include('includes.footer')