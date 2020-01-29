<section class="parallax-section margin-min" style="margin-bottom: 100px;">
	<div class="container">
		<div class="row" style="text-align: center">			
				<h3 class="tx5">Kami siap membantu Anda.</h3>
				<a class="txt-sol">Hubungi Kami > </a>
		</div>
	</div>
</section>

<!-- POP-UP -->
<button class="open-button" onclick="openForm()"><li class="fa fa-phone"></li><b>&nbsp &nbsp Hubungi Kami</button>
<!-- mobile btn-pop  -->
<button class="open-button-m subs-m" onclick="openForm()"><li class="fa fa-phone"></li></button>

<div class="form-popup" id="myForm">
  <form action="#" class="form-container">
	<h6 class="txt-pop-head"><li class="fa fa-phone"></li><b> Hubungi Kami</b>
	<li onclick="closeForm()" class="fa fa-times" id="close" ></h6>
	
	<p class="txt-tag">Isi data dibawah ini dan kami akan mendukung bisnis anda.</p>

    <label class="txt-pop-label"><li class="fa fa-building">&nbsp &nbsp Nama Perusahaan*</label>
    <input type="text" id="pop-input" name="email" >

    <label class="txt-pop-label"><li class="fa fa-envelope">&nbsp &nbsp E-mail*</label>
    <input type="text" id="pop-input" name="email" >

    <label class="txt-pop-label"><li class="fa fa-phone">&nbsp &nbsp No. Telepon*</label>
    <input type="text" id="pop-input" name="email" >

    <label class="txt-pop-label"><li class="fa fa-question">&nbsp &nbsp Pertanyaan*</label>
    <input type="text" id="pop-input" name="email" >

    <button type="submit" class="btn">Kirim</button>
  </form>
</div>
<!-- END POP-UP -->


<footer style="background-color: #2D6DA4;">
	<div class="container">
	
			<div class="col-md-4 left-nul" style="padding-left: 78px;">
				<img class="logo_Jeager" src="{{asset('images/logo_footer.svg')}}">
			</div>

			<div class="col-md-3 left-nul" align="left" style="padding-left: 70px; padding-top: 20px;">
				<h7 class="ft_text"><b>Jelajahi lebih lanjut</b></h7><br>
				<a class="ft_text" href="">Beranda</a><br>
				<a class="ft_text" href="">Solusi Jeager</a><br>
				<a class="ft_text" href="">Tentang Jeager</a><br>
				<a class="ft_text" href="">Berita</a><br>
				<br> 
				<h7 class="ft_text"><b>Solusi kami</b></h7><br>
				<a class="ft_text" href="">OEE Monitoring System</a><br>
				<a class="ft_text" href="">Environment Monitoring System</a>
			</div>
			<br class="br-none-w"> <br class="br-none-w"> 
 			<div class="col-md-5" align="left" style="padding-top: 20px; ">
				<div class="row left-mobile">
				<h7 class="ft_text"><b>Biarkan kami memberi lebih banyak informasi.<br class="brs">Subscribe sekarang.</b></h7> <br class="br-none-w">
				</div>
				<div class="row left-mobile">
					<input type="email" name="" placeholder="Enter your email address" id="ip2"/>
					<a href="" class="subsBut">Subscribe</a>
				</div>
				<br class="brm">
				
				<div class="row">
					<h7 class="ft_text"><b>Lebih dekat bersama kami</b></h7>
				</div>	
				<div class="row">
					<ul class="social-icon">
					<li><a href="https://wa.me/6282211776239" target="_blank" class="fa fa-whatsapp wow" ></a></li>
					<li><a href="mailto:info@jeager.io" target="_blank" class="fa fa-envelope wow" ></a></li>
					<li><a href="https://www.linkedin.com/company/jeager-manufacturingsolution/" target="_blank" class="fa fa-linkedin wow" ></a></li>
					<li><a href="https://www.facebook.com/jeagersolution/" target="_blank" class="fa fa-facebook wow" ></a></li>
					<li><a href="https://medium.com/jeager-industrial-internet-of-things" target="_blank"><img style="padding-top: 12px;" src="{{asset('images/m.svg')}}"></a></li>
				</ul>
				</div>	
				<div class="row flex">
					<div class="col-md-1 flex-mob" style="width:8%; padding-left: 0px;">
						<ul class="social-icon">
							<li><a class="fa fa-map-marker wow"></a></li>
						</ul>
					</div>
					<div class="col-md-11" style="padding-top: 10px; padding-left: 0px;">
						<p class="ft_text">Telkom Landmark Tower lt.38.<br class="brs">Jl. Gatot Subroto No. Kav. 52, Kuningan Barat,<br class="brs">Mampang Prapatan, Kota Jakarta Selatan, DKI Jakarta</p>
					</div>
				</div>
			</div>
	</div>
	<div class="container cont-full" style="width: 75%;" align="left">
	<hr>	
		<h9 class="ft_text">Copyright &#169 2017 Jeager Manufacturing Solution &#8226 Term &#8226 Privacy &#8226 Security &#8226</h9>
	</div>
</footer>


<!-- Back top -->
<!-- <a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a> -->


<!-- =========================
     SCRIPTS   
============================== -->
<script>
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
</script>

<script src="{{asset('js/jquery.js')}}"></script>
<script src="{{asset('js/bootstrap.min.js')}}"></script>
<script src="{{asset('js/jquery.parallax.js')}}"></script>
<script src="{{asset('js/owl.carousel.min.js')}}"></script>
<script src="{{asset('js/smoothscroll.js')}}"></script>
<script src="{{asset('js/wow.min.js')}}"></script>
<script src="{{asset('js/custom.js')}}"></script>

</body>
</html>