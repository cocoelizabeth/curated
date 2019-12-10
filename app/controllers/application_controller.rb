class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?

    private

    # caching method; only compute @current_user once in the same request/response cycle and then save it as an instance variable
    # so that we don’t query the database every time we want to figure out who the current_user is
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end
    # prevent user from accessing the site if not logged in
    def ensure_logged_in
        redirect_to api_session_url unless logged_in?
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        unless current_user
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end

end
