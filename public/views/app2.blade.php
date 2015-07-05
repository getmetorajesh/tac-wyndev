<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>wyndev | Crash Profile</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta content="Risk of road accident based on driver profile " name="description" />
	<meta content="wyndev" name="author" />
	<link rel="icon" type="image/ico" href="{{ asset('favicon.ico')}}" />

	<link rel="stylesheet" type="text/css" href="{{ asset('js/headereffects/css/component.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('js/headereffects/css/normalize.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('js/pace/pace-theme-flash.css') }}" media="screen"/>
	<link rel="stylesheet" type="text/css" href="{{ asset('js/rs-plugin/css/settings.css') }}" media="screen" />

	<!-- BEGIN CORE CSS FRAMEWORK -->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css?v=3.3.5') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap-theme.min.css') }}" />
	<!-- END CORE CSS FRAMEWORK -->

	<!-- BEGIN CSS TEMPLATE -->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/_styles.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('css/magic_space.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('css/animate.min.css') }}" />
	<!-- END CSS TEMPLATE -->

	<link href="{{ asset('css/styles.css') }}" rel="stylesheet" type="text/css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>


</head>
<!-- END HEAD -->
<body>
<div class="main-wrapper">

			<!--<header id="ha-header" class="ha-header ha-header-hide "  >
				<div class="ha-header-perspective">
			<div class="ha-header-front navbar navbar-default">
					  <div class="compressed">
						<div class="navbar-header">
						  <button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						  <a href="#" class="navbar-brand compressed"><img src="images/wyndev-logo@2x.png" alt="" data-src="images/wyndev-logo.png@2x" data-src-retina="images/wyndev-logo@2x.png" width="190" height="75"/></a>
						</div>
						<div class="navbar-collapse collapse">
						  <ul class="nav navbar-nav navbar-left" >
							<li ><a href="index.html">Home</a></li>
							<li ><a href="tour.html">Tour</a></li>
							<li><a href="pricing.html">Pricing</a></li>
							<li ><a href="portfolio.html">Portfolio</a></li>
							<li ><a href="contact.html">Contact</a></li>
						  </ul>
						</div>
					  </div>

					</div>
				</div>
			</header>-->

<div class="section ha-waypoint"  data-animate-down="ha-header-hide" data-animate-up="ha-header-hide">
<div role="navigation" class="navbar navbar-transparent navbar-top">
     <div class="container">
	  <div class="compressed">
        <div class="navbar-header">
		   <!--<button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>-->
          <a href="#" class="navbar-brand compressed"><img src="{{ asset('images/wyndev-logo@2x.png') }}" alt="" data-src="{{ asset('images/wyndev-logo.png@2x') }}" data-src-retina="{{ asset('images/wyndev-logo@2x.png') }}" width="190" height="75" class="pull-right" /></a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left" >
			<!--<li ><a href="index.html">Home</a></li>
			<li ><a href="tour.html">Tour</a></li>
			<li><a href="pricing.html">Pricing</a></li>
			<li ><a href="portfolio.html">Portfolio</a></li>
			<li ><a href="contact.html">Contact</a></li>-->
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
</div>

<div class="section table-layout">
			<div id="working-section" class="table-cell v-middle">
				<div >
				<h2 class="text-center custom-font no-margin">Road crashes are a major cause of death and injury. </h2>
				</div>
			</div>
</div>
<div class="section white">
		<div class="container">
			<div class="p-t-60 p-b-50 ">
				<div class="row feature-list">
					<div class="col-md-4 ">
						<h4 class="custom-font title">road fatalities</h4>
						<h1 class="custom-font"><span class="number-animator" data-value="189067" data-animation-duration="800">0</span></h1>
						<div class="col-md-8 no-padding">
							<div class="progress transparent progress-small no-radius ">
							  <div class="progress-bar progress-bar-black animated-progress-bar " data-percentage="99%"></div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<h4 class="custom-font title">population of Geelong</h4>
						<h1 class="custom-font"><span class="number-animator" data-value="179689" data-animation-duration="800">0</span></h1>
						<div class="col-md-8 no-padding">
						<div class="progress transparent progress-small no-radius no-margin">
						  <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="66%" ></div>
						</div>
						</div>
					</div>
					<div class="col-md-4">
						<h4 class="custom-font title">killed at war</h4>
						<h1 class="custom-font"><span class="number-animator" data-value="102813" data-animation-duration="800">0</span></h1>
						<div class="col-md-8 no-padding">
						<div class="progress transparent progress-small no-radius no-margin">
						  <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="33%"></div>
						</div>
						</div>
					</div>
				</div>
						<div class="row">

			<h4>
			More Australians have died on our roads than all the wars combined; more than all the people in Geelong. In fact, if they all held hands the formed line would stretch from Melbourne, along the Greater Ocean Road to Warrnambool. </h4>



			<h2>We should always take due care on Victorian roads.</h2>


		</div>
			</div>
		</div>
</div>

<div class="section black">
		<div class="container">
			<div class="p-t-60 p-b-60">
				<div class="row">
					<div class="col-md-10 col-md-offset-2">
						<h2 class="text-center text-white m-b-30">Statistics show that different driver groups (sex, age) are more at risk in certain situations.
							<span class="semi-bold">Find out your crash profile:</h2>
					</div>
					<div class="row form-row">
                    <div class="col-md-6 col-md-offset-2 no-padding  col-sm-6 col-sm-offset-2 col-xs-10 col-xs-offset-1">
											<form class="form-horizontal">
	          <fieldset>

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
	              <?php $age_group = array( '0-4','5-15','16-17', '18-20', '21-25',  '26-29', '30-39','40-49', '50-59','60-69', '70+',  'UNKNOWN');?>
	              {{ Form::select('frm_age', $age_group, null, array('class'=>'form-control', 'id'=>'frm_age','name'=>'frm_age')) }}
	            </div>
	          </div>

	          </fieldset>
	          </form>
					</div>
        </div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
</div>



<div class="section">
	<section class="col-md-6">
		<h4>Map</h4><hr>
		<div id="map"></div>
	</section>

	<section  id="chart" class="col-md-6">
		<h4>Graph</h4><hr>
		<script type="text/javascript" src="{{ asset('js/line-chart.js') }}">
		</script>
</div>


<div class="section white footer">
		<div class="container">
			<div class="p-t-30 p-b-50">
				<div class="row">
					<div class="col-md-2 col-lg-2 col-sm-2  col-xs-12 xs-m-b-20">
						<div class="bold">THE TEAM</div>
						Adam Mowlam<br>
						Preethi Balan<br>
						Rajesh Krishnan
					</div>
					<div class="col-md-2 col-lg-2 col-sm-2  col-xs-12 ">
						<div class="bold">&nbsp;</div>
						Kumica Truong<br>
						Graeme Bernard<br>
						Paul Lowery
					</div>
					<div class="col-md-2 col-lg-2 col-sm-2  col-xs-12 xs-m-b-20">
						<div class="bold">GOVHACK 2015</div>
						xxx
					</div>
					<div class="col-md-2 col-lg-2 col-sm-2  col-xs-12 ">
						<div class="bold">&nbsp;</div>

					</div>
				</div>
				<!--<div class="col-md-2 col-lg-2 col-sm-2 col-xs-12 xs-m-b-20">
					<img src="images/wyndev-logo.png" alt="" data-src="images/wyndev-logo.png" data-src-retina="images/wyndev-logo.png" width="180" height="75"/>
					</div>-->
			</div>
		</div>
</div>
</div>

<script src="{{ asset('bower_components/jquery/dist/jquery.js') }}"></script>


<!-- SCRIPTS -->
<script src="{{ asset('js/jquery-ui.min.js?v=1.11.4') }}"></script>
<script src="{{ asset('js/bootstrap.min.js?v=3.3.5') }}"></script>

<script src="{{ asset('js/pace/pace.min.js') }}"></script>
<script src="{{ asset('js/jquery-unveil/jquery.unveil.min.js') }}"></script>
<script src="{{ asset('js/owl-carousel/owl.carousel.min.js') }}"></script>
<script src="{{ asset('js/waypoints.min.js') }}"></script>

<script src="{{ asset('js/jquery-nicescroll/jquery.nicescroll.min.js') }}"></script>
<script src="{{ asset('js/jquery-appear/jquery.appear.js') }}"></script>
<script src="{{ asset('js/jquery-numberAnimate/jquery.animateNumbers.js') }}"></script>

<script src="{{ asset('js/_scripts.js') }}"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/chroma-js/0.5.9/chroma.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js"></script>
<script type="text/javascript" src="{{ asset('js/dummy-data.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/leaflet/dist/leaflet.js') }}"></script>
<script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>


<!-- /SCRIPTS -->

</body>
</html>
