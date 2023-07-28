class ParcelsController < ApplicationController
    # before_action :authenticate_user!
    # rescue_from ActiveRecord::RecordNotFound, with: :render_parcel_not_found
    
    def index
    parcels = Parcel.all

    if parcels.any?
        render json: parcels, status: :ok
    else
        render json: { error: "No parcels found" }, status: :not_found
    end
    end


    def show
        # Users can see the details of a delivery order.
        # The user gets a real-time email notification when Admin changes the status of their parcel.
        
    end

    def update
        # Users can change the destination of a parcel delivery order.
        # Admin can change the status and present location of a parcel delivery order.
        
    end

    def create
        # creating the parcel
        
    end

    def destroy
        # Users can cancel a parcel delivery order.
        
    end

    private

    def find_parcel
        Parcel.find_by(id: params['id'])
    end
    
    # def render_parcel_not_found
    # end

end
