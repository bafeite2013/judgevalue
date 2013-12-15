# -*- coding: utf-8 -*-
class CreateBuffettIndices < ActiveRecord::Migration
  def change
    create_table :buffett_indices do |t|
      t.references :stock
      t.integer :year
      t.string :earnings_per_share
      t.string :net_assets_per_share
      t.string :return_on_equity #净资产收益率
      t.string :price_earnings_ratio #市盈率
      t.string :price_book_ratio #市净率
      t.string :current_liabilities #流动负债
      t.string :end_of_term_cash #期末现金净额
      t.string :business_cash_flow
      t.string :investment_cash_flow
      t.string :financing_cash_flow
      t.string :net_profit
      t.string :net_profit_rate
    end
  end
end
