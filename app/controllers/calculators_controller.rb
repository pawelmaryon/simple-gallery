class CalculatorsController < ApplicationController
  def new
    @calculator_item = Material.new
  end

  def create
    @calculator_item = Material.new(material_params)
    if @calculator_item.save
      redirect_to pages_calculator_path
    else
      render :new
    end
  end
  private
  def material_params
    params.require(:material_item).premit(:name, :lenght, :width, :height, :price)
  end
end
