var express = require('express');
var router = express.Router();
tasks=[{
  item:"asif"
},
{
  item:"asif"
}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { tasks });
});



router.post('/',(req,res)=>{
  let newItem=req.body.text
  if(newItem!=""){
    tasks.push({
      item:newItem
    })
    res.redirect("/")
  }else{
    
  }
})
router.post('/dl',(req,res)=>{

  tasks.pop()
  res.redirect("/")
  
})




module.exports = router;
