json.extract! idea, :id, :title, :description, :source_url, :created_at, :updated_at
json.photoUrl(idea.photo.service_url)