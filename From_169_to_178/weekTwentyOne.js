console.log("Assignment:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

let req = new XMLHttpRequest();
req.open("GET", "http://127.0.0.1:5500/From_169_to_178/articles.json");
req.send();
console.log(req);

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    let mainData = JSON.parse(this.responseText);

    console.log(mainData);

    for (let i = 0; i < mainData.length; i++) {
          mainData[i].Section = "All";

          let div = document.createElement("div");
          div.setAttribute("id", "data");
        
          let div1 = document.createElement("div");
          div.appendChild(div1);

          let h2 = document.createElement("h2");
          h2.textContent = `Title: ${mainData[i].Title}`;
          div.appendChild(h2);

          let p1 = document.createElement("p");
          p1.textContent = mainData[i].Content;
          div.appendChild(p1);

          let p2 = document.createElement("p");
          p2.textContent = `Author Name: ${mainData[i].AuthorName}`;
          div.appendChild(p2);

          let p3 = document.createElement("p");
          p3.textContent = `Section: ${mainData[i].Section}`;
          div.appendChild(p3);

          document.body.appendChild(div);
    }

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

  }
}




