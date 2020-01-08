@include('includes.header')

<!-- SEC 0 -->
<section class="parallax-section" style="padding-bottom: 10px;">
	<div class="container none">
		<a href="{{route('home.Jeager')}}" style="font-size: 12px; color: #808080; margin-left: 150px; ">Beranda &nbsp</a>
		<a style="font-size: 12px; color: #808080;"> > </a> 
		<a href="{{route('solution.Jeager')}}" style="font-size: 12px; color: #808080;">&nbsp Solusi Jeager &nbsp</a>
		<a style="font-size: 12px; color: #808080;"> > </a>
		<a href="{{route('solution.ems')}}" style="font-size: 12px; color: #808080;">&nbsp OEE Monitoring System </a>
	</div>
</section>


<div class="par-sec-4"></div>


<!-- SEC 2 -->
<section class="parallax-section" >
	<div class="row">
	<div class="col-md-12" style="text-align: center;">
		<h7 class="txt6"><!-- <img src="{{asset('images/e2.png')}}" align="left"> -->Membantu Industri Manufaktur untuk melakukan <br>condition-based monitoring dengan lebih mudah.<!-- <img align="right" src="{{asset('images/e3.png')}}"> --></h7>
	</div>
</div>
</section>

<!-- SEC 3 -->
<section class="parallax-section-ems">
	<div class="col-md-6 section-ems-1">
		<h3 class="txt-ems-h">Pemantauan Berbasis Kondisi</h3>
		<h6 class="txt-ems">Membantu Industri Manufaktur untuk memantau kondisi lingkungan di lokasi pabrik dengan lebih mudah. <br><br>Dengan indikator : Temperatur, Kelembapan, Kecepatan Angin, Indoor Pressure, Kadar Amonia, Intensitas Cahaya, Listrik, Tangki Solar. <br><br>*indikator dapat ditambah sesuai kebutuhan </h6>
	</div>
	<div class="col-md-6" >
		<img align="left" src="{{asset('images/e4.png')}}">
	</div>
</section>

<!-- SEC 4 -->
<section class="parallax-section" style="background-color: #E5EFF8;">
	<div class="col-md-6">
		<img align="right" src="{{asset('images/e5.png')}}">
	</div>
	<div class="col-md-6 section-ems-2">
		<h3 class="txt-ems-h">Pemantauan Secara <i>Real-time</i></h3>
		<h6 class="txt-ems">Menampilkan data monitoring lingkungan pabrik secara<br><i><b>real-time</b></i>, dan menyediakan informasi mengenai <b>latensi sistem</b> dalam mengakses data.</h6>
	</div>
</section>

<!-- SEC 5 -->
<section class="parallax-section-ems">
	<div class="col-md-6 section-ems-1">
		<h3 class="txt-ems-h">Notifikasi</h3>
		<h6 class="txt-ems">Memberikan informasi dan notifikasi jika terjadi kondisi <i><b>anomali</b></i> dari <i><b>threshold</b></i> yang ditentukan oleh pengguna.</h6>
	</div>
	<div class="col-md-6" >
		<img align="left" src="{{asset('images/e6.png')}}">
	</div>
</section>

<!-- SEC 6 -->
<section class="parallax-section" style="background-color: #E5EFF8;">
	<div class="col-md-6">
		<img align="right" src="{{asset('images/e5.png')}}">
	</div>
	<div class="col-md-6 section-ems-2">
		<h3 class="txt-ems-h">Pelaporan</h3>
		<h6 class="txt-ems">Menghasilkan laporan mengenai insight yang bisa digunakan untuk melakukan analisa kondisi lingkungan yang lebih baik.</h6>
	</div>
</section>
@include('includes.footer')