#!/usr/bin/ruby
require 'uri'
require 'net/http'

url=ARGV[0]
raise Exception.new("bad URL") unless url =~ URI::regexp

def get_url(url)
  uri = URI(url)

  #url='www.cnn.com'
  #p Net::HTTP.new(url).request_head('/').class.to_s
  res = Net::HTTP.get_response(uri)

#  puts "Headers: #{res.to_hash.inspect}"
#  puts "Location: #{res.get_fields('Location')}"
#  puts "Code:" + res.code       # => '200'
#  puts "MSG: " + res.message    # => 'OK'
#  puts "ResClass: " + res.class.name # => 'HTTPOK'
  return res
end


res = get_url(url)

redirect_count= 0
REDIRECT_MAX = 10

while ["301","302"].include?(res.code) && redirect_count < REDIRECT_MAX
  old_url = url
  redirect_count = redirect_count + 1
  url = res.get_fields('Location').first
  res = get_url(url)
  p "Redirect from #{old_url} to #{url}"
end




# p res.headers.to_s
# p url


