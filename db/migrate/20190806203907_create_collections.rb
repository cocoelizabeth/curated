class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.string :description
      t.boolean :private, default: false
      t.integer :user_id,  null: false
      t.integer :topic_id, null: false
      t.timestamps
    end
    add_index :collections, :user_id
    add_index :collections, :topic_id
    add_index :collections, :title
  end
end
