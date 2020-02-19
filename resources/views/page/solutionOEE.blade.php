@include('includes.header')

<!-- =========================
     NAVIGATION LINKS     
============================== -->
<div class="navbar navbar-fixed-top custom-navbar greyz" role="navigation">
	<div class="container">

		<!-- navbar header -->
	<div class="navbar-header">
			<a href="{{route('home.Jeager')}}" class="navbar-brand"><img src="{{asset('images/logo-1.svg')}}"></a>
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
				<li><a href="{{route('news.Jeager')}}" >Berita</a></li>
				<li> <a><img class="subs-w" src="{{asset('images/Indonesia.png')}}"> Indonesia</li>
			</ul>

		</div>

	</div>
</div>

<!-- SEC 0 -->
<section class="parallax-section" style="background-color: #eeeeee; padding-bottom: 10px;">
	<div class="container none">
		<a href="{{route('home.Jeager')}}" style="font-size: 12px; color: #808080; margin-left: 150px; ">Beranda &nbsp</a>
		<a style="font-size: 12px; color: #808080;"> > </a> 
		<a href="{{route('solution.Jeager')}}" style="font-size: 12px; color: #808080;">&nbsp Solusi Jeager &nbsp</a>
		<a style="font-size: 12px; color: #808080;"> > </a>
		<a href="{{route('solution.oee')}}" style="font-size: 12px; color: #808080;">&nbsp OEE Monitoring System </a>
	</div>
</section>

<!-- SEC 1 -->
<div class="par-sec-3"></div>

<!-- SEC 2 -->
<section class="parallax-section" id="oee-2">
	<div class="container">
		<div class="col-md-8">
			<img class="petik" src="{{asset('images/o2.png')}}">
			<h3 class="txt6-left">Membantu Industri Manufaktur untuk mendapatkan nilai OEE secara <i>real-time</i>, dapat diakses kapanpun dan dimanapun.</h3>
			<h6 class="txt-grey-small">* OEE : Overall Equipment Effectiveness</h6>
			<img class="petik" style="margin-top: 20px; margin-left: 85%;" src="{{asset('images/o3.png')}}">
		</div>
	</div>
</section>

<!-- SEC 3 -->
<section class="parallax-section-oee" style="background: linear-gradient(153.02deg, #FFFFFF -69.37%, #102F4A 57.88%); text-align: center; ">
	<div class="container">
		<h3 class="txt6-white">Pemantauan OEE secara Real-Time</h3>
		<h6 class="txt-sol-white">Memberikan informasi mengenai proses produksi dari sudut pandang mesin, lini produksi, pabrik dan perusahaan secara real-time. Dapat diakses dimana saja menggunakan perangkat apapun.</h6><br><br>
		<img src="{{asset('images/oee1.png')}}" alt="OEE secara Real-time">
	</div>
</section>

<!-- SEC 4 -->
<section class="parallax-section-oee" style="text-align: center;">
	<div class="container" >
		<h3 class="txt6-head">Data analisis yang anda inginkan</h3>
		<h6 class="txt-sol">Membantu Departemen terkait untuk melakukan peningkatan berdasarkan data yang valid dan akurat.</h6><br><br>
		<img src="{{asset('images/oee2.png')}}" alt="Analisa Data">
	</div>
</section>

<!-- SEC 5 -->
<section class="parallax-section-oee" style="background: linear-gradient(153.02deg, #FFFFFF -69.37%, #102F4A 57.88%); text-align: center; ">
	<div class="container">
		<h3 class="txt6-white">Informasi Total Loss yang terjadi</h3>
		<h6 class="txt-sol-white">Menyajikan loss total yang terjadi pada proses produksi.</h6><br><br>
		<img src="{{asset('images/oee3.png')}}" alt="Info Total Loss">
	</div>
</section>

<!-- SEC 6 -->
<section class="parallax-section-oee" style="text-align: center;">
	<div class="container">
		<h3 class="txt6-head">Lihat data lebih akurat</h3>
		<h6 class="txt-sol">Menyajikan data dan informasi ke dalam grafis pareto untuk mempermudah proses analisa dan pengambilan keputusan. </h6><br><br>
		<img src="{{asset('images/oee4.png')}}" alt="Data yang Akurat">
	</div>
</section>

<!-- SEC 7 -->
<section class="parallax-section-oee" style="background: linear-gradient(153.02deg, #FFFFFF -69.37%, #102F4A 57.88%); text-align: center;">
	<div class="container">
		<h3 class="txt6-white">Satu pabrik dalam satu data</h3>
		<h6 class="txt-sol-white">Menghasilkan laporan nilai OEE sesuai dengan periode yang diinginkan untuk mempermudah dan mempercepat proses pelaporan.</h6><br><br>
		<img src="{{asset('images/oee5.png')}}" alt="Satu Pabrik dalam Satu Data">
	</div>	
</section>

<!-- SEC 8 -->
<section class="parallax-section" style="text-align: center; padding-top: 120px; padding-bottom: 100px;">
	<div class="container">
		<div></div>
		<h3 class="tx5">Apa itu OEE?</h3><br>
		<h7 class="txt-grey-sol">Suatu cara untuk mengukur kinerja mesin produksi dalam penerapan<br> program TPM (Total Productive Maintenance).</h7>

	</div>
</section>

<!-- SEC 9 -->
<section class="parallax-section" style=" padding-bottom: 50px; text-align: center;">
	<div class="container">
		<img src="{{asset('images/oee6.svg')}}">

	</div>
</section>


@include('includes.footer')