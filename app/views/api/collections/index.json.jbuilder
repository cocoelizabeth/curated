@collections.each do |collection|
    json.set! collection.id do
        json.extract! collection, :id, :title, :topic_id, :user_id, :idea_ids
    end
end

# this is talking to the controller
# @collections was defined with info that the model was  responsible for parsing form the db
# rails knows what under