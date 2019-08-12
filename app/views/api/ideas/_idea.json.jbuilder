
json.extract! idea, :id, :title, :description, :original_collection, :curator, :source_url, :created_at, :updated_at
json.curatorId idea.curator.id
json.photoUrl(idea.photo.service_url)