# == Schema Information
#
# Table name: ideas
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :string
#  source_url  :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#

class Idea < ApplicationRecord
    has_one_attached :photo

    belongs_to :curator,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :idea_joins

    has_many :collections,
    through: :idea_joins
end
