 


 arr=[
    {
    "_id": {
      "$oid": "632f3517f6f64a8e7cf7cddb"
    },
    "name": "NASEEB KHAN",
    "age": 14,
    "mobile": 8708730331,
    "test": {
      "ESR": {
        "ERYTHROCYTE SADIMENTATION RATE": "fddd"
      }
    },
    "date": "2022-09-24",
    "reference": "sai",
    "gender": "Male",
    "address": "vill leda khadar",
    "techname": "Rajesh",
    "time": "22:19",
    "payment": {
      "s": true,
      "am": 0
    },
    "createdAt": {
      "$date": {
        "$numberLong": "1664038167204"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1664038170096"
      }
    },
    "__v": 0
  }
,{
    "_id": {
      "$oid": "632fc69f76fda5b3ceaf0391"
    },
    "name": "NASEEB KHAN",
    "age": 12,
    "mobile": 8708730331,
    "test": {
      "LIVER FUNCTION TEST": {
        "TOTAL BIURUBIN": "qw h",
        "CONJUGATED (D. Bilinabin)": "hhh",
        "UNCONJUGATED(I.D.Bilinabin)": "hh"
      }
    },
    "date": "2022-08-28",
    "reference": "qqqq",
    "gender": "Male",
    "address": "vill leda khadar",
    "techname": "Rajesh",
    "time": "08:39",
    "payment": {
      "s": true,
      "am": 0
    },
    "createdAt": {
      "$date": {
        "$numberLong": "1664075423266"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1664075508482"
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "632fc6e076fda5b3ceaf0393"
    },
    "name": "NASEEB KHAN",
    "age": 17,
    "mobile": 8708730331,
    "test": {
      "ESR": {
        "ERYTHROCYTE SADIMENTATION RATE": "AS"
      }
    },
    "date": "2022-09-25",
    "reference": "qqqq",
    "gender": "Female",
    "address": "vill leda khadar",
    "techname": "Rajesh",
    "time": "08:40",
    "payment": {
      "s": true,
      "am": 0
    },
    "createdAt": {
      "$date": {
        "$numberLong": "1664075488151"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1664075508494"
      }
    },
    "__v": 0
  },{
    "_id": {
      "$oid": "632fcca076fda5b3ceaf039c"
    },
    "name": "sai",
    "age": 111,
    "mobile": 8708730331,
    "test": {
      "ESR": {
        "ERYTHROCYTE SADIMENTATION RATE": "12"
      }
    },
    "date": "2022-07-20",
    "reference": "dee",
    "gender": "Male",
    "address": "vill leda khadar",
    "techname": "Rajesh",
    "time": "09:05",
    "payment": {
      "s": false,
      "am": 123
    },
    "createdAt": {
      "$date": {
        "$numberLong": "1664076960171"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1664076960171"
      }
    },
    "__v": 0
  }

]
for(var i =0; i<arr.length;i++){
   
  if(arr[i].createdAt.$date.$numberLong >1330194600000){
    console.log(arr[i].date)
  }
  
}

console.log(new Date(1330114600000))
