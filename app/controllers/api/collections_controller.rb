class Api::CollectionsController < ApplicationController

    before_action :ensure_logged_in, only: [:create, :edit]

    def index
        @collections = Collection.where(user_id: params[:user_id])
        render :index
    end

    def new
        @collection = Collection.new
        render :new
    end


    def create
        debugger
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

    def update
        deugger
        @collection = current_user.collections.find(params[:id])
        @collection.update!(collection_params)
        render :show
    end

    def destroy
        @collection = current_user.collections.find(params[:id])
        @collection.destroy
        render :index
    end

    private

    def collection_params
        debugger
        params.require(:collection).permit(:title, :description, :private, :user_id, :topic_id)
    end
end
