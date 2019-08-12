# WORKING CODE
# json.user do 
#     json.partial! "api/users/user", user: @user
# end
# json.collections do 
#      @user.collections.each do |collection|
#         json.set! collection.id do 
#             json.extract! collection, :id, :title, :description, :private, :user_id, :topic_id, :idea_ids
#             # json.partial! "api/collections/collection", collection: collection
#         end
#      end
# end




#TESTING:
json.user do 
    json.partial! "api/users/user", user: @user
end
json.collections do 
     @user.collections.each do |collection|
        json.set! collection.id do 
            json.extract! collection, :id, :title, :description, :private, :user_id, :topic_id, :idea_ids, :ideas
            # json.partial! "api/collections/collection", collection: collection
        end
     end
end