class HomeController < ApplicationController
  def index
    @graph = Koala::Facebook::API.new(current_user.oauth_token) if current_user
  end
end
