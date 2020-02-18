# jQuery Bootstrap Background Carousel

<p>A customisation to Bootstrap Carousel which updates a whole page background image on automatic play using jQuery</p>

<h2 id="requirements">Requirements</h2>
<ul>
  <li>jQuery</li>
  <li>bootstrap.css</li>
  <li>bootstrap.js</li>
</ul>
<h2 id="installation">Installation</h2>
<ul>
  <li>Clone repo <code>git clone https://github.com/whitewaterdesign/bootstrap-carousel-bkg.git</code></li>
  <li>Use the cdn <code><script src="https://cdn.jsdelivr.net/gh/whitewaterdesign/bootstrap-carousel-bkg/bcb.js"></script></code></li>
</ul>
<h2 id="usage">Usage</h2>
<p>Add requirements</p>
<pre>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</pre>
<p>Add stylesheet <code><link rel="stylesheet" href="whitewaterdesign/bootstrap-carousel-bkg/bcb.css"></code></p>
<p>Add bcb script <code><script src="whitewaterdesign/bootstrap-carousel-bkg/bcb.js"></script></code></p>
<p>Create a bootstrap carousel with id <code>#bcb-carousel</code> and <code>js_image="[url]"</code> parameters on <code>.carousel-item</code> divs for background images</p>
<pre>
<div id="bcb-carousel" class="carousel slide carousel-fade" data2-ride="carousel">
  <div class="carousel-inner">   	
          <!-- Slide 1 -->
          <div id="page1" class="carousel-item active" js_image="[url]">
            <div class="inner_item min-vh-100">[content]</div>
          </div>
          <!-- /Slide 1 -->
          <!-- Slide 2 -->
          <div id="page2" class="carousel-item" js_image="[url]">
            <div class="inner_item min-vh-100">[content]</div>
          </div>
          <!-- /Slide 2 -->
    </div>
</div>
</pre>
