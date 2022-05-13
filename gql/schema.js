const {gql} = require("apollo-server");
const typeDefs = gql`
	type User {
		id: ID
		name: String
		username: String
		email: String
		sitioweb : String
		description :  String
		password :String
		avatar:String
		createdAt:String
		role: UserRoleEnum!
	}
	type Token{
		token:String
	}
	type Query {
		user(id: ID!): User
		users(role: UserRoleEnum): [User!]!
	  }
	input UserInput{
		name:String!
		username:String!
		email:String!
		password:String!
		role: UserRoleEnum = ACCOUNTANT
	}
	input LoginInput{
		email:String!
		password:String!
		
	}
	
	type Query {
		getUser: User 
	}

	type Mutation {
		register(input:UserInput):User
	}
	type Mutation {
		login(input:LoginInput):Token
	}
	enum UserRoleEnum {
		ADMIN
		ACCOUNTANT
	  }

`;

module.exports=typeDefs;