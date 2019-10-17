class RemoveOriginalCollection < ActiveRecord::Migration[5.2]
  def change 
    remove_column :ideas, :collection_id
    add_column :ideas, :user_id, :integer
  end
end
