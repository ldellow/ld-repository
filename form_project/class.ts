class User {
	id:number;
	firstname:string;
	lastname;string;
	email;string;

	constructor(_id){
		this.id = _id;

	}

}
let arr = new Array();
for (var i = 0; i<10; ++i){
	let user = new User(i);
	arr.push(user);

}	

console.log(arr[4].getUserId());
