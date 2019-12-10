class Api::UsersController < ApplicationController

    # Create new user 
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
         @user = User.find(params[:id])
    end

    # Future implementation

    # edit user profile
    # def update
    # end

    # delete account
    # def destroy
    # end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
