interface Usser {
    readonly dbId :number ,
    email :string,
    userId: number  ,
    // startTrial :()=>string
    startTrial() :string,
    getCoupon(couponName : string):number 
}

const hitesh : Usser = { dbId :90,email : "nikhil@gmail.com",userId : 39,
 startTrial : () => "Hello hi namaste ",
 getCoupon() {
     return 60;
 },
 githubToken : "git.github.nikhillo.com"
}

interface Usser{
    githubToken :string,
}

interface Admin extends Usser {
    role :"admin"
}



// hitesh.dbId =93;