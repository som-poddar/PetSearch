json.array!(@pets) do |pet|
  json.extract! pet, :id, :name, :age, :size
  json.url pet_url(pet, format: :json)
end
