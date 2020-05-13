class CreateForms < ActiveRecord::Migration[6.0]
  def change
    create_table :forms do |t|
      t.string :name
      t.string :surname
      t.integer :mobile
      t.string :email
      t.integer :budget

      t.timestamps
    end
  end
end
