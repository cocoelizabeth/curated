require 'open-uri'
ActiveRecord::Base.transaction do
    
  User.destroy_all
  Idea.destroy_all
  Topic.destroy_all
  Collection.destroy_all

    Topic.create!([
      # {name: "Architecture"},
      {name: "Art"},
      {name: "Design"},
      {name: "Fashion"},
      {name: "Home decor"},
      {name: "Interior Design"},
      {name: "Mid-Century Modern"},
      # {name: "Minimalism"},
      {name: "Photography"},
      {name: "Travel"},
      {name: "Other"},
  ])


  user1 = User.create({email: "coco@gmail.com", password: "hunter12", first_name: "coco", last_name: "elizabeth"})
  topic1 = Topic.create({name: "Minimalism"})
  collection1 = Collection.create({title: "Aesthetic", user: user1, topic: topic1})
  idea1 = Idea.create({title:"Amangari", description:"Luxury resort in Canyon Point,Utah", source_url:"instagram.com", original_collection: collection1})
  file1 = open('https://curated-seeds.s3.amazonaws.com/image1.png')
  idea1.photo.attach(io: file1, filename: 'image1.jpg')

  idea2 = Idea.create({title:"Mexico's Grutas Tolantongo: Infinity Pools", description:"description2", source_url:"instagram.com", original_collection: collection1})
  file2 = open('https://curated-seeds.s3.amazonaws.com/image2.jpg')
  idea2.photo.attach(io: file2, filename: 'image2.jpg')

  idea3 = Idea.create({title:"title3", description:"description3", source_url:"instagram.com", original_collection: collection1})
  file3 = open('https://curated-seeds.s3.amazonaws.com/image3.jpg')
  idea3.photo.attach(io: file3, filename: 'image3.jpg')

  idea4 = Idea.create({title:"title4", description:"description4", source_url:"instagram.com", original_collection: collection1})
  file4 = open('https://curated-seeds.s3.amazonaws.com/image4.jpg')
  idea4.photo.attach(io: file4, filename: 'image4.jpg')

  idea5 = Idea.create({title:"title5", description:"description5", source_url:"instagram.com", original_collection: collection1})
  file5 = open('https://curated-seeds.s3.amazonaws.com/image5-large.jpg')
  idea5.photo.attach(io: file5, filename: 'image5.jpg')

  idea6 = Idea.create({title:"title6", description:"description31", source_url:"instagram.com", original_collection: collection1})
  file6 = open('https://curated-seeds.s3.amazonaws.com/image31-large.jpg')
  idea6.photo.attach(io: file6, filename: 'image6.jpg')

  idea7 = Idea.create({title:"9828 La Jolla Farms Rd, La Jolla, CA", description:"Property for sale in La Jolla CA - 9828 La Jolla Farms Road La Jolla CA 92037", source_url:"pacificsoothbays.com", original_collection: collection1})
  file7 = open('https://curated-seeds.s3.amazonaws.com/image30-large.jpg')
  idea7.photo.attach(io: file7, filename: 'image7.jpg')

  idea8 = Idea.create({title:"title8", description:"description8", source_url:"instagram.com", original_collection: collection1})
  file8 = open('https://curated-seeds.s3.amazonaws.com/image8-large.jpg')
  idea8.photo.attach(io: file8, filename: 'image8.jpg')

  idea9 = Idea.create({title:"Malibu home, Architectural Digest, February 1990", source_url:"architechtualdigest.com", original_collection: collection1})
  file9 = open('https://curated-seeds.s3.amazonaws.com/image32-large.jpg')
  idea9.photo.attach(io: file9, filename: 'image9.jpg')

  idea10 = Idea.create({title:"title10", description:"description10", source_url:"instagram.com", original_collection: collection1})
  file10 = open('https://curated-seeds.s3.amazonaws.com/image10.jpg')
  idea10.photo.attach(io: file10, filename: 'image10.jpg')

  idea11 = Idea.create({title:"title11", description:"description11", source_url:"instagram.com", original_collection: collection1})
  file11 = open('https://curated-seeds.s3.amazonaws.com/image11.jpg')
  idea11.photo.attach(io: file11, filename: 'image11.jpg')

  idea13 = Idea.create({title:"title13", description:"description13", source_url:"instagram.com", original_collection: collection1})
  file13 = open('https://curated-seeds.s3.amazonaws.com/image13.jpg')
  idea13.photo.attach(io: file13, filename: 'image13.jpg')



  user2 = User.create({email: "stacy@gmail.com", password: "hunter12"})
  topic2 = Topic.create({name: "Architecture"})
  collection2 = Collection.create({title: "swim", user: user1, topic: topic2})





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
    # {email: "coco@gmail.com", password: "hunter12"},
    # {email: "stacy@gmail.com", password: "hunter12"},
    {email: "eric@gmail.com", password: "hunter12"},
    {email: "deb@gmail.com", password: "hunter12"},
    {email: "demo@email.com", password: "hunter12"}
  ])
  
 end 