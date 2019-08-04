json.extract! idea, :id, :title, :description, :source_url, :created_at, :photo, :updated_at
json.url api_idea_url(idea, format: :json)
