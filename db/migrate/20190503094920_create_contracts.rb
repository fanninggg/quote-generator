class CreateContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      t.string :services
      t.string :features
      t.string :content
      t.string :seo
      t.string :goals
      t.integer :pages

      t.timestamps
    end
  end
end
