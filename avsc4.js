var th_bridge_jump_step = 0;
$(function () {
  $('.btn-fin').click(function () {
    var link = $(this).attr('href');
    var script = document.createElement('script');
    var first_pixel='497';
    script.src = 
'http://ads.traffichunt.com/adx-dir-d/match-bridgejump?fp='+first_pixel;
    script.onload = function () {
      setTimeout(function () {
        location.href = link;
      }
                  , 500);
      var load_counter = 0;
      var pixel_count = 0;
      var img_callback = function () {
        load_counter++;
        if (load_counter >= pixel_count) {
          location.href = link;
        }
      };
      var addPixel = function (pixel_link) {
        var pixel = new Image(1, 1);
        pixel.onerror = img_callback;
        pixel.onload = img_callback;
        pixel.src = pixel_link;
        pixel_count++;
      };
      if (th_bridge_jump_step == 1) {
        addPixel("http://ads.traffichunt.com/adv_ret/?adv_pixel_id=498");

addPixel("http://main.exoclick.com/tag.php?goal=33daec0dbf4ef64ec090615b090388ac");
        addPixel("//tag.reporo.net/rem/rjc_imirt");
        addPixel("http://delivery.trafficforce.com/retargeting.php?id=47");

addPixel("https://tsyndicate.com/api/v1/retargeting/set/967417ac-ce7e-4e0c-8bf8-f71b6bde7d06?tracking=1");
addPixel("http://ctrack.trafficjunky.net/ctrack?action=list&type=add&id=imi2&context=xyzCP&cookiename=imi2&maxcookiecount=10");
      }
      else {

addPixel("http://ads.traffichunt.com/adv_ret/?adv_pixel_id="+first_pixel);

addPixel("http://main.exoclick.com/tag.php?goal=cfd92845e5676a0a7b981f5387968e1b");

addPixel("https://tsyndicate.com/api/v1/retargeting/set/e9ce598f-ae7b-41ab-9e3b-26c96f334869?tracking=1");

addPixel("http://ctrack.trafficjunky.net/ctrack?action=list&type=add&id=imi1&context=xyzCPM&cookiename=imi1&maxcookiecount=10");
      }
    };
    script.onerror = function () {
      location.href = link;
    };
    document.body.appendChild(script);
    return false;
  }
                      );
}
  );
