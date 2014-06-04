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

175.times do
	Pet.create(name: Faker::Name.name, age: getAge, gender: getGender, size: getSize, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", species: getSpecies, organization_name: "Animal Welfare SPCA", is_housebroken: "Y", is_housetrained: "Y", is_hypoallergenic: "Y", color: "Black", primary_breed: "Shiba", secondary_breed: "Inu", hair_length: "Medium", contact_street_address: "132 Main St", contact_city: "Louisville", contact_state: "KY", contact_zipcode: "40221", contact_phone: "(855)789-0987", contact_fax: "(855)789-0987", contact_email: "someemail@company.com", address: "123 Main St, Louisville, KY, 40221")
end
