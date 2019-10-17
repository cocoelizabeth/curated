
json.extract! idea, :id, :title, :description, :curator, :source_url, :created_at, :updated_at
json.original_collection idea.collections.first
json.collections idea.collection_ids
json.curatorId idea.curator.id
json.photoUrl(idea.photo.service_url)