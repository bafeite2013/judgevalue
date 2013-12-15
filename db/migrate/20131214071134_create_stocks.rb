class CreateStocks < ActiveRecord::Migration
  def change
    #create_table :markets do |t|
    #  t.string :code
    #  t.string :name
    #  t.string :description
    #end

    create_table :stocks do |t|
      t.string :code
      t.string :name
      t.text :description
      #t.references :market
    end


  end
end
