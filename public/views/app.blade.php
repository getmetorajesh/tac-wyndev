<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">

    <title>Govhack 2015 - Wyndev</title>

    <!-- Bootstrap Core CSS -->
    <link href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="{{ asset('font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('bower_components/bootstrap3-datepicker/css/datepicker.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('bower_components/leaflet/dist/leaflet.css') }}" rel="stylesheet" type="text/css">

    <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href="http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style type="text/css">
    .request_log_row{ background-color:#f9f9f9 !important; font-size: 10px; }
    .request_log_row table{ background: none;}
    #request_logs{ font-size: 12px;}
    </style>

</head>

<body>


  <body id="page-top" class="index">
      <!-- Navigation -->
      <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header page-scroll">
                  <button type="button" class="navbar-toggle" data-toggle="collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#page-top">TAC Wyndev</a>
              </div>

              <!--NAV LINKS-->
              <div class="navbar">
                  <ul class="nav navbar-nav navbar-right">
                      <li class="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li class="page-scroll">
                          <a href="#App"> App</a>
                      </li>
                      <li class="page-scroll">
                          <a href="#about"> About us</a>
                      </li>
                  </ul>
              </div>
              <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
      </nav>

      <!-- Header -->
      <!-- <header>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <img class="img-responsive" src="" alt="">
                      <div class="intro-text">
                          <span class="name"></span>
                      </div>
                  </div>
              </div>
          </div>
      </header> -->
      <div id="main_content">
        <script type="text/template" id="tpl_map">

        </script>
    </div>
      <!-- Main Section -->
      <section>
        <form class="form-horizontal">
          <fieldset>

          <!-- Form Name -->
          <legend>Your profile</legend>

          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="frm_gender">Gender</label>
            <div class="col-md-4">
              <label class="radio-inline" for="frm_gender-0">
                <input type="radio" name="frm_gender" id="frm_gender-0" value="MALE" checked="checked">
                Male
              </label>
              <label class="radio-inline" for="frm_gender-1">
                <input type="radio" name="frm_gender" id="frm_gender-1" value="FEMALE">
                Female
              </label>
            </div>
          </div>

          <!-- Select Multiple -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="frm_age">Age Group</label>
            <div class="col-md-4">
              <?php $age_group = array( '0-4','5-15','16-17', '18-20', '21-25',  '26-29', '30-39','40-49','60-69', '70+', '50-59',  'UNKNOWN');?>
              {{ Form::select('frm_age', $age_group, null, array('class'=>'form-control', 'id'=>'frm_age','name'=>'frm_age')) }}
            </div>
          </div>

          </fieldset>
          </form>


      </section>
      <section>
        <h4>Risk Profile</h4>
        <p id="risk_profile">
          Please select your gender and age group.
        </p>
      </section>
      <section>
        <h4> Map</h4>
         <div id="map"></div>
      </section>

      <section  id="chart">
        <h3>Graph</h3>
        <script type="text/javascript" src="{{ asset('js/line-chart.js') }}">
        </script>
      </section>
      <!-- /Main section -->

      <!-- About Section -->
      <section class="success" id="about">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2>About</h2>
                      <hr class="star-light">
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-6 col-lg-offset-2">
                      <p>About us</p>
                  </div>
              </div>
          </div>
      </section>


      <!-- Footer -->
      <footer class="text-center">
          <div class="footer-above">
              <div class="container">
                  <div class="row">

                  </div>
              </div>
          </div>
          <div class="footer-below">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          2015 hackathon. 6 hackers wyndev
                      </div>
                  </div>
              </div>
          </div>
      </footer>

      <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
      <div class="scroll-top page-scroll visible-xs visible-sm">
          <a class="btn btn-primary" href="#page-top">
              <i class="fa fa-chevron-up"></i>
          </a>
      </div>

    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="{{ asset('bower_components/jquery/dist/jquery.js') }}"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/spin.js/spin.js') }}"></script>

    <script type="text/javascript" src="{{ asset('bower_components/underscore/underscore.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/backbone/backbone.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/backbone-relational/backbone-relational.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/backbone.paginator/lib/backbone.paginator.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/bootstrap3-datepicker/js/bootstrap-datepicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/moment/min/moment.min.js') }}"></script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/chroma-js/0.5.9/chroma.min.js"></script>
 <script src="http://d3js.org/topojson.v1.min.js"></script>
    <script type="text/javascript" src="{{ asset('js/dummy-data.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/leaflet/dist/leaflet.js') }}"></script>
    <script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>

    <script type="text/javascript" src="{{ asset('js/models/models.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/collections/collections.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/views/app.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/router/router.js') }}"></script>
</body>

</html>
