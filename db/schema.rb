# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131214091918) do

  create_table "buffett_indices", force: true do |t|
    t.integer "stock_id"
    t.integer "year"
    t.string  "earnings_per_share"
    t.string  "net_assets_per_share"
    t.string  "return_on_equity"
    t.string  "price_earnings_raiio"
    t.string  "price_book_ratio"
    t.string  "current_liabilities"
    t.string  "end_of_term_cash"
    t.string  "business_cash_flow"
    t.string  "investment_cash_flow"
    t.string  "financing_cash_flow"
    t.string  "net_profit"
    t.string  "net_profit_rate"
  end

  create_table "stocks", force: true do |t|
    t.string "code"
    t.string "name"
    t.text   "description"
  end

end
