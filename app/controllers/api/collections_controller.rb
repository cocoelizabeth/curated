class Api::CollectionsController < ApplicationController

    before_action :ensure_logged_in, only: [:new, :edit]

    def index
        @collections = Collection.all.includes(:curator)
        render :index
    end

    def new
        @collection = Collection.new
        render :new
    end


    def create
        @collection = current_user.collections.new(collection_params)
        @collection.user_id = current_user.id

        if @collection.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
         @collection = Collection.find(params[:id])
    end

    def edit
        @collection = Collection.find(params[:id])
        redirect_to api_collection_url(@collection) unless @collection.user = current_user
    end

    private

    def collection_params
        params.require(:collection).permit(:title, :description, :private, :user_id, :topic_id)
    end
end
