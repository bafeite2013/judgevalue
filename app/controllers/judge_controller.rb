class JudgeController < ApplicationController
  def index
  end

  [:earnings_per_share, :net_assets_per_share, :return_on_equity].each do |meth|
    send :define_method, meth do
      data_arr = BuffettIndex.where(stock_id: params[:id])
      respond_to do |format|
        format.json { render json: data_arr.to_json(only: [:year, meth]) }
      end
    end
  end


  def buffett
    @stock = Stock.find_by(code: params[:code])

    if @stock.nil?
      flash[:notice] = "stock nonexist! code=#{params[:code]}"
      redirect_to action: :index
    end

  end


end
