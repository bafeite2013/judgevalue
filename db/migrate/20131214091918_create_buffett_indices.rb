class CreateBuffettIndices < ActiveRecord::Migration
  def change
    create_table :buffett_indices do |t|

      t.timestamps
    end
  end
end
