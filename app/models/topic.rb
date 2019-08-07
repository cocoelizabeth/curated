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


    has_many :collections

    has_many :ideas,
    through: :collections,
    source: :ideas

end
