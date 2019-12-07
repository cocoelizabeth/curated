class Api::IdeasController < ApplicationController
  before_action :set_idea, only: [:show, :edit, :update, :destroy]

  def index
    if params[:user_id] 
      
      @ideas = Idea.with_attached_photo.joins(:curator).where(users:{id: params[:user_id]})
    else
      @ideas = Idea.with_attached_photo.all
    end
    
    render :index
  end


  def show
    @idea = Idea.with_attached_photo.find(params[:id])
    render :show
  end


  def new
    @idea = Idea.new
  end

 
  def edit
  end


  def create
    
    @idea = Idea.new(idea_params)
    @idea.curator = current_user

    if @idea.save
      @idea.photo.attach(idea_params[:photo])
      # IdeaJoin.create(idea: @idea, collection_id:params[:collection_id])
      render :show
    else 
      render json: @idea.errors.full_messages
    end
    

  end

  def update
    collection_id = params[:idea][:collection_ids].to_i
    # @idea = idea.find(params[:id])

      if @idea.update(idea_params)
        IdeaJoin.create(idea: @idea, collection_id: collection_id)
        render :show
      else
        render json: @idea.errors.full_messages
      end
   end


  def destroy
    @idea.destroy
    respond_to do |format|
      format.html { redirect_to api_ideas_url, notice: 'Idea was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_idea
      @idea = Idea.find(params[:id])
    end

    def idea_params
      params.require(:idea).permit(:title, :description, :user_id, :source_url, :collection_ids, :photo, :photoUrl, :photoType)
    end
end
