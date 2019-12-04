class Api::IdeaJoinsController < ApplicationController
    def create
        @join = IdeaJoin.new(idea_join_params)
        if @join.save
            @idea = @join.idea
            render 'api/ideas/show'
        else 
            render json: @join.errors.full_messages
        end
    end

    def index
        @ideajoins = IdeaJoin.includes(:idea, :board, :curator).all
        # @joins = Idea.with_attached_photo.joins(:collection_id).where(collections:{id: params[:collection_id]})
        # render :index
    end

    def destroy
        @join = IdeaJoin.find(params[:id])
        @join.destroy
        render json: @join
    end

    def show
        @join = IdeaJoin.with_attached_photo(params[:id])
        render :show
    end

    private
    def idea_join_params
        params.require(:idea_join).permit(:idea_id, :collection_id)
    end
end
