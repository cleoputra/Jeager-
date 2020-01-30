@include('includes.adminHeader')

<div class="content-wrapper">
  <section class="content">
    <!-- /.row -->
    <div class="row">
      <div class="col-xs-12">
                <div class="col-md-12">
                  <div class="box box-widget widget-user">
                    <!-- Add the bg color to the header using any of the bg-* classes -->
                    <div class="widget-user-header bg-purple-active">
                      <h3 class="widget-user-username"></h3>
                    </div>
                    <div class="widget-user-image">
                      <img class="img-circle" src="{{asset('images/user.png')}}" alt="User Avatar">
                    </div>
                    

                        <div class="box-footer">
                      <div class="row" style="margin-top: 30px">
                        
                        <div class="col-sm-4 border-right">
                          <div class="description-block">
                            <h5 class="description-header"></h5>
                            <span class="description-text">EMAIL</span>
                          </div>
                        </div>
                        
                        <div class="col-sm-4 border-right">
                          <div class="description-block">
                            <h5 class="description-header"></h5>
                            <span class="description-text">NAMA PERUSAHAAN</span>
                          </div>       
                        </div>

                        <div class="col-sm-4">
                          <div class="description-block">
                            <h5 class="description-header"></h5>
                            <span class="description-text">NO. TELP</span>
                          </div>
                        </div>
                
                    </div>
                </div>

                   
                    <div class="box-footer">
                      <div class="row" style="margin-top: 30px">
                        
                        <div class="col-sm-4 border-right">
                          <div class="description-block">
                            <h5 class="description-header"></h5>
                            <span class="description-text">TANGGAL DAFTAR</span>
                          </div>
                        </div>
                        
                        
                        <div class="col-sm-4 border-right">
                          <div class="description-block">
                            <h5 class="description-header"></h5>
                            <span class="description-text">PERTANYAAN</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    

                </div>
              
            </div>
        </div>
      </div>
    </section>
</div>
@include('includes.adminFooter')

