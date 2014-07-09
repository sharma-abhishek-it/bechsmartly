class GzipRewrite < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super

    app.after_build do |builder|
      puts "Adding gz extension to assets. TODO: Should be done by google pagespeed instead"

      text = File.read('build/index.html')
      File.open('build/index.html', 'w') do |file|
        file.puts text.gsub(/\.css/, ".css.gz").gsub(/\.js/, ".js.gz").gsub(/analytics\.js\.gz/, "analytics.js")
      end
    end
  end
end

::Middleman::Extensions.register(:gzip_rewrite, GzipRewrite)
