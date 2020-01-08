<!DOCTYPE html>
<html lang="en">
<head>
<title>Website Jeager</title>
<meta name="description" content="">
<meta name="author" content="">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, initial-scale= 1">


<link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('css/animate.css')}}">
<link rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}">
<link rel="stylesheet" href="{{asset('css/owl.theme.css')}}">
<link rel="stylesheet" href="{{asset('css/owl.carousel.css')}}">
<link rel="stylesheet" href="{{asset('css/jeager.style.css')}}">
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"> 

<!-- Main css -->
<link rel="stylesheet" href="css/style.css">

<!-- Google Font -->
<link href='https://fonts.googleapis.com/css?family=Poppins:400,500,600' rel='stylesheet' type='text/css'>

</head>

<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">




<!-- =========================
     NAVIGATION LINKS     
============================== -->
<div class="navbar navbar-fixed-top custom-navbar" role="navigation">
	<div class="container">

		<!-- navbar header -->
		<div class="navbar-header">
			<a href="#" class="navbar-brand"><img src="{{asset('images/logo-2.png')}}"></a>
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
			</button>
		</div>
		<div class="collapse navbar-collapse">

			<ul class="nav navbar-nav navbar-right">
				<li><a style="color: white;" href="{{route('home.Jeager')}}" >Beranda</a></li>
				<li><a style="color: white;" href="{{route('solution.Jeager')}}" >Solusi Jeager</a></li>
				<li><a style="color: white;" href="{{route('about.Jeager')}}" >Tentang Jeager</a></li>
				<li><a style="color: white;" href="{{route('solution.oee')}}" >Berita</a></li>
				<li><a style="color: white;" href="{{route('solution.ems')}}" >Bahasa Indonesia</a></li>
			</ul>

		</div>

	</div>
</div>

<!-- START SECTION -->
	
<div class="par-sec-1"></div>
	

<section class="parallax-section" style="border-radius: 25px;">
	<div class="container">
		<div class="row">
		<div class="wow col-md-6" >
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
					
			<div class="col-md-6" style="padding-left: 30px; padding-right: 80px;">
				<h3 class="txt2" style="padding-top: 100px;">Solusi kami memberikan informasi berharga untuk anda.</h3>
				<h5 class="txt-grey">Dengan memberikan data, analisis, <br>dan pelaporan real-time untuk meningkatkan produktivitas Industri Manufatur Anda.</h5><br><br>
				<a class="txt5" href="{{route('solution.oee')}}">OEE Monitoring System > </a><br>
				<a class="txt5" href="{{route('solution.ems')}}">Environment Monitoring System > </a>
			</div>

		</div>
	</div>
</section>


<section class="parallax-section-ems" style="background-color: #808080; padding-top: 35px;">
	<div class="container">
			<div class="col-md-12" style="margin-bottom: 50px;">
				<h3 class="txt-white">Solusi kami memberi Anda lebih banyak informasi</h3>
			</div>
		<div class="row">

			<div class="col-md-6" style="margin-bottom: 20px;">
					<div class="col-md-6" style=" margin-top:0px; margin-bottom: 0px;">
						<img class="img-h-1" width="104px" height="71px" src="{{asset('images/p1.png')}}"><br><br>
						<h6 class="txt-white-s">Digitilasasi untuk menciptakan hasil bisnis</h6>
					<br><br><br>
						<img class="img-h-2" src="{{asset('images/p2.png')}}"><br><br><Br>
						<h6 class="txt-white-s">Memahami karakteristik Manufaktur di Indonesia</h6>
					</div>
			</div>

			<div class="col-md-6" style="margin-bottom: 20px;">
					<div class="col-md-8" style=" margin-top:0px; margin-bottom: 0px;">
						<img class="img-h-2" src="{{asset('images/p3.png')}}"><br><br><br>
						<h6 class="txt-white-s" style="color: white; font-size: 20px;" >Merubah data menjadi informasi untuk peningkatan performa produk</h6>
					<br><br><br>
						<img class="img-h-4" src="{{asset('images/p4.png')}}"><br><br>
						<h6 class="txt-white-s" >Sistem dapat diakses dimana saja via web dan mobile</h6>
					</div>
			</div>

		</div>
	</div>
</section>



@include('includes.footer')



