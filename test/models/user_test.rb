require 'test_helper'
require 'minitest/autorun'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(name: 'John', email: 'john@example.com', password: 'starwars')
  end

  test 'valid user' do
    assert @user.valid?
  end

  test 'invalid without password length of at least 6 or nil' do
    @user.password = "short"
    refute @user.valid?, "password is too short"
    assert_not_nil @user.errors[:password], 'no validation error for password present'
  end

  test 'invalid without email' do
    @user.email = nil
    refute @user.valid?
    assert_not_nil @user.errors[:email]
  end
end