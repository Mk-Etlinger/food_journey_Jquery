class MealSerializer < ActiveModel::Serializer
  attributes :id, :description, :meal_type, :user_id
  has_many :ingredients
end
