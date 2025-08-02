
const wordData = [
  // Pronouns (10 sample words)
  { english: "I", urdu: "میں", example: "I am happy.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_1.mp3", type: "Pronouns", usage: 0.95 },
  { english: "You", urdu: "تم", example: "You are kind.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_2.mp3", type: "Pronouns", usage: 0.90 },
  { english: "He", urdu: "وہ (مرد)", example: "He runs fast.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_3.mp3", type: "Pronouns", usage: 0.85 },
  { english: "She", urdu: "وہ (عورت)", example: "She sings well.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_4.mp3", type: "Pronouns", usage: 0.80 },
  { english: "It", urdu: "یہ", example: "It is a dog.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_5.mp3", type: "Pronouns", usage: 0.75 },
  { english: "We", urdu: "ہم", example: "We are friends.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_6.mp3", type: "Pronouns", usage: 0.70 },
  { english: "They", urdu: "وہ (سب)", example: "They play together.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_7.mp3", type: "Pronouns", usage: 0.65 },
  { english: "Me", urdu: "مجھے", example: "Give it to me.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_8.mp3", type: "Pronouns", usage: 0.60 },
  { english: "Us", urdu: "ہمیں", example: "Join us for lunch.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_9.mp3", type: "Pronouns", usage: 0.55 },
  { english: "Them", urdu: "انہیں", example: "I saw them yesterday.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_10.mp3", type: "Pronouns", usage: 0.50 },
  
  // Possessives (10 sample words)
  { english: "Mine", urdu: "میرا", example: "This toy is mine.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_11.mp3", type: "Possessives", usage: 0.45 },
  { english: "Yours", urdu: "تمہارا", example: "This book is yours.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_12.mp3", type: "Possessives", usage: 0.40 },
  { english: "His", urdu: "اس کا (مرد)", example: "This is his pen.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_13.mp3", type: "Possessives", usage: 0.35 },
  { english: "Hers", urdu: "اس کی (عورت)", example: "This is hers.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_14.mp3", type: "Possessives", usage: 0.30 },
  { english: "Ours", urdu: "ہمارا", example: "This house is ours.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_15.mp3", type: "Possessives", usage: 0.25 },
  { english: "Theirs", urdu: "ان کا", example: "Their garden is big.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_16.mp3", type: "Possessives", usage: 0.20 },
  { english: "My", urdu: "میری", example: "My bag is red.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_17.mp3", type: "Possessives", usage: 0.15 },
  { english: "Your", urdu: "تمہارے", example: "Your shoes are clean.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_18.mp3", type: "Possessives", usage: 0.10 },
  { english: "Our", urdu: "ہمارے", example: "Our team won.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_19.mp3", type: "Possessives", usage: 0.05 },
  { english: "Their", urdu: "ان کے", example: "Their car is new.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_20.mp3", type: "Possessives", usage: 0.03 },
  
  // Verbs (10 sample words)
  { english: "Am", urdu: "ہوں", example: "I am a student.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_21.mp3", type: "Verbs", usage: 0.95 },
  { english: "Are", urdu: "ہیں", example: "They are happy.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_22.mp3", type: "Verbs", usage: 0.90 },
  { english: "Is", urdu: "ہے", example: "The sky is blue.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_23.mp3", type: "Verbs", usage: 0.85 },
  { english: "Go", urdu: "جانا", example: "I go to school.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_24.mp3", type: "Verbs", usage: 0.80 },
  { english: "Run", urdu: "دوڑنا", example: "They run fast.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_25.mp3", type: "Verbs", usage: 0.75 },
  { english: "Eat", urdu: "کھانا", example: "I eat an apple.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_26.mp3", type: "Verbs", usage: 0.70 },
  { english: "Play", urdu: "کھیلنا", example: "We play football.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_27.mp3", type: "Verbs", usage: 0.65 },
  { english: "Sing", urdu: "گانا", example: "She sings well.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_28.mp3", type: "Verbs", usage: 0.60 },
  { english: "Read", urdu: "پڑھنا", example: "I read a book.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_29.mp3", type: "Verbs", usage: 0.55 },
  { english: "Write", urdu: "لکھنا", example: "He writes a letter.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_30.mp3", type: "Verbs", usage: 0.50 },
  
  // Directions & Prepositions (10 sample words)
  { english: "Above", urdu: "اوپر", example: "The plane is above the clouds.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_31.mp3", type: "Directions & Prepositions", usage: 0.45 },
  { english: "At", urdu: "پر", example: "I am at the park.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_32.mp3", type: "Directions & Prepositions", usage: 0.40 },
  { english: "Behind", urdu: "پیچھے", example: "The dog is behind the tree.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_33.mp3", type: "Directions & Prepositions", usage: 0.35 },
  { english: "Down", urdu: "نیچے", example: "The ball rolls down the hill.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_34.mp3", type: "Directions & Prepositions", usage: 0.30 },
  { english: "In", urdu: "میں", example: "The cat is in the box.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_35.mp3", type: "Directions & Prepositions", usage: 0.25 },
  { english: "On", urdu: "پر", example: "The book is on the table.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_36.mp3", type: "Directions & Prepositions", usage: 0.20 },
  { english: "Under", urdu: "نیچے", example: "The cat is under the chair.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_37.mp3", type: "Directions & Prepositions", usage: 0.15 },
  { english: "Up", urdu: "اوپر", example: "The balloon goes up.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_38.mp3", type: "Directions & Prepositions", usage: 0.10 },
  { english: "Near", urdu: "قریب", example: "The shop is near my house.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_39.mp3", type: "Directions & Prepositions", usage: 0.05 },
  { english: "Over", urdu: "اوپر", example: "The bird flies over the tree.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_40.mp3", type: "Directions & Prepositions", usage: 0.03 },
  
  // WH Questions (6 sample words)
  { english: "How", urdu: "کیسے", example: "How are you?", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_41.mp3", type: "WH Questions", usage: 0.95 },
  { english: "What", urdu: "کیا", example: "What is your name?", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_42.mp3", type: "WH Questions", usage: 0.90 },
  { english: "When", urdu: "کب", example: "When is your birthday?", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_43.mp3", type: "WH Questions", usage: 0.85 },
  { english: "Where", urdu: "کہاں", example: "Where is my book?", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_44.mp3", type: "WH Questions", usage: 0.80 },
  { english: "Who", urdu: "کون", example: "Who is your friend?", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_45.mp3", type: "WH Questions", usage: 0.75 },
  { english: "Why", urdu: "کیوں", example: "Why are you late?", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_46.mp3", type: "WH Questions", usage: 0.70 },
  
  // Nouns (4 sample words)
  { english: "Apple", urdu: "سیب", example: "I eat an apple.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_47.mp3", type: "Nouns", usage: 0.65 },
  { english: "Book", urdu: "کتاب", example: "I read a book.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_48.mp3", type: "Nouns", usage: 0.60 },
  { english: "Car", urdu: "گاڑی", example: "The car is red.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_49.mp3", type: "Nouns", usage: 0.55 },
  { english: "Dog", urdu: "کتّا", example: "The dog is playful.", audio: "https://cdn.pixabay.com/audio/2023/08/08/audio_50.mp3", type: "Nouns", usage: 0.50 }
  // Extend with 950+ more words (e.g., nouns: cat, tree; verbs: jump, sleep; adjectives: big, small)
];
