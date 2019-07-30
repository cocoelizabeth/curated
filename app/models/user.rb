# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  age               :integer
#  gender            :string
#  location          :string
#  username          :string
#  first_name        :string
#  last_name         :string
#  profile_photo_url :string
#  about             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, presence:true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :username, allow_nil: true, uniqueness: true;
     
    attr_reader :password
    after_initialize :ensure_session_token
    after_initialize :set_username

    #has many
    #belongs to

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def set_username
        username = self.email.split("@")[0]
        username += self.id.to_s
        self.username = username
        self.save 
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token

    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    #figvaper
end
