# == Schema Information
#
# Table name: topics
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord

    validates :name, uniqueness: true, presence: true


    has_many :collections,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Collection

    has_many :ideas,
    through: :collections,
    source: :ideas

end
