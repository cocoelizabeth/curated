# == Schema Information
#
# Table name: collections
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  private     :boolean          default(FALSE)
#  user_id     :integer          not null
#  topic_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Collection < ApplicationRecord

    validates :title, :user_id, presence: true


    belongs_to :topic, optional: true
   

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :ideas,
    primary_key: :id,
    foreign_key: :collection_id,
    class_name: :Idea

    has_many :idea_joins,
    foreign_key: :idea_id

    


end
