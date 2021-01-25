class CreateMaterials < ActiveRecord::Migration[6.0]
  def change
    create_table :materials do |t|
      t.string :name
      t.decimal :length
      t.decimal :width
      t.decimal :height
      t.decimal :price

      t.timestamps
    end
  end
end
