###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

activate :directory_indexes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :fonts_dir, 'fonts'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # activate :imageoptim do |options|
  #   # print out skipped images
  #   options.verbose = false
  #
  #   # Setting these to true or nil will let options determine them (recommended)
  #   options.nice = true
  #   options.threads = true
  #
  #   # Image extensions to attempt to compress
  #   options.image_extensions = %w(.png .jpg .gif .svg)
  #
  #   # compressor worker options, individual optimisers can be disabled by passing
  #   # false instead of a hash
  #   # options.pngcrush_options  = {:chunks => ['alla'], :fix => false, :brute => false}
  #   # options.pngout_options    = {:copy_chunks => false, :strategy => 0}
  #   # options.advpng_options    = {:level => 4}
  #   options.pngcrush_options  = false
  #   options.pngout_options    = false
  #   options.advpng_options    = false
  #   options.optipng_options   = {:level => 6, :interlace => true}
  #   options.jpegoptim_options = {:strip => ['all'], :max_quality => 100}
  #   options.jpegtran_options  = {:copy_chunks => false, :progressive => true, :jpegrescan => true}
  #   options.gifsicle_options  = {:interlace => false}
  # end


  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
