// Product Image Upload prevew
const Product_Picture = document.getElementById("id_prod_picture");
const previewContainer_Product_Picture = document.getElementById("Product_Upload_image_Preview");
const previewImage_Product_pick = previewContainer_Product_Picture.querySelector(".Product_Upload_image_preview__image");
const previewDefaultText_Product_pick = previewContainer_Product_Picture.querySelector(".Product_Upload_image_preview_default_text");

Product_Picture.addEventListener("change", function(){
    const file = this.files[0];

    if (file){
        const reader = new FileReader();

        previewDefaultText_Product_pick.style.display = "none";
        previewImage_Product_pick.style.display = "block";
        reader.addEventListener("load", function(){
            previewImage_Product_pick.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }
});