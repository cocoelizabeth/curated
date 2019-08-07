json.idea do
    json.partial! "api/ideas/idea", idea: @idea
end

json.curator do
    json.extract! @idea.curator, :id, :username
end