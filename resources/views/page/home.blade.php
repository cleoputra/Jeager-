@include('includes.header')

<div class="par-sec-1"></div>


<section class="parallax-section">
	<div class="container">
		<div class="row">
	<!-- 		<div class="col-md-6 col-sm-6">
				<h3 class="txt2" style="padding-top: 120px; padding-left: 90px; padding-right: 150px;">Pelajari bagaimana platform kami bekerja.</h3>
			</div>
					
			<div class="col-md-6 col-sm-6">
				<iframe width="616" height="346" src="http://www.youtube.com/embed/DzWHKNMwrIM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
 -->
		<div class="wow col-md-6 col-sm-10" ">
				<h3 class="txt2-home">Pelajari bagaimana platform<br> kami bekerja.</h3>
			</div>
			<div class="col-md-6 col-sm-10" >
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
			<img src="{{asset('images/h2.png')}}">
			</div>
					
			<div class="col-md-6 col-sm-6" style="padding-left: 30px; padding-right: 80px;">
				<h3 class="txt2" style="padding-top: 100px;">Solusi kami memberikan informasi berharga untuk anda.</h3>
				<h5 class="txt-grey">Dengan memberikan data, analisis, <br>dan pelaporan real-time untuk meningkatkan produktivitas Industri Manufatur Anda.</h5><br><br>
				<a class="txt5" href="{{route('solution.oee')}}">OEE Monitoring System > </a><br>
				<a class="txt5" href="{{route('solution.ems')}}">Environment Monitoring System > </a>
			</div>

		</div>
	</div>
</section>


<section style="background-color: #808080; padding-top: 35px;" class="parallax-section">
	<div style="margin-left: 0px;" class="container">
		<div class="row">

			<div class="col-md-6" style="margin-bottom: 30px;">
			<h3 class="txt-white">Solusi kami memberi Anda lebih <br>banyak informasi</h3>
					<br>
					<div class="col-md-6" style=" margin-top:50px; margin-bottom: 30px;">
						<img src="{{asset('images/p1.png')}}"><br><br>
						<a class="txt" style="color: white; font-size: 20px;" >Digitilasasi untuk menciptakan hasil bisnis</a>
					<br><br><br>
					<img style="margin-top: 80px;" src="{{asset('images/p2.png')}}"><br><br><Br>
					<a class="txt" style="color: white; font-size: 20px;" >Memahami karakteristik Manufaktur di Indonesia</a>
					</div>
			</div>

			<div class="col-md-6" style="right:100px; top: 95px;">
					<br>
					<div class="col-md-8" style=" margin-top:50px; margin-bottom: 30px;">
						<img src="{{asset('images/p3.png')}}"><br><br><br>
						<a class="txt" style="color: white; font-size: 20px;" >Merubah data menjadi informasi untuk peningkatan performa produk</a>
					<br>
					<img style="margin-top: 80px;" src="{{asset('images/p4.png')}}"><br><br><Br>
					<a class="txt" style="color: white; font-size: 20px;" >Sistem dapat diakses dimana saja via web dan mobile</a>
					</div>
			</div>

		</div>
	</div>
</section>

<section class="parallax-section" style="padding-bottom: 100px; padding-top: 100px;">
	<div class="container">
		<div style="text-align: center" class="row">			
				<h3 class="tx5">Kami siap membantu Anda.</h3><br><br>
				<a class="txt-sol">Hubungi Kami > </a>
		</div>
	</div>
</section>

@include('includes.footer')



