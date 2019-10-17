# == Schema Information
#
# Table name: idea_joins
#
#  id            :bigint           not null, primary key
#  idea_id       :integer          not null
#  collection_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class IdeaJoin < ApplicationRecord
    belongs_to :idea
    belongs_to :collection
end
