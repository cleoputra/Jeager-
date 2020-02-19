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
<button class="open-button-m subs-m" onclick="openForm()"><li style="font-size: 22px;" class="fa fa-phone"></li></button>

<div class="form-popup" id="myForm">
  <form method="POST" action="{{ route('submit') }}" class="form-container" id="form">
  @csrf
	<h6 class="txt-pop-head"><li class="fa fa-phone"></li><b> Hubungi Kami</b>
	<li onclick="closeForm()" class="fa fa-angle-down" id="close"></h6>
	
	<p class="txt-tag">Isi data dibawah ini dan kami akan mendukung bisnis anda.</p><br>

    <li class="fa fa-building white-c"><label class="txt-pop-label">&nbsp &nbsp Nama Lengkap/Perusahaan*</label>
    <input type="text" id="pop-input" name="perusahaan" required>

    <li class="fa fa-envelope white-c"><label class="txt-pop-label">&nbsp &nbsp E-mail*</label>
    <input type="text" id="pop-input" name="email" required>

    <li class="fa fa-phone white-c"><label class="txt-pop-label">&nbsp &nbsp No. Telepon*</label>
    <input type="text" id="pop-input" name="telp" required>

	<li class="fa fa-question white-c"><label class="txt-pop-label">&nbsp &nbsp Pertanyaan*</label>
    <input type="text" id="pop-input" name="pertanyaan" required>

    <button type="submit" class="btn" id="myBtn">Kirim</button>
  </form>
</div>
<!-- END POP-UP -->

<!-- Modal content -->
<div id="myModal" class="modal">
  <div class="modal-content" align="center">
    <img width="96px" height="96px" src="{{asset('images/notif_done.png')}}">
    <h2 class="t-big">Terkirim!</h2>
    <p class="t-small">Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.</p>
    <button id="e-recruit" class="close" style="text-align:center;"><b>OK</button>
  </div>
</div>



<footer style="background-color: #2D6DA4;">
	<div class="container">
	
			<div class="col-md-4 left-nul" style="padding-left: 78px;">
				<img class="logo_Jeager" src="{{asset('images/logo_footer.svg')}}">
			</div>

			<div class="col-md-3 left-nul" align="left" style="padding-left: 70px; padding-top: 20px;">
				<h7 class="ft_text"><b>Jelajahi lebih lanjut</b></h7><br>
				<a class="ft_text" href="{{route('home.Jeager')}}">Beranda</a><br>
				<a class="ft_text" href="{{route('solution.Jeager')}}">Solusi Jeager</a><br>
				<a class="ft_text" href="{{route('about.Jeager')}}">Tentang Jeager</a><br>
				<a class="ft_text" href="{{route('news.Jeager')}}">Berita</a><br>
				<br> 
				<h7 class="ft_text"><b>Solusi kami</b></h7><br>
				<a class="ft_text" href="{{route('solution.oee')}}">OEE Monitoring System</a><br>
				<a class="ft_text" href="{{route('solution.ems')}}">Environment Monitoring System</a>
			</div>
			<br class="br-none-w"> <br class="br-none-w"> 
 			<div class="col-md-5" align="left" style="padding-top: 20px;">
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

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
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

