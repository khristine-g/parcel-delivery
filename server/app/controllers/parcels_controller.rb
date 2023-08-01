class ParcelsController < ApplicationController
  before_action :find_parcel, only: [:update, :destroy]
  # skip_before_action :authenticate_user, only: 

  def index
    parcels = Parcel.all

    if parcels.any?
      render json: parcels, status: :ok
    else
      render json: { error: "No parcels found" }, status: :not_found
    end
  end

  
  def show
    if @parcel
      # Users can see the details of a delivery order.
      render json: @parcel, status: :ok
    else
      render json: { error: "No parcels found" }, status: :not_found
    end
    # (Note: Implement the email notification logic separately)
  end
  
  def update
    # The user can only cancel or change the destination of a parcel delivery when the parcel’s status is yet to be marked as delivered.
    if @parcel
      if current_user_can_update_parcel? && @parcel.update(parcel_update_params) && @admin_use
        # The user gets a real-time email notification when Admin changes the status of their parcel..
        render json: @parcel, status: :ok
      else
        render json: { error: "Cannot update the parcel" }, status: :unprocessable_entity
      end
    else
      render json: { error: "Parcel not found" }, status: :not_found
    end
  end

  def create
    # creating the parcel
    
    if Parcel.create!(parcel_params) && Reciever.create!(reciever_params) && User.update(user_params)
      render json: parcel, status: :created
    else
      render json: {error: "Parcel not created"}, status: :unprocessable_entity
    end
  end

  
  
  def destroy
    if @parcel
      # Users can cancel a parcel delivery order.
      @parcel.destroy!
      head :no_content
    else
      render json: { error: "Parcel not found" }, status: :not_found
    end
  end

  private

  def find_parcel
    @parcel = Parcel.find_by(id: params['id'])
  end

  def parcel_params
    params.require(:parcel).permit!(:weight, :password, :present_location, :status, :user_id, :destination, :reciever_id)
  end

  def reciever_params
    params.require(:parcel).permit!(:username, :password, :password_confirmation, :email, :phone_number)
  end

  def user_params
    params.require(:parcel).permit!(:phone_number, :address)
  end

  @admin_use = false

  def parcel_update_params
    if current_user_is_an_admin?
      @admin_use = true
      parcel_params_for_admin
    else
      parcel_params_for_user
      @admin_use = false
    end
  end

  # Permit destination change for users
  def parcel_params_for_user
    params.require(:parcel).permit(:destination)
  end

  # Permit status and present location change for admins
  def parcel_params_for_admin
    params.require(:parcel).permit(:status, :present_location)
  end

  def current_user_can_update_parcel?
    # Check if the parcel exists and is associated with the current user
    return false unless @parcel && @parcel.user_id == current_user.id

    # Check if the parcel's status is not marked as delivered
    return false if @parcel.status == 'delivered'

    # If all conditions are met, the current user can update the parcel
    true
  end

end
