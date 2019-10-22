class CreateIdeaJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :idea_joins do |t|
      t.integer :idea_id, null: false
      t.integer :collection_id, null: false
      t.timestamps
    end

    add_index :idea_joins, :idea_id
    add_index :idea_joins, :collection_id
    add_index :idea_joins, [:idea_id, :collection_id]

  end
end
