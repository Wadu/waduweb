class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    render json: Event.all
  end

  def show
    render json: @event
  end

  def new
    @event = Event.new
  end

  def edit
    render json: @event
  end

  def create
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.json { render json: @event, status: :created }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @event.update(event_params)
        format.json { head :no_content }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:title, :description, :direction, :lat, :lng)
    end
end
