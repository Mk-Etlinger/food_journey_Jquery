class SymptomSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_many :ingredients
end
