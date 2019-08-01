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
#

class Idea < ApplicationRecord
    has_one_attached :photo
end
