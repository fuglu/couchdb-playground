import cradle from 'cradle';


const db = new (cradle.Connection)().database('starwars');

db.get('vader', (err, doc) => {
	console.log(err);
	console.log(doc);
});
