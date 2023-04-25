const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анастасия",
            "id_2": "Мария",
            "id_3": "Екатерина",
            "id_4": "Софья",
            "id_5": "Алиса",
            "id_6": "Дарья",
            "id_7": "Ксения",
            "id_8": "Анна",
            "id_9": "Виктория",
            "id_10": "Полина"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {
          "id_1": "Александрович",
          "id_2": "Максимович",
          "id_3": "Иванович",
          "id_4": "Артемович",
          "id_5": "Дмитриевич",
          "id_6": "Никитович",
          "id_7": "Михайлович",
          "id_8": "Даниилович",
          "id_9": "Егорович",
          "id_10": "Андреевич"
        }
      }`,
      middleNameFemaleJson: `{
        "count": 10,
        "list": {
          "id_1": "Александровна",
          "id_2": "Максимовна",
          "id_3": "Ивановна",
          "id_4": "Артемовна",
          "id_5": "Дмитриевна",
          "id_6": "Никитовна",
          "id_7": "Михайловна",
          "id_8": "Данииловна",
          "id_9": "Егоровна",
          "id_10": "Андреевна"
        }
      }`,
    
      bestJobMaleJson: `{
        "count": 5,
        "list":{
            "id_1": "Слесарь",
            "id_2": "Плотник",
            "id_3": "Вахтёр",
            "id_4": "Маляр",
            "id_5": "Строитель"
        }
    }`,
    
    bestJobFemaleJson: `{
        "count": 5,
        "list":{
            "id_1": "Фея",
            "id_2": "Красавица",
            "id_3": "Волшебница",
            "id_4": "Умница",
            "id_5": "Подружка единорожков"
        }
    }`,

    birthMonthsJson: `{
        "count": 12,
        "list": {
          "id_1": "Января",
          "id_2": "Февраля",
          "id_3": "Марта",
          "id_4": "Апреля",
          "id_5": "Мая",
          "id_6": "Июня",
          "id_7": "Июля",
          "id_8": "Августа",
          "id_9": "Сентября",
          "id_10": "Октября",
          "id_11": "Ноября",
          "id_12": "Декабря"
        }
      }`,

      

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина,',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            // If gender is not specified, choose randomly between male and female names
            return this.randomValue(Math.random() < 0.5 ? this.firstNameMaleJson : this.firstNameFemaleJson);
        }
    },
   
    randomMiddleName: function(gender) {
        let middleNameJson;
        if (gender === this.GENDER_MALE) {
            middleNameJson = this.middleNameMaleJson;
        } else if (gender === this.GENDER_FEMALE) {
            middleNameJson = this.middleNameFemaleJson;
        }
        const middleNameObj = JSON.parse(middleNameJson);
        const middleNames = middleNameObj.list;
        let middleName = this.randomValue(middleNameJson);
        
        return middleName;
    },

    randomBestJob: function(gender) {
        let bestJobJson;
        if (gender === this.GENDER_MALE) {
            bestJobJson = this.bestJobMaleJson;
        } else if (gender === this.GENDER_FEMALE) {
            bestJobJson = this.bestJobFemaleJson;
        }
        const bestJobObj = JSON.parse(bestJobJson);
        const bestJobs = bestJobObj.list;
        let bestJob = this.randomValue(bestJobJson);
        
        return bestJob;
    },

    randomSurname: function(gender) {
        let surname = this.randomValue(this.surnameJson);
        if (gender === this.GENDER_FEMALE){
            surname += 'a';
        }
        return surname;
    },

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
    
    randomBirthMonths: function() {
        const birthMonths = this.randomValue(this.birthMonthsJson);
        
        return birthMonths;
    },
    randomBirthYear: function(min = 1900, max = new Date().getFullYear()) {
        return this.randomIntNumber(max, min);
    },

    randomBirthDay: function(month){
        let max = 31;
        if (month === "Февраля") {
            max = 28;
        } else if (["Апреля","Июня","Сентября","Ноября"].includes(month)){
            max = 30;
        }
        return this.randomIntNumber(max, 1);
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.bestJob = this.randomBestJob(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthMonths = this.randomBirthMonths(this.person.birthMonths);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDay = this.randomBirthDay();
        return this.person;
    }
};