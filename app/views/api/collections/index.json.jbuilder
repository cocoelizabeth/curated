json.collections do @collections.each do |collection|
    json.set! collection.id do
        json.extract! collection, :id, :title, :topic_id, :user_id, :idea_ids
    end
end
end

json.ideas do @collections.each do |collection|
     collection.ideas.each do |idea|
        json.set! idea.id do 
            json.partial! "api/ideas/idea", idea: idea
        end
     end
end
end


# this is talking to the controller
# @collections was defined with info that the model was  responsible for parsing form the db
# rails knows what under