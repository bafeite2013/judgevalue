# -*- coding: utf-8 -*-
class CreateBuffettIndices < ActiveRecord::Migration
  def change
    create_table :buffett_indices do |t|
      t.references :stock
      t.integer :year, null:false
      t.string :earnings_per_share, null:false, default:""
      t.string :net_assets_per_share, null:false, default:""
      t.string :return_on_equity, null:false, default:"" #净资产收益率
      t.string :price_earnings_ratio, null:false, default:"" #市盈率
      t.string :price_book_ratio, null:false, default:"" #市净率
      t.string :current_liabilities, null:false, default:"" #流动负债
      t.string :end_of_term_cash, null:false, default:"" #期末现金净额
      t.string :business_cash_flow, null:false, default:""
      t.string :investment_cash_flow, null:false, default:""
      t.string :financing_cash_flow, null:false, default:""
      t.string :net_profit, null:false, default:""
      t.string :net_profit_rate, null:false, default:""
    end
  end
end
