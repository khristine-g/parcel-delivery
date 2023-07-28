class ParcelsController < ApplicationController
    before_action :authenticate_user!
    rescue_from ActiveRecord::RecordNotFound, with: :render_parcel_not_found
    
    def index
        parcels = Parcel.all
        render :json parcels, status: :ok
    end

    def show
        
    end

    def update
        
    end

    def create
        
    end

    def destroy
        
    end

    private

    def find_parcel
        Parcel.find_by(id: params['id'])
    end
    
    def render_parcel_not_found
        render :json parcel.error, status: :not_found
    end

end
