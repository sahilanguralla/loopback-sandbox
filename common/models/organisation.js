var loopback = require('loopback');
module.exports = function(Organisation) {
	// this is not good and it must be moved to organisation.json
	// but right now I don't have much time to do that
	// By the way, this is a polymorphic relation defined from Organisation to SignatureAuthorization
	// var SignatureAuthorization = loopback.findModel("SignatureAuthorization");
 //    Organisation.on('attached', function(app) {
	// 	Organisation.hasMany(SignatureAuthorization, {
	//         polymorphic: {  
	//             as: 'authority', 
	//             foreignKey: 'authorityId', 
	//             discriminator: 'authorityType' 
	//         }
	//     });
 //    });
};
