class JudgeController < ApplicationController
  def index
  end




  def buffett
    @stock = Stock.find_by(code: params[:code])

    if @stock.nil?
      flash[:notice] = "stock nonexist! code=#{params[:code]}"
      redirect_to action: :index
    end

  end
end
