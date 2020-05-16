class CreateForms < ActiveRecord::Migration[6.0]
  def change
    create_table :forms do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.integer :mobile
      t.string :email
      t.text :description

      t.timestamps
    end
  end
end
