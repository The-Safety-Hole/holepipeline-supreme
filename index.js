const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('First Pipeline Challenge - Week 4 GET REKT EVRY OTHER TEAM<br>NEW LINE I AM SO COOL<br>   __          __               __              __ <br>/_  \ /\ _\ \   /\  \      /\ _\ \   /\   \   /\ \       /\  __\<br>//\ / \ \   \  \ \  \      \ \   \  \ \ /\ \  \ \ _  \ \  \<br>   \ _\  \ _\ _\  \ ___\     \ _\ _\  \ _\  \ _\  \ _\<br>    //   ////   //      ////   //   //   /_/ ');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;


