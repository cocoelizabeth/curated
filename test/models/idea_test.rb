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

require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
