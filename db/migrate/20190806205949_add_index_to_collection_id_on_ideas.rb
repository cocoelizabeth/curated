class AddIndexToCollectionIdOnIdeas < ActiveRecord::Migration[5.2]
  def change
    add_index :ideas, :collection_id
  end
end
