require 'test_helper'

class DeckingsControllerTest < ActionDispatch::IntegrationTest
  test "should get budget" do
    get deckings_budget_url
    assert_response :success
  end

  test "should get softwood" do
    get deckings_softwood_url
    assert_response :success
  end

  test "should get hardwood" do
    get deckings_hardwood_url
    assert_response :success
  end

end
