require 'test_helper'

class EnquiresControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get enquires_new_url
    assert_response :success
  end

  test "should get create" do
    get enquires_create_url
    assert_response :success
  end

end
