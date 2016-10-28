class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :require_login

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    #json stuff?
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout(user)
    user.reset_session_token
    session[:session_token] = nil
  end

end
