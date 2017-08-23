class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :meal
  belongs_to :symptom
end
