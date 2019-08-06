class ChangeTopicNullConstraintOnCollections < ActiveRecord::Migration[5.2]
  def change
    change_column_null :collections, :topic_id, true
  end
end
