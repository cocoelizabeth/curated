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
  
  user1 = User.create({email: "coco@gmail.com", password: "hunter12", first_name: "coco", last_name: "elizabeth", location: "New York, New York"})
  user2 = User.create({email: "stacy@gmail.com", password: "hunter12"})
  user3 = User.create( {email: "demo@email.com", password: "hunter12"})


  
  topic1 = Topic.create({name: "Minimalism"})
  topic2 = Topic.create({name: "Architecture"})
  topic3 = Topic.create({name: "Travel"})



  collection1 = Collection.create({title: "aesthetic", user: user1, topic: topic1})
  collection2 = Collection.create({title: "swim", user: user1, topic: topic2})
  collection3 = Collection.create({title: "minimalism", user: user1, topic: topic2})
  collection4 = Collection.create({title: "Exterior", user: user2, topic: topic2})
  collection5 = Collection.create({title: "Interior", user: user2, topic: topic2})
  collection6 = Collection.create({title: "Travel", user: user2, topic: topic3})
  collection7 = Collection.create({title: "// WHITE", user: user3, topic: topic1})
  collection8 = Collection.create({title: "// DUSTY PINK", user: user3, topic: topic2})
  collection9 = Collection.create({title: "zen", user: user1, topic: topic2})
  collection10 = Collection.create({title: "neutral colors", user: user1, topic: topic2})
  collection11 = Collection.create({title: "texture", user: user1, topic: topic2})

  idea1 = Idea.create({title:"Amangiri Resort Utah", description:"Luxury Hotel & Spa in Canyon Point, Utah", source_url:"vogue.com", curator: user1})
  file1 = open('https://curated-seeds.s3.amazonaws.com/image1.png')
  idea1.photo.attach(io: file1, filename: 'image1.png')

  idea2 = Idea.create({title:"Mexico's Grutas Tolantongo: Infinity Pools", description:"The Vogue Guide to Mexico City", source_url:"vogue.com", curator: user1})
  file2 = open('https://curated-seeds.s3.amazonaws.com/image2.jpg')
  idea2.photo.attach(io: file2, filename: 'image2.jpg')

  idea3 = Idea.create({title:"Modern Outdoor Living Space", description:"Modern open plan outdoor living, featured in Architectural Digest magazine", source_url:"architechturaldigest.com", curator: user1})
  file3 = open('https://curated-seeds.s3.amazonaws.com/image3.jpg')
  idea3.photo.attach(io: file3, filename: 'image3.jpg')

#minimalism, white
  idea4 = Idea.create({title:"Residence in Mykonos | Block722 Architects", description:"Photo by Jorge Consuello", source_url:"block722.com", curator: user1})
  file4 = open('https://curated-seeds.s3.amazonaws.com/image4.jpg')
  idea4.photo.attach(io: file4, filename: 'image4.jpg')

#minimalism, white
  idea5 = Idea.create({title:"White Walls", description:"Residence in Mykonos | Block722 Architects", source_url:"block722.com", curator: user1})
  file5 = open('https://curated-seeds.s3.amazonaws.com/image5-large.jpg')
  idea5.photo.attach(io: file5, filename: 'image5.jpg')

  ##minimalism, zen
  idea6 = Idea.create({title:"Louis Corccyra Beach Hotel || Block722 architects+", description:"Photo by Jorge Consuello", source_url:"block722.com", curator: user1})
  file6 = open('https://curated-seeds.s3.amazonaws.com/image31-large.jpg')
  idea6.photo.attach(io: file6, filename: 'image6.jpg')
#minimalism, white
  idea7 = Idea.create({title:"9828 La Jolla Farms Rd, La Jolla, CA", description:"Property for sale in La Jolla CA - 9828 La Jolla Farms Road La Jolla CA 92037", source_url:"pacificsoothbays.com", curator: user2})
  file7 = open('https://curated-seeds.s3.amazonaws.com/image30-large.jpg')
  idea7.photo.attach(io: file7, filename: 'image7.jpg')

  #blush
  idea8 = Idea.create({title:"Arches", description:"Soft colors and shapes", source_url:"uploaded by user", curator: user2})
  file8 = open('https://curated-seeds.s3.amazonaws.com/image8-large.jpg')
  idea8.photo.attach(io: file8, filename: 'image8.jpg')

  #blush
  idea9 = Idea.create({title:"Malibu home, Architectural Digest, February 1990", source_url:"architechtualdigest.com", curator: user2})
  file9 = open('https://curated-seeds.s3.amazonaws.com/image32-large.jpg')
  idea9.photo.attach(io: file9, filename: 'image9.jpg')

  #minimalism, white
  idea10 = Idea.create({title:"Mykonos", description:"Travel blogger in Mykonos", source_url:"instagram.com", curator: user2})
  file10 = open('https://curated-seeds.s3.amazonaws.com/image10.jpg')
  idea10.photo.attach(io: file10, filename: 'image10.jpg')


  idea11 = Idea.create({title:"Modern Japanese Zen", description:"Calm neutural colors, clean lines and texture", source_url:"instagram.com", curator: user3})
  file11 = open('https://curated-seeds.s3.amazonaws.com/image11.jpg')
  idea11.photo.attach(io: file11, filename: 'image2.jpg')

  idea13 = Idea.create({title:"Cactus Garden", description:"Patio in Brisbane, Australia", source_url:"", curator: user3})
  file13 = open('https://curated-seeds.s3.amazonaws.com/image13.jpg')
  idea13.photo.attach(io: file13, filename: 'image13.jpg')


  # Idea Joins

    ij1 = IdeaJoin.create(idea: idea1, collection: collection7)
    ij2 = IdeaJoin.create(idea: idea2, collection: collection8)
    ij3 = IdeaJoin.create(idea: idea3, collection: collection6)
    ij4 = IdeaJoin.create(idea: idea4, collection: collection8)
    ij5 = IdeaJoin.create(idea: idea5, collection: collection7)
    ij6 = IdeaJoin.create(idea: idea1, collection: collection6)
    ij7 = IdeaJoin.create(idea: idea6, collection: collection8)
    ij8 = IdeaJoin.create(idea: idea7, collection: collection7)
    ij9 = IdeaJoin.create(idea: idea2, collection: collection6)


    end