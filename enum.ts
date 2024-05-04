 enum Gender{
        Male,
        female
    }
    
    const checkGender = Gender.Male;
    console.log("checkGender",checkGender);
    
    
    
    interface User{
        email:string,
        name:string
    }
    
    interface Admin{
        isAdmin:boolean,
        code?:number
    }
    
    const isUser: User | Admin = {
        email:"demo@gmail.com",
        name:"ankusj",
        isAdmin:false
    
    }
    
    console.log(isUser);
    
    
    
    
    enum Plan {
        CORNER = 23,
        MIDDEL = "MySheet",
        WINDOW = 2,
        FOURTH
    }
    
    const planSheet = Plan.MIDDEL;
    console.log(Plan.CORNER)
    console.log(Plan.FOURTH)
    console.log(Plan.MIDDEL)
    console.log(Plan.WINDOW)