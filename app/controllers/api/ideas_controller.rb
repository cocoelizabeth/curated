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
    if @idea.save
      @idea.photo.attach(idea_params[:photo])
      render :show
    else 
      render json: @idea.errors.full_messages
    end
    
    # respond_to do |format|
    #   if @idea.save
    #      format.json { render json: "idea saved" }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @idea.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  def update
    respond_to do |format|
      if @idea.update(idea_params)
      else
        format.html { render :edit }
        format.json { render json: @idea.errors, status: :unprocessable_entity }
      end
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
      params.require(:idea).permit(:title, :description, :user_id, :source_url, :original_collection, :collection_id, :photo, :photoUrl, :photoType)
    end
end
