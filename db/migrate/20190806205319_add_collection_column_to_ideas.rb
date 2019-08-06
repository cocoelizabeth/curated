class AddCollectionColumnToIdeas < ActiveRecord::Migration[5.2]
  def change
    add_column :ideas, :collection_id, :integer
  end
end
