OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, FACEBOOK['facebook_app_id'], FACEBOOK['facebook_secret'], 
           {:scope => 'email, publish_stream, user_friends, user_events', :client_options => {:ssl => {:verify => false}}}
end