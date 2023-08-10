class ParcelsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :index, :show]
  before_action :authenticate_admin!, only: [:admin_dashboard]

  
  

  def index
    @parcels = current_user.parcels

    render json: @parcels, status: :ok
  end
 

  def create
    puts "Current User ID: #{current_user.id}"
    @parcel = current_user.parcels.build(parcel_params)

    if @parcel.save
      render json: { message: 'Parcel created successfully' }, status: :created
    else
      render json: { errors: @parcel.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @parcel = current_user.parcels.find_by(id: params[:id])

    if @parcel
      render json: @parcel, status: :ok
    else
      render json: { error: "Parcel not found" }, status: :not_found
    end
  end
  def update
    @parcel = current_user.parcels.find_by(id: params[:id])

    if @parcel.nil?
      render json: { error: "Parcel not found" }, status: :not_found
      return
    end

    if @parcel.update(destination_params)
      render json: { message: 'Parcel destination updated successfully' }, status: :ok
    else
      render json: { error: @parcel.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  

  def admin_dashboard
    if current_user&.is_admin
      @parcels = Parcel.all
      render json: @parcels, status: :ok
    else
      render json: { error: "Unauthorized. Only admin can access the dashboard." }, status: :unauthorized
    end
  end
  

  def update_admin_dashboard
    @parcel = Parcel.find_by(id: params[:id])

    if @parcel.nil?
      render json: { error: "Parcel not found" }, status: :not_found
      return
    end

    if @parcel.update(parcel_status_params)
      render json: { message: 'Parcel status updated successfully' }, status: :ok
    else
      render json: { error: @parcel.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end


  def track
    tracking_number = params[:tracking_number]
    parcel = Parcel.find_by(tracking_number: tracking_number)
  
    if parcel
      render json: parcel
    else
      render json: { error: 'Parcel not found' }, status: :not_found
    end
  end

  def update_status_and_location
    @parcel = Parcel.find_by(id: params[:id])
  
    if @parcel.nil?
      render json: { error: "Parcel not found" }, status: :not_found
      return
    end
  
    if @parcel.update(status: params[:status],location: params[:location])
      render json: { message: 'Parcel status and location updated successfully' }, status: :ok
    else
      render json: { error: @parcel.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end
  


  private

  def parcel_params
    params.require(:parcel).permit(
      :sender_name,
      :sender_email,
      :sender_address,
      :receiver_name,
      :receiver_email,
      :receiver_address,
      :receiver_country,
      :weight,
      :type_of_shipment
    )
  end

  def destination_params
    params.require(:parcel).permit(:receiver_name, :receiver_email, :receiver_address, :receiver_country)
  end

  def authenticate_admin!
    unless current_user&.is_admin
      render json: { error: "Unauthorized. Only admin can access the dashboard." }, status: :unauthorized
    end
  end
    def parcel_status_params
      params.require(:parcel).permit(:status)
    end
  end




