import React,{useState} from 'react';

const ReactContact =()=>{
	const [user, setUser] = useState({
		name:'',
		email:'',
		phone:'',
		address:'',
		message:'',
	});

	let name, value;
	const getUserData =(event)=>{
		name=event.target.name;
		value=event.target.value;

		setUser({...user, [name]:value});
	}
	const postData = async (e)=>{
		e.preventDefault();

		const { name, email, phone, address, message } = user;

		if(name && email && phone && address && message){
			const res = await fetch("https://reactyobetubeform-default-rtdb.firebaseio.com/yobetubeform.json",
	    		{
	    			method:'POST',
	    			headers:{
	    				"Content-Type":"application/json",
	    			},
	    			body:JSON.stringify({
						name,
						email,
						phone,
						address,
						message,
					}),
	    		}
	    	);
	    if(res){
	    	setUser({
				name:'',
				email:'',
				phone:'',
				address:'',
				message:'',
			});

			alert("Data Stored Successfully");
	    }
		}else{
			alert('please fill all the data');
		}
	    
	};
	return(
			<>
				<div className="container">
					<div className="wrap_contact">
						<h1>Contact Us form Connect With firebase</h1>
						<form method="POST">
							<div className="form-group">
								<label>Name</label>
								<input type="text" name="name" value={user.name} placeholder="Enter your name" autocomplete="off" onChange={getUserData}/>
								<span className="focus-input"></span>
							</div>

							<div className="form-group">
								<label>Email</label>
								<input type="text" name="email" value={user.email} placeholder="Enter your email" autocomplete="off" onChange={getUserData}/>
								<span className="focus-input"></span>
							</div>

							<div className="form-group">
								<label>Mobile No</label>
								<input type="text" name="phone" value={user.phone} placeholder="Enter your phone no" autocomplete="off" onChange={getUserData}/>
								<span className="focus-input"></span>
							</div>

							<div className="form-group">
								<label>Address</label>
								<input type="text" name="address" value={user.address} placeholder="Enter your Address" autocomplete="off" onChange={getUserData}/>
								<span className="focus-input"></span>
							</div>

							<div className="form-group textArea">
								<label>Address</label>
								<textarea name="message" value={user.message}  placeholder="Enter your Address" autocomplete="off" onChange={getUserData}/>
								<span className="focus-input"></span>
							</div>

							<button onClick={postData}>Submit</button>
						</form>
					</div>
				</div>
			</>
		)

}

export default ReactContact