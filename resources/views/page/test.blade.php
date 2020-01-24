@include('includes.header')

<button class="open-button" onclick="openForm()"><li class="fa fa-phone"></li> Hubungi Kami</button>

<div class="form-popup w3-animate-bottom" id="myForm">
  <form action="#" class="form-container">
    <h6 class="txt-pop-head" style="text-align: left;"><li class="fa fa-phone"></li><b> Hubungi Kami</b></h6>
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
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>

@include('includes.footer')