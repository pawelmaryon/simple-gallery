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

  def decking
    @calculator_item = Material.all
  end
  private
  def material_params
    params.require(:calculator_item).premit(:name, :length, :width, :height, :price)
  end
end
