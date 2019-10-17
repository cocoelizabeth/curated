# == Schema Information
#
# Table name: ideas
#
#  id            :bigint           not null, primary key
#  title         :string
#  description   :string
#  source_url    :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  collection_id :integer
#

class Idea < ApplicationRecord
    has_one_attached :photo

    belongs_to :original_collection,
    primary_key: :id,
    foreign_key: :collection_id,
    class_name: :Collection

    has_one :curator,
    through: :original_collection,
    source: :user

    has_many :idea_joins

    has_many :collections,
    through: :idea_joins,
    source: :collection

    # has_many :shared_collections, through: :idea_joins, source: :collection

end
