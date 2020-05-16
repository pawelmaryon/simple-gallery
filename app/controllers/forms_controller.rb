class FormsController < ApplicationController
  def show
  end

  def new
    @form = Form.new
  end

  def create
    @form = Form.new(form_params)
    @form.save
    
  end

  private

  def form_params
    params.require(:form).permit(:first_name, :last_name, :address, :mobile, :email, :description)
  end
end
