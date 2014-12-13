# You may add here your
# server {
#	...
# }
# statements for each of your virtual hosts to this file

##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# http://wiki.nginx.org/Pitfalls
# http://wiki.nginx.org/QuickStart
# http://wiki.nginx.org/Configuration
#
# Generally, you will want to move this file somewhere, and start with a clean
# file but keep this around for reference. Or just disable in sites-enabled.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

upstream blog.parade.io {
    server localhost:8080;
}


server {
	server_name blog.parade.io;
	root /usr/share/nginx/blog;
	try_files $uri @blog_app;
	client_max_body_size 10m;

	location @blog_app {
		proxy_redirect off;
		proxy_pass http://blog.parade.io;
	}
}

server {
	server_name parade.io www.parade.io;
	root /usr/share/nginx/www;
	index index.html index.htm;
}

server
{
    server_name betway.parade.io;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;


    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    location /css/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;
	set $target https://casino.betway.com;

        proxy_pass $target;
        proxy_set_header  accept-encoding  "identity";
        proxy_max_temp_file_size 0;
        subs_filter_types text/html;
        subs_filter <head> '<head> <script src="//cdn.optimizely.com/js/1960640166.js"></script> <script src="/js/betway/inject.js"></script>' ir;
    }
}

server
{
    server_name 24option.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /parade/ {
        root /usr/share/nginx/parade/24option.com/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass https://www.24option.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
        subs_filter '<head profile="http://gmpg.org/xfn/11">' '<head profile="http://gmpg.org/xfn/11"><script src="//cdn.optimizely.com/js/1960640166.js"></script> </script><script src="/parade/js/inject.js"></script>' ir;
        subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script> <script src="/parade/js/inject.js"></script>' ir;
	subs_filter '(https://www.24option.com)' 'http://24option.parade.io' ir;
	subs_filter '<img src="/wp-content/uploads/' '<img src="https://www.24option.com/wp-content/uploads/' ir;
	subs_filter 'img\s*src\s*="/' 'img src="https://www.24option.com/' ir;
	subs_filter 'src="/wp-content/plugins/' 'src="https://www.24option.com/wp-content/plugins/' ir;
	subs_filter 'src="/wp-content/uploads/' 'src="https://www.24option.com/wp-content/uploads/' ir;
	subs_filter 'src="/wp-content/uploads/' 'src="https://www.24option.com/wp-content/uploads/' ir;
	subs_filter 'url\("/wp-content/' 'url("https://www.24option.com/wp-content/' ir;
	subs_filter 'src="http://24option.parade.io/binary/lp-jsp' 'src="https://www.24option.com/binary/lp-jsp' ir;
	subs_filter 'url\("http://24option.parade.io/wp-content/themes/' 'url("https://www.24option.com/wp-content/themes/' ir;
#        proxy_cache_valid any 100m;
	proxy_connect_timeout 10;
#	proxy_cache_methods GET HEAD;
	proxy_cookie_domain .24option.com 24option.parade.io;
	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
    }
}


server
{
    server_name intercasino.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    location /css/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass https://www.intercasino.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
	subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script><script src="/js/intercasino/inject.js"></script>' ir;

#	proxy_cache_valid any 60m;
#        proxy_cache_min_uses 1;
	proxy_connect_timeout 10;
#	proxy_cache_use_stale updating;

	proxy_cookie_domain .intercasino.com intercasino.parade.io;
	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
    }
}


server
{
    server_name comeon.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    location /css/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass https://www.comeon.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
	subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script><script src="/js/comeon/inject.js"></script>' ir;

#	proxy_cache_valid any 60m;
#        proxy_cache_min_uses 1;
	proxy_connect_timeout 10;
#	proxy_cache_use_stale updating;

	proxy_cookie_domain .comeon.com comeon.parade.io;
	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
    }
}


server
{
    server_name galacasino.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    location /css/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass http://promo.galacasino.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
	subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script><script src="/js/galacasino/inject.js"></script>' ir;

#	proxy_cache_valid any 60m;
#        proxy_cache_min_uses 1;
	proxy_connect_timeout 10;
#	proxy_cache_use_stale updating;

	proxy_cookie_domain .galacasino.com .galacasino.parade.io;
	proxy_cookie_domain promo.galacasino.com .galacasino.parade.io;
	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
    }
}


server
{
    server_name winner.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /parade/ {
        root /usr/share/nginx/parade/winner.com/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass http://casino.winner.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
	subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script><script src="/parade/js/inject.js"></script>' ir;

#	proxy_cache_valid any 60m;
#        proxy_cache_min_uses 1;
	proxy_connect_timeout 10;
#	proxy_cache_use_stale updating;

	proxy_cookie_domain .winner.com winner.parade.io;
	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
    }
}


server
{
    server_name conancasino.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    location /css/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass http://promo.conancasino.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
	subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script><script src="/js/conancasino/inject.js"></script>' ir;

#	proxy_cache_valid any 60m;
#        proxy_cache_min_uses 1;
	proxy_connect_timeout 10;
#	proxy_cache_use_stale updating;

	proxy_cookie_domain .conancasino.com conancasino.parade.io;
	proxy_buffering    off;
	proxy_buffer_size  128k;
	proxy_buffers 100  128k;
    }
}












server
{
    server_name optionaffiliates.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass http://www.optionaffiliates.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
        subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script> <script src="/js/betway/inject.js"></script>' ir;
    }
}

server
{
    server_name empireoption.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass https://www.empireoption.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
        subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script> <script src="/js/betway/inject.js"></script>' ir;
    }
}

server
{
    server_name traderush.parade.io;
    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

    location /js/ {
        root /usr/share/nginx/parade/;    
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;

        proxy_pass http://www.traderush.com;
        proxy_set_header  accept-encoding  "identity";
        subs_filter_types text/html;
        subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script> <script src="/js/betway/inject.js"></script>' ir;
    }
}


server
{
#    server_name ~^(?P<subdomain>.+)\.parade\.io$;
    server_name ~^((?<subdomain>.*)\.)?(?<domain>[^.]+)\.(?<tld>[^.]+)\.s\.parade\.io$;

    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /parade/ {
        root /usr/share/nginx/parade/$domain.$tld/;
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;
#        proxy_pass $scheme://$subdomain;
        proxy_pass https://$subdomain.$domain.$tld;
	proxy_redirect https://$subdomain.$domain.$tld http://$subdomain.$domain.$tld.parade.io;
	proxy_redirect https://www.$subdomain.$domain.$tld http://$subdomain.$domain.$tld.parade.io;
	proxy_redirect https://www.fiverr.com http://www.fiverr.com.s.parade.io;
	proxy_redirect http://www.fiverr.com http://www.fiverr.com.parade.io;
	proxy_redirect https://www.cosmikcasino.com http://www.cosmikcasino.com.s.parade.io;
        proxy_set_header  accept-encoding  "identity";
        proxy_cookie_domain .$subdomain.$domain.$tld .$subdomain.$domain.$tld.parade.io;
        proxy_cookie_domain .$domain.$tld .$domain.$tld.parade.io;

        subs_filter_types text/html;
#        subs_filter <head> '<head> <script src="/parade/$subdomain/inject.js"></script>' ir;
        subs_filter '<head profile="http://gmpg.org/xfn/11">' '<head profile="http://gmpg.org/xfn/11"><script src="//cdn.optimizely.com/js/1960640166.js"></script> </script><script src="/parade/js/inject.js"></script>' ir;
	subs_filter 'https://www.cosmikcasino.com/wp-content' 'http://www.cosmikcasino.com.s.parade.io/wp-content' ir;
	subs_filter 'window.WP_URL = "https://www.cosmikcasino.com";' 'window.WP_URL = "http://www.cosmikcasino.com.s.parade.io";' ir;
    }
}

server
{
    server_name ~^(?<domain>[^.]+)\.(?<tld>[^.]+)\.parade\.io$;

    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /parade/ {
        root /usr/share/nginx/parade/$domain.$tld/;
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;
        proxy_pass http://$domain.$tld;
	proxy_redirect http://$subdomain.$domain.$tld http://$subdomain.$domain.$tld.parade.io;
	proxy_redirect http://www.$subdomain.$domain.$tld http://$subdomain.$domain.$tld.parade.io;
	proxy_redirect http://binary.$domain.$tld http://binary.$domain.$tld.parade.io;
	proxy_redirect http://options.$domain.$tld http://options.$domain.$tld.parade.io;
	proxy_redirect http://aff.$domain.$tld http://aff.$domain.$tld.parade.io;
	proxy_redirect http://nlp.$domain.$tld http://nlp.$domain.$tld.parade.io;
	proxy_redirect http://www.fiverr.com http://www.fiverr.com.parade.io;
	proxy_redirect https://www.fiverr.com http://www.fiverr.com.s.parade.io;
	proxy_redirect http://traderush.com http://www.traderush.com.parade.io;
	proxy_redirect http://www.traderush.com http://www.traderush.com.parade.io;
	proxy_redirect https://www.cosmikcasino.com http://www.cosmikcasino.com.s.parade.io;
        proxy_set_header  accept-encoding  "identity";
        proxy_cookie_domain .$subdomain.$domain.$tld .$subdomain.$domain.$tld.parade.io;
        proxy_cookie_domain .$domain.$tld .$domain.$tld.parade.io;

        subs_filter_types text/html; #application/javascript text/javascript;
        subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script> </script><script src="/parade/js/inject.js"></script>' ir;
	subs_filter "//static.winner.com" "//static.winner.com.parade.io" ir;
	subs_filter "binary.traderush.com" "binary.traderush.com.parade.io" ir;
    }
}

server
{
    server_name ~^((?<subdomain>.*)\.)?(?<domain>[^.]+)\.(?<tld>[^.]+)\.parade\.io$;

    listen 80;
    access_log /var/log/nginx/parade_access.log;
    error_log /var/log/nginx/parade_error.log;

#    proxy_cache one;

    location /parade/ {
        root /usr/share/nginx/parade/$domain.$tld/;
    }

    try_files $uri @parade;

    location @parade {
        resolver 8.8.8.8;
#        proxy_pass $scheme://$subdomain;
        proxy_pass http://$subdomain.$domain.$tld;
	proxy_redirect http://$subdomain.$domain.$tld http://$subdomain.$domain.$tld.parade.io;
	proxy_redirect http://www.$subdomain.$domain.$tld http://$subdomain.$domain.$tld.parade.io;
	proxy_redirect http://binary.$domain.$tld http://binary.$domain.$tld.parade.io;
	proxy_redirect http://options.$domain.$tld http://options.$domain.$tld.parade.io;
	proxy_redirect http://aff.$domain.$tld http://aff.$domain.$tld.parade.io;
	proxy_redirect http://nlp.$domain.$tld http://nlp.$domain.$tld.parade.io;
	proxy_redirect http://www.fiverr.com http://www.fiverr.com.parade.io;
	proxy_redirect https://www.fiverr.com http://www.fiverr.com.s.parade.io;
	proxy_redirect http://traderush.com http://www.traderush.com.parade.io;
	proxy_redirect http://www.traderush.com http://www.traderush.com.parade.io;
	proxy_redirect https://www.cosmikcasino.com http://www.cosmikcasino.com.s.parade.io;
        proxy_set_header  accept-encoding  "identity";
        proxy_cookie_domain .$subdomain.$domain.$tld .$subdomain.$domain.$tld.parade.io;
        proxy_cookie_domain .$domain.$tld .$domain.$tld.parade.io;

        subs_filter_types text/html; #application/javascript text/javascript;
        subs_filter '<head>' '<head><script src="//cdn.optimizely.com/js/1960640166.js"></script> </script><script src="/parade/js/inject.js"></script>' ir;
	subs_filter "//static.winner.com" "//static.winner.com.parade.io" ir;
	subs_filter "binary.traderush.com" "binary.traderush.com.parade.io" ir;
    }
}
