require 'open-uri'

User.destroy_all
Idea.destroy_all

idea1 = Idea.create({title:"title1", description:"description1", source_url:"instagram.com"})
file1 = open('https://curated-seeds.s3.amazonaws.com/image1.png')
idea1.photo.attach(io: file1, filename: 'image1.jpg')

idea2 = Idea.create({title:"title2", description:"description2", source_url:"instagram.com"})
file2 = open('https://curated-seeds.s3.amazonaws.com/image2.jpg')
idea2.photo.attach(io: file2, filename: 'image2.jpg')

idea3 = Idea.create({title:"title3", description:"description3", source_url:"instagram.com"})
file3 = open('https://curated-seeds.s3.amazonaws.com/image3.jpg')
idea3.photo.attach(io: file3, filename: 'image3.jpg')

idea4 = Idea.create({title:"title4", description:"description4", source_url:"instagram.com"})
file4 = open('https://curated-seeds.s3.amazonaws.com/image4.jpg')
idea4.photo.attach(io: file4, filename: 'image4.jpg')

idea5 = Idea.create({title:"title5", description:"description5", source_url:"instagram.com"})
file5 = open('https://curated-seeds.s3.amazonaws.com/image5.jpg')
idea5.photo.attach(io: file5, filename: 'image5.jpg')

idea6 = Idea.create({title:"title6", description:"description6", source_url:"instagram.com"})
file6 = open('https://curated-seeds.s3.amazonaws.com/image6.jpg')
idea6.photo.attach(io: file6, filename: 'image6.jpg')

# Idea.create!([
#   {title: "this is a test idea", description: nil, source_url: "image1"},
#   {title: "nice pool", description: "love this pool", source_url: "image2"},
#   {title: "nice house", description: "beautiful", source_url: "image2"},
#   {title: "modern", source_url: "image2"},
#   {title: "this is a test idea", description: nil, source_url: "image1"},
#   {title: "nice pool", description: "love this pool", source_url: "image2"},
#   {title: "nice house", description: "beautiful", source_url: "image2"},
#   {title: "modern", source_url: "image2"},
#   {title: "this is a test idea", description: nil, source_url: "image1"},
#   {title: "nice pool", description: "love this pool", source_url: "image2"},
#   {title: "nice house", description: "beautiful", source_url: "image2"},
#   {title: "modern", source_url: "image2"},

# ])


User.create!([
  {email: "coco@gmail.com", password: "hunter12"},
  {email: "stacy@gmail.com", password: "hunter12"},
  {email: "eric@gmail.com", password: "hunter12"},
  {email: "deb@gmail.com", password: "hunter12"},
  {email: "demo@email.com", password: "hunter12"}
])
 
