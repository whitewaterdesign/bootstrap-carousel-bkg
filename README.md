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
  <li>Use the cdn <code>&#x3C;script src=&#x22;https://cdn.jsdelivr.net/gh/whitewaterdesign/bootstrap-carousel-bkg/bcb.js&#x22;&#x3E;&#x3C;/script&#x3E;</code></li>
</ul>
<h2 id="usage">Usage</h2>
<p>Add requirements</p>
<pre>
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css&#x22; integrity=&#x22;sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh&#x22; crossorigin=&#x22;anonymous&#x22;&#x3E;
&#x3C;script src=&#x22;https://code.jquery.com/jquery-3.4.1.js&#x22; integrity=&#x22;sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=&#x22; crossorigin=&#x22;anonymous&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;script src=&#x22;https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js&#x22; integrity=&#x22;sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6&#x22; crossorigin=&#x22;anonymous&#x22;&#x3E;&#x3C;/script&#x3E;
</pre>
<p>Add stylesheet <code>&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;whitewaterdesign/bootstrap-carousel-bkg/bcb.css&#x22;&#x3E;</code></p>
<p>Add bcb script <code>&#x3C;script src=&#x22;whitewaterdesign/bootstrap-carousel-bkg/bcb.js&#x22;&#x3E;&#x3C;/script&#x3E;</code></p>
<p>Create a bootstrap carousel with id <code>#bcb-carousel</code> and <code>js_image=&#x22;[url]&#x22;</code> parameters on <code>.carousel-item</code> divs for background images</p>
<pre>
&#x3C;div id=&#x22;bcb-carousel&#x22; class=&#x22;carousel slide carousel-fade&#x22; data2-ride=&#x22;carousel&#x22;&#x3E;
  &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;   &#x9;
          &#x3C;!-- Slide 1 --&#x3E;
          &#x3C;div id=&#x22;page1&#x22; class=&#x22;carousel-item active&#x22; js_image=&#x22;[url]&#x22;&#x3E;
            &#x3C;div class=&#x22;inner_item min-vh-100&#x22;&#x3E;[content]&#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;!-- /Slide 1 --&#x3E;
          &#x3C;!-- Slide 2 --&#x3E;
          &#x3C;div id=&#x22;page2&#x22; class=&#x22;carousel-item&#x22; js_image=&#x22;[url]&#x22;&#x3E;
            &#x3C;div class=&#x22;inner_item min-vh-100&#x22;&#x3E;[content]&#x3C;/div&#x3E;
          &#x3C;/div&#x3E;
          &#x3C;!-- /Slide 2 --&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</pre>
