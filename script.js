/*var pics,now=0,num=4;
window.onload = function(){
    pics = document.getElementsByClassName('pic');
    show(now);
}
function show(i){
    now =i;
    for(var k=0;k<pics.length;k++){
        pics[k].style.display='none'
    }
    pics[now].style.display="block"
}

function next(){
    now+=1;
    if(now>3) now=0;
    show(now);
}
function prev(){
    now-=1;
    if(now<0)now=num-1;
    show(now);
}*/
function getProduct() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://localhost:8888/product",
        type: "GET",
        dataType: "json",
        success: function (data) {
          let all_Product = [];
          for (let i = 0; i < data.length; i++) {
            all_Product.push(data[i]);
          }
          // console.log(all_Product);
          resolve(all_Product);
        },
        error: function (error) {
          reject("API 出錯拉!");
        },
      });
    });
  }
  
  async function renderProduct() {
    let data = await getProduct();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let content = `
          <div class="col mb-5">
              <div class="card h-100 bg-white">
              <!-- Product image-->
              <img
                  class="card-img-top"
                  src="${data[i].picture}"
                  style="width: 180px; object-fit: cover; align-self: center"
                  alt="..."
              />
              <!-- Product details-->
              <div class="card-body p-4">
                  <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">
                      ${data[i].name}
                  </h5>
                  <p><i class="bi bi-info-circle"></i> ASUS Store 建議售價</p>
                  <!-- Product price-->
                  <p>NT$ ${data[i].price.toLocaleString()}</p>
                  </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#"
                      >加入購物車</a
                  >
                  </div>
              </div>
              </div>
          </div>
      `;
      $(".product").append(content);
    }
  }