class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :meal
  has_many :symptoms
  
end
