console.log('hello')

function register(){
    event.preventDefault()

    const form = document.forms['register-form'];
    const name = form['name'].value
    const email = form['email'].value
    const address = form['address'].value
    const dob = form['dob'].value
    const phone = form['phone'].value
    const pass = form['pass'].value

    let Message;
    let user = [];

    console.log('hellosda')

    if(!name || !email || !address || !dob || !phone || !pass){
        Message = "Please Fill The Form!";
    }else if(name.length < 5){
        Message = "Name must consist of 5 character or more"
    }else if(!email.endsWith("gmail.com")){
        Message = "Email must ends with @gmail.com"
    }else if(isNaN(phone)){
        Message = "Phone Number must be Number"
    }else if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/mg.test(pass) == false){
        Message = "Password must must consist Upper,Lowercase"
    }else if((pass.length < 8 || pass.length > 10)){
        Message = "Password must be between 8 or 10 character"
    }else{
        Message = "On Progress"
        user =
            {
            name: name,
            email: email,
            address: address,
            dob: dob,
            phone: phone,
            pass: pass
        }
    ;
    let data = localStorage.getItem("users")
    let useData = data ? JSON.parse(data) : [];

    useData.push(user);
    localStorage.setItem('users', JSON.stringify(useData))

        alert("Account is created! Directing to Login page...")
        window.location.href = "../Login/index.html"
    }

    if(Message){
        document.getElementById("message1").innerHTML = Message;
        console.log("change")
        return false;
    }
}

function login(){
    event.preventDefault()

    let Message;

    const form = document.forms['login-form'];
    const email = form['email'].value
    const password = form['password'].value

    const a = JSON.parse(localStorage.getItem('users'));

    let i1 = a.findIndex(item => item.email === email);
    let i2 = a.findIndex(item => item.pass === password);

    console.log(i1 + " " + i2 + " " + password)

    if(!email || !password){
        Message = "Please Fill the Form!"
    }else if(i1 !== i2 || i1 + i2 < 0){
        Message = "Password/Email wrong"
    }else if (i1 === i2){
        console.log(i1 + " " + i2 + " " + password)
        localStorage.setItem('currentUser', JSON.stringify(i1))
        window.location.href = "../Homepage/index.html"
    }

    if(Message){
        document.getElementById("message1").innerHTML = Message;
        console.log("change")
        return false;
    }
}

function homepages(){
    event.preventDefault()

    const a = JSON.parse(localStorage.getItem('users')); //1
    let idxUser = localStorage.getItem('currentUser')
    let nameCurrent = Object.values(a)[idxUser].name; //2

    document.getElementById("u-name").innerHTML = "Welcome, " + nameCurrent
    totalPropertiSet()
    console.log(idxUser + " " + nameCurrent)
}

function homePagesDetail(){
    const a = JSON.parse(localStorage.getItem('users'));
    let idxUser = localStorage.getItem('currentUser')

    let nameCurrent = Object.values(a)[idxUser].name;
    let emailCurrent = Object.values(a)[idxUser].email;
    let phoneCurrent = Object.values(a)[idxUser].phone;
    let addCurrent = Object.values(a)[idxUser].address;

    document.getElementById("uname1").innerHTML = nameCurrent;
    document.getElementById("uemail1").innerHTML = emailCurrent;
    document.getElementById("uphone1").innerHTML = phoneCurrent;
    document.getElementById("uadd1").innerHTML = addCurrent;
}

profileDetail()

function profileDetail(){
    const a = JSON.parse(localStorage.getItem('users'));
    let idxUser = localStorage.getItem('currentUser')

    let nameCurrent = Object.values(a)[idxUser].name;
    let emailCurrent = Object.values(a)[idxUser].email;
    let phoneCurrent = Object.values(a)[idxUser].phone;
    let addCurrent = Object.values(a)[idxUser].address;

    document.getElementById("uname1").innerHTML = nameCurrent;
    document.getElementById("uemail1").innerHTML = emailCurrent;
    document.getElementById("uphone1").innerHTML = phoneCurrent;
    document.getElementById("uadd1").innerHTML = addCurrent;
}

function validateAddTable(){
    event.preventDefault()

    const a = JSON.parse(localStorage.getItem('users')); //1
    let idxUser = localStorage.getItem('currentUser')
    let creator = Object.values(a)[idxUser].name; //2

    document.getElementById("by").value = creator

    const form = document.forms['form-management'];
    const no = form['no'].value
    const property = form['property'].value
    const total = form['total'].value
    const by = creator;
    const date = form['dateP'].value

    let Message;
    let propertys = [];

    if(!no || !property || !total || !date){
        Message = "Please Fill The Form!";
    }else{
        document.getElementById("message2").innerHTML = "";
        propertys =
            {
            no: no,
            property: property,
            total: total,
            by: by,
            date: date
        }
    ;
    let data = localStorage.getItem("propertyDatas")
    let propertyData = data ? JSON.parse(data) : [];

    propertyData.push(propertys);
    localStorage.setItem('propertyDatas', JSON.stringify(propertyData))
        addTableRow();
    }

    if(Message){
        document.getElementById("message2").innerHTML = Message;
        console.log("change")
        return false;
    }
}

function addTableRow(){
    event.preventDefault()

    var table = document.getElementById("table")
    var newRow = table.insertRow(table.lenght)
    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    var no = document.getElementById("no").value;
    var property = document.getElementById("property").value;
    var total = document.getElementById("total").value;
    var by = document.getElementById("by").value;
    var dateP = document.getElementById("dateP").value;

    cell1.innerHTML = no;
    cell2.innerHTML = property;
    cell3.innerHTML = total;
    cell4.innerHTML = by;
    cell5.innerHTML = dateP;

    selectRowData();

}

function getData(){
    var str = localStorage.getItem("propertyDatas")
    console.log("hello")
    if(str !=null){
        var arr = JSON.parse(str);
        console.log(arr)
    }
}

function showData(){
    getData();

    var str = localStorage.getItem("propertyDatas")
    var table = document.getElementById("table")
    var arr = JSON.parse(str);

    var tempMyProperty = 0;

    const a = JSON.parse(localStorage.getItem('users'));
    let idxUser = localStorage.getItem('currentUser')
    let nameCurrent = Object.values(a)[idxUser].name;

    let tempProperty = 0;

    for(var i in arr){
        var newRow = table.insertRow(table.lenght)
        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)
        var cell3 = newRow.insertCell(2)
        var cell4 = newRow.insertCell(3)
        var cell5 = newRow.insertCell(4)
        var no = arr[i].no;
        var property = arr[i].property;
        var total = arr[i].total;
        var by = arr[i].by;
        var dateP = arr[i].date;

        tempProperty++
        console.log(by + " " + nameCurrent)

        if(by == nameCurrent){
            tempMyProperty++
            cell1.innerHTML = no;
            cell2.innerHTML = property;
            cell3.innerHTML = total;
            cell4.innerHTML = by;
            cell5.innerHTML = dateP;
            console.log(tempMyProperty + " asd");
        }
    }
    selectRowData();
    localStorage.setItem('tempTotalProperty', JSON.stringify(tempProperty))
    localStorage.setItem('tempMyProperty', JSON.stringify(tempMyProperty))
}

function totalPropertiSet(){
    event.preventDefault()

    // const a = JSON.parse(localStorage.getItem('tempTotalProperty')); //1
    // let total = Object.values(a);

    let ax = JSON.parse(localStorage.getItem("tempTotalProperty"))

    console.log(ax + " ax")
    document.getElementById("prop-total").innerHTML = ax;
}

function selectRowData(){
    var rIndex, table = document.getElementById("table");
    
    for(var i = 1 ; i < table.rows.length ; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("no").value = this.cells[0].innerHTML;
            document.getElementById("property").value = this.cells[1].innerHTML;
            document.getElementById("total").value = this.cells[2].innerHTML;
            document.getElementById("by").value = this.cells[3].innerHTML;
            document.getElementById("dateP").value = this.cells[4].innerHTML;
            console.log(rIndex)
        }
    }
}

function removeTableData(){
    localStorage.removeItem("propertyDatas")
}

function removeFavoriteData(){
    localStorage.removeItem("favorites")
}


// User
function getData1(){
    var str = localStorage.getItem("users")
    console.log("hello")
    if(str !=null){
        var arr = JSON.parse(str);
        console.log(arr)
    }
}

function showData1(){
    getData1();

    var str = localStorage.getItem("users")
    var table = document.getElementById("table")
    var arr = JSON.parse(str);

    let tempActiveUser = 0;
    let noTemp = 1;

    for(var i in arr){
        var newRow = table.insertRow(table.lenght)
        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)
        var cell3 = newRow.insertCell(2)
        var cell4 = newRow.insertCell(3)
        var no = noTemp;
        var name = arr[i].name;
        var email = arr[i].email;
        var phone = arr[i].phone;

        tempActiveUser++
        noTemp++
    
        cell1.innerHTML = no;
        cell2.innerHTML = name;
        cell3.innerHTML = email;
        cell4.innerHTML = phone;
    
    }
    selectRowData1();
    localStorage.setItem('tempActiveUser', JSON.stringify(tempActiveUser))
}

function selectRowData1(){
    var rIndex, table = document.getElementById("table");
    
    for(var i = 1 ; i < table.rows.length ; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("no1").value = this.cells[0].innerHTML;
            document.getElementById("name").value = this.cells[1].innerHTML;
            document.getElementById("email").value = this.cells[2].innerHTML;
            document.getElementById("pn").value = this.cells[3].innerHTML;
            console.log(rIndex)
        }
    }
}

function totalUserSet(){
    event.preventDefault()

    let ax = JSON.parse(localStorage.getItem("tempActiveUser"))

    console.log(ax + " ax")
    document.getElementById("user-total").innerHTML = ax;
}

// View Property
function selectRowData2(){
    var rIndex, table = document.getElementById("table");
    
    for(var i = 1 ; i < table.rows.length ; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById("no2").value = this.cells[0].innerHTML;
            document.getElementById("property1").value = this.cells[1].innerHTML;
            document.getElementById("total1").value = this.cells[2].innerHTML;
            document.getElementById("by1").value = this.cells[3].innerHTML;
            document.getElementById("dateP1").value = this.cells[4].innerHTML;
            console.log(rIndex + " 2")
        }
    }
}

function showData2(){
    getData();

    var str = localStorage.getItem("propertyDatas")
    var table = document.getElementById("table")
    var arr = JSON.parse(str);

    let tempProperty = 0;

    for(var i in arr){
        var newRow = table.insertRow(table.lenght)
        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)
        var cell3 = newRow.insertCell(2)
        var cell4 = newRow.insertCell(3)
        var cell5 = newRow.insertCell(4)
        var no = arr[i].no;
        var property = arr[i].property;
        var total = arr[i].total;
        var by = arr[i].by;
        var dateP = arr[i].date;

        tempProperty++
        console.log(property + " " + tempProperty)
    
        cell1.innerHTML = no;
        cell2.innerHTML = property;
        cell3.innerHTML = total;
        cell4.innerHTML = by;
        cell5.innerHTML = dateP;
    }
    selectRowData2();
    localStorage.setItem('tempTotalProperty', JSON.stringify(tempProperty))
}

function totalPropertiAll(){
    event.preventDefault()

    let ax = JSON.parse(localStorage.getItem("tempMyProperty"))

    console.log(ax + " ax")
    document.getElementById("propuser-total").innerHTML = ax;
}

//favorite
function favoriteAdd(){
    event.preventDefault()

    const form = document.forms['form-management'];
    const no = form['no2'].value
    const property = form['property1'].value
    const total = form['total1'].value
    const by = form['by1'].value;
    const date = form['dateP1'].value

    let favorite = []
    favorite =
            {
            no: no,
            property: property,
            total: total,
            by: by,
            date: date
        };

    let data = localStorage.getItem("favorites")
    let propertyData = data ? JSON.parse(data) : [];

    propertyData.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(propertyData))
    console.log('success')
    window.location.href = "index.html"
}

// Favorite
function showData3(){
    getData3();

    var str = localStorage.getItem("favorites")
    var table = document.getElementById("table")
    var arr = JSON.parse(str);

    const a = JSON.parse(localStorage.getItem('users'));
    let idxUser = localStorage.getItem('currentUser')
    let nameCurrent = Object.values(a)[idxUser].name;

    let tempMyFavorite = 0;

    for(var i in arr){
        var newRow = table.insertRow(table.lenght)
        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)
        var cell3 = newRow.insertCell(2)
        var cell4 = newRow.insertCell(3)
        var cell5 = newRow.insertCell(4)
        var no = arr[i].no;
        var property = arr[i].property;
        var total = arr[i].total;
        var by = arr[i].by;
        var dateP = arr[i].date;

        tempMyFavorite++
        console.log(by + " " + nameCurrent)

        cell1.innerHTML = no;
        cell2.innerHTML = property;
        cell3.innerHTML = total;
        cell4.innerHTML = by;
        cell5.innerHTML = dateP;
    }
    selectRowData2();
    localStorage.setItem('tempTotalFavorite', JSON.stringify(tempMyFavorite))
}

function totalFavoriteAll(){
    event.preventDefault()

    let ax = JSON.parse(localStorage.getItem("tempTotalFavorite"))

    console.log(ax + " ax")
    document.getElementById("fav-count").innerHTML = ax;
}

function getData3(){
    var str = localStorage.getItem("favorites")
    console.log("hello")
    if(str !=null){
        var arr = JSON.parse(str);
        console.log(arr)
    }
}

function feedback(){
    event.preventDefault()

    const form = document.forms['feedback-forms'];
    const title = form['title'].value
    const desc = form['desc'].value

    console.log(title + " " + desc)
    // if(!title || !desc){
       
    // }else{
    //     alert('Your respond is already submitted, Thanks for the feedback!')
    // }
}

// search
