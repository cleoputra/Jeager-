@include('includes.header')

<!-- SEC 1 -->
<section class="parallax-section">
	<div class="col-md-12">

		<img width="100%" src="{{asset('images/o1.png')}}">
		<h1 class="txt" style="text-align: right;"></h1>

	</div>		
	</div>
</section>

<!-- SEC 2 -->
<section class="parallax-section" style="padding-top: 120px; padding-left: 75px;">
	<div class="container">
		<div class="col-md-8">
			<img src="{{asset('images/o2.png')}}">
			<h3 class="txt6-left">Membantu Industri Manufaktur untuk mendapatkan nilai OEE secara <i>real-time</i>, dapat diakses kapanpun dan dimanapun.</h3>
			<h6 class="txt-grey-small">* OEE : Overall Equipment Effectiveness</h6>
			<img style="margin-top: 20px; margin-left: 85%;" src="{{asset('images/o3.png')}}">
		</div>
	</div>
</section>

<!-- SEC 3 -->
<section class="parallax-section" style="background: linear-gradient(153.02deg, #FFFFFF -69.37%, #102F4A 57.88%); text-align: center;">
	<div class="container" style="padding-top: 55px;">
		<h3 class="txt6-white">Pemantauan OEE secara Real-Time</h3>
		<h6 style="font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

/* White / 1 */
color: #FFFFFF;">Memberikan informasi mengenai proses produksi dari sudut pandang mesin, lini produksi, pabrik dan perusahaan secara real-time. Dapat diakses dimana saja menggunakan perangkat apapun.</h6>
		<img src="{{asset('images/oee1.png')}}">
	</div>
</section>

@include('includes.footer')