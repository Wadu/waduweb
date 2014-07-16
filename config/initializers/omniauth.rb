OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['FACEBOOK_APP_ID'], ENV['FACEBOOK_SECRET'], 
           {:scope => 'email, publish_stream, user_friends, user_events', :client_options => {:ssl => {:verify => false}}}
end