json.extract! @collection, :id, :title, :description, :private, :user_id, :topic_id, :idea_ids, :idea_join_ids
# json.partial! 'api/collections/collection', collection: @collection

# json.idea_joins do @collection.idea_joins.each do |idea_join|
    
#      collection.ideas_joins.each do |idea_join|
#         json.set! idea_join.id do 
#             json.partial! "api/ideas/idea_join", idea_join: idea_join
#         end
#      end
# end
# end