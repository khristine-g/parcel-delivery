# class RecieverController < ApplicationController
#     def create
#         reciever = Reciever.create!(reciever_params)

#         if reciever.valid?
#             render json: reciever, status: :ok
#         else
#             render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
#         end
#     end
# # finish the following code for me
#     def update
#         if @parcel

#         else

#         end
#     end

#     private

#     def find_parcel
#         @parcel = Parcel.find_by(id: params[:id])
#     end

#     def reciever_params
#         params.require(:parcel).permit!(:username, :password, :password_confirmation, :email, :phone_number)
#     end
# end
