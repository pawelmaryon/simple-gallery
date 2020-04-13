require 'test_helper'

class PatiosControllerTest < ActionDispatch::IntegrationTest
  test "should get sandstone" do
    get patios_sandstone_url
    assert_response :success
  end

  test "should get limestone" do
    get patios_limestone_url
    assert_response :success
  end

  test "should get granite" do
    get patios_granite_url
    assert_response :success
  end

end
