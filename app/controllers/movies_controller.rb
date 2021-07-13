class MoviesController < ApplicationController
  def index
    if params[:query].present?
      @query = params[:query]
      @movies = Movie.where("title LIKE ?", "%#{params[:query]}%")
    else
      @movies = Movie.all
    end
  end

  def show
  end
end
