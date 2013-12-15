# -*- coding: utf-8 -*-
namespace :dbtrans do
  task :prepare_database do
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

    class AppBafeite < ActiveRecord::Base
      establish_connection $stockdb
      self.table_name = "app_bafeite"
    end
  end

  desc "print markets from stcokdb - js_stocksuggest"
  task markets_in_stock: [:prepare_database] do
    markets = []
    StockSuggest.find_each do |ss|
      markets << ss.maket unless markets.include? ss.maket
    end

    puts "#{markets.length} markets in stockdb:js_stocksuggest: "
    puts markets
  end

  desc "dump data from stockdb to file"
  task dump_stocksuggest: [:prepare_database] do
    #market_mapping = {
    #  "深圳A" => "SZAZ", "中小板" => "SZAZX", "深圳B" => "SZB",
    #  "创业板" => "SZACY", "上海A" => "SHAZ", "上海B" => "SHB"
    #}

    File.open("db/datadump/stocksuggest.rb", "w") do |file|
      file.puts "stocksuggests = ["
      StockSuggest.find_each do |ss|
        #market_name = market_mapping[ss.maket]
        #raise "unkown market #{ss.maket}, update this task" if market_name.nil?
        #market = Market.find_by name: market_name
        #raise "did you forget to insert values to markets table?" if market.nil?
        file.puts "['#{ss.Stkcd}', '#{ss.Stknme}', '#{ss.maket}', '#{ss.Indcd}'],"
      end
      file.puts "                ]"
    end
  end

  desc "dump stockdb::app_bafeite to file"
  task dump_app_bafeite: [:prepare_database] do
    File.open("db/datadump/app_bafeite.rb", "w") do |file|
      file.puts "app_bafeite = ["
      AppBafeite.find_each do |ab|
        file.puts "{code: '#{ab.Stkcd}'"
        file.puts ", eps_last10: '#{ab.EPS_last10}', bps_last10: '#{ab.BPS_last10}'"
        file.puts ", roe_last10: '#{ab.ROE_last10}', per_last10: '#{ab.PER_last10}'"
        file.puts ", pbr_last10: '#{ab.PBR_last10}', bcf_last10: '#{ab.BCF_last10}'"
        file.puts ", icf_last10: '#{ab.ICF_last10}', fincf_lat10: '#{ab.FinCF_last10}'"
        file.puts ", debt_last10: '#{ab.Debt_last10}', cash_last10: '#{ab.Cash_last10}'"
        file.puts ", netpro_last10: '#{ab.NetPro_last10}', netprorate_lat10: '#{ab.NetProRate_last10}'},"
      end
      file.puts "              ]"
    end
  end

  desc "dump stockdb to file"
  task dump_stockdb: [:dump_stocksuggest, :dump_app_bafeite] do
  end

end
