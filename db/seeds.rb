def getAge
	num = rand(20)
	if num < 8
		"Young"
	elsif num > 13
		"Adult"
	else
		"Senior"
	end
end

def getGender
	num = rand(20)
	if num < 10
		"Female"
	else
		"Male"
	end
end

def getSize
	num = rand(3)
	if num == 1
		"S"
	elsif num == 2
		"M"
	else
		"L"
	end
end

def getSpecies
	num = rand(2)
	if num < 1
		"Dog"
	else
		"Cat"
	end
end

2000.times do
	Pet.create(name: CoolFaker::Character.name, age: getAge, gender: getGender, size: getSize, description: CoolFaker::Team.slogan, species: getSpecies, organization_name: CoolFaker::Team.name, is_housebroken: "Y", is_housetrained: "Y", is_hypoallergenic: "Y", color: "Black", primary_breed: "Shiba", secondary_breed: "Inu", hair_length: "Medium", contact_street_address: Faker::Address.street_address, contact_city: Faker::Address.city, contact_state: Faker::Address.state_abbr, contact_zipcode: Faker::Address.zip, contact_phone: Faker::PhoneNumber.phone_number, contact_fax: Faker::PhoneNumber.phone_number, contact_email: Faker::Internet.email, address: Faker::Address.street_address)
end
