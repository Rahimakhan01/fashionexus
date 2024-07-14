// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.get('/api/clothes', async (req, res) => {
//   const options = {
//     method: 'GET',
//     url: 'https://fashionapi.p.rapidapi.com/Subfamily',
//     headers: {
//       'x-rapidapi-key': 'e52202652dmsh4aad135de52ad56p18d6c7jsn0e840857ab07',
//       'x-rapidapi-host': 'fashionapi.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios(options);
//     res.send(response.data);
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to fetch data from API' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
