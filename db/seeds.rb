User.destroy_all
Idea.destroy_all

Idea.create!([
  {title: "this is a test idea", description: nil, source_url: "image1"}
])
User.create!([
  {email: "coco@gmail.com", password: "hunter12"},
  {email: "stacy@gmail.com", password: "hunter12"},
  {email: "eric@gmail.com", password: "hunter12"},
  {email: "deb@gmail.com", password: "hunter12"},
  {email: "demo@email.com", password: "hunter12"}
])
 
