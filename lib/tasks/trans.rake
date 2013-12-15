namespace :dbtrans do
  desc "transfer data from stockdb to jv"
  task :stock => :environment do
    puts "create connection to stockdb."
    $stockdb = {
      :adapter => "mysql2",
      :host => "localhost",
      :database => "stockdb",
      :username => "dbuser",
      :password => "bafeite2013"
    }

    class StockSuggest < ActiveRecord::Base
      establish_connection $stockdb
      self.table_name = "js_stocksuggest"
    end

    #fstock = File.new("stock_seeds.rb", "w")
    #fmarket = File.new("market_seeds.rb", "w")

    markets = []
    StockSuggest.find_each do |ss|
      markets << ss.maket unless markets.include? ss.maket
    end

    File.open("market_seeds.rb", "w") do |file|
      markets.each do |m|
        file << m
      end
    end



    puts "all the markets: "
    puts markets
  end

  desc "do nothing"
  task :noting do
  end

end
