class CalculatorsController < ApplicationController
  def new
    @calculator = Calculator.new
  end

  def create
    @calculator = Calculator.new(calculator_params)
    if @calculator.save
      redirect_to root_path
    else
      render :new
    end
  end

  def decking
    @calculator = Calculator.all
  end
  private
  def calculator_params
    params.require(:calculator).permit(:name, :length, :width, :height, :price)
  end
end
