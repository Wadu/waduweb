OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  if Rails.env.development?
    provider :facebook, ENV['FACEBOOK_APP_ID'], ENV['FACEBOOK_SECRET']
  else
    provider :heroku, ENV['FACEBOOK_APP_ID'], ENV['FACEBOOK_SECRET']
  end
end